import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

premium_css = '''
/* ==========================================================================
   Premium Shop Layout Redesign
   ========================================================================== */

.shop-page-wrapper {
    background-color: #f7f9fa; /* Ultra-light premium gray */
    padding-bottom: 6rem;
}

/* Premium Hero Section */
.shop-premium-hero {
    position: relative;
    width: 100%;
    height: 350px;
    background-image: url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
}

.shop-hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
}

.shop-hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
}

.shop-breadcrumbs {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);
}

.shop-hero-title {
    font-size: 4rem;
    font-weight: 800;
    font-family: var(--font-display);
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    text-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.shop-hero-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
}

/* Shop Layout Container */
.shop-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 4rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4%;
}

/* Premium Sidebar */
.shop-premium-sidebar {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.03);
    align-self: start;
    position: sticky;
    top: 100px;
    border: 1px solid rgba(0,0,0,0.02);
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #eee;
}

.sidebar-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--navy-black);
}

.clear-filters-btn {
    background: none;
    border: none;
    color: #888;
    font-size: 0.85rem;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.3s;
}
.clear-filters-btn:hover {
    color: var(--teal-600);
}

.premium-filter-group {
    margin-bottom: 2.5rem;
}

.premium-filter-group h3 {
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #888;
    margin-bottom: 1.5rem;
}

/* Pill Checkboxes */
.pill-group {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.filter-pill {
    position: relative;
    cursor: pointer;
}

.filter-pill input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.filter-pill {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    background: var(--off-white);
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--navy-black);
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.filter-pill:hover {
    background: #e2e8f0;
}

/* Magic: Target the label itself when the hidden input is checked */
.filter-pill:has(input:checked) {
    background: var(--teal-600);
    color: white;
    box-shadow: 0 4px 15px rgba(20, 184, 166, 0.3);
}

/* Custom Radio Buttons */
.price-radio-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.price-radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 0.95rem;
    color: #555;
    transition: color 0.3s;
}

.price-radio-label:hover {
    color: var(--teal-600);
}

.price-radio-label input {
    display: none;
}

.custom-radio {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 50%;
    margin-right: 12px;
    position: relative;
    transition: all 0.3s ease;
}

.price-radio-label input:checked + .custom-radio {
    border-color: var(--teal-600);
}

.price-radio-label input:checked + .custom-radio::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: var(--teal-600);
    border-radius: 50%;
}

/* Shop Controls (Glassmorphism) */
.shop-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    padding: 1.2rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.02);
    border: 1px solid rgba(255,255,255,0.5);
}

#sort-select {
    padding: 0.6rem 1.2rem;
    border: 1px solid #eee;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    background: white;
    font-family: inherit;
    font-size: 0.9rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
}

/* Upgraded Product Cards */
.ec-product-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid rgba(0,0,0,0.01);
}

.ec-product-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}

.ec-product-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-bottom: 1px solid #f5f5f5;
    transition: transform 0.5s ease;
}

.ec-product-card:hover .ec-product-image {
    transform: scale(1.05);
}

.ec-product-title {
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--navy-black);
}

.load-more-container .btn {
    padding: 1rem 3rem;
    font-size: 1.1rem;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(20, 184, 166, 0.2);
}
'''

# Remove old basic styles so they don't conflict (we injected them via run_command previously)
css = re.sub(r'/\* Shop Page Specific Styles \*/.*?@media \(max-width: 900px\) {.*?}', '', css, flags=re.DOTALL)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css + '\n' + premium_css)
