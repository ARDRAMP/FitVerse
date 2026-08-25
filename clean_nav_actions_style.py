import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove inline style on nav-actions
    new_content = re.sub(
        r'<div\s+class="nav-actions\s+golds-nav-actions"\s+style="[^"]*"',
        '<div class="nav-actions golds-nav-actions"',
        content
    )
    
    # Remove inline style on brand
    new_content = re.sub(
        r'<a\s+href="index\.html"\s+class="brand"\s+style="[^"]*"',
        '<a href="index.html" class="brand"',
        new_content
    )
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned nav-actions inline styles in {file}")
    else:
        print(f"No changes needed for {file}")
