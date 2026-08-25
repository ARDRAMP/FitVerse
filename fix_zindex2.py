import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Fix the z-indexes in styles.css
css = re.sub(r'(\.login-bg-img\s*\{[^}]*?z-index:\s*)-2', r'\1 0', css)
css = re.sub(r'(\.login-overlay\s*\{[^}]*?z-index:\s*)-1', r'\1 1', css)

# Make sure login-layout has z-index: 2 and position: relative so it renders above the background
if 'z-index: 2;' not in css and '.login-layout {' in css:
    css = css.replace('.login-layout {', '.login-layout {\n    position: relative;\n    z-index: 2;')

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated z-indexes to positive values.")
