import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Make navbar black
css = re.sub(r'(\.navbar\s*\{[^}]*?background:\s*)transparent(;)', r'\1#000000\2', css)
css = re.sub(r'(\.navbar\.scrolled\s*\{[^}]*?background:\s*)rgba\(255, 255, 255, 0\.95\)(;)', r'\1#000000\2', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated navbar background to solid black.")
