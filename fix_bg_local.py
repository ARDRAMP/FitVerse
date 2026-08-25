import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_body = """.login-body {
    background: linear-gradient(to bottom, rgba(20, 36, 3, 0.4), rgba(20, 36, 3, 0.8)), url('hero.png');
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

css = re.sub(r'\.login-body\s*\{[^}]+\}', new_body, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated login-body background to use local hero.png.")
