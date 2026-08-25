import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_body = """.login-body {
    background: linear-gradient(to bottom, rgba(20, 36, 3, 0.85), rgba(20, 36, 3, 0.98)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop') center/cover fixed no-repeat;
    color: var(--ice-white);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}"""

new_body = """.login-body {
    background-image: linear-gradient(to bottom, rgba(20, 36, 3, 0.85), rgba(20, 36, 3, 0.98)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-color: var(--navy-black);
    color: var(--ice-white);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    min-height: 100vh;
}"""

if old_body in css:
    css = css.replace(old_body, new_body)
else:
    # Use regex
    css = re.sub(r'\.login-body\s*\{[^}]+\}', new_body, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated login-body background properties.")
