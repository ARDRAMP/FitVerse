import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the heavy dark gradient with a subtle uniform overlay
html = html.replace(
    "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(26,42,27,0.4) 60%, transparent 100%)",
    "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))"
)

# Bump cache
html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=75', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Removed dark gradient from hero slides")
