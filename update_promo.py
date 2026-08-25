import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace btn-white with golds-signin-btn or similar, 
# wait, golds-signin-btn is square, maybe let's create a specific gold shop button.
# Or just replace btn-white with golds-signin-btn for consistency.
content = content.replace('class="btn btn-white"', 'class="golds-signin-btn"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated index.html promo buttons")
