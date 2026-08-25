import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace .ec-product-card base styles
new_card_styles = """
.ec-product-card {
    position: relative;
    background: linear-gradient(145deg, #1f222e, var(--navy-black));
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.ec-product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.1);
    border-color: rgba(255, 215, 0, 0.2);
}

.product-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: var(--gold);
    color: var(--navy-black);
    font-size: 0.75rem;
    font-weight: 800;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    text-transform: uppercase;
    z-index: 10;
    letter-spacing: 1px;
    box-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
}

.quick-add-overlay {
    position: absolute;
    bottom: -80px;
    left: 0;
    width: 100%;
    padding: 1.5rem 1rem 1rem 1rem;
    background: rgba(10, 10, 10, 0.5);
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    transition: bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ec-product-title {
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--ice-white);
    font-size: 1.1rem;
}

.ec-product-price {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--gold);
    font-weight: 700;
}
"""

css = re.sub(r'/\* Premium Card Design \*/.*?\.ec-product-brand\s*\{[^}]*\}', new_card_styles, css, flags=re.DOTALL)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated.")
