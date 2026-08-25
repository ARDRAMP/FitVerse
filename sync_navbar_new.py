import re
import glob

# Read the correct navbar from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# Extract the navbar block from index.html
full_nav_pattern = r'(<!-- Navigation -->.*?</header>)'
match_full = re.search(full_nav_pattern, index_content, re.DOTALL)
if not match_full:
    print("Could not find navbar in index.html")
    exit(1)
    
new_nav = match_full.group(1)

html_files = glob.glob('*.html')
for file in html_files:
    if file == 'index.html':
        continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the existing navbar in the file if it exists
    old_nav_pattern = r'<!-- Navigation -->.*?</header>'
    if re.search(old_nav_pattern, content, flags=re.DOTALL):
        new_content = re.sub(old_nav_pattern, new_nav, content, flags=re.DOTALL)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
