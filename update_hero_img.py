import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace images/hero.png with logo.png?v=2
content = content.replace("url('images/hero.png')", "url('logo.png?v=2')")
content = content.replace("url('images/strength.png')", "url('logo.png?v=2')")
content = content.replace("url('images/cardio.png')", "url('logo.png?v=2')")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated hero section images to logo.png")
