import re
import glob

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Change promo-box h3 font size
css = css.replace('font-size: 2.5rem;\n      color: white;\n      margin-bottom: 1.5rem;', 'font-size: 1.8rem;\n      color: white;\n      margin-bottom: 1.5rem;')

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=53', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Reduced promo-box h3 font size.")
