import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

new_entry = """    'womens-fit-studio': {
        id: 'womens-fit-studio',
        title: "Women's Fit Studio Bundle",
        badge: 'NEW DROP',
        image: 'images/apparel.png',
        originalPrice: 34999,
        price: 27499,
        savings: 7500,
        description: 'A complete functional training studio curated for women from resistance sculpting and core conditioning to flexible mobility and toning circuits.',
        items: [
            { name: 'Adjustable Booty Resistance Band Set (5 Levels)', spec: '100% Latex Loop Bands - Extra Light to Extra Heavy, Non-Roll Design' },
            { name: 'Adjustable Dumbbell Pair (2-20kg per handle)', spec: 'Dial-Select 15-Weight Settings, Compact Tray Storage System' },
            { name: 'Non-Slip Pilates Ring + Stretch Strap', spec: 'Fiberglass Core, EVA Padded Dual Handles + Cotton 8-Loop Therapy Strap' },
            { name: 'Pro Suspension Trainer TRX-Style Kit', spec: 'Aircraft-Grade Nylon Webbing, 300kg Rated Anchor, Door + Beam Mount' }
        ],
        warranty: '2-Year Quality Guarantee | Free Express Delivery | 30-Day Exchange'
    }"""

# Insert before the closing }; of bundleData
# Find the last closing brace of the bundleData (the one followed by ;\n)
pattern = r"(        warranty: '1-Year Eco Guarantee \| Includes Digital Guided Yoga Program'\r?\n    \}\r?\n\};)"
match = re.search(pattern, content)
if match:
    old = match.group(0)
    new = old.replace("    }\n};", "    },\n" + new_entry + "\n};").replace("    }\r\n};", "    },\r\n" + new_entry + "\r\n};")
    content = content.replace(old, new, 1)
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print('SUCCESS')
else:
    print('Pattern not found, trying simpler approach')
    idx = content.rfind("    }\n};")
    if idx == -1:
        idx = content.rfind("    }\r\n};")
    print(f"idx={idx}")
    print(repr(content[idx-50:idx+20]))
