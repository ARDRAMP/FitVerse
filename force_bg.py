import re

with open('login.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <body class="login-body"> with inline styles
new_body_tag = '<body class="login-body" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(\'images/login-bg.png\') center/cover no-repeat fixed !important;">'
content = re.sub(r'<body class="login-body">', new_body_tag, content)

with open('login.html', 'w', encoding='utf-8') as f:
    f.write(content)

with open('signup.html', 'r', encoding='utf-8') as f:
    content2 = f.read()
content2 = re.sub(r'<body class="login-body">', new_body_tag, content2)
with open('signup.html', 'w', encoding='utf-8') as f:
    f.write(content2)

print("Added inline background styles to login.html and signup.html")
