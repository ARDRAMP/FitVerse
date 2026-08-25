with open('styles.css', 'a', encoding='utf-8') as f:
    override_css = """
/* Fix word-accent descenders clipping */
.hero-content .word-accent {
    padding-bottom: 0.15em !important;
    padding-right: 0.15em !important;
    line-height: 1.2 !important;
}

.headline-bold {
    line-height: 1.2 !important;
}
"""
    f.write(override_css)

import re
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=74', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Applied fix for cut off letters")
