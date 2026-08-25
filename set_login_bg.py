import re
import glob
import shutil
import os

# Create images folder if not exists
os.makedirs('images', exist_ok=True)

# Copy the image
source_image = r'C:\Users\Lenovo\.gemini\antigravity-ide\brain\e63c0be9-beed-40ae-99d3-733e0e7ad5db\login_background_1786111574772.png'
dest_image = r'images\login-bg.png'
shutil.copy2(source_image, dest_image)

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace .login-body styles
new_login_body = """
.login-body {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('images/login-bg.png') center/cover no-repeat fixed;
    color: var(--ice-white);
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
"""

css = re.sub(r'\.login-body\s*\{[^}]*\}', new_login_body.strip(), css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

for file in ['login.html', 'signup.html']:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=62', content)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated login-body background with new image.")
