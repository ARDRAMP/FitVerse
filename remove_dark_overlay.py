import re

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove the linear gradient from the background inline style
    content = re.sub(
        r'linear-gradient\(rgba\(0,0,0,0\.5\),\s*rgba\(0,0,0,0\.7\)\),\s*',
        '',
        content
    )
    
    # Update cache version to ensure it refreshes
    content = re.sub(r'v=8', 'v=9', content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('login.html')
update_file('signup.html')

print("Removed dark overlay from background in html files")
