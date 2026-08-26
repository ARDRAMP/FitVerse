import json

with open('products.js', 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('[')
end = text.rfind(']')
products = json.loads(text[start:end+1])

custom_descriptions = {
    500: "Nutricost Performance BCAA delivers 6g of premium 2:1:1 Branched Chain Amino Acids per serving in a refreshing Orange Mango flavor. Formulated as a dietary supplement to support muscle recovery, reduce soreness, and enhance intra-workout hydration across 60 full servings (510g).",
    495: "Optimum Nutrition Gold Standard 100% Whey Protein provides 24g of high-quality whey protein isolate per serving with 5.5g of naturally occurring BCAAs. Ideal for post-workout muscle repair and lean muscle building (5 lbs / 74 servings).",
    492: "Body Builder Super Multivitamin Once Daily provides a comprehensive blend of essential vitamins, minerals, and antioxidants tailored for high-intensity athletes and active individuals (60 easy-to-swallow tablets).",
    422: "Air Compression Leg Recovery Boots System features sequential pneumatic pressure zones to promote circulation, reduce muscle soreness, and accelerate lower-body recovery post-training.",
    424: "GPS Sports Smartwatch with ZoneSense VO2Max Tracker offers real-time heart rate monitoring, advanced athletic metric analysis, GPS navigation, and rugged water-resistant construction for endurance athletes.",
    74: "Commercial Touchscreen Magnetic Elliptical Cross Trainer delivers smooth, low-impact cardio workouts with magnetic resistance, interactive HD touchscreen display, and pre-programmed interval workouts.",
    7: "Commercial Olympic Half Rack System with Plate Storage features heavy-duty 3x3 steel tubing, multi-grip pull-up station, integrated weight plate storage horns, and adjustable safety spotter arms.",
    10: "Horizon Fitness Precision Adjustable Dumbbells Pair allows rapid weight adjustments from 5 to 50 lbs per dumbbell with a smooth dial mechanism and compact storage cradle base.",
    636: "Quick-Select Adjustable Dumbbells Pair with Heavy-Duty Stand offers quick dial resistance changes, ergonomic knurled handles, and a dedicated steel dumbbell stand for home gym training.",
    286: "Neoprene Wrist Support Guard Brace with Thumb Loop provides customizable compression, reinforced wrist stabilization, and ergonomic thumb loop anchor for heavy lifting and joint relief.",
    284: "Heavy-Duty Athletic Gym Duffel Bag features tear-resistant water-resistant fabric, ventilated shoe compartment, padded shoulder strap, and multi-pocket organizer.",
    283: "Adjustable Speed Jump Rope with Foam Handles features smooth ball-bearing rotation, non-slip sweat-absorbing foam grips, and durable steel cable for double-unders and cardio conditioning.",
    566: "Organic Cotton Yoga Meditation Bolster Pillow is filled with supportive natural cotton batting to provide gentle cushioning for deep yoga stretches, restorative poses, and meditation.",
    220: "Kula Recovery Portable Cold Plunge Ice Bath Tub features multi-layer insulated thermal lining, easy-drain valve system, and inflatable protective cover for cold water immersion therapy.",
    360: "Pro Weightlifting Shoes feature a high-density TPU raised heel, dual midfoot hook-and-loop lockdown straps, and high-traction flat rubber outsole for optimal squat stability and power transfer."
}

for p in products:
    if p['id'] in custom_descriptions:
        p['description'] = custom_descriptions[p['id']]

with open('products.js', 'w', encoding='utf-8') as f:
    f.write('var shopProducts = ' + json.dumps(products, indent=4) + ';\n')

print("Updated product descriptions for all 15 targeted products in products.js!")
