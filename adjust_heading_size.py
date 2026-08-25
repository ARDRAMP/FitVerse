import re

with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Reduce the size of the "MY ACCOUNT" heading
html = html.replace('font-size: 3.5rem;', 'font-size: 2.5rem;')

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Adjusted heading size in profile.html")
