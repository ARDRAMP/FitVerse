/**
 * product-app.js
 *
 * Product Detail page logic.
 *
 * Image convention:
 *   assets/images/products/{id}/main.jpg  — primary/hero image
 *   assets/images/products/{id}/1.jpg     — gallery thumb 1
 *   assets/images/products/{id}/2.jpg     — gallery thumb 2
 *   assets/images/products/{id}/3.jpg     — gallery thumb 3
 *
 * All slots fall back to a placehold.co URL if the file is missing/broken.
 */

// ─── Image path helpers ──────────────────────────────────────────────────────

/**
 * Returns the path to a specific image slot for a product.
 * @param {number} id       – numeric product ID
 * @param {string} slot     – 'main' | '1' | '2' | '3'
 * @returns {string}        – relative URL path served by the dev server
 */
function productImagePath(id, slot) {
    return `assets/images/products/${id}/${slot}.jpg?v=${Date.now()}`;
}

/**
 * Fallback placeholder URL (served by placehold.co).
 * @param {string} category – product category label
 * @returns {string}
 */
function placeholderFor(category, id) {
    return id ? `assets/images/products/${id}/1.jpg` : `assets/images/products/1/main.jpg`;
}

/**
 * Attaches an onerror handler to an img element so it gracefully
 * falls back to the category placeholder when the file is missing.
 * @param {HTMLImageElement} img
 * @param {string}           fallbackSrc
 */
function attachFallback(img, fallbackSrc) {
    img.onerror = function () {
        // Prevent infinite loop if the fallback itself fails
        this.onerror = null;
        this.src = fallbackSrc;
    };
}

// ─── Page initialisation ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 500);
    }

    // Parse URL for ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const container = document.getElementById('product-container');
    const relatedGrid = document.getElementById('related-grid');

    if (!productId || isNaN(productId)) {
        renderNotFound(container);
        return;
    }

    const product = (typeof shopProducts !== 'undefined' ? shopProducts : [])
        .find(p => p.id === productId);

    if (!product) {
        renderNotFound(container);
        return;
    }

    // Update page title dynamically
    document.title = `${product.name} — FitVerse`;

    // Render product HTML
    renderProduct(product, container);

    // Render related products
    renderRelatedProducts(product, relatedGrid);

    // Wire up all interactive elements
    initProductInteractions(product);

    // Reveal all scroll-reveal elements and clear blur
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed', 'visible', 'active');
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        revealObserver.observe(el);
        // Force immediate reveal to avoid any transition delay or stuck blur
        el.classList.add('revealed', 'visible', 'active');
    });
});

// ─── Render helpers ──────────────────────────────────────────────────────────

