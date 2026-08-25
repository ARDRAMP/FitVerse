import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Remove the shop-by-brand section
# Pattern matches from <section class="shop-by-brand..." to the closing </section>
html = re.sub(r'<section class="shop-by-brand.*?</section>', '', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Removed Shop By Brand section.")
