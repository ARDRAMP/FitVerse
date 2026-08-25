import re
import glob

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Add color to .ci-name
css = css.replace('.ci-name {\n      font-weight: 700;\n      margin-bottom: 0.25rem;\n  }', '.ci-name {\n      font-weight: 700;\n      margin-bottom: 0.25rem;\n      color: var(--navy-black, #000);\n  }')

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=55', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed cart item name visibility.")
