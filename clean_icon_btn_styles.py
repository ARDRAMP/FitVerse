import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean wishlist button style
    new_content = re.sub(
        r'<button\s+aria-label="Wishlist"\s+class="icon-btn\s+wishlist-toggle"[^>]*>',
        '<button aria-label="Wishlist" class="icon-btn wishlist-toggle">',
        content
    )
    
    # Clean search button style
    new_content = re.sub(
        r'<button\s+aria-label="Search"\s+class="icon-btn\s+search-toggle"[^>]*>',
        '<button aria-label="Search" class="icon-btn search-toggle">',
        new_content
    )
    
    # Clean cart button style
    new_content = re.sub(
        r'<button\s+aria-label="Cart"\s+class="icon-btn\s+cart-toggle"[^>]*>',
        '<button aria-label="Cart" class="icon-btn cart-toggle">',
        new_content
    )
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned icon button inline styles in {file}")
    else:
        print(f"No changes needed for {file}")
