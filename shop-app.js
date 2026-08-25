function initShopApp() {
    const productGrid = document.getElementById('shop-product-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const productCountText = document.getElementById('product-count');
    const sortSelect = document.getElementById('sort-select');
    const priceSelect = document.getElementById('price-select');
    const heroTitle = document.querySelector('.shop-hero-title');
    const heroSubtitle = document.querySelector('.shop-hero-subtitle');

    const categoryImageMap = {
        'strength': 'assets/images/products/1/main.jpg',
        'cardio': 'assets/images/products/71/main.jpg',
        'combat': 'assets/images/products/141/main.jpg',
        'recovery': 'assets/images/products/211/main.jpg',
        'accessories': 'assets/images/products/281/main.jpg',
        'apparel': 'assets/images/products/351/main.jpg',
        'fit tech': 'assets/images/products/421/main.jpg',
        'supplements': 'assets/images/products/491/main.jpg',
        'yoga': 'assets/images/products/561/main.jpg',
        'home gym': 'assets/images/products/631/main.jpg'
    };

    let activeCategory = 'All';
    let currentProducts = [];
    let displayedCount = 0;
    const ITEMS_PER_PAGE = 20;

    // 1. Read category from URL query parameters on initial page load
    function readUrlCategory() {
        const urlParams = new URLSearchParams(window.location.search);
        const catFromUrl = urlParams.get('cat') || urlParams.get('category');
        if (catFromUrl) {
            activeCategory = decodeURIComponent(catFromUrl).trim();
        } else {
            activeCategory = 'All';
        }
    }
    readUrlCategory();

    // Listen for browser back/forward button navigation
    window.addEventListener('popstate', () => {
        readUrlCategory();
        applyFiltersAndSort();
    });

    // 2. Attach click listener directly to document for category buttons (robust fallback)
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (btn) {
            e.preventDefault();
            let rawVal = btn.getAttribute('data-category') || btn.getAttribute('value') || btn.textContent;
            rawVal = rawVal.replace(/✓|✔|✕|×/g, '').trim();

            if (rawVal.toLowerCase().includes('all')) {
                activeCategory = 'All';
            } else {
                activeCategory = rawVal;
            }

            // Update browser URL query without reloading the page
            if (window.history && window.history.pushState) {
                const newUrl = activeCategory.toLowerCase() === 'all'
                    ? 'shop.html'
                    : `shop.html?cat=${encodeURIComponent(activeCategory)}`;
                window.history.pushState({ cat: activeCategory }, '', newUrl);
            }

            applyFiltersAndSort();
        }
    });

    if (sortSelect) sortSelect.addEventListener('change', applyFiltersAndSort);
    if (priceSelect) priceSelect.addEventListener('change', applyFiltersAndSort);
    if (loadMoreBtn) loadMoreBtn.addEventListener('click', loadMoreProducts);

    // Initial render
    applyFiltersAndSort();

    // Retry once if products data takes a moment to load
    if (getRawProducts().length === 0) {
        setTimeout(applyFiltersAndSort, 200);
        setTimeout(applyFiltersAndSort, 600);
    }

    function getRawProducts() {
        let raw = [];
        if (typeof shopProducts !== 'undefined' && Array.isArray(shopProducts) && shopProducts.length > 0) {
            raw = shopProducts;
        } else if (typeof window.shopProducts !== 'undefined' && Array.isArray(window.shopProducts) && window.shopProducts.length > 0) {
            raw = window.shopProducts;
        } else if (typeof products !== 'undefined' && Array.isArray(products) && products.length > 0) {
            raw = products;
        }

        const seen = new Set();
        const uniqueProducts = [];
        for (const p of raw) {
            if (p && p.id && !seen.has(p.id)) {
                seen.add(p.id);
                uniqueProducts.push(p);
            }
        }
        return uniqueProducts;
    }

    function applyFiltersAndSort() {
        const showcaseContainer = document.getElementById('shop-category-showcase');
        if (showcaseContainer) showcaseContainer.remove();

        const categoryButtons = document.querySelectorAll('.filter-pill');

        // Highlight active category pill with direct inline styles for 100% specificity
        categoryButtons.forEach(btn => {
            let btnCat = btn.getAttribute('data-category') || btn.getAttribute('value') || btn.textContent;
            btnCat = btnCat.replace(/✓|✔|✕|×/g, '').trim().toLowerCase();

            const activeLower = activeCategory.toLowerCase();
            const isMatch = (activeLower === 'all' && btnCat.includes('all')) || (btnCat === activeLower);

            if (isMatch) {
                btn.classList.add('active');
                btn.style.cssText = 'background: #FFD700 !important; color: #000000 !important; border-color: #FFD700 !important; font-weight: 800 !important; box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4) !important; cursor: pointer; border-radius: 30px; padding: 0.5rem 1.1rem; font-size: 0.85rem; display: inline-flex; align-items: center; white-space: nowrap;';
            } else {
                btn.classList.remove('active');
                btn.style.cssText = 'background: rgba(255, 255, 255, 0.05) !important; color: #cbd5e1 !important; border: 1px solid rgba(255, 255, 255, 0.15) !important; font-weight: 600 !important; box-shadow: none !important; cursor: pointer; border-radius: 30px; padding: 0.5rem 1.1rem; font-size: 0.85rem; display: inline-flex; align-items: center; white-space: nowrap;';
            }
        });

        // Update Hero Title & Subtitle
        if (heroTitle) {
            if (activeCategory.toLowerCase() === 'all') {
                heroTitle.textContent = 'THE COLLECTION';
                if (heroSubtitle) heroSubtitle.textContent = 'Gear up for your journey with our premium selection.';
            } else {
                heroTitle.textContent = `${activeCategory.toUpperCase()} COLLECTION`;
                if (heroSubtitle) heroSubtitle.textContent = `Showing products exclusively in ${activeCategory}.`;
            }
        }

        const rawProducts = getRawProducts();
        const selectedPrice = priceSelect ? priceSelect.value : 'all';

        currentProducts = rawProducts.filter(p => {
            const pCat = (p.category || '').trim().toLowerCase();
            const activeLower = activeCategory.trim().toLowerCase();

            if (activeLower !== 'all' && !activeLower.includes('all')) {
                if (pCat !== activeLower) {
                    return false; // Strictly exclude all products from other categories!
                }
            }

            // Correct Price filter bounds in Rupees
            if (selectedPrice === 'under4000' && p.price >= 4000) return false;
            if (selectedPrice === '4000to16000' && (p.price < 4000 || p.price > 16000)) return false;
            if (selectedPrice === 'over16000' && p.price <= 16000) return false;

            return true;
        });

        // Sort
        const sortMode = sortSelect ? sortSelect.value : 'featured';
        if (sortMode === 'price-low') {
            currentProducts.sort((a, b) => a.price - b.price);
        } else if (sortMode === 'price-high') {
            currentProducts.sort((a, b) => b.price - a.price);
        }
        // In 'featured' mode, preserve the natural interleaved category order from products.js

        if (productGrid) productGrid.innerHTML = '';
        displayedCount = 0;

        if (currentProducts.length === 0) {
            if (productGrid) {
                productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 4rem; color: #94a3b8; font-size: 1.1rem;">No products match your selected category filter.</p>';
            }
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            if (productCountText) productCountText.innerHTML = `Showing <span class="count-highlight">0</span> products`;
            return;
        }

        loadMoreProducts();
    }

    function loadMoreProducts() {
        if (!productGrid) return;
        
        // Display ALL matching products when All Categories is selected
        const batchSize = (activeCategory.toLowerCase() === 'all' || activeCategory.toLowerCase().includes('all'))
            ? currentProducts.length
            : currentProducts.length;

        const batch = currentProducts.slice(displayedCount, displayedCount + batchSize);

        batch.forEach(product => {
            const card = document.createElement('a');
            card.href = `product.html?id=${product.id}`;
            card.className = 'ec-product-card';
            card.dataset.id = product.id;

            const primaryUploadedSrc = `assets/images/products/${product.id}/main.jpg`;
            const secondaryUploadedSrc = `assets/images/products/${product.id}/1.jpg`;

            card.innerHTML = `
                <div class="product-badge">SALE</div>
                <button class="wishlist-btn" aria-label="Add to Wishlist" onclick="event.preventDefault(); event.stopPropagation(); window.toggleWishlist(${product.id}, this);">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <div class="card-image-wrapper">
                    <img src="${primaryUploadedSrc}" alt="${product.name}" loading="lazy" class="card-primary-img" onerror="this.onerror=null; this.src='${secondaryUploadedSrc}';">
                </div>
                <div class="card-info">
                    <span class="ec-product-brand">${product.category.toUpperCase()}</span>
                    <h3 class="ec-product-title" title="${product.name}">${product.name}</h3>
                    <div class="ec-product-rating">
                        <span style="color: #ffd700;">★</span> ${product.rating} <span style="color: #64748b; font-size: 0.78rem;">(${product.reviews})</span>
                    </div>
                    <div class="ec-product-price-row">
                        <span class="ec-product-price">₹${product.price.toFixed(2)}</span>
                    </div>
                    <button class="ec-add-to-cart-btn" onclick="event.preventDefault(); event.stopPropagation(); typeof addToCart !== 'undefined' ? addToCart(${product.id}) : (window.auth ? auth.showToast('Added to cart!', 'success') : alert('Added to cart!'));">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>ADD TO CART</span>
                    </button>
                </div>
            `;
            productGrid.appendChild(card);
        });

        displayedCount += batch.length;
        if (productCountText) {
            const totalMatching = currentProducts.length;
            const categoryLabel = activeCategory.toLowerCase() === 'all' ? 'All Categories' : activeCategory;
            productCountText.innerHTML = `Showing <span class="count-highlight">${displayedCount}</span> of <span class="count-highlight">${totalMatching}</span> products in <strong>${categoryLabel}</strong>`;
        }

        if (loadMoreBtn) {
            if (displayedCount >= currentProducts.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }
    }
}

// SAFE INITIALIZATION: Run immediately if document is already ready, or on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShopApp);
} else {
    initShopApp();
}
