import os
import glob
import re

html_files = glob.glob("*.html")

favicon_tags = '''    <!-- Favicon -->
    <link rel="icon" type="image/png" href="logo.png?v=3">
    <link rel="apple-touch-icon" href="logo.png?v=3">'''

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove any old favicon links if present
    content = re.sub(r'\s*<link rel="(?:shortcut icon|icon|apple-touch-icon)"[^>]*>', '', content)
    
    # Insert new favicon tags right after <title> tag or <meta viewport>
    if '<title>' in content:
        new_content = re.sub(r'(</title>)', r'\1\n' + favicon_tags, content, count=1)
    elif '</head>' in content:
        new_content = re.sub(r'(</head>)', favicon_tags + '\n' + r'\1', content, count=1)
    else:
        new_content = content
        
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated favicon in {file}")
