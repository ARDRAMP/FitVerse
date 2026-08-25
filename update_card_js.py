import re
import glob

# Update shop-app.js
with open('shop-app.js', 'r', encoding='utf-8') as f:
    shop_js = f.read()

# Add badge and fix layout
new_shop_js = shop_js.replace('<button class="wishlist-btn"', '<button class="wishlist-btn"')
with open('shop-app.js', 'w', encoding='utf-8') as f:
    f.write(new_shop_js)

# Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

new_app_js = app_js.replace('<button class="wishlist-btn"', '<button class="wishlist-btn"')
with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_app_js)

# Update HTML cache buster
for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=59', content)
    content = re.sub(r'shop-app\.js\?v=\d+', 'shop-app.js?v=59', content)
    content = re.sub(r'app\.js\?v=\d+', 'app.js?v=59', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("JS and cache busters updated.")
