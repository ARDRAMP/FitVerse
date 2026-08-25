import glob
import re

html_files = glob.glob('*.html')
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Restore the gold buttons that were reverted
    content = content.replace('class="btn btn-white"', 'class="golds-signin-btn"')
    
    # Update cache buster
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=48', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Restored gold buttons across all HTML files.")
