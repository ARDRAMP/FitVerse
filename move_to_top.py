import json

with open('products.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('[')
end = text.rfind(']')
products = json.loads(text[start:end+1])

target_ids = [422, 492, 283, 74, 284, 424, 495, 286, 636, 566, 7, 10, 220, 360, 500, 349, 350, 291, 292, 293, 295, 296, 312, 318, 319, 320, 321, 322, 323, 324, 325, 326, 328, 329, 330, 332, 333, 337, 338, 339, 631, 427, 358, 568, 638, 9, 79, 219, 289, 639, 80, 221, 153, 155, 225, 365, 152, 288, 640, 634, 151, 84, 154, 224, 294, 364, 434, 575, 645, 16, 86, 156, 226, 366, 436, 506, 367, 159, 229, 579, 649, 20, 90, 160, 230, 440, 580, 371, 21, 91, 161, 231, 581, 651, 22, 92, 232, 302, 372, 442, 582, 652, 23, 233, 373, 583, 653, 24, 94, 164, 374, 444, 584, 654, 25, 305, 375, 445, 585, 655, 26, 96, 236, 306, 376]
top_prods = [x for x in products if x['id'] in target_ids]
other_prods = [x for x in products if x['id'] not in target_ids]

new_products = top_prods + other_prods

with open('products.js', 'w', encoding='utf-8') as f:
    f.write('var shopProducts = ' + json.dumps(new_products, indent=4) + ';\n')

print(f"Successfully placed {len(top_prods)} updated products at the very top of products.js!")
