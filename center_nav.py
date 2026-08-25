import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace golds-nav-links styles
old_css = """.golds-nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: 2rem;
}"""

new_css = """.golds-nav-links {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: 0;
}
/* Ensure nav-container has relative positioning so absolute centering works */
.nav-container {
    position: relative;
}"""

# Use regex for flexible matching just in case of formatting differences
css = re.sub(r'\.golds-nav-links\s*\{[^}]+\}', new_css, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Centered nav links.")
