import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace background: var(--navy-black); with background: transparent; in .login-form-container
content = re.sub(
    r'(\.login-form-container\s*\{[^}]*?background\s*:\s*)var\(--navy-black\)(;)',
    r'\1transparent\2',
    content
)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Made .login-form-container transparent in styles.css")
