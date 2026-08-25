import os, glob, re

for fpath in sorted(glob.glob('*.html')):
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'<footer.*?</footer\s*>', content, re.DOTALL | re.IGNORECASE)
    if match:
        print(f"{fpath}: footer found (len={len(match.group(0))})")
    else:
        print(f"{fpath}: NO footer")
