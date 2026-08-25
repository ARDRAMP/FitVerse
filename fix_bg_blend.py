import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_body = """      background-image: linear-gradient(to bottom, rgba(20, 36, 3, 0.3), rgba(20, 36, 3, 0.6)), 
url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop');"""
# I'll just use regex to replace the block

new_body = """.login-body {
    background-image: url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop');
    background-color: rgba(20, 36, 3, 0.9);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: var(--ice-white);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
}"""

css = re.sub(r'\.login-body\s*\{[^}]+\}', new_body, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated login-body background to use blend mode.")
