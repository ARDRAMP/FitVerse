import re

with open('c:/Users/Lenovo/Documents/Ardra/FitVerse/product-app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:56]

render_product_html = '''    container.innerHTML = `
        <div class="premium-gallery scroll-reveal">
            <div class="zoom-image-container" id="zoom-container">
                <img src="${product.image}" alt="${product.name}" class="zoom-image" id="zoom-img">
                <button class="premium-wishlist ${isWishlisted}" onclick="toggleWishlist(${product.id}, this)">
                    <i class="fa-heart ${isWishlisted ? 'fas' : 'far'}"></i>
            </div>
            <div class="premium-thumbnails">
                <div class="premium-thumb active"><img src="${product.image}" alt="Thumb 1"></div>
                <div class="premium-thumb" style="filter: brightness(0.8) hue-rotate(20deg);"><img src="${product.image}" alt="Thumb 2"></div>
                <div class="premium-thumb" style="filter: grayscale(0.5);"><img src="${product.image}" alt="Thumb 3"></div>
            </div>
        </div>

        <div class="premium-details scroll-reveal">
            <div class="premium-breadcrumbs">Home / Shop / ${product.category} / <span>${product.name}</span></div>
            <h1 class="premium-title">${product.name}</h1>
            
            <div class="premium-meta">
                <div class="premium-rating">
                    <span class="stars">${starsHtml}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <span class="premium-category-tag"><i class="fas fa-tag"></i> ${product.category}</span>
            </div>

            <div class="premium-price">$${product.price.toFixed(2)}</div>
            
            <p class="premium-excerpt">${description}</p>

            <div class="feature-badges">
                <div class="badge-item"><i class="fas fa-shield-alt"></i><span>10 Yr Warranty</span></div>
                <div class="badge-item"><i class="fas fa-star"></i><span>Premium Material</span></div>
                <div class="badge-item"><i class="fas fa-truck-fast"></i><span>Free Shipping</span></div>
            </div>

            <div class="premium-actions">
                <div class="premium-qty">
                    <button class="qty-btn minus">-</button>
                    <input type="number" class="qty-input" value="1" min="1" max="99">
                    <button class="qty-btn plus">+</button>
                </div>
                <button class="btn premium-add-to-cart" id="add-to-cart-main">
                    <span class="btn-text">Add to Cart</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>

            <div class="product-accordion premium-accordion">
                <div class="accordion-item active">
                    <button class="accordion-header">
                        <span>Description</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="accordion-content" style="max-height: 500px;">
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
                            <li><strong>Material:</strong> Premium Commercial Grade</li>
                            <li><strong>Category:</strong> ${product.category}</li>
                            <li><strong>Warranty:</strong> 10 Years Limited</li>
                            <li><strong>Usage:</strong> Indoor/Outdoor Compatible</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderNotFound(container) {
    container.innerHTML = `
        <div class="product-not-found" style="text-align:center; padding: 5rem 1rem; width: 100%;">
            <i class="fas fa-search" style="font-size: 3rem; color: var(--teal-500); margin-bottom: 1rem;"></i>
            <h2>Product Not Found</h2>
            <p style="color: var(--slate-400); margin-bottom: 2rem;">The product you are looking for does not exist or has been removed.</p>
            <a href="shop.html" class="btn btn-primary">Return to Shop</a>
        </div>
    `;
}
'''

new_lines.append(render_product_html + "\n")
new_lines.extend(lines[149:]) 

with open('c:/Users/Lenovo/Documents/Ardra/FitVerse/product-app.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
