import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace all background usages of ice-white
css = re.sub(r'background(-color)?:\s*var\(--ice-white(,\s*#fff)?\);', r'background\1: var(--navy-black);', css)

# Replace all background usages of ice-100 or ice-50
css = re.sub(r'background(-color)?:\s*var\(--ice-(100|50)\);', r'background\1: var(--deep-navy);', css)

# Also fix any hardcoded #fff or #f4f4f4 backgrounds
css = re.sub(r'background(-color)?:\s*#ffffff;', r'background\1: var(--navy-black);', css)
css = re.sub(r'background(-color)?:\s*#fff;', r'background\1: var(--navy-black);', css)
css = re.sub(r'background(-color)?:\s*#f4f4f4;', r'background\1: var(--deep-navy);', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated backgrounds using regex.")
