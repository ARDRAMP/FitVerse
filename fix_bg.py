import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

old_block = r"\.login-body\s*\{\s*background:\s*linear-gradient\([^)]+\),\s*rgba\([^)]+\)\),\s*url\([^)]+\).*?;"
# Actually just search for the specific background line
new_bg = """background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('images/login-bg.png?v=3');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;"""

content = re.sub(r"background:\s*linear-gradient\([^;]+login-bg\.png[^;]+;", new_bg, content)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed background syntax in styles.css")
