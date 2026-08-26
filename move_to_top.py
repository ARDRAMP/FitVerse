import json

with open('products.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('[')
end = text.rfind(']')
products = json.loads(text[start:end+1])

target_ids = [422, 492, 283, 74, 284, 424, 495, 286, 636, 566, 7, 10, 220, 360, 500, 349, 350, 291, 292, 293, 295, 296, 312, 318, 319, 321, 322, 323, 324, 325, 326, 328, 329, 330, 332, 333, 337, 338, 339]
top_prods = [x for x in products if x['id'] in target_ids]
other_prods = [x for x in products if x['id'] not in target_ids]

new_products = top_prods + other_prods

with open('products.js', 'w', encoding='utf-8') as f:
    f.write('var shopProducts = ' + json.dumps(new_products, indent=4) + ';\n')

print(f"Successfully placed {len(top_prods)} updated products at the very top of products.js!")
