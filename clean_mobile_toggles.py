import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace inline style on mobile-menu-toggle
    new_content = re.sub(
        r'<button\s+aria-label="Toggle Navigation"\s+class="mobile-menu-toggle"[^>]*>',
        '<button aria-label="Toggle Navigation" class="mobile-menu-toggle" onclick="window.toggleMobileMenu(event)">',
        content
    )
    
    # Also in case class is after
    new_content = re.sub(
        r'<button\s+class="mobile-menu-toggle"[^>]*>',
        '<button aria-label="Toggle Navigation" class="mobile-menu-toggle" onclick="window.toggleMobileMenu(event)">',
        new_content
    )
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned mobile toggle in {file}")
    else:
        print(f"No changes needed for {file}")
