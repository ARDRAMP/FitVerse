import glob, re, time

timestamp = int(time.time())
html_files = glob.glob('*.html')
updated = 0

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(r'products\.js(\?v=[^"\']*)?', f'products.js?v={timestamp}', content)
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        updated += 1

print(f"Updated products.js cache parameter in {updated} HTML files to v={timestamp}")
