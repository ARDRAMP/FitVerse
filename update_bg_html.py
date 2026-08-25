import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We want to find the inline style for login-layout and make sure it points to login-bg.png?v=8
    # It might be images/login-bg-bright.png or images/login-bg.png
    
    # We'll just replace the whole login-layout div to be safe.
    # We look for <div class="login-layout" ...>
    content = re.sub(
        r'<div class="login-layout"[^>]*>',
        '<div class="login-layout" style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(\'images/login-bg.png?v=8\') center/cover no-repeat fixed;">',
        content
    )
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('login.html')
update_file('signup.html')

print("Updated html files to use dark moody gym background")
