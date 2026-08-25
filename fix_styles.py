import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Restore old glass card style
old_glass_card = """.login-glass-card {
    background: rgba(15, 23, 42, 0.6);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 24px;
    padding: 3.5rem;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    transform: translateY(0);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}"""

css = re.sub(r'\.centered-minimalist \.login-glass-card \{.*?\}', old_glass_card, css, flags=re.DOTALL)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated styles.")
