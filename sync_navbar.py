import re
import glob

# Read the home page
with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Extract the navbar from index.html
navbar_match = re.search(r'<header class="navbar">.*?</header>', index_html, re.DOTALL)
if not navbar_match:
    print("Could not find navbar in index.html")
    exit(1)

navbar_html = navbar_match.group(0)

# Apply to all other HTML files except login and signup
for file in glob.glob('*.html'):
    if file in ['index.html', 'login.html', 'signup.html']:
        continue
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the existing navbar
    new_content = re.sub(r'<header class="navbar">.*?</header>', navbar_html, content, flags=re.DOTALL)
    
    # Increment cache buster just in case
    new_content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=54', new_content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"Updated navbar in {file}")
