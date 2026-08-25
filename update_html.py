with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<!-- Categories Section -->' in line:
        start_idx = i
    if '<!-- Newsletter Section -->' in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    new_html = """        <!-- Shop By Category -->
        <section class="shop-by-category scroll-reveal">
            <div class="ecommerce-header">
                <h2>Shop By Category</h2>
            </div>
            <div class="circular-categories">
                <a href="#" class="cat-circle-wrap">
                    <div class="cat-circle" style="background-image: url('images/strength.png');"></div>
                    <span class="cat-title">Strength</span>
                </a>
                <a href="#" class="cat-circle-wrap">
                    <div class="cat-circle" style="background-image: url('images/cardio.png');"></div>
                    <span class="cat-title">Cardio</span>
                </a>
                <a href="#" class="cat-circle-wrap">
                    <div class="cat-circle" style="background-image: url('images/combat.png');"></div>
                    <span class="cat-title">Combat</span>
                </a>
                <a href="#" class="cat-circle-wrap">
                    <div class="cat-circle" style="background-image: url('images/recovery.png');"></div>
                    <span class="cat-title">Recovery</span>
                </a>
                <a href="#" class="cat-circle-wrap">
                    <div class="cat-circle" style="background-image: url('images/team.png');"></div>
                    <span class="cat-title">Accessories</span>
                </a>
                <a href="#" class="cat-circle-wrap">
                    <div class="cat-circle" style="background-image: url('images/tech.png');">
                        <div class="new-badge">NEW IN</div>
                    </div>
                    <span class="cat-title">Apparel</span>
                </a>
            </div>
        </section>

        <!-- Fresh Finds -->
        <section class="fresh-finds scroll-reveal">
            <div class="ecommerce-header">
                <h2>Fresh Finds</h2>
                <a href="#" class="view-all-link">View All</a>
            </div>
            
            <div id="product-grid" class="product-grid">
                <!-- Rendered via JS -->
            </div>
        </section>

        <!-- Promo Grid -->
        <section class="promo-grid scroll-reveal">
            <div class="promo-box" style="background-image: url('images/strength.png');">
                <div class="promo-content">
                    <h3>HEAVY LIFTING</h3>
                    <a href="#" class="btn btn-white">SHOP NOW</a>
                </div>
            </div>
            <div class="promo-box" style="background-image: url('images/cardio.png');">
                <div class="promo-content">
                    <h3>CARDIO KINGS</h3>
                    <a href="#" class="btn btn-white">SHOP NOW</a>
                </div>
            </div>
            <div class="promo-box" style="background-image: url('images/recovery.png');">
                <div class="promo-content">
                    <h3>RECOVERY GEAR</h3>
                    <a href="#" class="btn btn-white">SHOP NOW</a>
                </div>
            </div>
            <div class="promo-box" style="background-image: url('images/combat.png');">
                <div class="promo-content">
                    <h3>PERFORMANCE WEAR</h3>
                    <a href="#" class="btn btn-white">SHOP NOW</a>
                </div>
            </div>
        </section>

        <!-- Shop By Brand -->
        <section class="shop-by-brand scroll-reveal">
            <div class="ecommerce-header">
                <h2>Shop By Brand</h2>
            </div>
            <div class="brand-logos-grid">
                <div class="brand-logo-item">NIKE</div>
                <div class="brand-logo-item" style="font-family: 'Arial Black', sans-serif;">ADIDAS</div>
                <div class="brand-logo-item" style="font-style: italic;">UNDER ARMOUR</div>
                <div class="brand-logo-item" style="letter-spacing: 2px;">ROGUE</div>
                <div class="brand-logo-item" style="font-weight: 300;">ELEIKO</div>
                <div class="brand-logo-item" style="font-weight: 900;">PUMA</div>
            </div>
        </section>\n\n"""
    lines[start_idx:end_idx] = [new_html]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Successfully updated index.html")
else:
    print(f"Failed: {start_idx}, {end_idx}")
