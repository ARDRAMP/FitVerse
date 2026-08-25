import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Extract header (up to the end of the mobile menu)
header_match = re.search(r'(.*?<div class="mobile-menu">.*?</div>)', html, re.DOTALL)
header = header_match.group(1) if header_match else ''

# Extract footer
footer_match = re.search(r'(<footer.*?>.*?</footer>)', html, re.DOTALL)
footer = footer_match.group(1) if footer_match else ''

# Replace links in header so 'Shop' points to shop.html
header = header.replace('href="#shop"', 'href="shop.html"')
header = header.replace('href="#categories"', 'href="index.html#categories"')
header = header.replace('href="#programs"', 'href="index.html#programs"')
header = header.replace('href="#why-us"', 'href="index.html#why-us"')
header = header.replace('href="#reviews"', 'href="index.html#reviews"')
header = header.replace('href="#" class="brand"', 'href="index.html" class="brand"')


shop_html = header + '''

    <main class="shop-page-container">
        <!-- Page Header -->
        <div class="shop-page-header">
            <h1>All Products</h1>
            <p>Gear up for your journey with our premium selection.</p>
        </div>

        <div class="shop-layout">
            <!-- Sidebar Filters -->
            <aside class="shop-sidebar">
                <div class="filter-group">
                    <h3>Category</h3>
                    <label><input type="checkbox" value="Strength" class="filter-checkbox"> Strength</label>
                    <label><input type="checkbox" value="Cardio" class="filter-checkbox"> Cardio</label>
                    <label><input type="checkbox" value="Accessories" class="filter-checkbox"> Accessories</label>
                    <label><input type="checkbox" value="Apparel" class="filter-checkbox"> Apparel</label>
                </div>
                <div class="filter-group">
                    <h3>Price</h3>
                    <label><input type="radio" name="price" value="all" checked class="filter-radio"> All</label>
                    <label><input type="radio" name="price" value="under50" class="filter-radio"> Under $50</label>
                    <label><input type="radio" name="price" value="50to200" class="filter-radio"> $50 - $200</label>
                    <label><input type="radio" name="price" value="over200" class="filter-radio"> Over $200</label>
                </div>
            </aside>

            <!-- Product Grid Area -->
            <section class="shop-main">
                <div class="shop-controls">
                    <span id="product-count">Showing 0 products</span>
                    <select id="sort-select">
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>

                <div id="product-grid" class="product-grid">
                    <!-- Products will be injected here by shop-app.js -->
                </div>

                <div class="load-more-container">
                    <button id="load-more-btn" class="btn btn-primary">Load More</button>
                </div>
            </section>
        </div>
    </main>

''' + footer + '''
    <script src="products.js"></script>
    <script src="shop-app.js"></script>
</body>
</html>
'''

with open('shop.html', 'w', encoding='utf-8') as f:
    f.write(shop_html)
print('Created shop.html template')
