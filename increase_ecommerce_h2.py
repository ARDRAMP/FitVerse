import re
import glob

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Change ecommerce-header h2 font size using regex
css = re.sub(r'(\.ecommerce-header\s*h2\s*\{[^}]*font-size:\s*)1\.5rem(;)', r'\g<1>2.5rem\g<2>', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=57', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Increased ecommerce-header h2 font size to 2.5rem.")
