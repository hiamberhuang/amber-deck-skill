#!/usr/bin/env python3
"""Copy the public skill to Codex or Claude Code without replacing an existing installation."""
import argparse
from pathlib import Path
import shutil

p = argparse.ArgumentParser(description=__doc__)
p.add_argument("--host", choices=["codex","claude"], default="codex")
p.add_argument("--dest", type=Path, help="Parent skills directory")
args = p.parse_args()
root = Path(__file__).resolve().parents[1]
parent = args.dest or Path.home() / (".agents" if args.host == "codex" else ".claude") / "skills"
dest = parent.expanduser() / "amber-deck-skill"
if dest.exists() or dest.is_symlink():
    raise SystemExit(f"Already installed at {dest}; back it up before upgrading.")
dest.parent.mkdir(parents=True, exist_ok=True)
shutil.copytree(root,dest,ignore=shutil.ignore_patterns(".git",".DS_Store","__pycache__"))
print(dest)
