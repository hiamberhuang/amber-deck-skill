#!/usr/bin/env python3
"""Read a Feishu doc/wiki using the authorized lark-cli user identity."""
import argparse
import json
import os
from pathlib import Path
import re
import subprocess
from urllib.parse import urlsplit

def main():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("url", help="Feishu document or wiki link")
    p.add_argument("--profile", help="Named lark-cli profile; use your organization profile")
    p.add_argument("--out", required=True, type=Path, help="New private folder for the source snapshot")
    a = p.parse_args()
    url = urlsplit(a.url)
    host = url.hostname or ""
    if url.scheme != "https" or not (host == "feishu.cn" or host.endswith(".feishu.cn") or host == "larksuite.com" or host.endswith(".larksuite.com")) or url.username or not re.fullmatch(r"/(?:wiki|docx)/[A-Za-z0-9]+/?", url.path):
        p.error("provide a Feishu/Lark /wiki/ or /docx/ HTTPS link")
    if a.out.exists() or a.out.is_symlink():
        p.error("output folder must be new")
    cmd = ["lark-cli","docs","+fetch","--as","user","--doc",a.url,"--doc-format","markdown","--detail","simple"]
    if a.profile: cmd.extend(["--profile",a.profile])
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        obj = json.loads(result.stdout)
    except FileNotFoundError:
        p.exit(1, "lark-cli is required, or use a connected Feishu reader.\n")
    except (subprocess.TimeoutExpired, ValueError):
        p.exit(1, "Feishu source could not be read. Check the connection and user authorization.\n")
    doc = (obj.get("data") or {}).get("document") or {}
    content = doc.get("content")
    if result.returncode or obj.get("ok") is not True or not isinstance(content, str) or not content.strip():
        p.exit(1, "Feishu did not return readable content. Check the profile, user authorization and document access.\n")
    os.umask(0o077)
    a.out.mkdir(parents=True, mode=0o700)
    (a.out/"source.md").write_text(content, encoding="utf-8")
    (a.out/"source-meta.json").write_text(json.dumps({"source_url":a.url,"revision_id":doc.get("revision_id")},ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print(a.out/"source.md")

if __name__ == "__main__":
    main()
