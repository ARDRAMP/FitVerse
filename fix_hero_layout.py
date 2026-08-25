import re

# 1. Fix the text layout in index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace:
# BUILD YOUR <span class="word-accent">Legacy</span><br>
# WITH PREMIUM GEAR
# With:
# BUILD YOUR<br><span class="word-accent">Legacy</span><br>WITH PREMIUM GEAR
html = html.replace(
    'BUILD YOUR <span class="word-accent">Legacy</span><br>\n                            WITH PREMIUM GEAR',
    'BUILD YOUR<br>\n                            <span class="word-accent">Legacy</span><br>\n                            WITH PREMIUM GEAR'
)
# Update cache
html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=73', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Fix the vertical alignment in styles.css
with open('styles.css', 'a', encoding='utf-8') as f:
    # Append highly specific CSS to the bottom of the file to guarantee it overrides any old rules
    override_css = """
/* Explicit Hero Slide Override for Alignment */
.cinematic-hero .hero-carousel .hero-slide {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding-top: 5vh !important; /* Push it down slightly into the middle */
}
"""
    f.write(override_css)

print("Applied layout fixes to HTML and CSS")
