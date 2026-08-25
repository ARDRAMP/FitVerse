import re

with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Add FontAwesome
if 'font-awesome' not in html:
    html = html.replace('</head>', '    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">\n</head>')

# 2. Make the cards more visible and professional
# Increase the opacity of the icons backgrounds to make them pop more
html = html.replace('background: rgba(20, 184, 166, 0.1)', 'background: rgba(20, 184, 166, 0.2)')
html = html.replace('background: rgba(232, 185, 35, 0.1)', 'background: rgba(232, 185, 35, 0.2)')

# Increase visibility of the "No default shipping address" inner box
html = html.replace('background: rgba(0,0,0,0.3)', 'background: rgba(255,255,255,0.02)')
html = html.replace('border: 1px dashed rgba(255,255,255,0.1)', 'border: 1px solid rgba(255,255,255,0.08)')

# Make "No orders placed yet" icon more visible
html = html.replace('color: rgba(255,255,255,0.1);', 'color: rgba(255,255,255,0.3);')

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Fixed profile icons and visibility")
