import glob
import re

search_html = """    <!-- Compact Floating Search Bar -->
    <div id="search-modal" style="display: none;">
        <div>
            <div class="search-bar-inner">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="search-input-modal" placeholder="Search gear, categories, bundles..." autocomplete="off">
                <button id="search-submit" class="search-submit-btn">Search</button>
                <button class="close-search-btn" aria-label="Close search">&times;</button>
            </div>
            <div class="search-quick-tags">
                <span>Popular:</span>
                <a href="shop.html?category=Strength">Strength</a>
                <a href="shop.html?category=Cardio">Cardio</a>
                <a href="shop.html?category=Combat">Combat</a>
                <a href="shop.html?category=Home Gym">Home Gym</a>
                <a href="bundles.html">Bundles</a>
            </div>
        </div>
    </div>"""

html_files = glob.glob('*.html')
updated = 0

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove any existing search-modal and search-overlay
    # First remove search-modal block if present
    content_new = re.sub(
        r'<!-- Search Modal -->\s*<div id="search-modal"[\s\S]*?</div>\s*</div>\s*</div>',
        '',
        content
    )
    content_new = re.sub(
        r'<div id="search-modal"[\s\S]*?</div>\s*</div>\s*</div>',
        '',
        content_new
    )
    # Remove search-overlay block if present
    content_new = re.sub(
        r'<!-- Search Overlay -->\s*<div id="search-overlay"[\s\S]*?</div>\s*</div>',
        '',
        content_new
    )
    content_new = re.sub(
        r'<div id="search-overlay"[\s\S]*?</div>\s*</div>',
        '',
        content_new
    )

    # Insert the unified search_html before Wishlist or Cart Overlay or before </body>
    if 'id="cart-overlay"' in content_new:
        content_new = content_new.replace('<div id="cart-overlay"', search_html + '\n\n    <div id="cart-overlay"')
    elif 'id="wishlist-overlay"' in content_new:
        content_new = content_new.replace('<div id="wishlist-overlay"', search_html + '\n\n    <div id="wishlist-overlay"')
    else:
        content_new = content_new.replace('</body>', search_html + '\n</body>')

    if content_new != content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content_new)
        print(f"Updated {fpath}")
        updated += 1

print(f"Total files updated: {updated}")
