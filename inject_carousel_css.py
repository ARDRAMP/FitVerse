import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the old .cinematic-hero CSS block with new carousel styles
carousel_css = """/* Cinematic Hero Carousel */
.cinematic-hero {
    position: relative;
    width: 100%;
    min-height: 90vh;
    overflow: hidden;
    background: #000;
}

.hero-carousel {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 90vh;
}

.hero-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
    display: flex;
    align-items: center;
    padding: 0 5%;
}

.hero-slide.active {
    opacity: 1;
    visibility: visible;
}

.hero-content {
    max-width: 600px;
    z-index: 10;
    transform: translateY(20px);
    opacity: 0;
    transition: transform 0.8s ease-out 0.3s, opacity 0.8s ease-out 0.3s;
}

.hero-slide.active .hero-content {
    transform: translateY(0);
    opacity: 1;
}

/* Typography Overrides for Carousel */
.hero-content .headline-bold {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #fff;
    font-family: var(--font-heading);
    text-transform: uppercase;
}

.hero-content .word-accent {
    font-family: var(--font-accent);
    color: #e8b923;
    font-size: 4rem;
    text-transform: none;
    font-style: italic;
    font-weight: 500;
}

.hero-content .eyebrow-label {
    display: block;
    color: #e8b923;
    font-size: 0.85rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 600;
}

/* Carousel Controls */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 20;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.carousel-arrow:hover {
    background: rgba(232, 185, 35, 0.8);
    border-color: #e8b923;
    color: #000;
}

.left-arrow { left: 2%; }
.right-arrow { right: 2%; }

.carousel-indicators {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 20;
}

.indicator {
    width: 30px;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: background 0.3s ease;
}

.indicator.active {
    background: #e8b923;
}

/* Gold Button Hover Animation */
.btn-gold {
    background: #e8b923;
    color: #000;
    font-weight: 700;
    border: none;
    transition: all 0.3s ease;
}

.btn-gold:hover {
    background: #fff;
    box-shadow: 0 0 20px rgba(232, 185, 35, 0.6);
    transform: translateY(-2px);
}
"""

# Replace the existing .cinematic-hero block
content = re.sub(
    r'\.cinematic-hero\s*\{[\s\S]*?(?=\.trust-strip\s*\{)',
    carousel_css + "\n",
    content
)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected carousel CSS into styles.css")
