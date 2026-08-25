import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_gradient = "linear-gradient(to bottom, rgba(20, 36, 3, 0.85), rgba(20, 36, 3, 0.98))"
new_gradient = "linear-gradient(to bottom, rgba(20, 36, 3, 0.3), rgba(20, 36, 3, 0.6))"

css = css.replace(old_gradient, new_gradient)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated background gradient opacity.")
