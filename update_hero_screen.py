import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update Slide 2 Text
html = html.replace(
    'ENGINEERED FOR<br>\n                            <span class="word-accent">Power</span>',
    'ENGINEERED FOR<br>\n                            <span class="word-accent">Power</span><br>\n                            & MAX PERFORMANCE'
)

# Update Slide 3 Text
html = html.replace(
    'MOVE WITH<br>\n                            <span class="word-accent">Precision</span>',
    'MOVE WITH<br>\n                            <span class="word-accent">Precision</span><br>\n                            AND SMART TECH'
)

# Bump cache
html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=77', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


with open('styles.css', 'a', encoding='utf-8') as f:
    override_css = """
/* Make hero section full screen */
.cinematic-hero, .hero-carousel {
    min-height: 100vh !important;
    height: 100vh !important;
}
"""
    f.write(override_css)

print("Updated slide texts and made hero full screen")
