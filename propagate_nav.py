import os
import re
import glob

# 1. Extract the navbar from index.html
with open('index.html', 'r', encoding='utf-8') as f:
    index_content = f.read()

# The navbar starts with <header class="navbar"> and ends with </header>
nav_match = re.search(r'(<header class="navbar">.*?</header>)', index_content, re.DOTALL)
if not nav_match:
    print("Could not find navbar in index.html")
    exit(1)

nav_block = nav_match.group(1)

# 2. Iterate through all .html files (except index.html) and replace their navbars
html_files = glob.glob('*.html')
for file in html_files:
    if file == 'index.html':
        continue
        
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Find existing navbar (could be commented out, so we match carefully, but let's just match the tags)
    # Actually, some might be commented out like <!-- <header class="navbar"> ... </header> -->
    # Let's match the commented version first, then the uncommented one.
    content = re.sub(r'<!--\s*<header class="navbar">.*?</header>\s*-->', nav_block, content, flags=re.DOTALL)
    content = re.sub(r'<header class="navbar">.*?</header>', nav_block, content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated navbar in {file}")

print("All navbars have been synchronized with index.html")
