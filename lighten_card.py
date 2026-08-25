import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Make the card more transparent and reduce the heavy dark shadow
new_card_style = r"""\1
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(232, 185, 35, 0.2);
    border-radius: 24px;
    padding: 3.5rem;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    transform: translateY(0);
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
}"""

content = re.sub(
    r'(\.login-glass-card\s*\{)[\s\S]*?(?=\n\})',
    new_card_style,
    content
)

# Remove the text-shadow from WELCOME text as it looks like a weird colored glow
content = re.sub(
    r'text-shadow:\s*0\s*10px\s*30px\s*rgba\(20,\s*184,\s*166,\s*0\.3\);',
    'text-shadow: none;',
    content
)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Made card more transparent and removed glows")
