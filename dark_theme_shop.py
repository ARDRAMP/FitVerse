with open('styles.css', 'a', encoding='utf-8') as f:
    override_css = """
/* =========================================================================
   DARK THEME OVERRIDES FOR SHOP & CATEGORIES
   ========================================================================= */

/* Shop Page Backgrounds */
.shop-page-wrapper, .categories-page-wrapper {
    background-color: #0a0a0a !important; /* Matte black */
    color: #e0e0e0 !important;
}

.shop-main, .cat-grid-section {
    background-color: #0a0a0a !important;
}

/* Filter Bar Redesign */
.shop-filter-bar {
    background: rgba(10, 10, 10, 0.8) !important;
    backdrop-filter: blur(10px) !important;
    border-bottom: 1px solid rgba(232, 185, 35, 0.2) !important;
}

.filter-pill input:checked + span, .filter-pill.active {
    background: #e8b923 !important;
    color: #0a0a0a !important;
}

.filter-pill {
    background: rgba(255, 255, 255, 0.05) !important;
    color: #fff !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    transition: all 0.3s ease;
}

.filter-pill:hover {
    border-color: #e8b923 !important;
}

.premium-select {
    background: #111 !important;
    color: #fff !important;
    border: 1px solid rgba(232, 185, 35, 0.3) !important;
}

.clear-filters-btn {
    background: transparent !important;
    color: #e8b923 !important;
    border: 1px solid #e8b923 !important;
}

.clear-filters-btn:hover {
    background: rgba(232, 185, 35, 0.1) !important;
}

/* Product Cards in Shop */
.product-card {
    background: rgba(255, 255, 255, 0.03) !important;
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    border-radius: 8px !important;
}

.product-info h3 {
    color: #fff !important;
}

.product-price {
    color: #e8b923 !important; /* Gold */
}

.add-to-cart-btn {
    background: #e8b923 !important;
    color: #0a0a0a !important;
}

.add-to-cart-btn:hover {
    background: #f5d769 !important;
    box-shadow: 0 0 15px rgba(232, 185, 35, 0.4) !important;
}

/* Category Cards */
.cat-card-overlay {
    background: linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.2) 100%) !important;
}

.cat-card:hover .cat-card-overlay {
    background: linear-gradient(to top, rgba(232, 185, 35, 0.3) 0%, rgba(10, 10, 10, 0.2) 100%) !important;
}

.cat-card-content h2 {
    color: #fff !important;
}

.cat-card-link {
    color: #e8b923 !important;
}

"""
    f.write(override_css)

import re
with open('shop.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=81', html)
with open('shop.html', 'w', encoding='utf-8') as f:
    f.write(html)

with open('categories.html', 'r', encoding='utf-8') as f:
    html2 = f.read()
html2 = re.sub(r'styles.css\?v=\d+', 'styles.css?v=81', html2)
html2 = html2.replace('styles.css"', 'styles.css?v=81"') # In case it didn't have ?v=
with open('categories.html', 'w', encoding='utf-8') as f:
    f.write(html2)

print("Applied dark theme styles to shop and categories")
