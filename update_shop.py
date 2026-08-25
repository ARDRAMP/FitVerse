import re

with open('shop.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the hero section
new_hero = '''
        <!-- Premium Shop Hero -->
        <div class="shop-premium-hero">
            <div class="shop-hero-overlay"></div>
            <div class="shop-hero-content">
                <div class="shop-breadcrumbs">Home / Shop / All Collection</div>
                <h1 class="shop-hero-title">THE COLLECTION</h1>
                <p class="shop-hero-subtitle">Gear up for your journey with our premium selection.</p>
            </div>
        </div>
'''
html = re.sub(
    r'<div class="shop-page-header">.*?</div>',
    new_hero,
    html,
    flags=re.DOTALL
)

# Replace the sidebar
new_sidebar = '''
            <!-- Premium Sidebar Filters -->
            <aside class="shop-premium-sidebar">
                <div class="sidebar-header">
                    <h2 class="sidebar-title">Filters</h2>
                    <button class="clear-filters-btn" onclick="location.reload()">Clear All</button>
                </div>
                
                <div class="premium-filter-group">
                    <h3>Categories</h3>
                    <div class="pill-group">
                        <label class="filter-pill"><input type="checkbox" value="Strength" class="filter-checkbox"> Strength</label>
                        <label class="filter-pill"><input type="checkbox" value="Cardio" class="filter-checkbox"> Cardio</label>
                        <label class="filter-pill"><input type="checkbox" value="Accessories" class="filter-checkbox"> Accessories</label>
                        <label class="filter-pill"><input type="checkbox" value="Apparel" class="filter-checkbox"> Apparel</label>
                    </div>
                </div>
                
                <div class="premium-filter-group">
                    <h3>Price Range</h3>
                    <div class="price-radio-group">
                        <label class="price-radio-label">
                            <input type="radio" name="price" value="all" checked class="filter-radio">
                            <span class="custom-radio"></span> All Prices
                        </label>
                        <label class="price-radio-label">
                            <input type="radio" name="price" value="under50" class="filter-radio">
                            <span class="custom-radio"></span> Under $50
                        </label>
                        <label class="price-radio-label">
                            <input type="radio" name="price" value="50to200" class="filter-radio">
                            <span class="custom-radio"></span> $50 - $200
                        </label>
                        <label class="price-radio-label">
                            <input type="radio" name="price" value="over200" class="filter-radio">
                            <span class="custom-radio"></span> Over $200
                        </label>
                    </div>
                </div>
            </aside>
'''
html = re.sub(
    r'<aside class="shop-sidebar">.*?</aside>',
    new_sidebar,
    html,
    flags=re.DOTALL
)

# Update layout container
html = html.replace('<main class="shop-page-container">', '<main class="shop-page-wrapper">')

with open('shop.html', 'w', encoding='utf-8') as f:
    f.write(html)
