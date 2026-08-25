import json
import re

with open('products.js', 'r', encoding='utf-8') as f:
    raw_content = f.read()

json_str = raw_content[raw_content.find('['):raw_content.rfind(']')+1]
products = json.loads(json_str)

verbs = [
    "engineered specifically to enhance", "crafted for dependable", "designed to support",
    "tailored for high-performance", "built to optimize", "focused on providing reliable",
    "developed for seamless", "constructed for heavy-duty", "optimized for daily",
    "created to elevate", "formulated to deliver", "built with an emphasis on"
]

benefits = [
    "functional efficiency during training sessions.",
    "comfort, durability, and practical workout utility.",
    "consistent performance across daily fitness routines.",
    "long-lasting reliability in personal and commercial spaces.",
    "ergonomic handling and dependable movement execution.",
    "progressive exercise goals with maximum control.",
    "stability and safety throughout intense exercise.",
    "athletic progression with clean structural design."
]

closings = [
    "A valuable addition to any active fitness environment.",
    "Fits effortlessly into modern training setups.",
    "Delivers consistent quality for athletes at all levels.",
    "Built for regular use without sacrificing performance.",
    "Provides essential utility for structured workout regimens.",
    "An ideal solution for targeted training requirements.",
    "Complements a wide variety of workout routines.",
    "Designed to meet high standards of daily athletic use."
]

seen_descriptions = set()

for i, p in enumerate(products):
    name = p['name']
    category = p['category']
    
    # Strip parenthetical text for clean sentence structure
    clean_n = re.sub(r'\s*\([^)]*\)', '', name).strip()
    
    v = verbs[i % len(verbs)]
    b = benefits[(i * 3 + 1) % len(benefits)]
    c = closings[(i * 7 + 2) % len(closings)]
    
    desc = f"The {clean_n} is {v} {b} {c}"
    
    # Guarantee 100% uniqueness
    version = 1
    while desc in seen_descriptions:
        v_alt = verbs[(i + version) % len(verbs)]
        b_alt = benefits[(i * 5 + version) % len(benefits)]
        c_alt = closings[(i * 11 + version) % len(closings)]
        desc = f"The {clean_n} is {v_alt} {b_alt} {c_alt}"
        version += 1
        
    seen_descriptions.add(desc)
    p['description'] = desc

# Write back to products.js
with open('products.js', 'w', encoding='utf-8') as f:
    f.write("var shopProducts = " + json.dumps(products, indent=4) + ";\n")

print(f"Successfully generated {len(products)} 100% unique descriptions in products.js!")
