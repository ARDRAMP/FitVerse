import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Update .hero-slide to center content
content = re.sub(
    r'(\.hero-slide\s*\{[^}]*?)(padding:\s*0\s*5%;)',
    r'\1padding: 0 5%;\n    justify-content: center;\n    text-align: center;',
    content
)

# Update .hero-content to center text
content = re.sub(
    r'(\.hero-content\s*\{[^}]*?)(max-width:\s*600px;)',
    r'\1max-width: 800px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;',
    content
)

# Update .headline-bold in hero-content to be less bold and centered
# Remove font-family: var(--font-heading) if it's there and set font-weight: 300
content = re.sub(
    r'(\.hero-content\s*\.headline-bold\s*\{[^}]*?)(font-family:\s*var\(--font-heading\);)',
    r'\1font-family: "Inter", sans-serif;\n    font-weight: 300;\n    letter-spacing: 4px;',
    content
)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated text alignment and font weight in styles.css")
