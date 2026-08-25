import re
import glob

# Restore index.html
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace('class="golds-signin-btn"', 'class="btn btn-white"')
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

# Restore styles.css
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix hero-slide::after
old_after = """.hero-slide::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000000 -10%, transparent 40%, rgba(0,0,0,0.3) 100%);
}"""

new_after = """.hero-slide::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--grad-hero);
}"""
css = css.replace(old_after, new_after)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update cache buster
for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=46', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Reverted to original styles and updated cache.")
