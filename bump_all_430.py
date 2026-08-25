import glob
import re

for file in glob.glob("*.html"):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(r'styles\.css\?v=[^\s"\'<>]+', 'styles.css?v=440', content)
    new_content = re.sub(r'app\.js\?v=[^\s"\'<>]+', 'app.js?v=440', new_content)
    new_content = re.sub(r'auth\.js\?v=[^\s"\'<>]+', 'auth.js?v=440', new_content)
    new_content = re.sub(r'products\.js\?v=[^\s"\'<>]+', 'products.js?v=440', new_content)
    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Bumped {file} to v=430")
