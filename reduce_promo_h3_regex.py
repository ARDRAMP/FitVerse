import re
import glob

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Change promo-box h3 font size using regex to be safe
css = re.sub(r'(\.promo-box\s*h3\s*\{[^}]*font-size:\s*)2\.5rem(;)', r'\g<1>1.5rem\g<2>', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=56', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Reduced promo-box h3 font size to 1.5rem.")
