import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Revert back to the original dark gradient
html = html.replace(
    "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2))",
    "linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(26,42,27,0.4) 60%, transparent 100%)"
)

# Bump cache
html = re.sub(r'styles.css\?v=\d+', 'styles.css?v=76', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Restored the original dark gradient")
