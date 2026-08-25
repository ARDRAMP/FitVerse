with open('styles.css', 'a', encoding='utf-8') as f:
    override_css = """
/* Fix crossfade so it doesn't dip to black */
.cinematic-hero .hero-carousel .hero-slide {
    opacity: 0 !important;
    z-index: 1 !important;
    transition: opacity 0s linear 1.5s, z-index 0s linear 1.5s !important;
}

.cinematic-hero .hero-carousel .hero-slide.active {
    opacity: 1 !important;
    z-index: 2 !important;
    transition: opacity 1.5s ease-in-out, z-index 0s !important;
}
"""
    f.write(override_css)

import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=79', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed crossfade animation")
