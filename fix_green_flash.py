with open('styles.css', 'a', encoding='utf-8') as f:
    override_css = """
/* Remove green background from cinematic hero to prevent it showing during crossfades */
.cinematic-hero {
    background: #000 !important;
}
"""
    f.write(override_css)

import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=78', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed green background flash")
