import re
import glob

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add --gold to :root
if '--gold:' not in css:
    css = css.replace(':root {', ':root {\n      --gold: #FFD700;')

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=61', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Added --gold to root variables.")
