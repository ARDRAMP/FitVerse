import re
import glob

html_files = glob.glob('*.html')

new_nav = """<header class="navbar">
    <div class="nav-container">
        <a href="index.html" class="brand">
            <img src="logo.png" alt="FitVerse Logo" class="brand-logo">
            <span class="brand-wordmark" style="margin-left: 0.75rem; color: #fff; font-weight: bold; font-size: 1.2rem;">FitVerse</span>
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
        
        <div class="nav-actions golds-nav-actions" style="gap: 1rem;">
            
            <button aria-label="Cart" class="icon-btn cart-toggle" style="background:none; border:none; color: #fff; cursor: pointer; font-size: 1.2rem; position: relative;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span class="cart-badge" style="position: absolute; top: -8px; right: -8px; background: var(--teal-600); color: #000; font-size: 0.7rem; padding: 2px 5px; border-radius: 50%; font-weight: bold;">0</span>
            </button>
            <a href="login.html" class="nav-white-link" style="margin-right: 0.5rem; font-size: 0.85rem;">SIGN IN</a>
            <a href="#timetable" class="nav-white-link">TIMETABLE</a>
            <a href="login.html" class="btn btn-primary join-btn golds-join-btn">JOIN NOW</a>
        </div>
    </div>"""

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We will replace everything from <header class="navbar"> to <div class="nav-actions golds-nav-actions">...</div>\n    </div>
    pattern = r'<header class="navbar">.*?</nav>\s*<div class="nav-actions golds-nav-actions.*?</div>\s*</div>'
    content = re.sub(pattern, new_nav, content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated navbar with FitVerse text, cart, search, and sign in.")
