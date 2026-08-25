with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

import re
matches = re.finditer(r'([^{}]*?(?:\.nav-|\.navbar|\.golds-|\.mobile-|\.icon-|\.brand|\.wishlist|\.cart-|\.profile-)[^{}]*?)\{([^}]*)\}', content, re.DOTALL)

for m in matches:
    selectors = m.group(1).strip()
    rules = m.group(2).strip()
    if any(k in selectors for k in ['navbar', 'nav-container', 'nav-actions', 'golds-nav', 'icon-btn', 'mobile-menu-toggle', 'brand', 'wishlist-toggle', 'cart-toggle', 'search-toggle']):
        print("=== SELECTOR ===")
        print(selectors)
        print("--- RULES ---")
        print(rules[:200])
        print()
