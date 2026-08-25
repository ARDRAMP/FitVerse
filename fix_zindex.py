import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace background-color: var(--navy-black); with background-color: transparent; in .login-body
css = re.sub(r'(\.login-body\s*\{[^}]*?background-color:\s*)var\(--navy-black\)', r'\1transparent', css)

# Also fix the old background rules in .login-body if they exist, but we already know it has background-color: var(--navy-black)
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated login-body background color to transparent.")
