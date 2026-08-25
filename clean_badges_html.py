import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace cart-badge
    new_content = re.sub(
        r'<span\s+class="cart-badge"[^>]*>\s*0\s*</span>',
        '<span class="cart-badge" style="display:none;">0</span>',
        content
    )
    
    # Replace wishlist-badge
    new_content = re.sub(
        r'<span\s+class="wishlist-badge"[^>]*>\s*0\s*</span>',
        '<span class="wishlist-badge" style="display:none;">0</span>',
        new_content
    )
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned badge markup in {file}")
    else:
        print(f"No changes needed for {file}")
