import glob
import re

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update styles.css, app.js, and auth.js cache versions
    new_content = re.sub(r'styles\.css\?v=[^\s"\'<>]+', 'styles.css?v=430', content)
    new_content = re.sub(r'app\.js\?v=[^\s"\'<>]+', 'app.js?v=430', new_content)
    new_content = re.sub(r'auth\.js\?v=[^\s"\'<>]+', 'auth.js?v=430', new_content)
    
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")
