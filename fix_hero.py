import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_before1 = """.hero::before {
    content: '';
    position: absolute;
    inset: 0;
    /* Highly transparent at the top to showcase the image, fading to solid dark at the bottom */
    background: linear-gradient(to bottom, rgba(20, 36, 3, 0.1) 0%, rgba(20, 36, 3, 0.4) 60%, var(--navy-black) 100%);
    z-index: 1;
}"""
new_before1 = """.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%);
    z-index: 1;
}"""
if old_before1 in css:
    css = css.replace(old_before1, new_before1)

# Remove the floatOrb
css = re.sub(r'\.hero::before\s*\{[^}]*floatOrb[^}]*\}', '', css)
css = re.sub(r'\.hero::after\s*\{[^}]*floatOrb[^}]*\}', '', css)

# Add the new gold gym diagonals
diagonals = """
/* Gold Gym Diagonal Slices */
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 45%;
    background-color: var(--teal-600);
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
    z-index: 1;
}

.hero::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    background-image: linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%);
    z-index: 1;
    pointer-events: none;
}
"""

css = css + diagonals

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated hero section diagonals.")
