import glob
import re

html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # replace logo.png with a cache busted version like logo.png?v=2
    # First, let's remove any existing ?v=\d+ from logo.png
    content = re.sub(r'logo\.png\?v=\d+', 'logo.png', content)
    # Now add the new cache buster
    content = content.replace('logo.png', 'logo.png?v=2')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated logo cache busters to v=2.")
