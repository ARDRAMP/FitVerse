import re

# Read the correct navbar from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

full_nav_pattern = r'(<!-- Navigation -->.*?</header>)'
match_full = re.search(full_nav_pattern, index_content, re.DOTALL)
if match_full:
    new_nav = match_full.group(1)
    
    with open('login.html', 'r', encoding='utf-8') as f:
        login_content = f.read()
        
    if '<!-- Navigation -->' not in login_content:
        # inject just after <body ...>
        login_content = re.sub(r'(<body[^>]*>)', r'\1\n    ' + new_nav + '\n', login_content, count=1)
        with open('login.html', 'w', encoding='utf-8') as f:
            f.write(login_content)
        print("Injected into login.html")
    else:
        print("login.html already has a navbar")
