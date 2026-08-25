import re
import glob

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Change headline color to ice-white
html = html.replace('color: var(--navy-black);">Why Choose FitVerse', 'color: var(--ice-white);">Why Choose FitVerse')

# Also, if we want the section background to be explicitly black, let's just leave it as is, because the body is black.
# We just need to fix the headline color.

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=52', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed Why Choose FitVerse headline color.")
