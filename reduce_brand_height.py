import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Reduce section padding
html = html.replace('padding: 4rem 0; width: 100%;', 'padding: 2rem 0; width: 100%;')

# Reduce header margin
html = html.replace('margin-bottom: 3rem; padding: 0 2rem;', 'margin-bottom: 1.5rem; padding: 0 2rem;')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Reduced Shop By Brand section height.")
