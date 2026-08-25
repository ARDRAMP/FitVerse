import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace color variables
replacements = {
    r'--navy-black: #[0-9a-fA-F]{6};': '--navy-black: #000000;',
    r'--deep-navy: #[0-9a-fA-F]{6};': '--deep-navy: #111111;',
    r'--navy-700: #[0-9a-fA-F]{6};': '--navy-700: #222222;',
    r'--teal-600: #[0-9a-fA-F]{6};': '--teal-600: #FFD700;',
    r'--teal-400: #[0-9a-fA-F]{6};': '--teal-400: #FFE600;',
    r'--orange-600: #[0-9a-fA-F]{6};': '--orange-600: #E5C100;',
    r'--orange-500: #[0-9a-fA-F]{6};': '--orange-500: #CCAB00;',
    r'--orange-400: #[0-9a-fA-F]{6};': '--orange-400: #B29600;',
    r'--ice-100: #[0-9a-fA-F]{6};': '--ice-100: #f4f4f4;',
    r'--ice-200: #[0-9a-fA-F]{6};': '--ice-200: #dddddd;',
    r'--ink-mute: #[0-9a-fA-F]{6};': '--ink-mute: #888888;'
}

for old, new in replacements.items():
    css = re.sub(old, new, css)

# Update gradients
css = re.sub(r'--grad-primary:.*?;', '--grad-primary: linear-gradient(135deg, var(--teal-600), var(--orange-600));', css)
css = re.sub(r'--grad-hero:.*?;', '--grad-hero: linear-gradient(135deg, #000000, #111111 60%, var(--teal-600) 100%);', css)
css = re.sub(r'--grad-conic:.*?;', '--grad-conic: conic-gradient(from 180deg at 50% 50%, #000000 0deg, #111111 180deg, var(--teal-600) 360deg);', css)

# Update shadow glows
css = re.sub(r'--shadow-glow:.*?;', '--shadow-glow: 0 0 20px rgba(255, 215, 0, 0.4);', css)
css = re.sub(r'--glass-dark-border:.*?;', '--glass-dark-border: rgba(255, 215, 0, 0.2);', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated color variables.")
