import glob, re, time

timestamp = int(time.time())
html_files = glob.glob('*.html')
updated = 0

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update products.js, app.js, shop-app.js, product-app.js, auth.js, styles.css
    new_content = re.sub(r'src="(products|app|shop-app|product-app|auth)\.js(\?v=[^"\']*)?"', f'src="\\1.js?v={timestamp}"', content)
    new_content = re.sub(r'href="(styles)\.css(\?v=[^"\']*)?"', f'href="\\1.css?v={timestamp}"', new_content)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated += 1

print(f"Updated cache parameters in {updated} HTML files to v={timestamp}")
