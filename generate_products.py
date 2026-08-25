import random
import json

categories = ['Strength', 'Cardio', 'Combat', 'Recovery', 'Accessories', 'Apparel', 'Fit Tech', 'Supplements', 'Yoga', 'Home Gym']
brand_names = ['Rogue', 'Eleiko', 'Nike', 'Under Armour', 'Titan', 'Concept2', 'Rep Fitness', 'FitVerse Pro']

items = {
    'Strength': ['Barbell', 'Bumper Plates 45lb', 'Kettlebell', 'Dumbbell Set', 'Squat Rack', 'Bench Press', 'Hex Bar'],
    'Cardio': ['Treadmill', 'Rowing Machine', 'Air Bike', 'Elliptical', 'Stair Climber', 'Spin Bike'],
    'Combat': ['Punching Bag', 'Boxing Gloves', 'Hand Wraps', 'Shin Guards', 'Focus Mitts', 'Headgear'],
    'Recovery': ['Foam Roller', 'Massage Gun', 'Muscle Rub', 'Epsom Salt', 'Compression Sleeves', 'Cold Plunge Tub'],
    'Accessories': ['Resistance Bands', 'Lifting Belt', 'Wrist Wraps', 'Chalk', 'Jump Rope', 'Gym Bag'],
    'Apparel': ['Performance Tee', 'Compression Shorts', 'Training Hoodie', 'Weightlifting Shoes', 'Joggers', 'Tank Top'],
    'Fit Tech': ['Smart Watch', 'Heart Rate Monitor', 'Fitness Tracker', 'Smart Scale', 'Recovery Boots'],
    'Supplements': ['Whey Protein', 'Pre-Workout', 'Creatine', 'BCAAs', 'Multivitamin', 'Mass Gainer'],
    'Yoga': ['Yoga Mat', 'Yoga Blocks', 'Strap', 'Bolster', 'Meditation Cushion'],
    'Home Gym': ['Adjustable Dumbbells', 'Foldable Bench', 'Pull-up Bar', 'Suspension Trainer', 'Power Tower', 'Matting']
}

products = []
current_id = 1

for cat in categories:
    cat_items = items[cat]
    for _ in range(70):
        name = f"{random.choice(brand_names)} {random.choice(cat_items)}"
        
        if cat in ['Cardio', 'Home Gym']:
            price = round(random.uniform(200.0, 3000.0), 2)
        elif cat in ['Strength', 'Fit Tech', 'Recovery']:
            price = round(random.uniform(50.0, 1500.0), 2)
        elif cat in ['Supplements', 'Accessories', 'Yoga']:
            price = round(random.uniform(10.0, 100.0), 2)
        else:
            price = round(random.uniform(25.0, 200.0), 2)

        img = f"assets/images/products/{current_id}/main.jpg"

        products.append({
            "id": current_id,
            "name": name,
            "category": cat,
            "price": price,
            "image": img,
            "rating": round(random.uniform(3.5, 5.0), 1),
            "reviews": random.randint(10, 500)
        })
        current_id += 1

js_content = f"const shopProducts = {json.dumps(products, indent=4)};"

with open('products.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("Generated products.js with 700 items (70 per category)")
