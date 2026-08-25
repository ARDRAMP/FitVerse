import re
import glob

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace SIGN IN link with button style
    # Old: <a href="login.html" class="nav-white-link" style="margin-right: 0.5rem; font-size: 0.85rem;">SIGN IN</a>
    # New: <a href="login.html" class="golds-signin-btn">SIGN IN</a>
    
    content = re.sub(r'<a href="login\.html" class="nav-white-link".*?>SIGN IN</a>', 
                     r'<a href="login.html" class="golds-signin-btn">SIGN IN</a>', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

with open('styles.css', 'a', encoding='utf-8') as f:
    f.write("\n\n/* Sign In Square Yellow Button */\n.golds-signin-btn {\n    background: var(--teal-600) !important;\n    color: #000 !important;\n    border-radius: 0 !important;\n    font-weight: 900 !important;\n    padding: 0.6rem 1.2rem !important;\n    font-size: 0.9rem !important;\n    text-decoration: none !important;\n    text-transform: uppercase;\n    border: none !important;\n}\n.golds-signin-btn:hover {\n    background: #fff !important;\n}\n")

print("Updated SIGN IN to a square yellow button.")
