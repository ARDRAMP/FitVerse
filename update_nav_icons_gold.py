import glob
import re

html_files = glob.glob('*.html')
updated_count = 0

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace inline color: #fff with color: #FFD700 in wishlist-toggle, search-toggle, cart-toggle
    new_content = content
    new_content = re.sub(
        r'(class="[^"]*wishlist-toggle[^"]*"[^>]*style="[^"]*color:\s*)#fff',
        r'\1#FFD700',
        new_content,
        flags=re.IGNORECASE
    )
    new_content = re.sub(
        r'(class="[^"]*search-toggle[^"]*"[^>]*style="[^"]*color:\s*)#fff',
        r'\1#FFD700',
        new_content,
        flags=re.IGNORECASE
    )
    new_content = re.sub(
        r'(class="[^"]*cart-toggle[^"]*"[^>]*style="[^"]*color:\s*)#fff',
        r'\1#FFD700',
        new_content,
        flags=re.IGNORECASE
    )

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file_path}")
        updated_count += 1

print(f"Total updated files: {updated_count}")
