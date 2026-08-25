import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Update .premium-btn
old_btn = """.premium-btn {
    background: linear-gradient(135deg, var(--teal-600) 0%, var(--orange-500) 100%);
    color: var(--navy-black);
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    box-shadow: 0 10px 20px -10px var(--teal-600);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}"""

new_btn = """.premium-btn {
    background: var(--teal-600);
    color: #000000;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none;
    border-radius: 50px;
    box-shadow: 0 10px 20px -10px rgba(255, 215, 0, 0.5);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}"""

css = css.replace(old_btn, new_btn)

# Update navbar
css = re.sub(r'(\.nav-container\s*\{[^}]*?background:\s*)rgba\([^)]+\)', r'\1#000000', css)
css = re.sub(r'(\.nav-links a\s*\{[^}]*?color:\s*)[^;]+', r'\1var(--teal-600)', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated buttons and navbar.")
