import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Make body dark
css = css.replace('background-color: var(--ice-white);', 'background-color: var(--navy-black);')
css = css.replace('color: var(--deep-navy);', 'color: var(--ice-white);')

# Make sections dark
css = css.replace('background: var(--ice-white);', 'background: var(--navy-black);')
css = css.replace('background: var(--ice-100);', 'background: var(--deep-navy);')
css = css.replace('background-color: var(--ice-white);', 'background-color: var(--navy-black);')
css = css.replace('background-color: var(--ice-100);', 'background-color: var(--deep-navy);')

# Fix other light colors used for backgrounds
css = re.sub(r'--ice-white:\s*#ffffff;', '--ice-white: #ffffff;', css) # keep ice-white as white for text
css = re.sub(r'--ice-100:\s*#[a-fA-F0-9]+;', '--ice-100: #dddddd;', css) 
css = re.sub(r'--deep-navy:\s*#111111;', '--deep-navy: #111111;', css) 

# Ensure text colors that were black are now white or yellow
css = re.sub(r'color:\s*var\(--navy-black\);', 'color: var(--ice-white);', css)
css = re.sub(r'color:\s*#000000;', 'color: #000000;', css) # buttons can stay black text

# Fix heading colors
css = re.sub(r'(h1, h2, h3, h4, h5, h6\s*\{[^}]*?color:\s*)var\(--navy-black\)', r'\1var(--teal-600)', css)
css = re.sub(r'(h1, h2, h3, h4, h5, h6\s*\{[^}]*?color:\s*)var\(--deep-navy\)', r'\1var(--teal-600)', css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated backgrounds to dark theme.")
