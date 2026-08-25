import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Clean brand logo inline style
    new_content = re.sub(
        r'<img\s+src="logo\.png[^"]*"\s+alt="FitVerse Logo"\s+class="brand-logo"[^>]*>',
        '<img src="logo.png?v=3" alt="FitVerse Logo" class="brand-logo">',
        content
    )
    
    # Clean brand wordmark inline style
    new_content = re.sub(
        r'<span\s+class="brand-wordmark"[^>]*>\s*FitVerse\s*</span>',
        '<span class="brand-wordmark">FitVerse</span>',
        new_content
    )
    
    # Clean brand link inline style
    new_content = re.sub(
        r'<a\s+href="index\.html"\s+class="brand"[^>]*>',
        '<a href="index.html" class="brand">',
        new_content
    )
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Cleaned brand markup in {file}")
    else:
        print(f"No changes needed for {file}")
