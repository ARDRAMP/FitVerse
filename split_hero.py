import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Update hero slider to occupy right half
new_hero_slider = """.hero-slider {
    position: absolute;
    top: 0;
    right: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    z-index: 1;
}"""

# Soften or change gradient overlay for a split layout
new_hero_slide_after = """.hero-slide::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #000000 -10%, transparent 40%, rgba(0,0,0,0.3) 100%);
}"""

css = re.sub(r'\.hero-slider\s*\{[^}]+\}', new_hero_slider, css)
css = re.sub(r'\.hero-slide::after\s*\{[^}]+\}', new_hero_slide_after, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated hero section to split layout.")
