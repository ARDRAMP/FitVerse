import re
import glob

# 1. Update Card Design in profile.html to use Glassmorphism like the header
with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the card styles
old_card_style = 'background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2);'
new_card_style = 'background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px; padding: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.4);'
html = html.replace(old_card_style, new_card_style)

# Also fix the background of the inner address box to match
html = html.replace('background: rgba(255,255,255,0.02); border-radius: 8px; padding: 1rem; text-align: center; border: 1px solid rgba(255,255,255,0.05);', 
                    'background: rgba(0, 0, 0, 0.2); border-radius: 12px; padding: 1.5rem; text-align: center; border: 1px dashed rgba(255, 255, 255, 0.1);')

# Increase inner font size just a bit so it's readable
html = html.replace('font-size: 0.95rem; line-height: 1.6; font-family: \'Inter\', sans-serif; margin: 0;', 
                    'font-size: 1rem; line-height: 1.6; font-family: \'Inter\', sans-serif; margin: 0;')

# Make the ADD ADDRESS button look like EDIT PROFILE button
html = html.replace('background: #14b8a6; color: #000; border: none; padding: 0.6rem 1.2rem; font-weight: 600; border-radius: 4px; margin-top: 1rem; font-size: 0.9rem;',
                    'background: transparent; border: 1px solid rgba(20, 184, 166, 0.5); color: #14b8a6; padding: 0.6rem 1.2rem; border-radius: 8px; margin-top: 1rem; font-size: 0.9rem; transition: all 0.3s;')

# Make START SHOPPING button look better
html = html.replace('background: #e8b923; color: #000;', 'background: transparent; border: 1px solid rgba(232, 185, 35, 0.5); color: #e8b923;')

# 2. Add cache busting to auth.js in all html files to fix the phone number issue
html = html.replace('src="auth.js"', 'src="auth.js?v=2"')
with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

for file in glob.glob('*.html'):
    if file == 'profile.html': continue
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    if 'src="auth.js"' in content:
        content = content.replace('src="auth.js"', 'src="auth.js?v=2"')
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

print("Updated profile cards and cache busted auth.js")
