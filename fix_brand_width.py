import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make the shop-by-brand section full width
html = html.replace(
    'class="shop-by-brand scroll-reveal" style="background: #ffffff; padding: 4rem 0; max-width: var(--max-width); margin: 0 auto;"',
    'class="shop-by-brand scroll-reveal" style="background: #ffffff; padding: 4rem 0; width: 100%;"'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed brand section width.")
