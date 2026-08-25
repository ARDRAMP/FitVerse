import re

with open('login.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove inline style from body
content = re.sub(r'<body class="login-body"[^>]*>', '<body class="login-body">', content)

# Add inline style to login-layout
new_layout = '<div class="login-layout" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(\'images/login-bg.png\'); background-size: cover; background-position: center; min-height: 100vh; width: 100%;">'
content = re.sub(r'<div class="login-layout">', new_layout, content)

with open('login.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('signup.html', 'r', encoding='utf-8') as f:
    content2 = f.read()

content2 = re.sub(r'<body class="login-body"[^>]*>', '<body class="login-body">', content2)
content2 = re.sub(r'<div class="login-layout">', new_layout, content2)

with open('signup.html', 'w', encoding='utf-8') as f:
    f.write(content2)

print("Applied background to login-layout")
