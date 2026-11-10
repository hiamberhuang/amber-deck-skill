#!/usr/bin/env python3
"""Search an explicit local manifest and extract a selected project or asset."""
import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import re
import shutil
import stat
import tempfile
import zipfile

def digest(path):
    h = hashlib.sha256()
    with path.open("rb") as fp:
        for block in iter(lambda: fp.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()

def key(r):
    return r.get("id", r["sha256"][:10])

def archive(root, r):
    path = (root / r["archived"]).resolve(strict=True)
    if not path.is_relative_to(root) or not path.is_file():
        raise ValueError("Archive is outside the vault or is not a file")
    return path

def safe_name(name):
    part = PurePosixPath(name)
    if not part.parts or part.is_absolute() or ".." in part.parts or "\\" in name or ":" in part.parts[0]:
        raise ValueError(f"Unsafe member: {name}")
    if part.parts[0] == "PROVENANCE.json":
        raise ValueError("Conflicting provenance filename")
    return part

def lookup(rows, ref):
    matches = [r for r in rows if key(r) == ref]
    if not matches or len({r["archived"] for r in matches}) != 1:
        raise ValueError(f"Unknown or ambiguous ID: {ref}")
    return matches[0]

def unpack(path, selected, tmp):
    with zipfile.ZipFile(path) as z:
        infos = [i for i in z.infolist() if not i.is_dir() and (not selected or i.filename in selected)]
        if not infos or (selected and {i.filename for i in infos} != set(selected)):
            raise ValueError("One or more members are missing")
        targets = set()
        for i in infos:
            dest = tmp / safe_name(i.filename)
            if dest in targets or stat.S_ISLNK(i.external_attr >> 16):
                raise ValueError(f"Duplicate or symbolic link: {i.filename}")
            targets.add(dest)
        for i in infos:
            dest = tmp / safe_name(i.filename)
            dest.parent.mkdir(parents=True, exist_ok=True)
            with z.open(i) as src, dest.open("xb") as out:
                shutil.copyfileobj(src, out)
        return [i.filename for i in infos]

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--vault", required=True, type=Path)
    sub = parser.add_subparsers(dest="command", required=True)
    find = sub.add_parser("find")
    find.add_argument("query")
    find.add_argument("--limit", type=int, default=15)
    entries = sub.add_parser("entries")
    entries.add_argument("ref")
    entries.add_argument("--filter", default="")
    copy = sub.add_parser("copy")
    copy.add_argument("ref")
    copy.add_argument("--dest", required=True, type=Path)
    copy.add_argument("--member", action="append", default=[])
    args = parser.parse_args()
    root = args.vault.expanduser().resolve(strict=True)
    rows = json.loads((root / "inventory.json").read_text(encoding="utf-8"))
    if args.command == "find":
        words = re.findall(r"[^\s]+", args.query.casefold())
        if not words: raise ValueError("Enter at least one search term")
        hits = {}
        for r in rows:
            primary = (r.get("project") or Path(r["original"]).name).casefold()
            hay = " ".join([r["original"], r.get("category", ""), *r.get("entrypoints", [])]).casefold()
            if all(w in hay for w in words):
                score = 6 * sum(w in primary for w in words) + 2 * (r["kind"] == "project-source")
                hits.setdefault(key(r), (score, r))
        for _, r in sorted(hits.values(), key=lambda x: (-x[0], x[1]["original"]))[:max(1,args.limit)]:
            print(key(r), r["kind"], r["archived"], sep="\t")
        if not hits: raise ValueError("No matches")
        return
    r = lookup(rows, args.ref)
    path = archive(root, r)
    if args.command == "entries":
        if path.suffix.lower() == ".zip":
            with zipfile.ZipFile(path) as z:
                for i in z.infolist():
                    if not i.is_dir() and args.filter.casefold() in i.filename.casefold():
                        print(i.filename)
        else:
            print(path.name)
        return
    if digest(path) != r["sha256"]:
        raise ValueError("Archive SHA-256 does not match manifest")
    if args.member and path.suffix.lower() != ".zip":
        raise ValueError("--member requires a ZIP")
    dest = args.dest.expanduser().absolute()
    if dest.exists() or dest.is_symlink() or dest.resolve().is_relative_to(root):
        raise ValueError("Destination must be new and outside the vault")
    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".deck-copy-", dir=dest.parent) as scratch:
        tmp = Path(scratch) / "files"
        tmp.mkdir()
        if args.member or r["kind"] == "project-source":
            selected = unpack(path, args.member, tmp)
        else:
            name = path.name.split("--", 1)[-1]
            shutil.copy2(path, tmp / name)
            selected = [name]
        (tmp / "PROVENANCE.json").write_text(json.dumps(
            {"ref": key(r), "archive": r["archived"], "sha256": r["sha256"], "files": selected},
            ensure_ascii=False, indent=2), encoding="utf-8")
        tmp.rename(dest)
    print(dest)

if __name__ == "__main__":
    try:
        main()
    except (ValueError, OSError, zipfile.BadZipFile) as error:
        raise SystemExit(str(error))
