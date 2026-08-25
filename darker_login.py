with open('styles.css', 'a', encoding='utf-8') as f:
    override_css = """
/* Make login card darker */
.login-glass-card {
    background: rgba(0, 0, 0, 0.65) !important;
}
"""
    f.write(override_css)

import re
with open('login.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=82', html)

with open('login.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Made login card darker")
