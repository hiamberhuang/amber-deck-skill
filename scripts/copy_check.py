#!/usr/bin/env python3
"""Check that a deck did not invent facts: every number in the deck must appear in the source brief.

  copy_check.py source.md deck/index.html [--allow 2026 --allow 100%]
Exit 1 if the deck contains figures absent from the source. Also lists source figures the deck dropped (informational)."""
import argparse, html, re, sys
from pathlib import Path

NUM = re.compile(r"(?<![\w.#-])[¥$￥]?\d[\d,]*(?:\.\d+)?\s?(?:%|％|万|亿|千|倍|x|X|\+|元|天|周|月|年|人|家|篇|条|次|个)?")

def text_of(p):
    s = Path(p).read_text(encoding="utf-8", errors="ignore")
    if p.lower().endswith((".html", ".htm")):
        s = re.sub(r"(?is)<(script|style|svg\s[^>]*aria-hidden)[^>]*>.*?</\1>", " ", s)
        s = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", s)
        s = re.sub(r"(?s)<!--.*?-->", " ", s)
        s = html.unescape(re.sub(r"<[^>]+>", " ", s))
    return s

def figures(s):
    out = set()
    for m in NUM.finditer(s):
        v = re.sub(r"[\s,]", "", m.group()).replace("％", "%")
        core = re.sub(r"[^\d.]", "", v)
        if len(core.replace(".", "")) >= 2 or v[-1:] in "%万亿倍xX":  # ignore bare single digits (step numbers)
            out.add(v)
    return out

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("source"); ap.add_argument("deck"); ap.add_argument("--allow", action="append", default=[])
    a = ap.parse_args()
    src, deck = figures(text_of(a.source)), figures(text_of(a.deck))
    src_core = {re.sub(r"[^\d.]", "", x) for x in src}
    invented = sorted(x for x in deck if re.sub(r"[^\d.]", "", x) not in src_core and x not in a.allow
                      and not re.fullmatch(r"0?\d{1,2}", x))  # page numbers 01..99
    dropped = sorted(x for x in src if re.sub(r"[^\d.]", "", x) not in {re.sub(r"[^\d.]", "", y) for y in deck})
    if dropped:
        print("source figures not used in deck (fine if intentional):", ", ".join(dropped[:40]))
    if invented:
        print("\nFIGURES IN DECK BUT NOT IN SOURCE (remove, or cite where they come from and pass --allow):")
        for x in invented: print("  ", x)
        sys.exit(1)
    print("\nNo invented figures.")

if __name__ == "__main__":
    main()
