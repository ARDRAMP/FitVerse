import re
import glob

html_files = glob.glob('*.html')

new_nav = """<header class="navbar">
    <div class="nav-container">
        <a href="index.html" class="brand">
            <img src="logo.png" alt="FitVerse Logo" class="brand-logo">
        </a>
        
        <nav class="nav-links golds-nav-links">
            <a href="index.html">HOME</a>
            <span class="nav-divider">|</span>
            <a href="shop.html">SHOP</a>
            <span class="nav-divider">|</span>
            <a href="categories.html">CATEGORIES</a>
            <span class="nav-divider">|</span>
            <a href="#programs">PROGRAMS</a>
            <span class="nav-divider">|</span>
            <a href="#reviews">REVIEWS</a>
        </nav>
        
        <div class="nav-actions golds-nav-actions">
            <a href="#timetable" class="nav-white-link">TIMETABLE</a>
            <a href="login.html" class="btn btn-primary join-btn golds-join-btn">JOIN NOW</a>
        </div>
    </div>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will replace everything from <header class="navbar"> to <div class="mobile-menu"> (exclusive)
    # Using regex
    pattern = r'<header class="navbar">.*?</nav>\s*<div class="nav-actions">.*?</div>\s*</div>'
    content = re.sub(pattern, new_nav, content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated navbar in all HTML files.")