function renderProduct(product, container) {
    const fallback = product.image || productImagePath(product.id, '1');
    const mainSrc  = productImagePath(product.id, 'main');
    const thumb1Src = productImagePath(product.id, '1');
    const thumb2Src = productImagePath(product.id, '2');
    const thumb3Src = productImagePath(product.id, '3');

    // Star rating HTML
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star"></i>';
    if (hasHalfStar) starsHtml += '<i class="fas fa-star-half-alt"></i>';
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) starsHtml += '<i class="far fa-star"></i>';

    const isWishlisted = typeof wishlist !== 'undefined' && wishlist.has(product.id) ? 'active' : '';

    const description = product.description || `The ${product.name} is engineered for dependable workout performance and high durability in active fitness settings.`;

    container.innerHTML = `
        <!-- ── Gallery ─────────────────────────────── -->
        <div class="premium-gallery scroll-reveal">
            <div class="zoom-image-container" id="zoom-container">
                <img
                    id="zoom-img"
                    src="${mainSrc}"
                    alt="${product.name}"
                    class="zoom-image"
                    data-fallback="${fallback}"
                >
                <button
                    class="premium-wishlist ${isWishlisted}"
                    id="wishlist-btn-main"
                    aria-label="Add to Wishlist"
                    onclick="toggleWishlist(${product.id}, this)"
                >
                    <i class="fa-heart ${isWishlisted ? 'fas' : 'far'}"></i>
                </button>
            </div>

            <!-- Thumbnails: clicking swaps the main image -->
            <div class="premium-thumbnails" id="thumb-strip">
                <div class="premium-thumb active" data-src="${mainSrc}" data-fallback="${fallback}" data-label="Main view">
                    <img src="${mainSrc}" alt="${product.name} — main view" data-fallback="${fallback}">
                </div>
                <div class="premium-thumb" data-src="${thumb1Src}" data-fallback="${fallback}" data-label="View 1">
                    <img src="${thumb1Src}" alt="${product.name} — view 1" data-fallback="${fallback}">
                </div>
                <div class="premium-thumb" data-src="${thumb2Src}" data-fallback="${fallback}" data-label="View 2">
                    <img src="${thumb2Src}" alt="${product.name} — view 2" data-fallback="${fallback}">
                </div>
                <div class="premium-thumb" data-src="${thumb3Src}" data-fallback="${fallback}" data-label="View 3">
                    <img src="${thumb3Src}" alt="${product.name} — view 3" data-fallback="${fallback}">
                </div>
            </div>
        </div>

        <!-- ── Details ─────────────────────────────── -->
        <div class="premium-details scroll-reveal">
            <div class="premium-breadcrumbs">
                <a href="index.html">Home</a> /
                <a href="shop.html">Shop</a> /
                <a href="shop.html?category=${encodeURIComponent(product.category)}">${product.category}</a> /
                <span>${product.name}</span>
            </div>

            <h1 class="premium-title">${product.name}</h1>

            <div class="premium-meta">
                <div class="premium-rating">
                    <span class="stars">${starsHtml}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <span class="premium-category-tag">
                    <i class="fas fa-tag"></i> ${product.category}
                </span>
            </div>

            <div class="premium-price">₹${product.price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>

            <p class="premium-excerpt">${description}</p>

            <div class="feature-badges">
                <div class="badge-item"><i class="fas fa-shield-alt"></i><span>10 Yr Warranty</span></div>
                <div class="badge-item"><i class="fas fa-star"></i><span>Premium Material</span></div>
                <div class="badge-item"><i class="fas fa-truck-fast"></i><span>Free Shipping</span></div>
            </div>

            <div class="premium-actions">
                <div class="actions-top-row">
                    <div class="premium-qty">
                        <button class="qty-btn minus" aria-label="Decrease quantity">−</button>
                        <input type="number" class="qty-input" value="5" min="5" max="99" aria-label="Quantity">
                        <button class="qty-btn plus" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="btn premium-add-to-cart" id="add-to-cart-main">
                        <i class="fas fa-shopping-bag"></i>
                        <span class="btn-text">Add to Cart</span>
                    </button>
                </div>
                <button class="btn premium-buy-now" id="buy-now-main">
                    <i class="fas fa-bolt"></i>
                    <span>Buy Now</span>
                </button>
            </div>

            <div class="product-accordion premium-accordion">
                <div class="accordion-item active">
                    <button class="accordion-header">
                        <span>Description</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-content">
                        <p>${description}</p>
                        <p>Constructed with high-grade materials, this product ensures long-lasting performance even through the most rigorous workouts. The minimalist design not only looks incredible but reduces clutter in your training space.</p>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>Specifications</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-content">
                        <ul class="specs-list">
                            <li><strong>Product ID:</strong> #${product.id}</li>
                            <li><strong>Category:</strong> ${product.category}</li>
                            <li><strong>Material:</strong> Premium Commercial Grade</li>
                            <li><strong>Warranty:</strong> 10 Years Limited</li>
                            <li><strong>Usage:</strong> Indoor/Outdoor Compatible</li>
                        </ul>
                    </div>
                </div>
                <div class="accordion-item">
                    <button class="accordion-header">
                        <span>Shipping & Returns</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-content">
                        <p>Free delivery on all orders over ₹5,000. Standard delivery within 5–7 business days. Express 2-day delivery available at checkout.</p>
                        <p>30-day hassle-free returns. Items must be unused and in original packaging. Contact support to initiate a return.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Attach onerror fallbacks to every image element just rendered
    attachFallbacksToGallery(fallback);
}

/**
 * Walk all gallery images (main + thumbs) and wire up onerror fallbacks.
 * Called once after the gallery HTML is injected into the DOM.
 */
function attachFallbacksToGallery(fallback) {
    // Main hero image
    const zoomImg = document.getElementById('zoom-img');
    if (zoomImg) {
        zoomImg.onerror = function () {
            this.onerror = null;
            this.src = fallback;
        };
    }

    // Thumb strip images: If a thumbnail file fails to load, hide its thumbnail button so images don't repeat!
    document.querySelectorAll('#thumb-strip .premium-thumb img').forEach(img => {
        img.onerror = function () {
            const thumbWrapper = this.closest('.premium-thumb');
            if (thumbWrapper) {
                thumbWrapper.remove();
            }
            const remainingThumbs = document.querySelectorAll('#thumb-strip .premium-thumb');
            if (remainingThumbs.length <= 1) {
                const strip = document.getElementById('thumb-strip');
                if (strip) strip.style.display = 'none';
            }
        };
    });
}

// ─── Not-found fallback ──────────────────────────────────────────────────────

function renderNotFound(container) {
    container.innerHTML = `
        <div class="product-not-found" style="text-align:center; padding: 5rem 1rem; width: 100%; grid-column: 1/-1;">
            <i class="fas fa-search" style="font-size: 3rem; color: var(--teal-500); margin-bottom: 1rem; display:block;"></i>
            <h2 style="margin-bottom:1rem;">Product Not Found</h2>
            <p style="color: var(--slate-400); margin-bottom: 2rem;">The product you are looking for does not exist or has been removed.</p>
            <a href="shop.html" class="btn btn-primary">Return to Shop</a>
        </div>
    `;
}

// ─── Related products ────────────────────────────────────────────────────────

function renderRelatedProducts(currentProduct, gridElement) {
    if (!gridElement || typeof shopProducts === 'undefined') return;

    let availableProducts = (typeof shopProducts !== 'undefined' ? shopProducts : []);

    let related = availableProducts.filter(p =>
        p.category === currentProduct.category && p.id !== currentProduct.id
    );

    const uniqueMap = new Map();
    related.forEach(p => uniqueMap.set(p.id, p));
    related = Array.from(uniqueMap.values());

    if (related.length < 4) {
        const others = shopProducts.filter(p => p.id !== currentProduct.id && !uniqueMap.has(p.id));
        others.forEach(p => {
            if (related.length < 4 && !uniqueMap.has(p.id)) {
                uniqueMap.set(p.id, p);
                related.push(p);
            }
        });
    }

    related = related.slice(0, 4);

    gridElement.innerHTML = related.map(p => {
        const isWishlisted = typeof wishlist !== 'undefined' && wishlist.has(p.id) ? 'active' : '';
        const fallback = placeholderFor(p.category, p.id);
        const imgSrc   = p.image || productImagePath(p.id, 'main');

        return `
            <a href="product.html?id=${p.id}" class="ec-product-card" data-id="${p.id}">
                <button class="wishlist-btn ${isWishlisted}"
                    aria-label="Add to Wishlist"
                    onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist(${p.id}, this)">
                    <i class="fa-heart ${isWishlisted ? 'fas' : 'far'}"></i>
                </button>
                <div class="card-image-wrapper">
                    <img
                        src="${imgSrc}"
                        alt="${p.name}"
                        onerror="this.onerror=null; this.src='${fallback}'"
                    >
                    <div class="quick-add-overlay">
                        <button class="quick-add-btn"
                            onclick="event.preventDefault(); event.stopPropagation();
                            typeof addToCart !== 'undefined' ? addToCart(${p.id}) : null;">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="card-info">
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-name">${p.name}</h3>
                    <div class="product-meta">
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <span>${p.rating}</span>
                            <span class="review-count">(${p.reviews})</span>
                        </div>
                        <div class="price">₹${p.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                    </div>
                </div>
            </a>
        `;
    }).join('');
}

// ─── Interactions ────────────────────────────────────────────────────────────

function initProductInteractions(product) {
    // ── Quantity controls ──────────────────────────────────────────────────
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn  = document.querySelector('.qty-btn.plus');
    const input    = document.querySelector('.qty-input');

    if (minusBtn && plusBtn && input) {
        minusBtn.addEventListener('click', () => {
            const val = parseInt(input.value) || 5;
            if (val > 5) input.value = val - 1;
        });
        plusBtn.addEventListener('click', () => {
            const val = parseInt(input.value) || 5;
            if (val < 99) input.value = val + 1;
        });
        input.addEventListener('change', () => {
            let val = parseInt(input.value);
            if (isNaN(val) || val < 5) input.value = 5;
            if (val > 99) input.value = 99;
        });
    }

    // ── Add to Cart ────────────────────────────────────────────────────────
    const addToCartBtn = document.getElementById('add-to-cart-main');
    if (addToCartBtn && typeof addToCart !== 'undefined') {
        addToCartBtn.addEventListener('click', () => {
            const qty = input ? Math.max(5, parseInt(input.value) || 5) : 5;
            addToCart(product.id, qty);
        });
    }

    // ── Buy Now (Express Checkout) ─────────────────────────────────────────
    const buyNowBtn = document.getElementById('buy-now-main');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', () => {
            const qty = input ? Math.max(5, parseInt(input.value) || 5) : 5;
            if (typeof addToCart !== 'undefined') {
                addToCart(product.id, qty);
            }
            if (window.auth) {
                auth.showToast('Redirecting to Express Checkout...', 'success');
            } else if (typeof showToast === 'function') {
                showToast('Redirecting to Express Checkout...');
            }
            // Open cart drawer or trigger checkout
            const cartDrawer = document.getElementById('cart-drawer');
            const cartBackdrop = document.getElementById('cart-backdrop');
            if (cartDrawer) {
                cartDrawer.classList.add('open');
                if (cartBackdrop) cartBackdrop.classList.add('open');
            } else if (typeof openCart === 'function') {
                openCart();
            }
        });
    }

    // ── Accordion ──────────────────────────────────────────────────────────
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', (e) => {
            e.preventDefault();
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');

            // Collapse all sibling accordion items
            document.querySelectorAll('.accordion-item').forEach(other => {
                other.classList.remove('active');
                const otherContent = other.querySelector('.accordion-content');
                if (otherContent) otherContent.style.maxHeight = null;
            });

            // Toggle current
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    // ── Thumbnail click → swap main image ─────────────────────────────────
    const zoomImg   = document.getElementById('zoom-img');
    const thumbStrip = document.getElementById('thumb-strip');

    if (zoomImg && thumbStrip) {
        thumbStrip.querySelectorAll('.premium-thumb').forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Determine the target src (fallback if data-src is missing)
                const targetSrc      = thumb.dataset.src || thumb.dataset.fallback;
                const targetFallback = thumb.dataset.fallback;

                // Swap main image src
                zoomImg.src = targetSrc;
                // Re-attach fallback after src swap
                attachFallback(zoomImg, targetFallback);

                // Update active state on thumbnails
                thumbStrip.querySelectorAll('.premium-thumb').forEach(t =>
                    t.classList.remove('active')
                );
                thumb.classList.add('active');
            });
        });
    }

    // ── Main image zoom effect (mousemove) ─────────────────────────────────
    const zoomContainer = document.getElementById('zoom-container');

    if (zoomContainer && zoomImg) {
        zoomContainer.addEventListener('mousemove', e => {
            const { left, top, width, height } = zoomContainer.getBoundingClientRect();
            const x = ((e.clientX - left) / width  * 100).toFixed(2);
            const y = ((e.clientY - top)  / height * 100).toFixed(2);
            zoomImg.style.transformOrigin = `${x}% ${y}%`;
            zoomImg.style.transform = 'scale(1.5)';
        });

        zoomContainer.addEventListener('mouseleave', () => {
            zoomImg.style.transformOrigin = 'center center';
            zoomImg.style.transform = 'scale(1)';
        });
    }
}
