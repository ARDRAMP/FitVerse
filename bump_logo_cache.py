import glob
import re

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update logo.png?v=2 to logo.png?v=3
    new_content = re.sub(r'logo\.png\?v=\d+', 'logo.png?v=3', content)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
