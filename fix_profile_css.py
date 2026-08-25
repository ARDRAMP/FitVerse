import re

with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace missing variables with hardcoded values
replacements = {
    'var(--gold-500)': '#e8b923',
    'var(--navy-black)': '#0f0f11',
    'var(--ice-200)': '#e5e7eb',
    'var(--teal-600)': '#0f766e',
    'var(--teal-500)': '#14b8a6',
    'var(--font-heading)': "'Outfit', sans-serif",
    'var(--font-body)': "'Inter', sans-serif",
    'var(--font-mono)': "'Inter', sans-serif",
    'var(--font-display)': "'Outfit', sans-serif"
}

for old, new in replacements.items():
    html = html.replace(old, new)

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed CSS variables in profile.html")
