import json

with open('products.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('[')
end = text.rfind(']')
products = json.loads(text[start:end+1])

for p in products:
    if p['id'] == 349:
        p['name'] = "Speed Cable Jump Rope with Aluminum Handles"
        p['description'] = "Speed Cable Jump Rope with Aluminum Handles features high-speed ball bearings, adjustable coated steel wire, and lightweight ergonomic aluminum handles for double-unders and fitness cardio."
    elif p['id'] == 350:
        p['name'] = "Aluminum Hard-Shell Gym Travel Backpack"
        p['price'] = 7999.0
        p['description'] = "Aluminum Hard-Shell Gym Travel Backpack features a rugged crush-proof metallic exterior, padded shoulder straps, weather-resistant seals, and dedicated compartments for workout gear and laptop."

with open('products.js', 'w', encoding='utf-8') as f:
    f.write('var shopProducts = ' + json.dumps(products, indent=4) + ';\n')

print("Updated products 349 and 350 in products.js!")
