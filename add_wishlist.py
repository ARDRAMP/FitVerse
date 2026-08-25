import os
import glob

wishlist_html = """
                <button aria-label="Wishlist" class="icon-btn wishlist-toggle"
                    style="background:none; border:none; color: #fff; cursor: pointer; font-size: 1.2rem; position: relative;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span class="wishlist-badge"
                        style="position: absolute; top: -8px; right: -8px; background: #e8b923; color: #000; font-size: 0.7rem; padding: 2px 5px; border-radius: 50%; font-weight: bold; display:none;">0</span>
                </button>
"""

search_button_start = '<button aria-label="Search" class="icon-btn search-toggle"'

for filename in glob.glob('*.html'):
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    if 'wishlist-toggle' not in html and search_button_start in html:
        # Inject the wishlist button before the search button
        html = html.replace(search_button_start, wishlist_html.strip() + '\n                ' + search_button_start)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html)
        print(f"Added wishlist icon to {filename}")

print("Done")
