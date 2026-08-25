import re

with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Make the grid smaller
html = html.replace('grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));', 'grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));')

# Reduce padding on the Shipping/Order cards
html = html.replace('background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 2.5rem;', 'background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2);')

# Reduce size of icons inside the cards
html = html.replace('width: 40px; height: 40px; border-radius: 8px;', 'width: 35px; height: 35px; border-radius: 8px;')
html = html.replace('font-size: 1.2rem; margin: 0; letter-spacing: 1px;', 'font-size: 1rem; margin: 0; letter-spacing: 0.5px;')
html = html.replace('padding-bottom: 1.5rem; margin-bottom: 1.5rem;', 'padding-bottom: 1rem; margin-bottom: 1rem;')

# Reduce the inner box for the address
html = html.replace('padding: 1.5rem; text-align: center; border: 1px solid rgba(255,255,255,0.08);', 'padding: 1rem; text-align: center; border: 1px solid rgba(255,255,255,0.05);')

# Adjust order history icon size
html = html.replace('width: 80px; height: 80px;', 'width: 60px; height: 60px;')
html = html.replace('margin: 0 auto 1.5rem;', 'margin: 0 auto 1rem;')

# Adjust Start Shopping button
html = html.replace('padding: 0.8rem 2rem; border-radius: 30px;', 'padding: 0.6rem 1.5rem; border-radius: 30px; font-size: 0.9rem;')


with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Made cards smaller and more beautiful in profile.html")
