import re

# 1. Update JS in index.html to add 'previous' class
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_js = """            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('active');
                    indicators[i].classList.remove('active');
                    if (i === index) {
                        slide.classList.add('active');
                        indicators[i].classList.add('active');
                    }
                });
            }"""

new_js = """            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('previous');
                    if (slide.classList.contains('active') && i !== index) {
                        slide.classList.remove('active');
                        slide.classList.add('previous');
                    }
                    indicators[i].classList.remove('active');
                    if (i === index) {
                        slide.classList.add('active');
                        indicators[i].classList.add('active');
                    }
                });
            }"""

html = html.replace(old_js, new_js)

# Bump cache
html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=80', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Update CSS logic
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# I will append the final overriding CSS
override_css = """
/* Robust Crossfade using .previous class */
.cinematic-hero .hero-carousel .hero-slide {
    opacity: 0 !important;
    z-index: 1 !important;
    transition: opacity 1.5s ease-in-out !important;
}

.cinematic-hero .hero-carousel .hero-slide.previous {
    opacity: 1 !important;
    z-index: 1 !important;
    /* Stay completely opaque underneath while new one fades in */
}

.cinematic-hero .hero-carousel .hero-slide.active {
    opacity: 1 !important;
    z-index: 2 !important;
}
"""

with open('styles.css', 'a', encoding='utf-8') as f:
    f.write(override_css)

print("Implemented robust crossfade with JS .previous class")
