import re

with open('profile.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Reduce Profile Name
html = html.replace('font-size: 2.5rem; margin-bottom: 0.5rem;', 'font-size: 1.8rem; margin-bottom: 0.5rem;')

# Reduce Email/Phone
html = html.replace('font-size: 1.1rem;', 'font-size: 0.95rem;')

# Reduce Card Headings (Shipping Address, Order History)
html = html.replace('font-size: 1.5rem; margin: 0;', 'font-size: 1.2rem; margin: 0;')

# Reduce Avatar size slightly to match new font sizes
html = html.replace('width: 120px; height: 120px;', 'width: 90px; height: 90px;')
html = html.replace('font-size: 2.5rem;', 'font-size: 2rem;') # Avatar initial

# Adjust Edit Profile / Sign out buttons slightly
html = html.replace('font-size: 1rem; transition: all 0.3s ease; border-radius: 8px;', 'font-size: 0.9rem; transition: all 0.3s ease; border-radius: 8px; padding: 0.6rem 1.2rem;')
html = html.replace('padding: 0.8rem 1.5rem; font-size: 1rem; border-radius: 8px;', 'padding: 0.6rem 1.2rem; font-size: 0.9rem; border-radius: 8px;')

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Reduced font sizes in profile.html")
