import json
import re
import os

# 1. Update products.js
with open('products.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract json array
match = re.search(r'const shopProducts = (\[.*\]);', content, re.DOTALL)
if match:
    products = json.loads(match.group(1))
    for p in products:
        p['price'] = round(p['price'] * 83) # Conversion rate
    
    new_json = json.dumps(products, indent=4)
    new_content = content[:match.start(1)] + new_json + content[match.end(1):]
    with open('products.js', 'w', encoding='utf-8') as f:
        f.write(new_content)

# 2. Replace $ with ₹ in all relevant files
files_to_update = [
    'index.html',
    'shop.html',
    'product.html',
    'app.js',
    'shop-app.js',
    'product-app.js'
]

for file in files_to_update:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            text = f.read()
        
        # Replace \$ not followed by {
        text = re.sub(r'\$(?!\{)', '₹', text)
        
        # Update free shipping text from 150 to 15000 (roughly)
        text = text.replace('over ₹150', 'over ₹12000')
        text = text.replace('under50', 'under4000')
        text = text.replace('Under ₹50', 'Under ₹4000')
        text = text.replace('50to200', '4000to16000')
        text = text.replace('₹50 - ₹200', '₹4000 - ₹16000')
        text = text.replace('over200', 'over16000')
        text = text.replace('Over ₹200', 'Over ₹16000')

        with open(file, 'w', encoding='utf-8') as f:
            f.write(text)

print("Currency updated successfully.")
