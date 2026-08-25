import re
import glob

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace .fb-btn background and color properties
css = re.sub(r'(\.fb-btn\s*\{[^}]*?)background(?:-color)?\s*:\s*#[a-fA-F0-9]+;', r'\1background: var(--gold);', css)
css = re.sub(r'(\.fb-btn\s*\{[^}]*?)color\s*:\s*white;', r'\1color: var(--navy-black, #000);', css)

# Replace .fb-btn:hover properties
css = re.sub(r'(\.fb-btn:hover\s*\{[^}]*?)background(?:-color)?\s*:\s*#[a-fA-F0-9]+;', r'\1background: #e5b800;', css)
css = re.sub(r'(\.fb-btn:hover\s*\{[^}]*?)color\s*:\s*white;', r'\1color: var(--navy-black, #000);', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=60', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated fb-btn styles.")
