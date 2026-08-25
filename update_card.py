import re

with open('styles.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the blue-ish glass card with a neutral dark one with a subtle gold border
new_card_style = r"""\1
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(232, 185, 35, 0.2);
    border-radius: 24px;
    padding: 3.5rem;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
    transform: translateY(0);
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
}"""

content = re.sub(
    r'(\.login-glass-card\s*\{)[\s\S]*?(?=\n\})',
    new_card_style,
    content
)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated .login-glass-card styling")
