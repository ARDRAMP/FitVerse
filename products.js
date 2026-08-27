var shopProducts = [
    {
        "id": 422,
        "name": "Air Compression Leg Recovery Boots System",
        "category": "Fit Tech",
        "price": 3449.0,
        "image": "assets/images/products/422/main.jpg",
        "rating": 5.0,
        "reviews": 419,
        "description": "Air Compression Leg Recovery Boots System features sequential pneumatic pressure zones to promote circulation, reduce muscle soreness, and accelerate lower-body recovery post-training."
    },
    {
        "id": 492,
        "name": "Body Builder Super Multivitamin Once Daily (60 Tablets)",
        "category": "Supplements",
        "price": 1799.0,
        "image": "assets/images/products/492/main.jpg",
        "rating": 4.7,
        "reviews": 414,
        "description": "Body Builder Super Multivitamin Once Daily provides a comprehensive blend of essential vitamins, minerals, and antioxidants tailored for high-intensity athletes and active individuals (60 easy-to-swallow tablets)."
    },
    {
        "id": 283,
        "name": "Adjustable Speed Jump Rope with Foam Handles",
        "category": "Accessories",
        "price": 759.0,
        "image": "assets/images/products/283/main.jpg",
        "rating": 4.6,
        "reviews": 173,
        "description": "Adjustable Speed Jump Rope with Foam Handles features smooth ball-bearing rotation, non-slip sweat-absorbing foam grips, and durable steel cable for double-unders and cardio conditioning."
    },
    {
        "id": 74,
        "name": "Commercial Touchscreen Magnetic Elliptical Cross Trainer",
        "category": "Cardio",
        "price": 29799.0,
        "image": "assets/images/products/74/main.jpg",
        "rating": 4.9,
        "reviews": 487,
        "description": "Commercial Touchscreen Magnetic Elliptical Cross Trainer delivers smooth, low-impact cardio workouts with magnetic resistance, interactive HD touchscreen display, and pre-programmed interval workouts."
    },
    {
        "id": 284,
        "name": "Heavy-Duty Athletic Gym Duffel Bag",
        "category": "Accessories",
        "price": 539.0,
        "image": "assets/images/products/284/main.jpg",
        "rating": 4.2,
        "reviews": 435,
        "description": "Heavy-Duty Athletic Gym Duffel Bag features tear-resistant water-resistant fabric, ventilated shoe compartment, padded shoulder strap, and multi-pocket organizer."
    },
    {
        "id": 424,
        "name": "GPS Sports Smartwatch with ZoneSense VO2Max Tracker",
        "category": "Fit Tech",
        "price": 2829.0,
        "image": "assets/images/products/424/main.jpg",
        "rating": 4.8,
        "reviews": 165,
        "description": "GPS Sports Smartwatch with ZoneSense VO2Max Tracker offers real-time heart rate monitoring, advanced athletic metric analysis, GPS navigation, and rugged water-resistant construction for endurance athletes."
    },
    {
        "id": 495,
        "name": "Optimum Nutrition Gold Standard 100% Whey Protein (5 lbs / 74 Servings)",
        "category": "Supplements",
        "price": 6999.0,
        "image": "assets/images/products/495/main.jpg",
        "rating": 4.2,
        "reviews": 219,
        "description": "Optimum Nutrition Gold Standard 100% Whey Protein provides 24g of high-quality whey protein isolate per serving with 5.5g of naturally occurring BCAAs. Ideal for post-workout muscle repair and lean muscle building (5 lbs / 74 servings)."
    },
    {
        "id": 286,
        "name": "Neoprene Wrist Support Guard Brace with Thumb Loop",
        "category": "Accessories",
        "price": 3559.0,
        "image": "assets/images/products/286/main.jpg",
        "rating": 4.3,
        "reviews": 65,
        "description": "Neoprene Wrist Support Guard Brace with Thumb Loop provides customizable compression, reinforced wrist stabilization, and ergonomic thumb loop anchor for heavy lifting and joint relief."
    },
    {
        "id": 636,
        "name": "Quick-Select Adjustable Dumbbells Pair with Heavy-Duty Stand",
        "category": "Home Gym",
        "price": 3989.0,
        "image": "assets/images/products/636/main.jpg",
        "rating": 4.0,
        "reviews": 30,
        "description": "Quick-Select Adjustable Dumbbells Pair with Heavy-Duty Stand offers quick dial resistance changes, ergonomic knurled handles, and a dedicated steel dumbbell stand for home gym training."
    },
    {
        "id": 566,
        "name": "Organic Cotton Yoga Meditation Bolster Pillow",
        "category": "Yoga",
        "price": 2139.0,
        "image": "assets/images/products/566/main.jpg",
        "rating": 4.7,
        "reviews": 477,
        "description": "Organic Cotton Yoga Meditation Bolster Pillow is filled with supportive natural cotton batting to provide gentle cushioning for deep yoga stretches, restorative poses, and meditation."
    },
    {
        "id": 7,
        "name": "Commercial Olympic Half Rack System with Plate Storage",
        "category": "Strength",
        "price": 49999.0,
        "image": "assets/images/products/7/main.jpg",
        "rating": 4.7,
        "reviews": 77,
        "description": "Commercial Olympic Half Rack System with Plate Storage features heavy-duty 3x3 steel tubing, multi-grip pull-up station, integrated weight plate storage horns, and adjustable safety spotter arms."
    },
    {
        "id": 10,
        "name": "Horizon Fitness Precision Adjustable Dumbbells Pair",
        "category": "Strength",
        "price": 27499.0,
        "image": "assets/images/products/10/main.jpg",
        "rating": 4.8,
        "reviews": 341,
        "description": "Horizon Fitness Precision Adjustable Dumbbells Pair allows rapid weight adjustments from 5 to 50 lbs per dumbbell with a smooth dial mechanism and compact storage cradle base."
    },
    {
        "id": 220,
        "name": "Kula Recovery Portable Cold Plunge Ice Bath Tub",
        "category": "Recovery",
        "price": 7459.0,
        "image": "assets/images/products/220/main.jpg",
        "rating": 4.2,
        "reviews": 92,
        "description": "Kula Recovery Portable Cold Plunge Ice Bath Tub features multi-layer insulated thermal lining, easy-drain valve system, and inflatable protective cover for cold water immersion therapy."
    },
    {
        "id": 360,
        "name": "Pro Weightlifting Shoes with Raised Heel & Midfoot Strap",
        "category": "Apparel",
        "price": 8999.0,
        "image": "assets/images/products/360/main.jpg",
        "rating": 4.5,
        "reviews": 334,
        "description": "Pro Weightlifting Shoes feature a high-density TPU raised heel, dual midfoot hook-and-loop lockdown straps, and high-traction flat rubber outsole for optimal squat stability and power transfer."
    },
    {
        "id": 500,
        "name": "Nutricost Performance BCAA Powder (Orange Mango, 60 Servings)",
        "category": "Supplements",
        "price": 3029.0,
        "image": "assets/images/products/500/main.jpg",
        "rating": 4.8,
        "reviews": 443,
        "description": "Nutricost Performance BCAA delivers 6g of premium 2:1:1 Branched Chain Amino Acids per serving in a refreshing Orange Mango flavor. Formulated as a dietary supplement to support muscle recovery, reduce soreness, and enhance intra-workout hydration across 60 full servings (510g)."
    },
    {
        "id": 349,
        "name": "Speed Cable Jump Rope with Aluminum Handles",
        "category": "Accessories",
        "price": 2179.0,
        "image": "assets/images/products/349/main.jpg",
        "rating": 4.7,
        "reviews": 483,
        "description": "Speed Cable Jump Rope with Aluminum Handles features high-speed ball bearings, adjustable coated steel wire, and lightweight ergonomic aluminum handles for double-unders and fitness cardio."
    },
    {
        "id": 350,
        "name": "Aluminum Hard-Shell Gym Travel Backpack",
        "category": "Accessories",
        "price": 7999.0,
        "image": "assets/images/products/350/main.jpg",
        "rating": 4.4,
        "reviews": 279,
        "description": "Aluminum Hard-Shell Gym Travel Backpack features a rugged crush-proof metallic exterior, padded shoulder straps, weather-resistant seals, and dedicated compartments for workout gear and laptop."
    },
    {
        "id": 291,
        "name": "Liftdex Pure Gym Chalk Powder & Refillable Chalk Ball Set",
        "category": "Accessories",
        "price": 999.0,
        "image": "assets/images/products/291/main.jpg",
        "rating": 4.9,
        "reviews": 346,
        "description": "Liftdex Pure Gym Chalk Powder & Refillable Chalk Ball Set provides maximum grip performance, absorbs moisture instantly, and prevents slipping during heavy deadlifts, gymnastics, and rock climbing."
    },
    {
        "id": 292,
        "name": "Body Builder Super Multivitamin Once Daily (60 Tablets)",
        "category": "Supplements",
        "price": 1369.0,
        "image": "assets/images/products/292/main.jpg",
        "rating": 4.7,
        "reviews": 254,
        "description": "Body Builder Super Multivitamin Once Daily provides a comprehensive daily blend of essential vitamins, minerals, and antioxidants to support immune health, energy, and muscle recovery (60 veggie tablets)."
    },
    {
        "id": 293,
        "name": "York Fitness Heavy-Duty Powerlifting Resistance Loop Band",
        "category": "Accessories",
        "price": 919.0,
        "image": "assets/images/products/293/main.jpg",
        "rating": 4.3,
        "reviews": 265,
        "description": "York Fitness Heavy-Duty Resistance Loop Band is crafted from 100% natural latex to provide heavy tension assistance for pull-ups, powerlifting squats, mobility work, and strength conditioning."
    },
    {
        "id": 295,
        "name": "LivePro Premium Speed Jump Rope with Aluminum Handles",
        "category": "Accessories",
        "price": 2899.0,
        "image": "assets/images/products/295/main.jpg",
        "rating": 4.4,
        "reviews": 44,
        "description": "LivePro Premium Speed Jump Rope features lightweight knurled aluminum alloy handles, 360-degree high-speed ball bearing swivel, and adjustable coated steel wire cable for double-unders and cardio training."
    },
    {
        "id": 296,
        "name": "Gym Leader Nutrition Cylinder Duffel Bag",
        "category": "Accessories",
        "price": 1429.0,
        "image": "assets/images/products/296/main.jpg",
        "rating": 3.9,
        "reviews": 467,
        "description": "Gym Leader Nutrition Cylinder Duffel Bag features a water-resistant canvas exterior, spacious main compartment, heavy-duty zippers, side accessory pocket, and detachable shoulder strap."
    },
    {
        "id": 312,
        "name": "Harbinger Padded Leather Weightlifting Belt",
        "category": "Accessories",
        "price": 3499.0,
        "image": "assets/images/products/312/main.jpg",
        "rating": 4.0,
        "reviews": 64,
        "description": "Harbinger Padded Leather Weightlifting Belt features genuine split leather construction, interior foam cushioning, heavy-duty dual-prong steel buckle, and reinforced double stitching for core stability during heavy lifts."
    },
    {
        "id": 318,
        "name": "Jay Cutler Signature Leather Weightlifting Belt",
        "category": "Accessories",
        "price": 3239.0,
        "image": "assets/images/products/318/main.jpg",
        "rating": 4.2,
        "reviews": 439,
        "description": "Jay Cutler Signature Leather Weightlifting Belt features premium oil-tanned genuine leather construction, heavy-duty steel roller buckle, embroidered Jay Cutler signature logo, and lumbar support padding for maximum core stabilization."
    },
    {
        "id": 319,
        "name": "Domyos Ergonomic Foam Handle Speed Jump Rope",
        "category": "Accessories",
        "price": 1249.0,
        "image": "assets/images/products/319/main.jpg",
        "rating": 4.9,
        "reviews": 250,
        "description": "Domyos Ergonomic Speed Jump Rope features comfortable non-slip foam handles, smooth ball-bearing rotation mechanism, and flexible kink-resistant PVC cord for endurance cardio and fitness workouts."
    },
    {
        "id": 321,
        "name": "Rugged Strength & Fitness 2 oz Gym Chalk Block",
        "category": "Accessories",
        "price": 499.0,
        "image": "assets/images/products/321/main.jpg",
        "rating": 4.0,
        "reviews": 153,
        "description": "Rugged Strength & Fitness 2 oz Gym Chalk Block is made from 100% pure magnesium carbonate to absorb hand moisture, prevent slipping, and maximize grip traction for heavy deadlifts, gymnastics, and rock climbing."
    },
    {
        "id": 322,
        "name": "Mueller Sports Medicine Wrist & Thumb Stabilizer Brace",
        "category": "Accessories",
        "price": 1149.0,
        "image": "assets/images/products/322/main.jpg",
        "rating": 4.2,
        "reviews": 77,
        "description": "Mueller Sports Medicine Wrist & Thumb Stabilizer Brace features rigid metal stays for thumb support, breathable padded mesh fabric, and adjustable hook-and-loop straps for wrist stabilization during joint recovery and training."
    },
    {
        "id": 323,
        "name": "Non-Slip Pastel Fabric Booty Resistance Bands Set (3-Pack)",
        "category": "Accessories",
        "price": 1019.0,
        "image": "assets/images/products/323/main.jpg",
        "rating": 4.0,
        "reviews": 255,
        "description": "Non-Slip Pastel Fabric Booty Resistance Bands Set includes Light, Medium, and Heavy resistance levels crafted from breathable elastic cotton fabric with internal latex grips to prevent rolling during hip, thigh, and glute activation workouts."
    },
    {
        "id": 324,
        "name": "Factory Weights Red Suede Lever Powerlifting Belt",
        "category": "Accessories",
        "price": 4299.0,
        "image": "assets/images/products/324/main.jpg",
        "rating": 4.9,
        "reviews": 443,
        "description": "Factory Weights Red Suede Lever Powerlifting Belt features premium genuine red suede leather, heavy-duty black quick-release steel lever lock mechanism, and internal lumbar padding for maximal core stability."
    },
    {
        "id": 325,
        "name": "Digital Jump Rope with Calorie Counter & LCD Screen",
        "category": "Accessories",
        "price": 799.0,
        "image": "assets/images/products/325/main.jpg",
        "rating": 4.3,
        "reviews": 227,
        "description": "Digital Jump Rope features an integrated LCD screen with jump counter, timer, and calorie calculator, paired with non-slip cushioned foam handles and adjustable PVC speed cable."
    },
    {
        "id": 326,
        "name": "Water-Resistant Athletic Gym Duffel Bag (Black)",
        "category": "Accessories",
        "price": 1529.0,
        "image": "assets/images/products/326/main.jpg",
        "rating": 3.9,
        "reviews": 139,
        "description": "Water-Resistant Athletic Gym Duffel Bag features a durable matte black water-repellent shell, roomy main compartment, side shoe/wet pocket, heavy-duty zippers, and padded adjustable shoulder strap."
    },
    {
        "id": 328,
        "name": "Breathable Mesh Compression Wrist Wrap Guard",
        "category": "Accessories",
        "price": 699.0,
        "image": "assets/images/products/328/main.jpg",
        "rating": 4.1,
        "reviews": 449,
        "description": "Breathable Mesh Compression Wrist Wrap Guard features ventilated moisture-wicking mesh fabric, adjustable velcro strap enclosure, and ergonomic thumb loop for wrist support during high-intensity training."
    },
    {
        "id": 329,
        "name": "Flat Latex Resistance Loop Bands Set with Pouch",
        "category": "Accessories",
        "price": 1289.0,
        "image": "assets/images/products/329/main.jpg",
        "rating": 4.7,
        "reviews": 265,
        "description": "Flat Latex Resistance Loop Bands Set includes 3 color-coded tension levels (light, medium, heavy) with a compact black drawstring pouch for warmup, stretching, and physical therapy exercises."
    },
    {
        "id": 330,
        "name": "Sporter Padded Nylon Weightlifting Belt (Yellow/Black)",
        "category": "Accessories",
        "price": 1899.0,
        "image": "assets/images/products/330/main.jpg",
        "rating": 3.9,
        "reviews": 156,
        "description": "Sporter Padded Nylon Weightlifting Belt features durable heavy-duty nylon webbed construction, 5-inch wide back support padding, steel tension roller buckle, and hook-and-loop closure for secure lumbar protection."
    },
    {
        "id": 332,
        "name": "Get RX'd Canvas Athletic Gym Duffel Bag (White)",
        "category": "Accessories",
        "price": 1349.0,
        "image": "assets/images/products/332/main.jpg",
        "rating": 4.1,
        "reviews": 87,
        "description": "Get RX'd Canvas Athletic Gym Duffel Bag features durable white heavy-duty canvas fabric, spacious main zip compartment, reinforced webbed handles, and adjustable shoulder strap."
    },
    {
        "id": 333,
        "name": "Mueller Gymnastic & Weightlifting Chalk 8-Block Box (1 lb)",
        "category": "Accessories",
        "price": 1499.0,
        "image": "assets/images/products/333/main.jpg",
        "rating": 4.8,
        "reviews": 259,
        "description": "Mueller Gymnastic & Weightlifting Chalk Box contains 8 individually wrapped 2 oz blocks (1 lb total) of 100% pure magnesium carbonate for maximum grip absorption during weightlifting, gymnastics, and rock climbing."
    },
    {
        "id": 337,
        "name": "Speed Jump Rope with Mechanical Jump Counter",
        "category": "Accessories",
        "price": 849.0,
        "image": "assets/images/products/337/main.jpg",
        "rating": 3.9,
        "reviews": 209,
        "description": "Speed Jump Rope features a mechanical revolution counter handle, comfortable non-slip foam grips, and a durable braided blue/green speed cord for cardio workouts and fitness training."
    },
    {
        "id": 338,
        "name": "Herschel Supply Co. Classic Barrel Gym Duffel Bag (Grey)",
        "category": "Accessories",
        "price": 3999.0,
        "image": "assets/images/products/338/main.jpg",
        "rating": 4.7,
        "reviews": 284,
        "description": "Herschel Supply Co. Classic Barrel Gym Duffel Bag features a premium grey heather woven fabric shell, signature striped fabric liner, dedicated side shoe compartment, and webbed carrying handles."
    },
    {
        "id": 339,
        "name": "Pure Magnesium Carbonate Gym Block Chalk Set",
        "category": "Accessories",
        "price": 1199.0,
        "image": "assets/images/products/339/main.jpg",
        "rating": 3.9,
        "reviews": 223,
        "description": "Pure Magnesium Carbonate Gym Block Chalk Set contains individually wrapped blocks of 100% pure magnesium carbonate to keep hands dry, absorb sweat, and enhance grip during heavy lifts, gymnastics, and climbing."
    },
    {
        "id": 320,
        "name": "Matte Black Water-Resistant Travel Gym Duffel Bag",
        "category": "Accessories",
        "price": 1899.0,
        "image": "assets/images/products/320/main.jpg",
        "rating": 4.4,
        "reviews": 239,
        "description": "Matte Black Water-Resistant Travel Gym Duffel Bag features a smooth waterproof canvas exterior, padded top carrying handles, front zipper pocket, spacious interior compartment, and detachable shoulder strap."
    },
    {
        "id": 631,
        "name": "Commercial All-in-One Functional Trainer Power Rack System",
        "category": "Home Gym",
        "price": 89999.0,
        "image": "assets/images/products/631/main.jpg",
        "rating": 3.9,
        "reviews": 496,
        "description": "Commercial All-in-One Functional Trainer Power Rack System features dual pin-selected weight stacks, integrated Smith machine bar, multi-position cable crossover pulleys, chin-up bar station, J-hooks, and safety spotter arms."
    },
    {
        "id": 427,
        "name": "Therabody RecoveryAir JetBoots Compression System",
        "category": "Fit Tech",
        "price": 49999.0,
        "image": "assets/images/products/427/main.jpg",
        "rating": 3.9,
        "reviews": 498,
        "description": "Therabody RecoveryAir JetBoots feature fully wireless pneumatic air compression therapy, integrated internal pumps, TruGrade technology gradient pressure, and fast 60-second flush cycles to accelerate athletic muscle recovery."
    },
    {
        "id": 358,
        "name": "Adidas Tiro Athletic Fleece Pullover Hoodie (Black/White)",
        "category": "Apparel",
        "price": 3999.0,
        "image": "assets/images/products/358/main.jpg",
        "rating": 4.5,
        "reviews": 425,
        "description": "Adidas Tiro Athletic Fleece Pullover Hoodie features a soft cotton-poly fleece blend, contrast white sleeve stripe panels, drawstring adjustable hood, ribbed cuffs, and iconic 3-bar logo for training and casual sportswear."
    },
    {
        "id": 568,
        "name": "Hanging Commercial Fitness & Yoga Mat with Eyelets",
        "category": "Yoga",
        "price": 1899.0,
        "image": "assets/images/products/568/main.jpg",
        "rating": 4.6,
        "reviews": 432,
        "description": "Hanging Commercial Fitness & Yoga Mat features high-density cushioned non-slip foam, reinforced metal eyelet holes for wall rack storage, and a sweat-resistant textured surface for yoga, pilates, and stretching."
    },
    {
        "id": 638,
        "name": "Commercial Multi-Station Home Gym Machine",
        "category": "Home Gym",
        "price": 74999.0,
        "image": "assets/images/products/638/main.jpg",
        "rating": 4.7,
        "reviews": 472,
        "description": "Commercial Multi-Station Home Gym Machine features heavy-duty steel framing, dual integrated weight stacks, pec deck fly arms, lat pulldown station, seated chest press, and leg curl/extension attachment for full-body workouts."
    },
    {
        "id": 9,
        "name": "Heavy-Duty Olympic Hex Trap Deadlift Bar",
        "category": "Strength",
        "price": 8499.0,
        "image": "assets/images/products/9/main.jpg",
        "rating": 4.4,
        "reviews": 88,
        "description": "Heavy-Duty Olympic Hex Trap Deadlift Bar is forged from solid steel with dual raised knurled grip handles and 2-inch Olympic plate sleeves to reduce lower back strain during heavy deadlifts and shrugs."
    },
    {
        "id": 79,
        "name": "Commercial Air Fan Exercise Bike with LCD Monitor",
        "category": "Cardio",
        "price": 38999.0,
        "image": "assets/images/products/79/main.jpg",
        "rating": 5.0,
        "reviews": 440,
        "description": "Commercial Air Fan Exercise Bike features unlimited wind air resistance fan wheel, heavy-duty steel frame, dual-action moving handlebars, adjustable saddle, and digital interval LCD monitor for high-intensity cardio HIIT workouts."
    },
    {
        "id": 219,
        "name": "Therabody RecoveryPulse Vibration Arm Compression Sleeve",
        "category": "Recovery",
        "price": 12499.0,
        "image": "assets/images/products/219/main.jpg",
        "rating": 4.6,
        "reviews": 45,
        "description": "Therabody RecoveryPulse Vibration Arm Compression Sleeve combines targeted compression with integrated VibraPulse technology and rechargeable battery control to increase circulation and soothe sore arm and elbow muscles."
    },
    {
        "id": 289,
        "name": "Sweet Sweat Aluminum Handle Speed Jump Rope",
        "category": "Accessories",
        "price": 1899.0,
        "image": "assets/images/products/289/main.jpg",
        "rating": 4.9,
        "reviews": 355,
        "description": "Sweet Sweat Aluminum Handle Speed Jump Rope features 360-degree ball bearing rotation, textured knurled aluminum handles, and a tangle-free steel wire cable for double-unders and high-speed cardio training."
    },
    {
        "id": 639,
        "name": "Commercial Dual-Stack Cable Crossover Functional Trainer",
        "category": "Home Gym",
        "price": 84999.0,
        "image": "assets/images/products/639/main.jpg",
        "rating": 4.7,
        "reviews": 40,
        "description": "Commercial Dual-Stack Cable Crossover Functional Trainer features dual independent weight stacks, multi-position swivel pulleys, multi-grip chin-up bar, and heavy-duty steel construction for versatile isolation and compound strength training."
    },
    {
        "id": 80,
        "name": "Horizon Fitness Andes Folding Elliptical Cross Trainer",
        "category": "Cardio",
        "price": 54999.0,
        "image": "assets/images/products/80/main.jpg",
        "rating": 4.7,
        "reviews": 195,
        "description": "Horizon Fitness Andes Folding Elliptical Cross Trainer features smooth magnetic flywheel resistance, one-step hydraulic SixStar folding frame, ergonomic dynamic foot pedals, and smart workout display console."
    },
    {
        "id": 221,
        "name": "Aptonia Handheld Deep Tissue Percussion Massage Gun",
        "category": "Recovery",
        "price": 4999.0,
        "image": "assets/images/products/221/main.jpg",
        "rating": 4.3,
        "reviews": 127,
        "description": "Aptonia Handheld Deep Tissue Percussion Massage Gun delivers targeted high-frequency percussion therapy, ergonomic handle grip, quiet brushless motor, and multiple interchangeable massage heads to relieve muscle soreness and speed up post-workout recovery."
    },
    {
        "id": 153,
        "name": "Rival Boxing Pro Leather Speed Bag (Black/Lime)",
        "category": "Combat",
        "price": 3039.0,
        "image": "assets/images/products/153/main.jpg",
        "rating": 4.6,
        "reviews": 89,
        "description": "Rival Boxing Pro Leather Speed Bag is handcrafted from premium genuine leather with reinforced welded seams, balanced pear-shape design, and durable hanging loop for rapid hand-eye coordination and speed striking workouts."
    },
    {
        "id": 155,
        "name": "FujiMae Boxing Hand Wraps (White / 180-Inch)",
        "category": "Combat",
        "price": 799.0,
        "image": "assets/images/products/155/main.jpg",
        "rating": 5.0,
        "reviews": 154,
        "description": "FujiMae Boxing Hand Wraps feature 180 inches of breathable semi-elastic cotton-blend fabric, reinforced thumb loop, and wide hook-and-loop wrist strap for optimal knuckle and wrist protection."
    },
    {
        "id": 225,
        "name": "Athletic Support Elastic Arm & Elbow Compression Sleeve",
        "category": "Recovery",
        "price": 899.0,
        "image": "assets/images/products/225/main.jpg",
        "rating": 4.1,
        "reviews": 371,
        "description": "Athletic Support Elastic Arm & Elbow Compression Sleeve features 4-way stretch breathable compression knit, targeted joint stabilization, and non-slip silicone band to reduce tendonitis and elbow fatigue."
    },
    {
        "id": 365,
        "name": "High-Waisted Seamless Compression Workout Biker Shorts (Black)",
        "category": "Apparel",
        "price": 1389.0,
        "image": "assets/images/products/365/main.jpg",
        "rating": 5.0,
        "reviews": 171,
        "description": "High-Waisted Seamless Compression Workout Biker Shorts feature a ribbed tummy-control waistband, four-way stretch squat-proof fabric, and moisture-wicking material for yoga, gym, and cycling."
    },
    {
        "id": 152,
        "name": "Nike Pro Football Shin Guard & Calf Compression Sleeves",
        "category": "Combat",
        "price": 1669.0,
        "image": "assets/images/products/152/main.jpg",
        "rating": 4.4,
        "reviews": 165,
        "description": "Nike Pro Football Shin Guard & Calf Compression Sleeves feature ventilated Dri-FIT compression fabric, targeted impact-absorbing shin protection, ergonomic anatomical fit, and secure non-slip cuffs for football and athletic training."
    },
    {
        "id": 288,
        "name": "Padded Leather Weightlifting Belt with Dual-Prong Buckle",
        "category": "Accessories",
        "price": 2999.0,
        "image": "assets/images/products/288/main.jpg",
        "rating": 3.9,
        "reviews": 286,
        "description": "Padded Leather Weightlifting Belt is constructed from heavy-duty genuine leather featuring contoured white inner lumbar padding, reinforced contrast double-stitching, and a heavy-duty dual-prong stainless steel roller buckle for maximum core support during squats and deadlifts."
    },
    {
        "id": 640,
        "name": "Force USA G20 All-In-One Commercial Trainer & Power Rack",
        "category": "Home Gym",
        "price": 99999.0,
        "image": "assets/images/products/640/main.jpg",
        "rating": 3.9,
        "reviews": 389,
        "description": "Force USA G20 All-In-One Commercial Trainer combines a heavy-duty power rack, functional trainer dual weight stacks, commercial Smith machine, multi-grip pull-up station, dip handles, plate storage pegs, and heavy punching bag attachment."
    },
    {
        "id": 634,
        "name": "Yodha Fitness Tiger Commercial Power Cage Squat Rack",
        "category": "Home Gym",
        "price": 54999.0,
        "image": "assets/images/products/634/main.jpg",
        "rating": 4.9,
        "reviews": 84,
        "description": "Yodha Fitness Tiger Commercial Power Cage Squat Rack features heavy-gauge 11-gauge steel uprights, laser-cut hole spacing, reinforced J-cups, safety spotter arms, multi-grip pull-up bar, and durable red powder-coat finish for heavy powerlifting and squat training."
    },
    {
        "id": 151,
        "name": "Sting Armalite Curved Boxing Focus Mitts Pair",
        "category": "Combat",
        "price": 4299.0,
        "image": "assets/images/products/151/main.jpg",
        "rating": 4.2,
        "reviews": 209,
        "description": "Sting Armalite Curved Boxing Focus Mitts feature SLV3 outer skin, high-density quad-core shock absorption foam, curved strike zone with target circle, and padded finger guards with secure hook-and-loop wrist straps for boxing and MMA coaches."
    },
    {
        "id": 84,
        "name": "Axox Commercial Self-Powered Curved Manual Treadmill",
        "category": "Cardio",
        "price": 79999.0,
        "image": "assets/images/products/84/main.jpg",
        "rating": 4.6,
        "reviews": 229,
        "description": "Axox Commercial Self-Powered Curved Manual Treadmill features high-traction slatted running track, magnetic resistance controls, heavy-duty ergonomic handrails, and LCD workout console for high-intensity interval training."
    },
    {
        "id": 154,
        "name": "Full Face Sparring Headgear with Clear Face Shield (Blue)",
        "category": "Combat",
        "price": 3779.0,
        "image": "assets/images/products/154/main.jpg",
        "rating": 4.5,
        "reviews": 265,
        "description": "Full Face Sparring Headgear features high-density shock-absorbing impact foam, full cranial and ear coverage, and a detachable high-impact transparent face shield for uncompromised vision and maximum facial protection during combat sparring."
    },
    {
        "id": 224,
        "name": "Trioxi Pure Epsom Salt Muscle Recovery Bath Soak (10kg Tub)",
        "category": "Recovery",
        "price": 2499.0,
        "image": "assets/images/products/224/main.jpg",
        "rating": 4.8,
        "reviews": 264,
        "description": "Trioxi Pure Epsom Salt is 100% natural magnesium sulfate bath soak crystals packaged in a heavy-duty 10kg bucket to relieve post-workout muscle soreness, reduce joint inflammation, and accelerate athletic recovery."
    },
    {
        "id": 294,
        "name": "FitGrip Contoured Leather Weightlifting Belt with Dual-Prong Buckle",
        "category": "Accessories",
        "price": 2799.0,
        "image": "assets/images/products/294/main.jpg",
        "rating": 4.1,
        "reviews": 53,
        "description": "FitGrip Contoured Leather Weightlifting Belt is crafted from genuine leather with suede interior lining, reinforced contrast double stitching, and a heavy-duty dual-prong stainless steel roller buckle for core stability during heavy lifts."
    },
    {
        "id": 364,
        "name": "Women's Fleece Cropped Full-Zip Workout Hoodie (Mocha)",
        "category": "Apparel",
        "price": 1589.0,
        "image": "assets/images/products/364/main.jpg",
        "rating": 4.5,
        "reviews": 159,
        "description": "Women's Fleece Cropped Full-Zip Workout Hoodie is crafted from ultra-soft heavyweight cotton fleece with front split kangaroo pockets, full-length zipper closure, and ribbed cuffs for cozy gym warmups and casual streetwear."
    },
    {
        "id": 434,
        "name": "Garmin Tactix 7 Pro Multisport Tactical GPS Smartwatch",
        "category": "Fit Tech",
        "price": 89999.0,
        "image": "assets/images/products/434/main.jpg",
        "rating": 4.1,
        "reviews": 171,
        "description": "Garmin Tactix 7 Pro Multisport Tactical GPS Smartwatch features a rugged titanium bezel, solar sapphire display, multi-band GNSS tactical navigation, heart rate tracking, Night Vision compatibility, and comprehensive health & fitness metrics."
    },
    {
        "id": 575,
        "name": "Ergonomic Slanted Meditation Wedge Cushion & Zabuton Mat Set (Grey)",
        "category": "Yoga",
        "price": 2439.0,
        "image": "assets/images/products/575/main.jpg",
        "rating": 4.3,
        "reviews": 95,
        "description": "Ergonomic Slanted Meditation Wedge Cushion & Zabuton Mat Set is crafted with high-density supportive foam and breathable removable grey linen covers to relieve lower back tension and provide optimal alignment during long meditation sessions."
    },
    {
        "id": 645,
        "name": "Speediance Gym Monster Smart Interactive Home Gym System",
        "category": "Home Gym",
        "price": 84999.0,
        "image": "assets/images/products/645/main.jpg",
        "rating": 4.8,
        "reviews": 308,
        "description": "Speediance Gym Monster Smart Interactive Home Gym System features motor-powered dynamic digital resistance, high-definition smart touchscreen display, foldable multi-angle workout bench, rowing accessories, and integrated AI performance tracking."
    },
    {
        "id": 16,
        "name": "Pro-Gym Commercial 2-Tier Heavy-Duty Dumbbell Storage Rack",
        "category": "Strength",
        "price": 14999.0,
        "image": "assets/images/products/16/main.jpg",
        "rating": 5.0,
        "reviews": 352,
        "description": "Pro-Gym Commercial 2-Tier Heavy-Duty Dumbbell Storage Rack is built with heavy-gauge commercial steel, angled tiers for easy access and loading, rubberized foot pads, and reinforced dumbbell cradles for fitness clubs and home gyms."
    },
    {
        "id": 86,
        "name": "Sunny Health & Fitness Magnetic Elliptical Cross Trainer",
        "category": "Cardio",
        "price": 22959.0,
        "image": "assets/images/products/86/main.jpg",
        "rating": 4.6,
        "reviews": 456,
        "description": "Sunny Health & Fitness Magnetic Elliptical Cross Trainer features smooth magnetic belt-drive resistance, full-motion dual action handlebars, non-slip foot pedals, and a digital workout monitor to track time, speed, distance, and calories."
    },
    {
        "id": 156,
        "name": "Eliza Pro Leather Boxing Sparring Gloves (Black/Gold)",
        "category": "Combat",
        "price": 4689.0,
        "image": "assets/images/products/156/main.jpg",
        "rating": 4.3,
        "reviews": 62,
        "description": "Eliza Pro Leather Boxing Sparring Gloves are handcrafted from premium genuine leather with multi-layered shock-absorbing foam padding, ergonomic fist closure, gold accent piping, and secure hook-and-loop wrist wraps for sparring and bag workouts."
    },
    {
        "id": 226,
        "name": "Teckwave Inflatable Insulated Cold Plunge Ice Bath Tub with Cover",
        "category": "Recovery",
        "price": 24999.0,
        "image": "assets/images/products/226/main.jpg",
        "rating": 4.7,
        "reviews": 32,
        "description": "Teckwave Inflatable Insulated Cold Plunge Ice Bath Tub is constructed with ultra-durable military-grade drop-stitch walls, dual-layered thermal insulation cover with buckle straps, and quick-drain valve for cold therapy recovery at home or on the go."
    },
    {
        "id": 366,
        "name": "Pro Olympic Weightlifting Shoes with Dual Midfoot Straps (White/Black)",
        "category": "Apparel",
        "price": 8999.0,
        "image": "assets/images/products/366/main.jpg",
        "rating": 4.8,
        "reviews": 256,
        "description": "Pro Olympic Weightlifting Shoes feature a rigid raised TPU heel, high-traction non-slip rubber outsole, dual carbon-textured midfoot locking straps, and breathable perforated upper for maximum stability during heavy squats and snatches."
    },
    {
        "id": 436,
        "name": "CooSpo Bluetooth & ANT+ Heart Rate Monitor Chest Strap",
        "category": "Fit Tech",
        "price": 3499.0,
        "image": "assets/images/products/436/main.jpg",
        "rating": 4.8,
        "reviews": 495,
        "description": "CooSpo Bluetooth & ANT+ Heart Rate Monitor Chest Strap features real-time dynamic ECG-accuracy heart rate tracking, LED indicator light, dual wireless protocol compatibility with fitness apps and bike computers, and an adjustable soft elastic red chest band."
    },
    {
        "id": 506,
        "name": "Applied Nutrition BCAA Amino Hydrate Powder (Fruit Burst)",
        "category": "Supplements",
        "price": 2999.0,
        "image": "assets/images/products/506/main.jpg",
        "rating": 4.6,
        "reviews": 245,
        "description": "Applied Nutrition BCAA Amino Hydrate is an intra-workout electrolyte and amino acid drink mix delivering 7.2g of BCAAs with zero sugar per serving in delicious Fruit Burst flavor for rapid muscle hydration, performance, and recovery."
    },
    {
        "id": 367,
        "name": "Nike Dri-FIT Women's Running Tank Top (Royal Blue)",
        "category": "Apparel",
        "price": 2499.0,
        "image": "assets/images/products/367/main.jpg",
        "rating": 3.9,
        "reviews": 374,
        "description": "Nike Dri-FIT Women's Running Tank Top is crafted from ultra-lightweight breathable moisture-wicking Dri-FIT fabric with a comfortable crew neck, curved drop-tail hem, and classic Nike swoosh for high-performance training and running."
    },
    {
        "id": 159,
        "name": "Fortis Athletica Canvas & Leather Hanging Heavy Punching Bag",
        "category": "Combat",
        "price": 12999.0,
        "image": "assets/images/products/159/main.jpg",
        "rating": 4.9,
        "reviews": 177,
        "description": "Fortis Athletica Canvas & Leather Hanging Heavy Punching Bag is handcrafted from heavy-duty military-grade canvas and genuine burgundy leather with reinforced hanging straps and precision stitching for boxing and kickboxing training."
    },
    {
        "id": 229,
        "name": "Rechargeable Textured Vibrating Massage Ball Roller",
        "category": "Recovery",
        "price": 6999.0,
        "image": "assets/images/products/229/main.jpg",
        "rating": 3.8,
        "reviews": 477,
        "description": "Rechargeable Textured Vibrating Massage Ball Roller features multi-speed targeted high-frequency vibration therapy, ergonomic wave-grooved silicone surface, and USB-C charging for deep myofascial release, plantar fasciitis relief, and muscle recovery."
    },
    {
        "id": 1,
        "name": "Zinc-Coated Olympic Hex Trap Bar",
        "category": "Strength",
        "price": 7019.0,
        "image": "assets/images/products/1/main.jpg",
        "rating": 4.1,
        "reviews": 96,
        "description": "The Zinc-Coated Olympic Hex Trap Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 71,
        "name": "Commercial Motorized Treadmill with 15.6 Inch HD Touchscreen",
        "category": "Cardio",
        "price": 81799.0,
        "image": "assets/images/products/71/main.jpg",
        "rating": 4.3,
        "reviews": 166,
        "description": "The Commercial Motorized Treadmill with 15.6 Inch HD Touchscreen is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 141,
        "name": "Heavy Leather Punching Bag (100 lbs / 4ft)",
        "category": "Combat",
        "price": 4719.0,
        "image": "assets/images/products/141/main.jpg",
        "rating": 4.1,
        "reviews": 433,
        "description": "The Heavy Leather Punching Bag (100 lbs / 4ft) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 211,
        "name": "QM.1 Sports Care Pre-Sports Warming Muscle Cream",
        "category": "Recovery",
        "price": 979.0,
        "image": "assets/images/products/211/main.jpg",
        "rating": 5.0,
        "reviews": 378,
        "description": "The QM.1 Sports Care Pre-Sports Warming Muscle Cream is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 281,
        "name": "Heavy-Duty Resistance Loop Bands Set (5 Resistance Levels)",
        "category": "Accessories",
        "price": 1879.0,
        "image": "assets/images/products/281/main.jpg",
        "rating": 4.7,
        "reviews": 248,
        "description": "The Heavy-Duty Resistance Loop Bands Set (5 Resistance Levels) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 351,
        "name": "Sweat-Wicking Performance Training Tee",
        "category": "Apparel",
        "price": 1779.0,
        "image": "assets/images/products/351/main.jpg",
        "rating": 3.9,
        "reviews": 242,
        "description": "The Sweat-Wicking Performance Training Tee is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 421,
        "name": "GPS Sports Smartwatch with Heart Rate Monitor",
        "category": "Fit Tech",
        "price": 14799.0,
        "image": "assets/images/products/421/main.jpg",
        "rating": 4.9,
        "reviews": 167,
        "description": "The GPS Sports Smartwatch with Heart Rate Monitor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 491,
        "name": "100% Whey Protein Isolate Powder (Vanilla 5 lbs)",
        "category": "Supplements",
        "price": 7719.0,
        "image": "assets/images/products/491/main.jpg",
        "rating": 4.4,
        "reviews": 279,
        "description": "The 100% Whey Protein Isolate Powder (Vanilla 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 561,
        "name": "Organic Cotton Yoga Meditation Bolster Pillow",
        "category": "Yoga",
        "price": 2369.0,
        "image": "assets/images/products/561/main.jpg",
        "rating": 4.3,
        "reviews": 381,
        "description": "The Organic Cotton Yoga Meditation Bolster Pillow is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 2,
        "name": "Quick-Select Adjustable Dumbbells Pair",
        "category": "Strength",
        "price": 16999.0,
        "image": "assets/images/products/2/main.jpg",
        "rating": 4.5,
        "reviews": 327,
        "description": "The Quick-Select Adjustable Dumbbells Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 72,
        "name": "Air Resistance Rowing Machine with Performance Monitor",
        "category": "Cardio",
        "price": 49249.0,
        "image": "assets/images/products/72/main.jpg",
        "rating": 4.0,
        "reviews": 159,
        "description": "The Air Resistance Rowing Machine with Performance Monitor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 142,
        "name": "Pro Style Leather Boxing Headgear",
        "category": "Combat",
        "price": 4149.0,
        "image": "assets/images/products/142/main.jpg",
        "rating": 4.5,
        "reviews": 475,
        "description": "The Pro Style Leather Boxing Headgear is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 212,
        "name": "Health Smart Natural Epsom Salt Sport Soak (Spearmint & Menthol)",
        "category": "Recovery",
        "price": 7699.0,
        "image": "assets/images/products/212/main.jpg",
        "rating": 4.0,
        "reviews": 221,
        "description": "The Health Smart Natural Epsom Salt Sport Soak (Spearmint & Menthol) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 282,
        "name": "Genuine Grain Leather Powerlifting Belt (10mm Thickness)",
        "category": "Accessories",
        "price": 3369.0,
        "image": "assets/images/products/282/main.jpg",
        "rating": 4.8,
        "reviews": 319,
        "description": "The Genuine Grain Leather Powerlifting Belt (10mm Thickness) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 352,
        "name": "Lightweight Zip-Up Gym Track Jacket & Hoodie",
        "category": "Apparel",
        "price": 1669.0,
        "image": "assets/images/products/352/main.jpg",
        "rating": 4.8,
        "reviews": 304,
        "description": "The Lightweight Zip-Up Gym Track Jacket & Hoodie is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 562,
        "name": "High-Density EVA Foam Yoga Blocks (Set of 2)",
        "category": "Yoga",
        "price": 1749.0,
        "image": "assets/images/products/562/main.jpg",
        "rating": 3.9,
        "reviews": 388,
        "description": "The High-Density EVA Foam Yoga Blocks (Set of 2) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 632,
        "name": "Space-Saving Foldable Utility Weight Bench",
        "category": "Home Gym",
        "price": 14799.0,
        "image": "assets/images/products/632/main.jpg",
        "rating": 4.3,
        "reviews": 349,
        "description": "The Space-Saving Foldable Utility Weight Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 3,
        "name": "Chrome Olympic Barbell (220K PSI Steel)",
        "category": "Strength",
        "price": 2259.0,
        "image": "assets/images/products/3/main.jpg",
        "rating": 4.1,
        "reviews": 283,
        "description": "The Chrome Olympic Barbell (220K PSI Steel) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 73,
        "name": "Heavy-Duty Fan Blade Air Bike with LCD Console",
        "category": "Cardio",
        "price": 23399.0,
        "image": "assets/images/products/73/main.jpg",
        "rating": 4.6,
        "reviews": 312,
        "description": "The Heavy-Duty Fan Blade Air Bike with LCD Console is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 143,
        "name": "Elasticated Cotton Hand Wraps (180-Inch Pair)",
        "category": "Combat",
        "price": 859.0,
        "image": "assets/images/products/143/main.jpg",
        "rating": 4.9,
        "reviews": 68,
        "description": "The Elasticated Cotton Hand Wraps (180-Inch Pair) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 213,
        "name": "Gradient Athletic Compression Arm & Elbow Sleeve Pair",
        "category": "Recovery",
        "price": 25299.0,
        "image": "assets/images/products/213/main.jpg",
        "rating": 4.5,
        "reviews": 319,
        "description": "The Gradient Athletic Compression Arm & Elbow Sleeve Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 353,
        "name": "High-Waisted Athletic Drawstring Workout Shorts",
        "category": "Apparel",
        "price": 3239.0,
        "image": "assets/images/products/353/main.jpg",
        "rating": 4.2,
        "reviews": 176,
        "description": "The High-Waisted Athletic Drawstring Workout Shorts is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 423,
        "name": "Smart Body Fat & Composition Digital Scale",
        "category": "Fit Tech",
        "price": 3039.0,
        "image": "assets/images/products/423/main.jpg",
        "rating": 4.4,
        "reviews": 270,
        "description": "The Smart Body Fat & Composition Digital Scale is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 493,
        "name": "Micronized Creatine Monohydrate Powder (500g Unflavored)",
        "category": "Supplements",
        "price": 1829.0,
        "image": "assets/images/products/493/main.jpg",
        "rating": 4.3,
        "reviews": 313,
        "description": "The Micronized Creatine Monohydrate Powder (500g Unflavored) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 563,
        "name": "Purple Non-Slip Textured Alignment Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 959.0,
        "image": "assets/images/products/563/main.jpg",
        "rating": 4.6,
        "reviews": 371,
        "description": "The Purple Non-Slip Textured Alignment Yoga Mat (6mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 633,
        "name": "Doorway Multi-Grip Pull-Up Bar Station",
        "category": "Home Gym",
        "price": 1829.0,
        "image": "assets/images/products/633/main.jpg",
        "rating": 4.7,
        "reviews": 458,
        "description": "The Doorway Multi-Grip Pull-Up Bar Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 4,
        "name": "Rubber Coated Hex Dumbbell (30 lbs)",
        "category": "Strength",
        "price": 2479.0,
        "image": "assets/images/products/4/main.jpg",
        "rating": 4.6,
        "reviews": 304,
        "description": "The Rubber Coated Hex Dumbbell (30 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 144,
        "name": "Pro Guard Shin & Instep Protection Guards",
        "category": "Combat",
        "price": 3369.0,
        "image": "assets/images/products/144/main.jpg",
        "rating": 4.5,
        "reviews": 148,
        "description": "The Pro Guard Shin & Instep Protection Guards is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 214,
        "name": "HOROW Portable Cold Plunge Cryotherapy Ice Bath Tub Container",
        "category": "Recovery",
        "price": 1429.0,
        "image": "assets/images/products/214/main.jpg",
        "rating": 5.0,
        "reviews": 362,
        "description": "The HOROW Portable Cold Plunge Cryotherapy Ice Bath Tub Container is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 354,
        "name": "Leather Olympic Weightlifting Shoes with Raised Heel",
        "category": "Apparel",
        "price": 11439.0,
        "image": "assets/images/products/354/main.jpg",
        "rating": 4.3,
        "reviews": 378,
        "description": "The Leather Olympic Weightlifting Shoes with Raised Heel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 494,
        "name": "Instantized BCAA 2:1:1 Energy Powder (Blue Raspberry 300g)",
        "category": "Supplements",
        "price": 2579.0,
        "image": "assets/images/products/494/main.jpg",
        "rating": 4.1,
        "reviews": 324,
        "description": "The Instantized BCAA 2:1:1 Energy Powder (Blue Raspberry 300g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 564,
        "name": "Durable Cotton Yoga Stretching Strap (with D-Ring Buckle)",
        "category": "Yoga",
        "price": 2229.0,
        "image": "assets/images/products/564/main.jpg",
        "rating": 4.5,
        "reviews": 194,
        "description": "The Durable Cotton Yoga Stretching Strap (with D-Ring Buckle) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 5,
        "name": "Heavy-Duty Commercial Squat Rack",
        "category": "Strength",
        "price": 77999.0,
        "image": "assets/images/products/5/main.jpg",
        "rating": 4.1,
        "reviews": 470,
        "description": "The Heavy-Duty Commercial Squat Rack is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 75,
        "name": "Foldable Space-Saving Electric Treadmill",
        "category": "Cardio",
        "price": 40199.0,
        "image": "assets/images/products/75/main.jpg",
        "rating": 4.2,
        "reviews": 307,
        "description": "The Foldable Space-Saving Electric Treadmill is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 145,
        "name": "Curved Leather Focus Punching Mitts Pair",
        "category": "Combat",
        "price": 4479.0,
        "image": "assets/images/products/145/main.jpg",
        "rating": 4.3,
        "reviews": 33,
        "description": "The Curved Leather Focus Punching Mitts Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 215,
        "name": "Beurer Deep Tissue Percussive Massage Gun with 6 Attachments",
        "category": "Recovery",
        "price": 3119.0,
        "image": "assets/images/products/215/main.jpg",
        "rating": 4.8,
        "reviews": 423,
        "description": "The Beurer Deep Tissue Percussive Massage Gun with 6 Attachments is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 285,
        "name": "Magnesium Carbonate Pure Gym Chalk Block (8-Pack)",
        "category": "Accessories",
        "price": 959.0,
        "image": "assets/images/products/285/main.jpg",
        "rating": 3.9,
        "reviews": 457,
        "description": "The Magnesium Carbonate Pure Gym Chalk Block (8-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 355,
        "name": "Breathable Mesh Muscle Tank Top",
        "category": "Apparel",
        "price": 1839.0,
        "image": "assets/images/products/355/main.jpg",
        "rating": 4.7,
        "reviews": 491,
        "description": "The Breathable Mesh Muscle Tank Top is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 425,
        "name": "Continuous Pulse Oximeter & Oxygen Tracker",
        "category": "Fit Tech",
        "price": 5039.0,
        "image": "assets/images/products/425/main.jpg",
        "rating": 4.5,
        "reviews": 483,
        "description": "The Continuous Pulse Oximeter & Oxygen Tracker is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 565,
        "name": "Inflatable Wobble Balance Stability Cushion Disc",
        "category": "Yoga",
        "price": 749.0,
        "image": "assets/images/products/565/main.jpg",
        "rating": 4.3,
        "reviews": 119,
        "description": "The Inflatable Wobble Balance Stability Cushion Disc is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 635,
        "name": "Multi-Station Heavy Duty Power Tower",
        "category": "Home Gym",
        "price": 2939.0,
        "image": "assets/images/products/635/main.jpg",
        "rating": 4.2,
        "reviews": 404,
        "description": "The Multi-Station Heavy Duty Power Tower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 6,
        "name": "Multi-Angle Adjustable Weight Bench",
        "category": "Strength",
        "price": 9839.0,
        "image": "assets/images/products/6/main.jpg",
        "rating": 4.6,
        "reviews": 199,
        "description": "The Multi-Angle Adjustable Weight Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 76,
        "name": "Commercial Indoor Cycling Spin Bike with Magnetic Flywheel",
        "category": "Cardio",
        "price": 25599.0,
        "image": "assets/images/products/76/main.jpg",
        "rating": 4.2,
        "reviews": 485,
        "description": "The Commercial Indoor Cycling Spin Bike with Magnetic Flywheel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 146,
        "name": "Full-Face Protection Leather Boxing Headgear",
        "category": "Combat",
        "price": 2589.0,
        "image": "assets/images/products/146/main.jpg",
        "rating": 4.6,
        "reviews": 181,
        "description": "The Full-Face Protection Leather Boxing Headgear is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 216,
        "name": "Electric Heated Muscle Massage Wrap Pad",
        "category": "Recovery",
        "price": 3659.0,
        "image": "assets/images/products/216/main.jpg",
        "rating": 4.8,
        "reviews": 487,
        "description": "The Electric Heated Muscle Massage Wrap Pad is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 356,
        "name": "Tapered Sweat-Wicking Athletic Joggers",
        "category": "Apparel",
        "price": 1629.0,
        "image": "assets/images/products/356/main.jpg",
        "rating": 4.1,
        "reviews": 430,
        "description": "The Tapered Sweat-Wicking Athletic Joggers is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 426,
        "name": "Smart Fitness Tracker Ring with Sleep Analysis",
        "category": "Fit Tech",
        "price": 6519.0,
        "image": "assets/images/products/426/main.jpg",
        "rating": 4.8,
        "reviews": 173,
        "description": "The Smart Fitness Tracker Ring with Sleep Analysis is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 496,
        "name": "Advanced Clean Mass Gainer Powder (Chocolate 6 lbs)",
        "category": "Supplements",
        "price": 4589.0,
        "image": "assets/images/products/496/main.jpg",
        "rating": 4.9,
        "reviews": 197,
        "description": "The Advanced Clean Mass Gainer Powder (Chocolate 6 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 77,
        "name": "Stair Climber Stepper Machine with Ergonomic Handrails",
        "category": "Cardio",
        "price": 31999.0,
        "image": "assets/images/products/77/main.jpg",
        "rating": 4.1,
        "reviews": 77,
        "description": "The Stair Climber Stepper Machine with Ergonomic Handrails is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 147,
        "name": "Heavy Duty Speed Bag Swivel Assembly Kit",
        "category": "Combat",
        "price": 2099.0,
        "image": "assets/images/products/147/main.jpg",
        "rating": 4.2,
        "reviews": 406,
        "description": "The Heavy Duty Speed Bag Swivel Assembly Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 217,
        "name": "Vibrating Foam Roller for Deep Tissue Recovery",
        "category": "Recovery",
        "price": 1199.0,
        "image": "assets/images/products/217/main.jpg",
        "rating": 4.2,
        "reviews": 350,
        "description": "The Vibrating Foam Roller for Deep Tissue Recovery is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 287,
        "name": "Padded Weightlifting Straps Pair (Heavy Cotton)",
        "category": "Accessories",
        "price": 2199.0,
        "image": "assets/images/products/287/main.jpg",
        "rating": 4.1,
        "reviews": 423,
        "description": "The Padded Weightlifting Straps Pair (Heavy Cotton) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 357,
        "name": "Seamless High-Support Gym Sports Bra",
        "category": "Apparel",
        "price": 1449.0,
        "image": "assets/images/products/357/main.jpg",
        "rating": 4.3,
        "reviews": 287,
        "description": "The Seamless High-Support Gym Sports Bra is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 497,
        "name": "Pure Hydrolyzed Collagen Peptides Powder (450g)",
        "category": "Supplements",
        "price": 3699.0,
        "image": "assets/images/products/497/main.jpg",
        "rating": 4.6,
        "reviews": 276,
        "description": "The Pure Hydrolyzed Collagen Peptides Powder (450g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 567,
        "name": "High-Density EVA Foam Yoga Blocks (Set of 3)",
        "category": "Yoga",
        "price": 2699.0,
        "image": "assets/images/products/567/main.jpg",
        "rating": 4.3,
        "reviews": 385,
        "description": "The High-Density EVA Foam Yoga Blocks (Set of 3) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 637,
        "name": "Adjustable Dumbbells Set with Stand (5-70 lbs)",
        "category": "Home Gym",
        "price": 27599.0,
        "image": "assets/images/products/637/main.jpg",
        "rating": 4.4,
        "reviews": 425,
        "description": "The Adjustable Dumbbells Set with Stand (5-70 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 8,
        "name": "Urethane Pro Dumbbell Set",
        "category": "Strength",
        "price": 32459.0,
        "image": "assets/images/products/8/main.jpg",
        "rating": 4.8,
        "reviews": 334,
        "description": "The Urethane Pro Dumbbell Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 78,
        "name": "Self-Powered Curved Manual Treadmill",
        "category": "Cardio",
        "price": 42399.0,
        "image": "assets/images/products/78/main.jpg",
        "rating": 4.3,
        "reviews": 342,
        "description": "The Self-Powered Curved Manual Treadmill is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 148,
        "name": "Freestanding Heavy Punching Bag with Water Base",
        "category": "Combat",
        "price": 7079.0,
        "image": "assets/images/products/148/main.jpg",
        "rating": 4.1,
        "reviews": 153,
        "description": "The Freestanding Heavy Punching Bag with Water Base is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 218,
        "name": "Ocean Essential Oil Epsom Salt Muscle Recovery Bath Soak Bag",
        "category": "Recovery",
        "price": 829.0,
        "image": "assets/images/products/218/main.jpg",
        "rating": 4.7,
        "reviews": 417,
        "description": "The Ocean Essential Oil Epsom Salt Muscle Recovery Bath Soak Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 428,
        "name": "HD Touchscreen Fitness Display Console",
        "category": "Fit Tech",
        "price": 5479.0,
        "image": "assets/images/products/428/main.jpg",
        "rating": 4.1,
        "reviews": 448,
        "description": "The HD Touchscreen Fitness Display Console is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 498,
        "name": "Electrolyte Hydration Powder Sticks (Lemon Lime 30 Packs)",
        "category": "Supplements",
        "price": 2439.0,
        "image": "assets/images/products/498/main.jpg",
        "rating": 4.2,
        "reviews": 96,
        "description": "The Electrolyte Hydration Powder Sticks (Lemon Lime 30 Packs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 149,
        "name": "Muay Thai Kick Pads (Pair)",
        "category": "Combat",
        "price": 2079.0,
        "image": "assets/images/products/149/main.jpg",
        "rating": 4.2,
        "reviews": 405,
        "description": "The Muay Thai Kick Pads (Pair) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 359,
        "name": "Technical Training Shorts with Liner (7-Inch)",
        "category": "Apparel",
        "price": 2559.0,
        "image": "assets/images/products/359/main.jpg",
        "rating": 4.1,
        "reviews": 355,
        "description": "The Technical Training Shorts with Liner (7-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 429,
        "name": "Smart Muscle Stimulator TENS EMS Device",
        "category": "Fit Tech",
        "price": 4349.0,
        "image": "assets/images/products/429/main.jpg",
        "rating": 4.0,
        "reviews": 340,
        "description": "The Smart Muscle Stimulator TENS EMS Device is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 499,
        "name": "Plant-Based Vegan Organic Protein Powder (Chocolate 2 lbs)",
        "category": "Supplements",
        "price": 4919.0,
        "image": "assets/images/products/499/main.jpg",
        "rating": 4.5,
        "reviews": 353,
        "description": "The Plant-Based Vegan Organic Protein Powder (Chocolate 2 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 569,
        "name": "Adjustable Metal Buckle Yoga Strap (10 Feet)",
        "category": "Yoga",
        "price": 1129.0,
        "image": "assets/images/products/569/main.jpg",
        "rating": 4.8,
        "reviews": 120,
        "description": "The Adjustable Metal Buckle Yoga Strap (10 Feet) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 150,
        "name": "Professional Leather Sparring Gloves (16 oz)",
        "category": "Combat",
        "price": 3769.0,
        "image": "assets/images/products/150/main.jpg",
        "rating": 4.4,
        "reviews": 395,
        "description": "The Professional Leather Sparring Gloves (16 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 290,
        "name": "Tactical Gym Duffel & Yoga Mat Carrier Tote Bag",
        "category": "Accessories",
        "price": 1209.0,
        "image": "assets/images/products/290/main.jpg",
        "rating": 4.1,
        "reviews": 113,
        "description": "The Tactical Gym Duffel & Yoga Mat Carrier Tote Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 430,
        "name": "Wearable GPS Multisport Watch with Map Navigation",
        "category": "Fit Tech",
        "price": 8099.0,
        "image": "assets/images/products/430/main.jpg",
        "rating": 4.9,
        "reviews": 140,
        "description": "The Wearable GPS Multisport Watch with Map Navigation is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 570,
        "name": "Round Cotton Meditation Cushion (Zafu)",
        "category": "Yoga",
        "price": 2559.0,
        "image": "assets/images/products/570/main.jpg",
        "rating": 3.9,
        "reviews": 368,
        "description": "The Round Cotton Meditation Cushion (Zafu) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 11,
        "name": "Cast Iron Competition Kettlebell (16kg)",
        "category": "Strength",
        "price": 2139.0,
        "image": "assets/images/products/11/main.jpg",
        "rating": 3.9,
        "reviews": 363,
        "description": "The Cast Iron Competition Kettlebell (16kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 81,
        "name": "Recumbent Exercise Bike with Padded Lumbar Support",
        "category": "Cardio",
        "price": 24759.0,
        "image": "assets/images/products/81/main.jpg",
        "rating": 4.8,
        "reviews": 161,
        "description": "The Recumbent Exercise Bike with Padded Lumbar Support is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 361,
        "name": "Ribbed Crop Top Workout Tank",
        "category": "Apparel",
        "price": 1479.0,
        "image": "assets/images/products/361/main.jpg",
        "rating": 4.2,
        "reviews": 252,
        "description": "The Ribbed Crop Top Workout Tank is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 431,
        "name": "Bluetooth Smart Body Analyzer Scale",
        "category": "Fit Tech",
        "price": 2959.0,
        "image": "assets/images/products/431/main.jpg",
        "rating": 4.2,
        "reviews": 266,
        "description": "The Bluetooth Smart Body Analyzer Scale is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 501,
        "name": "Nitric Oxide Pump Pre-Workout Booster (Fruit Punch)",
        "category": "Supplements",
        "price": 2459.0,
        "image": "assets/images/products/501/main.jpg",
        "rating": 4.8,
        "reviews": 143,
        "description": "The Nitric Oxide Pump Pre-Workout Booster (Fruit Punch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 571,
        "name": "Deep Tissue Muscle Yoga Wheel (12-Inch)",
        "category": "Yoga",
        "price": 919.0,
        "image": "assets/images/products/571/main.jpg",
        "rating": 4.2,
        "reviews": 223,
        "description": "The Deep Tissue Muscle Yoga Wheel (12-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 641,
        "name": "Heavy Duty Interlocking Rubber Gym Matting (1/2 Inch)",
        "category": "Home Gym",
        "price": 1769.0,
        "image": "assets/images/products/641/main.jpg",
        "rating": 4.2,
        "reviews": 280,
        "description": "The Heavy Duty Interlocking Rubber Gym Matting (1/2 Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 12,
        "name": "Machined Steel Weight Plate (25 lbs)",
        "category": "Strength",
        "price": 4849.0,
        "image": "assets/images/products/12/main.jpg",
        "rating": 3.9,
        "reviews": 144,
        "description": "The Machined Steel Weight Plate (25 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 82,
        "name": "Commercial Grade Air Bike with Dual-Action Arms",
        "category": "Cardio",
        "price": 29999.0,
        "image": "assets/images/products/82/main.jpg",
        "rating": 4.8,
        "reviews": 464,
        "description": "The Commercial Grade Air Bike with Dual-Action Arms is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 222,
        "name": "Infrared Thermal Heating Pad for Back & Joints",
        "category": "Recovery",
        "price": 2099.0,
        "image": "assets/images/products/222/main.jpg",
        "rating": 4.2,
        "reviews": 281,
        "description": "The Infrared Thermal Heating Pad for Back & Joints is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 362,
        "name": "Thermal Compression Tights Pants",
        "category": "Apparel",
        "price": 2719.0,
        "image": "assets/images/products/362/main.jpg",
        "rating": 4.2,
        "reviews": 185,
        "description": "The Thermal Compression Tights Pants is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 432,
        "name": "Wireless Heart Rate Chest Strap Sensor",
        "category": "Fit Tech",
        "price": 5549.0,
        "image": "assets/images/products/432/main.jpg",
        "rating": 4.5,
        "reviews": 500,
        "description": "The Wireless Heart Rate Chest Strap Sensor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 502,
        "name": "Creapure Micronized Creatine Powder (250g)",
        "category": "Supplements",
        "price": 2319.0,
        "image": "assets/images/products/502/main.jpg",
        "rating": 4.1,
        "reviews": 258,
        "description": "The Creapure Micronized Creatine Powder (250g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 572,
        "name": "Absorbent Microfiber Yoga Mat Towel",
        "category": "Yoga",
        "price": 2469.0,
        "image": "assets/images/products/572/main.jpg",
        "rating": 4.2,
        "reviews": 259,
        "description": "The Absorbent Microfiber Yoga Mat Towel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 642,
        "name": "Compact Foldable Incline Weight Bench",
        "category": "Home Gym",
        "price": 6199.0,
        "image": "assets/images/products/642/main.jpg",
        "rating": 4.7,
        "reviews": 482,
        "description": "The Compact Foldable Incline Weight Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 13,
        "name": "Stainless Steel Powerlifting Barbell",
        "category": "Strength",
        "price": 17839.0,
        "image": "assets/images/products/13/main.jpg",
        "rating": 4.6,
        "reviews": 211,
        "description": "The Stainless Steel Powerlifting Barbell is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 83,
        "name": "High-Intensity Interval Training Rower",
        "category": "Cardio",
        "price": 29799.0,
        "image": "assets/images/products/83/main.jpg",
        "rating": 4.9,
        "reviews": 204,
        "description": "The High-Intensity Interval Training Rower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 223,
        "name": "Stainless Steel Scraping Muscle Gua Sha Tool Set",
        "category": "Recovery",
        "price": 1419.0,
        "image": "assets/images/products/223/main.jpg",
        "rating": 4.8,
        "reviews": 271,
        "description": "The Stainless Steel Scraping Muscle Gua Sha Tool Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 363,
        "name": "Minimalist Cross-Training Athletic Shoes",
        "category": "Apparel",
        "price": 7419.0,
        "image": "assets/images/products/363/main.jpg",
        "rating": 3.8,
        "reviews": 120,
        "description": "The Minimalist Cross-Training Athletic Shoes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 433,
        "name": "Smart Jump Rope with LED Jump Counter",
        "category": "Fit Tech",
        "price": 719.0,
        "image": "assets/images/products/433/main.jpg",
        "rating": 4.9,
        "reviews": 268,
        "description": "The Smart Jump Rope with LED Jump Counter is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 503,
        "name": "Fermented Essential Amino Acids EAA Powder (Watermelon)",
        "category": "Supplements",
        "price": 1579.0,
        "image": "assets/images/products/503/main.jpg",
        "rating": 4.6,
        "reviews": 340,
        "description": "The Fermented Essential Amino Acids EAA Powder (Watermelon) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 573,
        "name": "Extra Thick Cushioning Yoga Mat (8mm)",
        "category": "Yoga",
        "price": 1529.0,
        "image": "assets/images/products/573/main.jpg",
        "rating": 4.5,
        "reviews": 369,
        "description": "The Extra Thick Cushioning Yoga Mat (8mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 643,
        "name": "Doorway Chin-Up & Pull-Up Bar",
        "category": "Home Gym",
        "price": 2879.0,
        "image": "assets/images/products/643/main.jpg",
        "rating": 3.8,
        "reviews": 464,
        "description": "The Doorway Chin-Up & Pull-Up Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 14,
        "name": "Commercial Smith Machine Rack System",
        "category": "Strength",
        "price": 44499.0,
        "image": "assets/images/products/14/main.jpg",
        "rating": 4.6,
        "reviews": 384,
        "description": "The Commercial Smith Machine Rack System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 504,
        "name": "High-Potency Omega-3 Fish Oil Softgels (120 Softgels)",
        "category": "Supplements",
        "price": 1289.0,
        "image": "assets/images/products/504/main.jpg",
        "rating": 3.8,
        "reviews": 307,
        "description": "The High-Potency Omega-3 Fish Oil Softgels (120 Softgels) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 574,
        "name": "Recycled EVA Foam Yoga Block Pair",
        "category": "Yoga",
        "price": 30799.0,
        "image": "assets/images/products/574/main.jpg",
        "rating": 4.2,
        "reviews": 118,
        "description": "The Recycled EVA Foam Yoga Block Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 644,
        "name": "Bodyweight Suspension Strap System with Anchor",
        "category": "Home Gym",
        "price": 929.0,
        "image": "assets/images/products/644/main.jpg",
        "rating": 4.2,
        "reviews": 496,
        "description": "The Bodyweight Suspension Strap System with Anchor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 15,
        "name": "Adjustable Incline Flat Decline Bench",
        "category": "Strength",
        "price": 12479.0,
        "image": "assets/images/products/15/main.jpg",
        "rating": 4.4,
        "reviews": 150,
        "description": "The Adjustable Incline Flat Decline Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 85,
        "name": "Heavy-Duty Commercial Elliptical Trainer",
        "category": "Cardio",
        "price": 31199.0,
        "image": "assets/images/products/85/main.jpg",
        "rating": 5.0,
        "reviews": 167,
        "description": "The Heavy-Duty Commercial Elliptical Trainer is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 435,
        "name": "Smart Workout Tracker Wristband with SpO2 Sensor",
        "category": "Fit Tech",
        "price": 979.0,
        "image": "assets/images/products/435/main.jpg",
        "rating": 4.1,
        "reviews": 403,
        "description": "The Smart Workout Tracker Wristband with SpO2 Sensor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 505,
        "name": "Extreme Mass Gainer Powder (Vanilla 10 lbs)",
        "category": "Supplements",
        "price": 5579.0,
        "image": "assets/images/products/505/main.jpg",
        "rating": 4.7,
        "reviews": 299,
        "description": "The Extreme Mass Gainer Powder (Vanilla 10 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 576,
        "name": "Rectangular Yoga Bolster Pillow Cushion",
        "category": "Yoga",
        "price": 1389.0,
        "image": "assets/images/products/576/main.jpg",
        "rating": 4.6,
        "reviews": 380,
        "description": "The Rectangular Yoga Bolster Pillow Cushion is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 646,
        "name": "High-Density Rubber Gym Flooring Mats (4-Pack)",
        "category": "Home Gym",
        "price": 1539.0,
        "image": "assets/images/products/646/main.jpg",
        "rating": 4.3,
        "reviews": 393,
        "description": "The High-Density Rubber Gym Flooring Mats (4-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 17,
        "name": "Open Ended Trap Bar with Built-in Jack",
        "category": "Strength",
        "price": 11599.0,
        "image": "assets/images/products/17/main.jpg",
        "rating": 4.7,
        "reviews": 53,
        "description": "The Open Ended Trap Bar with Built-in Jack is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 87,
        "name": "Commercial Stepper Mill Climber Machine",
        "category": "Cardio",
        "price": 25999.0,
        "image": "assets/images/products/87/main.jpg",
        "rating": 5.0,
        "reviews": 116,
        "description": "The Commercial Stepper Mill Climber Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 157,
        "name": "Muay Thai Pro Boxing Gloves (12 oz)",
        "category": "Combat",
        "price": 2749.0,
        "image": "assets/images/products/157/main.jpg",
        "rating": 4.5,
        "reviews": 180,
        "description": "The Muay Thai Pro Boxing Gloves (12 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 227,
        "name": "High-Density EVA Foam Roller (36-Inch Full Size)",
        "category": "Recovery",
        "price": 899.0,
        "image": "assets/images/products/227/main.jpg",
        "rating": 4.2,
        "reviews": 408,
        "description": "The High-Density EVA Foam Roller (36-Inch Full Size) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 297,
        "name": "Magnesium Carbonate Pure Gym Chalk Block (8-Pack)",
        "category": "Accessories",
        "price": 4749.0,
        "image": "assets/images/products/297/main.jpg",
        "rating": 4.3,
        "reviews": 322,
        "description": "The Magnesium Carbonate Pure Gym Chalk Block (8-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 437,
        "name": "Smart Speedometer & Cadence Sensor for Bikes",
        "category": "Fit Tech",
        "price": 21399.0,
        "image": "assets/images/products/437/main.jpg",
        "rating": 4.0,
        "reviews": 408,
        "description": "The Smart Speedometer & Cadence Sensor for Bikes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 507,
        "name": "Stimulant-Free Pump Pre-Workout Powder (Unflavored)",
        "category": "Supplements",
        "price": 2899.0,
        "image": "assets/images/products/507/main.jpg",
        "rating": 4.4,
        "reviews": 148,
        "description": "The Stimulant-Free Pump Pre-Workout Powder (Unflavored) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 577,
        "name": "Wood Grain Yoga Wheel Back Stretcher",
        "category": "Yoga",
        "price": 2049.0,
        "image": "assets/images/products/577/main.jpg",
        "rating": 4.1,
        "reviews": 120,
        "description": "The Wood Grain Yoga Wheel Back Stretcher is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 647,
        "name": "Dial Adjustable Dumbbells Pair (10-90 lbs)",
        "category": "Home Gym",
        "price": 22199.0,
        "image": "assets/images/products/647/main.jpg",
        "rating": 4.5,
        "reviews": 86,
        "description": "The Dial Adjustable Dumbbells Pair (10-90 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 18,
        "name": "Rubber Hex Dumbbell Pair (40 lbs)",
        "category": "Strength",
        "price": 5509.0,
        "image": "assets/images/products/18/main.jpg",
        "rating": 4.2,
        "reviews": 162,
        "description": "The Rubber Hex Dumbbell Pair (40 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 88,
        "name": "Ultra-Quiet Magnetic Rowing Machine",
        "category": "Cardio",
        "price": 27549.0,
        "image": "assets/images/products/88/main.jpg",
        "rating": 4.3,
        "reviews": 398,
        "description": "The Ultra-Quiet Magnetic Rowing Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 158,
        "name": "Ergonomic Leather Focus Mitts Pair",
        "category": "Combat",
        "price": 3909.0,
        "image": "assets/images/products/158/main.jpg",
        "rating": 4.7,
        "reviews": 335,
        "description": "The Ergonomic Leather Focus Mitts Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 228,
        "name": "Targeted Calf & Foot Compression Sleeves",
        "category": "Recovery",
        "price": 2539.0,
        "image": "assets/images/products/228/main.jpg",
        "rating": 4.6,
        "reviews": 215,
        "description": "The Targeted Calf & Foot Compression Sleeves is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 298,
        "name": "Heavy Cotton Wrist Wraps with Thumb Loop (24-Inch)",
        "category": "Accessories",
        "price": 529.0,
        "image": "assets/images/products/298/main.jpg",
        "rating": 4.5,
        "reviews": 121,
        "description": "The Heavy Cotton Wrist Wraps with Thumb Loop (24-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 368,
        "name": "Seamless Camo Workout Leggings",
        "category": "Apparel",
        "price": 1549.0,
        "image": "assets/images/products/368/main.jpg",
        "rating": 3.9,
        "reviews": 302,
        "description": "The Seamless Camo Workout Leggings is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 438,
        "name": "Wearable Thermal Muscle Warming Device",
        "category": "Fit Tech",
        "price": 4279.0,
        "image": "assets/images/products/438/main.jpg",
        "rating": 4.5,
        "reviews": 79,
        "description": "The Wearable Thermal Muscle Warming Device is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 508,
        "name": "Micronized Creatine Monohydrate Powder (1kg Bulk)",
        "category": "Supplements",
        "price": 2649.0,
        "image": "assets/images/products/508/main.jpg",
        "rating": 4.8,
        "reviews": 161,
        "description": "The Micronized Creatine Monohydrate Powder (1kg Bulk) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 578,
        "name": "Waterproof Canvas Yoga Mat Bag with Pockets",
        "category": "Yoga",
        "price": 2799.0,
        "image": "assets/images/products/578/main.jpg",
        "rating": 4.8,
        "reviews": 29,
        "description": "The Waterproof Canvas Yoga Mat Bag with Pockets is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 648,
        "name": "Heavy Duty Foldable Flat Weight Bench",
        "category": "Home Gym",
        "price": 7079.0,
        "image": "assets/images/products/648/main.jpg",
        "rating": 4.4,
        "reviews": 48,
        "description": "The Heavy Duty Foldable Flat Weight Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 19,
        "name": "Cast Iron Kettlebell (32kg / 70lbs)",
        "category": "Strength",
        "price": 2019.0,
        "image": "assets/images/products/19/main.jpg",
        "rating": 4.5,
        "reviews": 392,
        "description": "The Cast Iron Kettlebell (32kg / 70lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 89,
        "name": "Heavy-Duty Treadmill with 3.5 HP Continuous Motor",
        "category": "Cardio",
        "price": 43799.0,
        "image": "assets/images/products/89/main.jpg",
        "rating": 4.4,
        "reviews": 222,
        "description": "The Heavy-Duty Treadmill with 3.5 HP Continuous Motor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 299,
        "name": "Heavy-Duty Resistance Loop Bands Set (5 Resistance Levels)",
        "category": "Accessories",
        "price": 3179.0,
        "image": "assets/images/products/299/main.jpg",
        "rating": 4.0,
        "reviews": 56,
        "description": "The Heavy-Duty Resistance Loop Bands Set (5 Resistance Levels) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 369,
        "name": "Performance Quarter-Zip Running Pullover",
        "category": "Apparel",
        "price": 2109.0,
        "image": "assets/images/products/369/main.jpg",
        "rating": 4.7,
        "reviews": 499,
        "description": "The Performance Quarter-Zip Running Pullover is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 439,
        "name": "Wireless Digital Grip Strength Dynamometer Tester",
        "category": "Fit Tech",
        "price": 5759.0,
        "image": "assets/images/products/439/main.jpg",
        "rating": 4.6,
        "reviews": 293,
        "description": "The Wireless Digital Grip Strength Dynamometer Tester is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 509,
        "name": "BCAA Intra-Workout Powder with Electrolytes (Mango 400g)",
        "category": "Supplements",
        "price": 1909.0,
        "image": "assets/images/products/509/main.jpg",
        "rating": 4.3,
        "reviews": 314,
        "description": "The BCAA Intra-Workout Powder with Electrolytes (Mango 400g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 579,
        "name": "Non-Slip PU Leather Yoga Mat (4.5mm)",
        "category": "Yoga",
        "price": 1859.0,
        "image": "assets/images/products/579/main.jpg",
        "rating": 4.3,
        "reviews": 312,
        "description": "The Non-Slip PU Leather Yoga Mat (4.5mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 649,
        "name": "Wall Mounted Multi-Grip Chin-Up Bar",
        "category": "Home Gym",
        "price": 1709.0,
        "image": "assets/images/products/649/main.jpg",
        "rating": 4.8,
        "reviews": 421,
        "description": "The Wall Mounted Multi-Grip Chin-Up Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 20,
        "name": "Half Rack Rig with Safety Spotter Arms",
        "category": "Strength",
        "price": 10279.0,
        "image": "assets/images/products/20/main.jpg",
        "rating": 4.3,
        "reviews": 493,
        "description": "The Half Rack Rig with Safety Spotter Arms is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 90,
        "name": "Air Resistance Cross Trainer Fitness Bike",
        "category": "Cardio",
        "price": 29199.0,
        "image": "assets/images/products/90/main.jpg",
        "rating": 4.3,
        "reviews": 291,
        "description": "The Air Resistance Cross Trainer Fitness Bike is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 160,
        "name": "Double End Strike Bag with Bungee Cord Kit",
        "category": "Combat",
        "price": 1809.0,
        "image": "assets/images/products/160/main.jpg",
        "rating": 3.9,
        "reviews": 403,
        "description": "The Double End Strike Bag with Bungee Cord Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 230,
        "name": "Heat Therapy Electric Knee Massage Wrap",
        "category": "Recovery",
        "price": 454.0,
        "image": "assets/images/products/230/main.jpg",
        "rating": 3.9,
        "reviews": 446,
        "description": "The Heat Therapy Electric Knee Massage Wrap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 300,
        "name": "Self-Locking Nylon Weightlifting Belt (4-Inch)",
        "category": "Accessories",
        "price": 1309.0,
        "image": "assets/images/products/300/main.jpg",
        "rating": 4.8,
        "reviews": 390,
        "description": "The Self-Locking Nylon Weightlifting Belt (4-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 370,
        "name": "Breathable Mesh Inset Athletic Tank",
        "category": "Apparel",
        "price": 1809.0,
        "image": "assets/images/products/370/main.jpg",
        "rating": 3.9,
        "reviews": 127,
        "description": "The Breathable Mesh Inset Athletic Tank is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 440,
        "name": "GPS Running Smartwatch with Music Storage",
        "category": "Fit Tech",
        "price": 15099.0,
        "image": "assets/images/products/440/main.jpg",
        "rating": 4.4,
        "reviews": 123,
        "description": "The GPS Running Smartwatch with Music Storage is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 510,
        "name": "Athlete Joint Support Complex Capsules (90 Capsules)",
        "category": "Supplements",
        "price": 3319.0,
        "image": "assets/images/products/510/main.jpg",
        "rating": 4.6,
        "reviews": 459,
        "description": "The Athlete Joint Support Complex Capsules (90 Capsules) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 580,
        "name": "Natural Eco Cork Yoga Block Pair",
        "category": "Yoga",
        "price": 1409.0,
        "image": "assets/images/products/580/main.jpg",
        "rating": 4.3,
        "reviews": 455,
        "description": "The Natural Eco Cork Yoga Block Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 650,
        "name": "Commercial Suspension Bodyweight Trainer Kit",
        "category": "Home Gym",
        "price": 2259.0,
        "image": "assets/images/products/650/main.jpg",
        "rating": 4.3,
        "reviews": 213,
        "description": "The Commercial Suspension Bodyweight Trainer Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 21,
        "name": "Hard Chrome Olympic Training Bar (20kg)",
        "category": "Strength",
        "price": 13239.0,
        "image": "assets/images/products/21/main.jpg",
        "rating": 4.1,
        "reviews": 312,
        "description": "The Hard Chrome Olympic Training Bar (20kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 91,
        "name": "Foldable Walking Pad with Remote Control",
        "category": "Cardio",
        "price": 3159.0,
        "image": "assets/images/products/91/main.jpg",
        "rating": 4.9,
        "reviews": 496,
        "description": "The Foldable Walking Pad with Remote Control is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 161,
        "name": "Heavy Leather Tear Drop Punching Bag (70 lbs)",
        "category": "Combat",
        "price": 6319.0,
        "image": "assets/images/products/161/main.jpg",
        "rating": 4.1,
        "reviews": 66,
        "description": "The Heavy Leather Tear Drop Punching Bag (70 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 231,
        "name": "Vibrating Massage Ball for Foot & Plantar Fasciitis",
        "category": "Recovery",
        "price": 739.0,
        "image": "assets/images/products/231/main.jpg",
        "rating": 4.3,
        "reviews": 96,
        "description": "The Vibrating Massage Ball for Foot & Plantar Fasciitis is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 301,
        "name": "High-Speed Aluminum Handle Jump Rope",
        "category": "Accessories",
        "price": 879.0,
        "image": "assets/images/products/301/main.jpg",
        "rating": 3.8,
        "reviews": 387,
        "description": "The High-Speed Aluminum Handle Jump Rope is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 371,
        "name": "High-Performance Compression Base Layer Shirt",
        "category": "Apparel",
        "price": 1179.0,
        "image": "assets/images/products/371/main.jpg",
        "rating": 3.8,
        "reviews": 308,
        "description": "The High-Performance Compression Base Layer Shirt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 441,
        "name": "Chest Harness Heart Rate Sensor for Training",
        "category": "Fit Tech",
        "price": 3539.0,
        "image": "assets/images/products/441/main.jpg",
        "rating": 4.4,
        "reviews": 156,
        "description": "The Chest Harness Heart Rate Sensor for Training is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 511,
        "name": "Organic Plant Protein Powder (Vanilla Bean 2 lbs)",
        "category": "Supplements",
        "price": 3239.0,
        "image": "assets/images/products/511/main.jpg",
        "rating": 4.6,
        "reviews": 41,
        "description": "The Organic Plant Protein Powder (Vanilla Bean 2 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 581,
        "name": "Heavy Duty Cotton Yoga Strap with D-Ring",
        "category": "Yoga",
        "price": 1479.0,
        "image": "assets/images/products/581/main.jpg",
        "rating": 4.5,
        "reviews": 432,
        "description": "The Heavy Duty Cotton Yoga Strap with D-Ring is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 651,
        "name": "Heavy Duty Power Tower Pull-Up Dip Station",
        "category": "Home Gym",
        "price": 2819.0,
        "image": "assets/images/products/651/main.jpg",
        "rating": 4.2,
        "reviews": 343,
        "description": "The Heavy Duty Power Tower Pull-Up Dip Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 22,
        "name": "Urethane Coated Weight Plate (35 lbs)",
        "category": "Strength",
        "price": 2799.0,
        "image": "assets/images/products/22/main.jpg",
        "rating": 4.9,
        "reviews": 229,
        "description": "The Urethane Coated Weight Plate (35 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 92,
        "name": "Professional Recumbent Stationary Bike",
        "category": "Cardio",
        "price": 13599.0,
        "image": "assets/images/products/92/main.jpg",
        "rating": 4.8,
        "reviews": 393,
        "description": "The Professional Recumbent Stationary Bike is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 162,
        "name": "MMA Grappling Gloves (4 oz Competition Style)",
        "category": "Combat",
        "price": 2719.0,
        "image": "assets/images/products/162/main.jpg",
        "rating": 3.9,
        "reviews": 26,
        "description": "The MMA Grappling Gloves (4 oz Competition Style) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 232,
        "name": "Multi-Chamber Air Compression Leg Recovery System",
        "category": "Recovery",
        "price": 3699.0,
        "image": "assets/images/products/232/main.jpg",
        "rating": 4.4,
        "reviews": 74,
        "description": "The Multi-Chamber Air Compression Leg Recovery System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 302,
        "name": "Tactical Gym Duffel Bag with Shoe & Wet Compartment",
        "category": "Accessories",
        "price": 5249.0,
        "image": "assets/images/products/302/main.jpg",
        "rating": 4.5,
        "reviews": 211,
        "description": "The Tactical Gym Duffel Bag with Shoe & Wet Compartment is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 372,
        "name": "Stretch Woven Training Shorts (9-Inch)",
        "category": "Apparel",
        "price": 2269.0,
        "image": "assets/images/products/372/main.jpg",
        "rating": 4.5,
        "reviews": 338,
        "description": "The Stretch Woven Training Shorts (9-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 442,
        "name": "Smart Digital Scale with Smartphone App Sync",
        "category": "Fit Tech",
        "price": 3099.0,
        "image": "assets/images/products/442/main.jpg",
        "rating": 4.7,
        "reviews": 315,
        "description": "The Smart Digital Scale with Smartphone App Sync is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 512,
        "name": "Slow-Digesting Micellar Casein Powder (Vanilla 4 lbs)",
        "category": "Supplements",
        "price": 2799.0,
        "image": "assets/images/products/512/main.jpg",
        "rating": 4.5,
        "reviews": 53,
        "description": "The Slow-Digesting Micellar Casein Powder (Vanilla 4 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 582,
        "name": "Buckwheat Meditation Cushion Pillow",
        "category": "Yoga",
        "price": 1719.0,
        "image": "assets/images/products/582/main.jpg",
        "rating": 4.1,
        "reviews": 172,
        "description": "The Buckwheat Meditation Cushion Pillow is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 652,
        "name": "Interlocking Rubber Gym Floor Tiles (12-Pack)",
        "category": "Home Gym",
        "price": 3749.0,
        "image": "assets/images/products/652/main.jpg",
        "rating": 5.0,
        "reviews": 420,
        "description": "The Interlocking Rubber Gym Floor Tiles (12-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 23,
        "name": "Heavy Duty Flat Utility Bench (1000lb Capacity)",
        "category": "Strength",
        "price": 12159.0,
        "image": "assets/images/products/23/main.jpg",
        "rating": 4.0,
        "reviews": 277,
        "description": "The Heavy Duty Flat Utility Bench (1000lb Capacity) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 93,
        "name": "Commercial Fluid Rower with Adjustable Resistance",
        "category": "Cardio",
        "price": 25299.0,
        "image": "assets/images/products/93/main.jpg",
        "rating": 4.3,
        "reviews": 231,
        "description": "The Commercial Fluid Rower with Adjustable Resistance is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 163,
        "name": "Semi-Elastic Boxing Hand Wraps (120-Inch)",
        "category": "Combat",
        "price": 559.0,
        "image": "assets/images/products/163/main.jpg",
        "rating": 4.4,
        "reviews": 41,
        "description": "The Semi-Elastic Boxing Hand Wraps (120-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 233,
        "name": "Mini Pocket Massage Gun for On-The-Go",
        "category": "Recovery",
        "price": 6319.0,
        "image": "assets/images/products/233/main.jpg",
        "rating": 4.3,
        "reviews": 368,
        "description": "The Mini Pocket Massage Gun for On-The-Go is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 303,
        "name": "Magnesium Carbonate Pure Gym Chalk Block (8-Pack)",
        "category": "Accessories",
        "price": 1479.0,
        "image": "assets/images/products/303/main.jpg",
        "rating": 4.7,
        "reviews": 372,
        "description": "The Magnesium Carbonate Pure Gym Chalk Block (8-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 373,
        "name": "Heavy Duty Leather Squat & Deadlift Shoes",
        "category": "Apparel",
        "price": 5619.0,
        "image": "assets/images/products/373/main.jpg",
        "rating": 5.0,
        "reviews": 393,
        "description": "The Heavy Duty Leather Squat & Deadlift Shoes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 443,
        "name": "Pneumatic Compression Arm & Leg Boots System",
        "category": "Fit Tech",
        "price": 2879.0,
        "image": "assets/images/products/443/main.jpg",
        "rating": 4.6,
        "reviews": 232,
        "description": "The Pneumatic Compression Arm & Leg Boots System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 513,
        "name": "High Energy Pre-Workout Formula (Watermelon 30 Servings)",
        "category": "Supplements",
        "price": 3339.0,
        "image": "assets/images/products/513/main.jpg",
        "rating": 4.4,
        "reviews": 247,
        "description": "The High Energy Pre-Workout Formula (Watermelon 30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 583,
        "name": "Spine Release Yoga Wheel (10-Inch)",
        "category": "Yoga",
        "price": 1279.0,
        "image": "assets/images/products/583/main.jpg",
        "rating": 4.7,
        "reviews": 278,
        "description": "The Spine Release Yoga Wheel (10-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 653,
        "name": "Quick-Change Adjustable Dumbbells Pair (5-25 lbs)",
        "category": "Home Gym",
        "price": 26159.0,
        "image": "assets/images/products/653/main.jpg",
        "rating": 4.7,
        "reviews": 150,
        "description": "The Quick-Change Adjustable Dumbbells Pair (5-25 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 24,
        "name": "Powder Coated Cast Iron Kettlebell (12kg)",
        "category": "Strength",
        "price": 4569.0,
        "image": "assets/images/products/24/main.jpg",
        "rating": 3.9,
        "reviews": 346,
        "description": "The Powder Coated Cast Iron Kettlebell (12kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 94,
        "name": "Smart Interactive Spin Bike with Tablet Holder",
        "category": "Cardio",
        "price": 38799.0,
        "image": "assets/images/products/94/main.jpg",
        "rating": 4.3,
        "reviews": 219,
        "description": "The Smart Interactive Spin Bike with Tablet Holder is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 164,
        "name": "Leather Muay Thai Belly Pad Guard",
        "category": "Combat",
        "price": 3179.0,
        "image": "assets/images/products/164/main.jpg",
        "rating": 4.6,
        "reviews": 257,
        "description": "The Leather Muay Thai Belly Pad Guard is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 234,
        "name": "Ergonomic Contour Foam Roller (24-Inch)",
        "category": "Recovery",
        "price": 1489.0,
        "image": "assets/images/products/234/main.jpg",
        "rating": 4.0,
        "reviews": 237,
        "description": "The Ergonomic Contour Foam Roller (24-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 304,
        "name": "Long Pull-Up Assist Resistance Bands Set",
        "category": "Accessories",
        "price": 1389.0,
        "image": "assets/images/products/304/main.jpg",
        "rating": 3.9,
        "reviews": 73,
        "description": "The Long Pull-Up Assist Resistance Bands Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 374,
        "name": "Classic Cotton Gym Graphic Tee",
        "category": "Apparel",
        "price": 1289.0,
        "image": "assets/images/products/374/main.jpg",
        "rating": 4.3,
        "reviews": 319,
        "description": "The Classic Cotton Gym Graphic Tee is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 444,
        "name": "Smart Speed & Jump Counter Rope",
        "category": "Fit Tech",
        "price": 5159.0,
        "image": "assets/images/products/444/main.jpg",
        "rating": 4.3,
        "reviews": 73,
        "description": "The Smart Speed & Jump Counter Rope is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 514,
        "name": "Pure Creatine Monohydrate Capsules (250 Capsules)",
        "category": "Supplements",
        "price": 1479.0,
        "image": "assets/images/products/514/main.jpg",
        "rating": 5.0,
        "reviews": 483,
        "description": "The Pure Creatine Monohydrate Capsules (250 Capsules) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 584,
        "name": "Non-Slip Microfiber Yoga Towel with Grip Dots",
        "category": "Yoga",
        "price": 1329.0,
        "image": "assets/images/products/584/main.jpg",
        "rating": 4.7,
        "reviews": 446,
        "description": "The Non-Slip Microfiber Yoga Towel with Grip Dots is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 654,
        "name": "Foldable Slope Utility Bench for Home Gym",
        "category": "Home Gym",
        "price": 15919.0,
        "image": "assets/images/products/654/main.jpg",
        "rating": 3.8,
        "reviews": 302,
        "description": "The Foldable Slope Utility Bench for Home Gym is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 25,
        "name": "Pro Style Steel Dumbbell Pair (25 lbs)",
        "category": "Strength",
        "price": 4279.0,
        "image": "assets/images/products/25/main.jpg",
        "rating": 4.5,
        "reviews": 222,
        "description": "The Pro Style Steel Dumbbell Pair (25 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 95,
        "name": "Incline Trainer Treadmill with 0-40 Percent Incline",
        "category": "Cardio",
        "price": 28199.0,
        "image": "assets/images/products/95/main.jpg",
        "rating": 4.3,
        "reviews": 451,
        "description": "The Incline Trainer Treadmill with 0-40 Percent Incline is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 165,
        "name": "Pro Leather Boxing Bag (120 lbs / 5ft)",
        "category": "Combat",
        "price": 2679.0,
        "image": "assets/images/products/165/main.jpg",
        "rating": 4.1,
        "reviews": 430,
        "description": "The Pro Leather Boxing Bag (120 lbs / 5ft) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 235,
        "name": "Stainless Steel Muscle Scraper Soft Tissue Tool",
        "category": "Recovery",
        "price": 1859.0,
        "image": "assets/images/products/235/main.jpg",
        "rating": 4.9,
        "reviews": 168,
        "description": "The Stainless Steel Muscle Scraper Soft Tissue Tool is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 305,
        "name": "Figure 8 Weightlifting Straps Pair",
        "category": "Accessories",
        "price": 1389.0,
        "image": "assets/images/products/305/main.jpg",
        "rating": 4.8,
        "reviews": 489,
        "description": "The Figure 8 Weightlifting Straps Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 375,
        "name": "Padded Medium Support Workout Sports Bra",
        "category": "Apparel",
        "price": 3319.0,
        "image": "assets/images/products/375/main.jpg",
        "rating": 4.6,
        "reviews": 255,
        "description": "The Padded Medium Support Workout Sports Bra is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 445,
        "name": "Bluetooth Fitness Tracker Wristband",
        "category": "Fit Tech",
        "price": 829.0,
        "image": "assets/images/products/445/main.jpg",
        "rating": 4.9,
        "reviews": 28,
        "description": "The Bluetooth Fitness Tracker Wristband is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 515,
        "name": "EAA + Electrolyte Recovery Powder (Fruit Punch 30 Servings)",
        "category": "Supplements",
        "price": 2239.0,
        "image": "assets/images/products/515/main.jpg",
        "rating": 4.8,
        "reviews": 479,
        "description": "The EAA + Electrolyte Recovery Powder (Fruit Punch 30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 585,
        "name": "Extra Wide TPE Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 2189.0,
        "image": "assets/images/products/585/main.jpg",
        "rating": 3.8,
        "reviews": 393,
        "description": "The Extra Wide TPE Yoga Mat (6mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 655,
        "name": "Doorway Pull-Up Bar with Padded Handles",
        "category": "Home Gym",
        "price": 2519.0,
        "image": "assets/images/products/655/main.jpg",
        "rating": 4.9,
        "reviews": 196,
        "description": "The Doorway Pull-Up Bar with Padded Handles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 26,
        "name": "Steel Cable Crossover Machine Tower",
        "category": "Strength",
        "price": 87799.0,
        "image": "assets/images/products/26/main.jpg",
        "rating": 4.4,
        "reviews": 308,
        "description": "The Steel Cable Crossover Machine Tower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 96,
        "name": "Heavy Duty Fan Bike for Cross-Training",
        "category": "Cardio",
        "price": 33599.0,
        "image": "assets/images/products/96/main.jpg",
        "rating": 4.3,
        "reviews": 321,
        "description": "The Heavy Duty Fan Bike for Cross-Training is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 166,
        "name": "Training Boxing Gloves (10 oz Lace-Up Style)",
        "category": "Combat",
        "price": 1939.0,
        "image": "assets/images/products/166/main.jpg",
        "rating": 4.1,
        "reviews": 101,
        "description": "The Training Boxing Gloves (10 oz Lace-Up Style) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 236,
        "name": "Therapeutic Heating & Cooling Gel Ice Pack Wrap",
        "category": "Recovery",
        "price": 559.0,
        "image": "assets/images/products/236/main.jpg",
        "rating": 4.3,
        "reviews": 145,
        "description": "The Therapeutic Heating & Cooling Gel Ice Pack Wrap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 306,
        "name": "Liquid Gym Chalk Bottle (250ml Fast-Drying)",
        "category": "Accessories",
        "price": 609.0,
        "image": "assets/images/products/306/main.jpg",
        "rating": 4.6,
        "reviews": 494,
        "description": "The Liquid Gym Chalk Bottle (250ml Fast-Drying) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 376,
        "name": "Ultra-Lightweight Track Running Pants",
        "category": "Apparel",
        "price": 1489.0,
        "image": "assets/images/products/376/main.jpg",
        "rating": 4.0,
        "reviews": 449,
        "description": "The Ultra-Lightweight Track Running Pants is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 446,
        "name": "Smart TENS Unit Muscle Relief Controller",
        "category": "Fit Tech",
        "price": 929.0,
        "image": "assets/images/products/446/main.jpg",
        "rating": 4.7,
        "reviews": 193,
        "description": "The Smart TENS Unit Muscle Relief Controller is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 516,
        "name": "Daily Greens & Superfood Powder Blend (300g)",
        "category": "Supplements",
        "price": 3759.0,
        "image": "assets/images/products/516/main.jpg",
        "rating": 3.9,
        "reviews": 498,
        "description": "The Daily Greens & Superfood Powder Blend (300g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 586,
        "name": "High Density Foam Yoga Block Set with Strap",
        "category": "Yoga",
        "price": 1629.0,
        "image": "assets/images/products/586/main.jpg",
        "rating": 4.3,
        "reviews": 401,
        "description": "The High Density Foam Yoga Block Set with Strap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 656,
        "name": "Professional Suspension Trainer Straps System",
        "category": "Home Gym",
        "price": 1279.0,
        "image": "assets/images/products/656/main.jpg",
        "rating": 4.7,
        "reviews": 182,
        "description": "The Professional Suspension Trainer Straps System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 27,
        "name": "Competition Bumper Plate Pair (20kg)",
        "category": "Strength",
        "price": 5499.0,
        "image": "assets/images/products/27/main.jpg",
        "rating": 4.6,
        "reviews": 299,
        "description": "The Competition Bumper Plate Pair (20kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 97,
        "name": "Under-Desk Treadmill Walking Pad with LED Display",
        "category": "Cardio",
        "price": 42999.0,
        "image": "assets/images/products/97/main.jpg",
        "rating": 4.6,
        "reviews": 286,
        "description": "The Under-Desk Treadmill Walking Pad with LED Display is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 167,
        "name": "Contoured Shin Guards for Kickboxing",
        "category": "Combat",
        "price": 3399.0,
        "image": "assets/images/products/167/main.jpg",
        "rating": 4.0,
        "reviews": 182,
        "description": "The Contoured Shin Guards for Kickboxing is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 237,
        "name": "Deep Tissue Lacrosse Massage Ball Pair",
        "category": "Recovery",
        "price": 849.0,
        "image": "assets/images/products/237/main.jpg",
        "rating": 4.2,
        "reviews": 486,
        "description": "The Deep Tissue Lacrosse Massage Ball Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 307,
        "name": "Weighted Fitness Jump Rope (1 lb Heavy Cable)",
        "category": "Accessories",
        "price": 1099.0,
        "image": "assets/images/products/307/main.jpg",
        "rating": 4.6,
        "reviews": 225,
        "description": "The Weighted Fitness Jump Rope (1 lb Heavy Cable) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 377,
        "name": "Seamless High-Waisted Gym Leggings",
        "category": "Apparel",
        "price": 2049.0,
        "image": "assets/images/products/377/main.jpg",
        "rating": 4.9,
        "reviews": 53,
        "description": "The Seamless High-Waisted Gym Leggings is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 447,
        "name": "Wireless Sports Earbuds with Active Noise Cancellation",
        "category": "Fit Tech",
        "price": 5599.0,
        "image": "assets/images/products/447/main.jpg",
        "rating": 3.8,
        "reviews": 359,
        "description": "The Wireless Sports Earbuds with Active Noise Cancellation is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 517,
        "name": "High Calorie Lean Mass Gainer (Cookies & Cream 5 lbs)",
        "category": "Supplements",
        "price": 6199.0,
        "image": "assets/images/products/517/main.jpg",
        "rating": 3.8,
        "reviews": 500,
        "description": "The High Calorie Lean Mass Gainer (Cookies & Cream 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 587,
        "name": "Multi-Loop Stretching Yoga Belt Strap",
        "category": "Yoga",
        "price": 1599.0,
        "image": "assets/images/products/587/main.jpg",
        "rating": 3.8,
        "reviews": 159,
        "description": "The Multi-Loop Stretching Yoga Belt Strap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 657,
        "name": "Multi-Grip Pull-Up Dip Power Tower Station",
        "category": "Home Gym",
        "price": 1649.0,
        "image": "assets/images/products/657/main.jpg",
        "rating": 4.1,
        "reviews": 276,
        "description": "The Multi-Grip Pull-Up Dip Power Tower Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 28,
        "name": "Multi-Grip Curved Swiss Barbell",
        "category": "Strength",
        "price": 12439.0,
        "image": "assets/images/products/28/main.jpg",
        "rating": 3.9,
        "reviews": 247,
        "description": "The Multi-Grip Curved Swiss Barbell is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 98,
        "name": "Commercial Magnetic Elliptical Machine",
        "category": "Cardio",
        "price": 27399.0,
        "image": "assets/images/products/98/main.jpg",
        "rating": 3.9,
        "reviews": 288,
        "description": "The Commercial Magnetic Elliptical Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 168,
        "name": "Curved Micro Punch Mitts for Precision",
        "category": "Combat",
        "price": 3009.0,
        "image": "assets/images/products/168/main.jpg",
        "rating": 4.6,
        "reviews": 383,
        "description": "The Curved Micro Punch Mitts for Precision is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 238,
        "name": "Inflatable Cold Therapy Ice Plunge Tub",
        "category": "Recovery",
        "price": 14049.0,
        "image": "assets/images/products/238/main.jpg",
        "rating": 4.0,
        "reviews": 87,
        "description": "The Inflatable Cold Therapy Ice Plunge Tub is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 308,
        "name": "Convertible Gym Backpack & Duffel Bag",
        "category": "Accessories",
        "price": 3839.0,
        "image": "assets/images/products/308/main.jpg",
        "rating": 3.9,
        "reviews": 311,
        "description": "The Convertible Gym Backpack & Duffel Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 378,
        "name": "Oversized Heavyweight Gym Hoodie",
        "category": "Apparel",
        "price": 3739.0,
        "image": "assets/images/products/378/main.jpg",
        "rating": 4.0,
        "reviews": 190,
        "description": "The Oversized Heavyweight Gym Hoodie is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 448,
        "name": "Smart Bike Computer with GPS Navigation",
        "category": "Fit Tech",
        "price": 22239.0,
        "image": "assets/images/products/448/main.jpg",
        "rating": 3.9,
        "reviews": 182,
        "description": "The Smart Bike Computer with GPS Navigation is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 518,
        "name": "100% Whey Isolate Protein Powder (Chocolate Fudge 5 lbs)",
        "category": "Supplements",
        "price": 7679.0,
        "image": "assets/images/products/518/main.jpg",
        "rating": 4.5,
        "reviews": 410,
        "description": "The 100% Whey Isolate Protein Powder (Chocolate Fudge 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 588,
        "name": "Organic Cotton Round Yoga Bolster",
        "category": "Yoga",
        "price": 2049.0,
        "image": "assets/images/products/588/main.jpg",
        "rating": 5.0,
        "reviews": 422,
        "description": "The Organic Cotton Round Yoga Bolster is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 658,
        "name": "High Density Rubber Gym Flooring Tile (single)",
        "category": "Home Gym",
        "price": 4409.0,
        "image": "assets/images/products/658/main.jpg",
        "rating": 3.9,
        "reviews": 496,
        "description": "The High Density Rubber Gym Flooring Tile (single) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 29,
        "name": "Foldable Wall Rack with Pull-Up Bar",
        "category": "Strength",
        "price": 12919.0,
        "image": "assets/images/products/29/main.jpg",
        "rating": 4.7,
        "reviews": 393,
        "description": "The Foldable Wall Rack with Pull-Up Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 99,
        "name": "Dual-Handle Hydro Rowing Machine",
        "category": "Cardio",
        "price": 28599.0,
        "image": "assets/images/products/99/main.jpg",
        "rating": 4.7,
        "reviews": 369,
        "description": "The Dual-Handle Hydro Rowing Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 169,
        "name": "Competition Boxing Headgear (Cheek Protection)",
        "category": "Combat",
        "price": 4119.0,
        "image": "assets/images/products/169/main.jpg",
        "rating": 4.4,
        "reviews": 66,
        "description": "The Competition Boxing Headgear (Cheek Protection) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 239,
        "name": "Professional Percussive Massage Gun (8 Speeds)",
        "category": "Recovery",
        "price": 7639.0,
        "image": "assets/images/products/239/main.jpg",
        "rating": 4.6,
        "reviews": 330,
        "description": "The Professional Percussive Massage Gun (8 Speeds) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 309,
        "name": "Smto Sports Liquid Grip Gym Chalk (250ml Bottle)",
        "category": "Accessories",
        "price": 1609.0,
        "image": "assets/images/products/309/main.jpg",
        "rating": 4.8,
        "reviews": 368,
        "description": "The Smto Sports Liquid Grip Gym Chalk (250ml Bottle) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 379,
        "name": "Dry-Fit Sleeveless Muscle Shirt",
        "category": "Apparel",
        "price": 1489.0,
        "image": "assets/images/products/379/main.jpg",
        "rating": 4.4,
        "reviews": 170,
        "description": "The Dry-Fit Sleeveless Muscle Shirt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 449,
        "name": "Continuous Glucose & Workout Monitor Sensor",
        "category": "Fit Tech",
        "price": 4559.0,
        "image": "assets/images/products/449/main.jpg",
        "rating": 4.9,
        "reviews": 479,
        "description": "The Continuous Glucose & Workout Monitor Sensor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 519,
        "name": "Non-Stim Pre-Workout Pump Matrix (300g)",
        "category": "Supplements",
        "price": 1779.0,
        "image": "assets/images/products/519/main.jpg",
        "rating": 4.5,
        "reviews": 315,
        "description": "The Non-Stim Pre-Workout Pump Matrix (300g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 589,
        "name": "Textured Rubber Yoga Wheel Stretcher",
        "category": "Yoga",
        "price": 2709.0,
        "image": "assets/images/products/589/main.jpg",
        "rating": 4.5,
        "reviews": 204,
        "description": "The Textured Rubber Yoga Wheel Stretcher is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 659,
        "name": "Adjustable Dial Dumbbell Set with Tray (5-50 lbs)",
        "category": "Home Gym",
        "price": 30119.0,
        "image": "assets/images/products/659/main.jpg",
        "rating": 4.9,
        "reviews": 259,
        "description": "The Adjustable Dial Dumbbell Set with Tray (5-50 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 30,
        "name": "Commercial Preacher Curl Bench",
        "category": "Strength",
        "price": 8879.0,
        "image": "assets/images/products/30/main.jpg",
        "rating": 4.4,
        "reviews": 79,
        "description": "The Commercial Preacher Curl Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 100,
        "name": "Upright Fitness Exercise Bike with Heart Rate Grips",
        "category": "Cardio",
        "price": 13119.0,
        "image": "assets/images/products/100/main.jpg",
        "rating": 4.0,
        "reviews": 48,
        "description": "The Upright Fitness Exercise Bike with Heart Rate Grips is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 170,
        "name": "Freestanding Heavy Bag with Multi-Zone Targets",
        "category": "Combat",
        "price": 7639.0,
        "image": "assets/images/products/170/main.jpg",
        "rating": 4.5,
        "reviews": 38,
        "description": "The Freestanding Heavy Bag with Multi-Zone Targets is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 240,
        "name": "Textured Hollow Grid Foam Roller (13-Inch)",
        "category": "Recovery",
        "price": 1709.0,
        "image": "assets/images/products/240/main.jpg",
        "rating": 4.1,
        "reviews": 89,
        "description": "The Textured Hollow Grid Foam Roller (13-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 310,
        "name": "Neoprene Wrist & Ankle Support Guard Brace",
        "category": "Accessories",
        "price": 4269.0,
        "image": "assets/images/products/310/main.jpg",
        "rating": 4.4,
        "reviews": 34,
        "description": "The Neoprene Wrist & Ankle Support Guard Brace is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 380,
        "name": "Stretch Athletic Training Shorts (5-Inch)",
        "category": "Apparel",
        "price": 2209.0,
        "image": "assets/images/products/380/main.jpg",
        "rating": 4.9,
        "reviews": 165,
        "description": "The Stretch Athletic Training Shorts (5-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 450,
        "name": "GPS Multisport Watch with Sapphire Crystal Lens",
        "category": "Fit Tech",
        "price": 12099.0,
        "image": "assets/images/products/450/main.jpg",
        "rating": 4.9,
        "reviews": 213,
        "description": "The GPS Multisport Watch with Sapphire Crystal Lens is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 520,
        "name": "Micronized Creatine Monohydrate Powder (300g)",
        "category": "Supplements",
        "price": 1809.0,
        "image": "assets/images/products/520/main.jpg",
        "rating": 4.2,
        "reviews": 411,
        "description": "The Micronized Creatine Monohydrate Powder (300g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 590,
        "name": "Full Zip Canvas Yoga Mat Tote Bag",
        "category": "Yoga",
        "price": 1959.0,
        "image": "assets/images/products/590/main.jpg",
        "rating": 4.7,
        "reviews": 441,
        "description": "The Full Zip Canvas Yoga Mat Tote Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 660,
        "name": "Compact Folding Weight Bench Press",
        "category": "Home Gym",
        "price": 4839.0,
        "image": "assets/images/products/660/main.jpg",
        "rating": 4.0,
        "reviews": 444,
        "description": "The Compact Folding Weight Bench Press is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 31,
        "name": "Rubber Hex Dumbbell Pair (15 lbs)",
        "category": "Strength",
        "price": 4939.0,
        "image": "assets/images/products/31/main.jpg",
        "rating": 4.5,
        "reviews": 103,
        "description": "The Rubber Hex Dumbbell Pair (15 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 101,
        "name": "Smart Motorized Treadmill with Auto-Incline",
        "category": "Cardio",
        "price": 32599.0,
        "image": "assets/images/products/101/main.jpg",
        "rating": 4.7,
        "reviews": 258,
        "description": "The Smart Motorized Treadmill with Auto-Incline is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 171,
        "name": "Heavy Canvas Wrecking Ball Punching Bag",
        "category": "Combat",
        "price": 5119.0,
        "image": "assets/images/products/171/main.jpg",
        "rating": 4.8,
        "reviews": 319,
        "description": "The Heavy Canvas Wrecking Ball Punching Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 241,
        "name": "Graduated Arm Compression Sleeves Pair",
        "category": "Recovery",
        "price": 1419.0,
        "image": "assets/images/products/241/main.jpg",
        "rating": 4.5,
        "reviews": 325,
        "description": "The Graduated Arm Compression Sleeves Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 311,
        "name": "Elastic Ankle Straps for Cable Machine Attachment",
        "category": "Accessories",
        "price": 54799.0,
        "image": "assets/images/products/311/main.jpg",
        "rating": 4.1,
        "reviews": 417,
        "description": "The Elastic Ankle Straps for Cable Machine Attachment is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 381,
        "name": "Thermal Base Layer Compression Leggings",
        "category": "Apparel",
        "price": 2769.0,
        "image": "assets/images/products/381/main.jpg",
        "rating": 4.4,
        "reviews": 282,
        "description": "The Thermal Base Layer Compression Leggings is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 451,
        "name": "Dual-Band Heart Rate Chest Strap (Bluetooth/ANT+)",
        "category": "Fit Tech",
        "price": 5639.0,
        "image": "assets/images/products/451/main.jpg",
        "rating": 4.4,
        "reviews": 257,
        "description": "The Dual-Band Heart Rate Chest Strap (Bluetooth/ANT+) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 521,
        "name": "BCAA Energy Powder Drink Mix (Grape 30 Servings)",
        "category": "Supplements",
        "price": 2569.0,
        "image": "assets/images/products/521/main.jpg",
        "rating": 4.4,
        "reviews": 202,
        "description": "The BCAA Energy Powder Drink Mix (Grape 30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 591,
        "name": "Alignment Line Non-Slip Yoga Mat (5mm)",
        "category": "Yoga",
        "price": 2519.0,
        "image": "assets/images/products/591/main.jpg",
        "rating": 4.4,
        "reviews": 330,
        "description": "The Alignment Line Non-Slip Yoga Mat (5mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 661,
        "name": "Ceiling Mounted Steel Pull-Up Bar Station",
        "category": "Home Gym",
        "price": 1479.0,
        "image": "assets/images/products/661/main.jpg",
        "rating": 3.9,
        "reviews": 364,
        "description": "The Ceiling Mounted Steel Pull-Up Bar Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 32,
        "name": "Cast Iron Kettlebell (20kg / 44lbs)",
        "category": "Strength",
        "price": 4449.0,
        "image": "assets/images/products/32/main.jpg",
        "rating": 4.9,
        "reviews": 497,
        "description": "The Cast Iron Kettlebell (20kg / 44lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 102,
        "name": "Full Body Air Rower with Smartphone Mount",
        "category": "Cardio",
        "price": 51749.0,
        "image": "assets/images/products/102/main.jpg",
        "rating": 4.7,
        "reviews": 221,
        "description": "The Full Body Air Rower with Smartphone Mount is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 172,
        "name": "MMA Hybrid Training Gloves (7 oz)",
        "category": "Combat",
        "price": 2269.0,
        "image": "assets/images/products/172/main.jpg",
        "rating": 4.5,
        "reviews": 415,
        "description": "The MMA Hybrid Training Gloves (7 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 242,
        "name": "Pure Magnesium Chloride Muscle Recovery Spray",
        "category": "Recovery",
        "price": 3099.0,
        "image": "assets/images/products/242/main.jpg",
        "rating": 4.0,
        "reviews": 486,
        "description": "The Pure Magnesium Chloride Muscle Recovery Spray is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 382,
        "name": "Technical Windbreaker Running Jacket",
        "category": "Apparel",
        "price": 2699.0,
        "image": "assets/images/products/382/main.jpg",
        "rating": 4.0,
        "reviews": 362,
        "description": "The Technical Windbreaker Running Jacket is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 452,
        "name": "Smart Wi-Fi Body Composition Glass Scale",
        "category": "Fit Tech",
        "price": 2499.0,
        "image": "assets/images/products/452/main.jpg",
        "rating": 4.9,
        "reviews": 412,
        "description": "The Smart Wi-Fi Body Composition Glass Scale is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 522,
        "name": "ZMA Nighttime Recovery Capsules (90 Capsules)",
        "category": "Supplements",
        "price": 2199.0,
        "image": "assets/images/products/522/main.jpg",
        "rating": 4.8,
        "reviews": 199,
        "description": "The ZMA Nighttime Recovery Capsules (90 Capsules) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 592,
        "name": "Lightweight Travel EVA Foam Yoga Block",
        "category": "Yoga",
        "price": 849.0,
        "image": "assets/images/products/592/main.jpg",
        "rating": 4.2,
        "reviews": 318,
        "description": "The Lightweight Travel EVA Foam Yoga Block is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 662,
        "name": "Bodyweight Suspension Trainer with Door Mount",
        "category": "Home Gym",
        "price": 2919.0,
        "image": "assets/images/products/662/main.jpg",
        "rating": 4.8,
        "reviews": 499,
        "description": "The Bodyweight Suspension Trainer with Door Mount is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 33,
        "name": "Black Oxide Olympic Barbell (7 Foot)",
        "category": "Strength",
        "price": 10639.0,
        "image": "assets/images/products/33/main.jpg",
        "rating": 3.8,
        "reviews": 500,
        "description": "The Black Oxide Olympic Barbell (7 Foot) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 103,
        "name": "Magnetic Spin Bike with 40lb Flywheel",
        "category": "Cardio",
        "price": 25399.0,
        "image": "assets/images/products/103/main.jpg",
        "rating": 4.6,
        "reviews": 27,
        "description": "The Magnetic Spin Bike with 40lb Flywheel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 173,
        "name": "Mexican Style Cotton Hand Wraps (180-Inch)",
        "category": "Combat",
        "price": 409.0,
        "image": "assets/images/products/173/main.jpg",
        "rating": 4.3,
        "reviews": 167,
        "description": "The Mexican Style Cotton Hand Wraps (180-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 243,
        "name": "Electric Heating Pad for Lower Back Pain Relief",
        "category": "Recovery",
        "price": 3639.0,
        "image": "assets/images/products/243/main.jpg",
        "rating": 4.0,
        "reviews": 91,
        "description": "The Electric Heating Pad for Lower Back Pain Relief is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 313,
        "name": "Speed Cable Jump Rope with Ball Bearings & Anti-Slip Handles",
        "category": "Accessories",
        "price": 4549.0,
        "image": "assets/images/products/313/main.jpg",
        "rating": 4.4,
        "reviews": 403,
        "description": "The Speed Cable Jump Rope with Ball Bearings & Anti-Slip Handles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 383,
        "name": "Ribbed Seamless Crop Workout Top",
        "category": "Apparel",
        "price": 1619.0,
        "image": "assets/images/products/383/main.jpg",
        "rating": 4.8,
        "reviews": 66,
        "description": "The Ribbed Seamless Crop Workout Top is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 453,
        "name": "Air Compression Recovery Boots with Control Unit",
        "category": "Fit Tech",
        "price": 6479.0,
        "image": "assets/images/products/453/main.jpg",
        "rating": 4.5,
        "reviews": 428,
        "description": "The Air Compression Recovery Boots with Control Unit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 523,
        "name": "Plant Protein Isolate Powder (Unflavored 2 lbs)",
        "category": "Supplements",
        "price": 4559.0,
        "image": "assets/images/products/523/main.jpg",
        "rating": 4.1,
        "reviews": 255,
        "description": "The Plant Protein Isolate Powder (Unflavored 2 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 593,
        "name": "Cotton Yoga Strap with Metal D-Ring (8ft)",
        "category": "Yoga",
        "price": 1039.0,
        "image": "assets/images/products/593/main.jpg",
        "rating": 4.6,
        "reviews": 73,
        "description": "The Cotton Yoga Strap with Metal D-Ring (8ft) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 663,
        "name": "Heavy Duty Power Tower Station with Push-Up Handles",
        "category": "Home Gym",
        "price": 1979.0,
        "image": "assets/images/products/663/main.jpg",
        "rating": 4.2,
        "reviews": 256,
        "description": "The Heavy Duty Power Tower Station with Push-Up Handles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 34,
        "name": "Steel Plate Loaded Lat Pulldown Machine",
        "category": "Strength",
        "price": 1489.0,
        "image": "assets/images/products/34/main.jpg",
        "rating": 4.1,
        "reviews": 148,
        "description": "The Steel Plate Loaded Lat Pulldown Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 104,
        "name": "Commercial Grade Stair Climber Stepper",
        "category": "Cardio",
        "price": 31799.0,
        "image": "assets/images/products/104/main.jpg",
        "rating": 4.8,
        "reviews": 381,
        "description": "The Commercial Grade Stair Climber Stepper is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 174,
        "name": "Heavy Duty Wall Mount Heavy Bag Hanger Bracket",
        "category": "Combat",
        "price": 5559.0,
        "image": "assets/images/products/174/main.jpg",
        "rating": 4.8,
        "reviews": 71,
        "description": "The Heavy Duty Wall Mount Heavy Bag Hanger Bracket is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 244,
        "name": "Acupressure Foot Massager Roller & Mat Set",
        "category": "Recovery",
        "price": 6739.0,
        "image": "assets/images/products/244/main.jpg",
        "rating": 4.8,
        "reviews": 92,
        "description": "The Acupressure Foot Massager Roller & Mat Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 314,
        "name": "Tactical Gym Duffel & Sports Travel Bag",
        "category": "Accessories",
        "price": 689.0,
        "image": "assets/images/products/314/main.jpg",
        "rating": 4.7,
        "reviews": 92,
        "description": "The Tactical Gym Duffel & Sports Travel Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 384,
        "name": "Tapered Fit Fleece Gym Joggers",
        "category": "Apparel",
        "price": 1429.0,
        "image": "assets/images/products/384/main.jpg",
        "rating": 4.1,
        "reviews": 132,
        "description": "The Tapered Fit Fleece Gym Joggers is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 454,
        "name": "Smart Fitness Tracker Ring (Titanium Edition)",
        "category": "Fit Tech",
        "price": 7959.0,
        "image": "assets/images/products/454/main.jpg",
        "rating": 4.6,
        "reviews": 64,
        "description": "The Smart Fitness Tracker Ring (Titanium Edition) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 524,
        "name": "Micellar Casein Protein Powder (Salted Caramel 2 lbs)",
        "category": "Supplements",
        "price": 5669.0,
        "image": "assets/images/products/524/main.jpg",
        "rating": 4.9,
        "reviews": 246,
        "description": "The Micellar Casein Protein Powder (Salted Caramel 2 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 594,
        "name": "Rectangular Meditation Pillow Cushion",
        "category": "Yoga",
        "price": 2379.0,
        "image": "assets/images/products/594/main.jpg",
        "rating": 5.0,
        "reviews": 468,
        "description": "The Rectangular Meditation Pillow Cushion is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 664,
        "name": "Interlocking Foam & Rubber Gym Mats (8-Pack)",
        "category": "Home Gym",
        "price": 2529.0,
        "image": "assets/images/products/664/main.jpg",
        "rating": 4.0,
        "reviews": 424,
        "description": "The Interlocking Foam & Rubber Gym Mats (8-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 35,
        "name": "Heavy Duty Ab Slab Incline Bench",
        "category": "Strength",
        "price": 7839.0,
        "image": "assets/images/products/35/main.jpg",
        "rating": 4.8,
        "reviews": 414,
        "description": "The Heavy Duty Ab Slab Incline Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 105,
        "name": "Compact Foldable Magnetic Rower",
        "category": "Cardio",
        "price": 31899.0,
        "image": "assets/images/products/105/main.jpg",
        "rating": 4.9,
        "reviews": 87,
        "description": "The Compact Foldable Magnetic Rower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 175,
        "name": "Pro Leather Focus Pads Pair",
        "category": "Combat",
        "price": 3319.0,
        "image": "assets/images/products/175/main.jpg",
        "rating": 4.2,
        "reviews": 78,
        "description": "The Pro Leather Focus Pads Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 245,
        "name": "Air Compression Arm & Shoulder Recovery Sleeve",
        "category": "Recovery",
        "price": 1989.0,
        "image": "assets/images/products/245/main.jpg",
        "rating": 4.1,
        "reviews": 190,
        "description": "The Air Compression Arm & Shoulder Recovery Sleeve is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 315,
        "name": "BEAR GRIP Liquid Chalk Squeeze Tube (200ml)",
        "category": "Accessories",
        "price": 1459.0,
        "image": "assets/images/products/315/main.jpg",
        "rating": 4.8,
        "reviews": 419,
        "description": "The BEAR GRIP Liquid Chalk Squeeze Tube (200ml) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 385,
        "name": "Breathable Mesh Back Performance Tee",
        "category": "Apparel",
        "price": 1359.0,
        "image": "assets/images/products/385/main.jpg",
        "rating": 4.4,
        "reviews": 346,
        "description": "The Breathable Mesh Back Performance Tee is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 455,
        "name": "Bluetooth Heart Rate Armband Monitor Sensor",
        "category": "Fit Tech",
        "price": 4079.0,
        "image": "assets/images/products/455/main.jpg",
        "rating": 4.9,
        "reviews": 128,
        "description": "The Bluetooth Heart Rate Armband Monitor Sensor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 525,
        "name": "Advanced Pre-Workout Powder Formula (Blue Raspberry)",
        "category": "Supplements",
        "price": 2219.0,
        "image": "assets/images/products/525/main.jpg",
        "rating": 4.3,
        "reviews": 420,
        "description": "The Advanced Pre-Workout Powder Formula (Blue Raspberry) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 595,
        "name": "Back Release Roller Yoga Wheel (13-Inch)",
        "category": "Yoga",
        "price": 1059.0,
        "image": "assets/images/products/595/main.jpg",
        "rating": 4.7,
        "reviews": 449,
        "description": "The Back Release Roller Yoga Wheel (13-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 665,
        "name": "Quick-Select Dumbbell Pair (10-55 lbs)",
        "category": "Home Gym",
        "price": 16079.0,
        "image": "assets/images/products/665/main.jpg",
        "rating": 4.3,
        "reviews": 185,
        "description": "The Quick-Select Dumbbell Pair (10-55 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 36,
        "name": "Calibrated Powerlifting Steel Plate (25kg)",
        "category": "Strength",
        "price": 1229.0,
        "image": "assets/images/products/36/main.jpg",
        "rating": 4.9,
        "reviews": 109,
        "description": "The Calibrated Powerlifting Steel Plate (25kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 106,
        "name": "Motorized Treadmill with Bluetooth Speakers",
        "category": "Cardio",
        "price": 29599.0,
        "image": "assets/images/products/106/main.jpg",
        "rating": 4.6,
        "reviews": 311,
        "description": "The Motorized Treadmill with Bluetooth Speakers is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 176,
        "name": "Muay Thai Leather Shin Guards (Large)",
        "category": "Combat",
        "price": 2059.0,
        "image": "assets/images/products/176/main.jpg",
        "rating": 4.4,
        "reviews": 364,
        "description": "The Muay Thai Leather Shin Guards (Large) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 246,
        "name": "Deep Tissue Trigger Point Massage Stick Roller",
        "category": "Recovery",
        "price": 929.0,
        "image": "assets/images/products/246/main.jpg",
        "rating": 4.0,
        "reviews": 240,
        "description": "The Deep Tissue Trigger Point Massage Stick Roller is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 316,
        "name": "Ergonomic Wrist Support Guard Brace with Thumb Loop",
        "category": "Accessories",
        "price": 3659.0,
        "image": "assets/images/products/316/main.jpg",
        "rating": 4.3,
        "reviews": 371,
        "description": "The Ergonomic Wrist Support Guard Brace with Thumb Loop is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 386,
        "name": "High-Support Cross-Back Sports Bra",
        "category": "Apparel",
        "price": 2539.0,
        "image": "assets/images/products/386/main.jpg",
        "rating": 4.4,
        "reviews": 437,
        "description": "The High-Support Cross-Back Sports Bra is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 456,
        "name": "Wearable Electrostimulation EMS Abdominal Belt",
        "category": "Fit Tech",
        "price": 4319.0,
        "image": "assets/images/products/456/main.jpg",
        "rating": 4.4,
        "reviews": 84,
        "description": "The Wearable Electrostimulation EMS Abdominal Belt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 526,
        "name": "Micronized Creatine Monohydrate Capsules (120 Capsules)",
        "category": "Supplements",
        "price": 2139.0,
        "image": "assets/images/products/526/main.jpg",
        "rating": 3.9,
        "reviews": 103,
        "description": "The Micronized Creatine Monohydrate Capsules (120 Capsules) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 596,
        "name": "Sweat Absorbent Yoga Mat Towel Full Size",
        "category": "Yoga",
        "price": 2289.0,
        "image": "assets/images/products/596/main.jpg",
        "rating": 4.5,
        "reviews": 162,
        "description": "The Sweat Absorbent Yoga Mat Towel Full Size is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 666,
        "name": "Foldable Adjustable FID Weight Bench",
        "category": "Home Gym",
        "price": 11439.0,
        "image": "assets/images/products/666/main.jpg",
        "rating": 5.0,
        "reviews": 131,
        "description": "The Foldable Adjustable FID Weight Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 37,
        "name": "Steel Parallel Bars Dip Station",
        "category": "Strength",
        "price": 1599.0,
        "image": "assets/images/products/37/main.jpg",
        "rating": 4.3,
        "reviews": 133,
        "description": "The Steel Parallel Bars Dip Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 107,
        "name": "High-Capacity Air Resistance Bike",
        "category": "Cardio",
        "price": 34999.0,
        "image": "assets/images/products/107/main.jpg",
        "rating": 4.7,
        "reviews": 283,
        "description": "The High-Capacity Air Resistance Bike is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 177,
        "name": "Full Face Leather Sparring Headgear",
        "category": "Combat",
        "price": 3999.0,
        "image": "assets/images/products/177/main.jpg",
        "rating": 3.9,
        "reviews": 154,
        "description": "The Full Face Leather Sparring Headgear is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 247,
        "name": "High-Density Smooth EVA Foam Roller (18-Inch)",
        "category": "Recovery",
        "price": 1299.0,
        "image": "assets/images/products/247/main.jpg",
        "rating": 4.3,
        "reviews": 210,
        "description": "The High-Density Smooth EVA Foam Roller (18-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 317,
        "name": "Fabric Resistance Loop Bands Pack of 4",
        "category": "Accessories",
        "price": 649.0,
        "image": "assets/images/products/317/main.jpg",
        "rating": 4.7,
        "reviews": 426,
        "description": "The Fabric Resistance Loop Bands Pack of 4 is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 387,
        "name": "Barefoot Style Cross-Training Shoes",
        "category": "Apparel",
        "price": 6699.0,
        "image": "assets/images/products/387/main.jpg",
        "rating": 4.6,
        "reviews": 105,
        "description": "The Barefoot Style Cross-Training Shoes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 457,
        "name": "Wireless Open-Ear Bone Conduction Sport Headphones",
        "category": "Fit Tech",
        "price": 4399.0,
        "image": "assets/images/products/457/main.jpg",
        "rating": 4.9,
        "reviews": 253,
        "description": "The Wireless Open-Ear Bone Conduction Sport Headphones is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 527,
        "name": "Essential Amino Acid EAA Energy Powder (Peach Mango)",
        "category": "Supplements",
        "price": 1399.0,
        "image": "assets/images/products/527/main.jpg",
        "rating": 4.0,
        "reviews": 224,
        "description": "The Essential Amino Acid EAA Energy Powder (Peach Mango) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 597,
        "name": "Premium Natural Rubber Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 2849.0,
        "image": "assets/images/products/597/main.jpg",
        "rating": 4.6,
        "reviews": 475,
        "description": "The Premium Natural Rubber Yoga Mat (6mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 667,
        "name": "Heavy Duty Doorway Chin Up Pull Up Bar",
        "category": "Home Gym",
        "price": 2699.0,
        "image": "assets/images/products/667/main.jpg",
        "rating": 4.8,
        "reviews": 71,
        "description": "The Heavy Duty Doorway Chin Up Pull Up Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 38,
        "name": "Rubber Coated Hex Dumbbell (50 lbs)",
        "category": "Strength",
        "price": 1639.0,
        "image": "assets/images/products/38/main.jpg",
        "rating": 5.0,
        "reviews": 357,
        "description": "The Rubber Coated Hex Dumbbell (50 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 108,
        "name": "Desk Treadmill Under-Desk Walking Pad",
        "category": "Cardio",
        "price": 44399.0,
        "image": "assets/images/products/108/main.jpg",
        "rating": 4.0,
        "reviews": 466,
        "description": "The Desk Treadmill Under-Desk Walking Pad is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 178,
        "name": "Leather Speed Bag (Small 8x5 Inch)",
        "category": "Combat",
        "price": 2799.0,
        "image": "assets/images/products/178/main.jpg",
        "rating": 4.3,
        "reviews": 288,
        "description": "The Leather Speed Bag (Small 8x5 Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 248,
        "name": "Percussive Massage Gun with Heated Massage Head",
        "category": "Recovery",
        "price": 9619.0,
        "image": "assets/images/products/248/main.jpg",
        "rating": 4.9,
        "reviews": 47,
        "description": "The Percussive Massage Gun with Heated Massage Head is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 388,
        "name": "Relaxed Fit Heavy Weightlifting Graphic Tee",
        "category": "Apparel",
        "price": 1469.0,
        "image": "assets/images/products/388/main.jpg",
        "rating": 4.0,
        "reviews": 335,
        "description": "The Relaxed Fit Heavy Weightlifting Graphic Tee is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 458,
        "name": "Smart Sensor Speedometer for Cycling",
        "category": "Fit Tech",
        "price": 18639.0,
        "image": "assets/images/products/458/main.jpg",
        "rating": 4.3,
        "reviews": 313,
        "description": "The Smart Sensor Speedometer for Cycling is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 528,
        "name": "High-Potency Vitamin D3 + K2 Softgels (120 Softgels)",
        "category": "Supplements",
        "price": 1169.0,
        "image": "assets/images/products/528/main.jpg",
        "rating": 3.8,
        "reviews": 182,
        "description": "The High-Potency Vitamin D3 + K2 Softgels (120 Softgels) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 598,
        "name": "High Density Cork Yoga Block Single",
        "category": "Yoga",
        "price": 1069.0,
        "image": "assets/images/products/598/main.jpg",
        "rating": 4.1,
        "reviews": 474,
        "description": "The High Density Cork Yoga Block Single is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 668,
        "name": "Professional Bodyweight Suspension Trainer Kit",
        "category": "Home Gym",
        "price": 1749.0,
        "image": "assets/images/products/668/main.jpg",
        "rating": 4.6,
        "reviews": 333,
        "description": "The Professional Bodyweight Suspension Trainer Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 39,
        "name": "Ergonomic Handle Kettlebell (8kg)",
        "category": "Strength",
        "price": 3219.0,
        "image": "assets/images/products/39/main.jpg",
        "rating": 4.3,
        "reviews": 151,
        "description": "The Ergonomic Handle Kettlebell (8kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 109,
        "name": "Recumbent Bike with Magnetic Resistance and LCD",
        "category": "Cardio",
        "price": 17079.0,
        "image": "assets/images/products/109/main.jpg",
        "rating": 4.1,
        "reviews": 351,
        "description": "The Recumbent Bike with Magnetic Resistance and LCD is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 179,
        "name": "Water-Filled Heavy Punching Bag (120 lbs)",
        "category": "Combat",
        "price": 4959.0,
        "image": "assets/images/products/179/main.jpg",
        "rating": 4.4,
        "reviews": 52,
        "description": "The Water-Filled Heavy Punching Bag (120 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 249,
        "name": "Cold Therapy Ice Recovery Wrap for Knees & Ankles",
        "category": "Recovery",
        "price": 469.0,
        "image": "assets/images/products/249/main.jpg",
        "rating": 3.8,
        "reviews": 270,
        "description": "The Cold Therapy Ice Recovery Wrap for Knees & Ankles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 389,
        "name": "Compression Long Sleeve Rashguard Shirt",
        "category": "Apparel",
        "price": 2329.0,
        "image": "assets/images/products/389/main.jpg",
        "rating": 4.2,
        "reviews": 465,
        "description": "The Compression Long Sleeve Rashguard Shirt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 459,
        "name": "Digital Hand Grip Dynamometer Tester (90kg / 200lbs)",
        "category": "Fit Tech",
        "price": 7359.0,
        "image": "assets/images/products/459/main.jpg",
        "rating": 4.8,
        "reviews": 395,
        "description": "The Digital Hand Grip Dynamometer Tester (90kg / 200lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 529,
        "name": "High Calorie Mass Gainer Powder (Chocolate Peanut Butter 6 lbs)",
        "category": "Supplements",
        "price": 869.0,
        "image": "assets/images/products/529/main.jpg",
        "rating": 3.9,
        "reviews": 69,
        "description": "The High Calorie Mass Gainer Powder (Chocolate Peanut Butter 6 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 599,
        "name": "Yoga Stretching Strap with Loop Handles",
        "category": "Yoga",
        "price": 1209.0,
        "image": "assets/images/products/599/main.jpg",
        "rating": 4.2,
        "reviews": 26,
        "description": "The Yoga Stretching Strap with Loop Handles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 669,
        "name": "Power Tower Pull Up Dip Station with Padded Armrests",
        "category": "Home Gym",
        "price": 2879.0,
        "image": "assets/images/products/669/main.jpg",
        "rating": 4.2,
        "reviews": 71,
        "description": "The Power Tower Pull Up Dip Station with Padded Armrests is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 40,
        "name": "Commercial Leg Press Hack Squat Machine",
        "category": "Strength",
        "price": 13479.0,
        "image": "assets/images/products/40/main.jpg",
        "rating": 4.5,
        "reviews": 142,
        "description": "The Commercial Leg Press Hack Squat Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 110,
        "name": "Water Rower Machine with Real Wood Frame",
        "category": "Cardio",
        "price": 50749.0,
        "image": "assets/images/products/110/main.jpg",
        "rating": 4.1,
        "reviews": 250,
        "description": "The Water Rower Machine with Real Wood Frame is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 180,
        "name": "Hook & Loop Training Boxing Gloves (16 oz)",
        "category": "Combat",
        "price": 2209.0,
        "image": "assets/images/products/180/main.jpg",
        "rating": 4.7,
        "reviews": 345,
        "description": "The Hook & Loop Training Boxing Gloves (16 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 250,
        "name": "Stainless Steel IASTM Muscle Scraping Tool",
        "category": "Recovery",
        "price": 1409.0,
        "image": "assets/images/products/250/main.jpg",
        "rating": 4.4,
        "reviews": 490,
        "description": "The Stainless Steel IASTM Muscle Scraping Tool is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 390,
        "name": "High-Waisted Squat-Proof Workout Leggings",
        "category": "Apparel",
        "price": 1759.0,
        "image": "assets/images/products/390/main.jpg",
        "rating": 4.2,
        "reviews": 312,
        "description": "The High-Waisted Squat-Proof Workout Leggings is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 460,
        "name": "GPS Smartwatch with Solar Charging Lens",
        "category": "Fit Tech",
        "price": 9099.0,
        "image": "assets/images/products/460/main.jpg",
        "rating": 3.8,
        "reviews": 136,
        "description": "The GPS Smartwatch with Solar Charging Lens is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 530,
        "name": "Hydrolyzed Whey Protein Isolate (Cookies & Cream 5 lbs)",
        "category": "Supplements",
        "price": 5439.0,
        "image": "assets/images/products/530/main.jpg",
        "rating": 4.5,
        "reviews": 233,
        "description": "The Hydrolyzed Whey Protein Isolate (Cookies & Cream 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 600,
        "name": "Soft Velvet Meditation Bolster Cushion",
        "category": "Yoga",
        "price": 1209.0,
        "image": "assets/images/products/600/main.jpg",
        "rating": 4.6,
        "reviews": 460,
        "description": "The Soft Velvet Meditation Bolster Cushion is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 670,
        "name": "High Density Rubber Gym Mat Roll (4ft x 10ft)",
        "category": "Home Gym",
        "price": 2859.0,
        "image": "assets/images/products/670/main.jpg",
        "rating": 3.9,
        "reviews": 178,
        "description": "The High Density Rubber Gym Mat Roll (4ft x 10ft) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 41,
        "name": "Cerakote Coated Olympic Barbell (Red/Black)",
        "category": "Strength",
        "price": 10159.0,
        "image": "assets/images/products/41/main.jpg",
        "rating": 4.6,
        "reviews": 142,
        "description": "The Cerakote Coated Olympic Barbell (Red/Black) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 111,
        "name": "Commercial Curved Manual Running Treadmill",
        "category": "Cardio",
        "price": 69799.0,
        "image": "assets/images/products/111/main.jpg",
        "rating": 4.1,
        "reviews": 188,
        "description": "The Commercial Curved Manual Running Treadmill is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 181,
        "name": "Heavy Duty Ceiling Mount Swivel Hanger",
        "category": "Combat",
        "price": 5439.0,
        "image": "assets/images/products/181/main.jpg",
        "rating": 4.5,
        "reviews": 499,
        "description": "The Heavy Duty Ceiling Mount Swivel Hanger is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 251,
        "name": "Air Compression Calf & Foot Massager",
        "category": "Recovery",
        "price": 10279.0,
        "image": "assets/images/products/251/main.jpg",
        "rating": 4.2,
        "reviews": 100,
        "description": "The Air Compression Calf & Foot Massager is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 391,
        "name": "Athletic Zip-Up Fleece Hoodie Jacket",
        "category": "Apparel",
        "price": 3359.0,
        "image": "assets/images/products/391/main.jpg",
        "rating": 3.9,
        "reviews": 255,
        "description": "The Athletic Zip-Up Fleece Hoodie Jacket is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 461,
        "name": "Precision Heart Rate Monitor Chest Strap",
        "category": "Fit Tech",
        "price": 4739.0,
        "image": "assets/images/products/461/main.jpg",
        "rating": 4.6,
        "reviews": 302,
        "description": "The Precision Heart Rate Monitor Chest Strap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 531,
        "name": "High-Stim Pre-Workout Energy Powder (Green Apple)",
        "category": "Supplements",
        "price": 2659.0,
        "image": "assets/images/products/531/main.jpg",
        "rating": 4.5,
        "reviews": 330,
        "description": "The High-Stim Pre-Workout Energy Powder (Green Apple) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 601,
        "name": "Ergonomic Yoga Wheel Stretcher Device",
        "category": "Yoga",
        "price": 1869.0,
        "image": "assets/images/products/601/main.jpg",
        "rating": 5.0,
        "reviews": 447,
        "description": "The Ergonomic Yoga Wheel Stretcher Device is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 671,
        "name": "Adjustable Weight Dumbbells Set (5-52.5 lbs Pair)",
        "category": "Home Gym",
        "price": 20039.0,
        "image": "assets/images/products/671/main.jpg",
        "rating": 4.3,
        "reviews": 256,
        "description": "The Adjustable Weight Dumbbells Set (5-52.5 lbs Pair) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 42,
        "name": "Fractional Steel Change Plate Set (0.25kg - 5kg)",
        "category": "Strength",
        "price": 1449.0,
        "image": "assets/images/products/42/main.jpg",
        "rating": 3.9,
        "reviews": 146,
        "description": "The Fractional Steel Change Plate Set (0.25kg - 5kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 112,
        "name": "Indoor Studio Cycle Bike with Silent Belt Drive",
        "category": "Cardio",
        "price": 18399.0,
        "image": "assets/images/products/112/main.jpg",
        "rating": 4.3,
        "reviews": 103,
        "description": "The Indoor Studio Cycle Bike with Silent Belt Drive is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 182,
        "name": "Curved Thai Kick Pads (Pair)",
        "category": "Combat",
        "price": 2499.0,
        "image": "assets/images/products/182/main.jpg",
        "rating": 4.4,
        "reviews": 39,
        "description": "The Curved Thai Kick Pads (Pair) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 252,
        "name": "Pure Epsom Salt Muscle Recovery Soak (10 lbs)",
        "category": "Recovery",
        "price": 2499.0,
        "image": "assets/images/products/252/main.jpg",
        "rating": 4.6,
        "reviews": 305,
        "description": "The Pure Epsom Salt Muscle Recovery Soak (10 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 392,
        "name": "Lightweight 2-in-1 Running Shorts with Compression Liner",
        "category": "Apparel",
        "price": 1369.0,
        "image": "assets/images/products/392/main.jpg",
        "rating": 4.1,
        "reviews": 221,
        "description": "The Lightweight 2-in-1 Running Shorts with Compression Liner is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 462,
        "name": "Smart Bluetooth Body Composition Analyzer Scale",
        "category": "Fit Tech",
        "price": 3899.0,
        "image": "assets/images/products/462/main.jpg",
        "rating": 4.4,
        "reviews": 171,
        "description": "The Smart Bluetooth Body Composition Analyzer Scale is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 532,
        "name": "Pure Micronized Creatine Powder (500g Tub)",
        "category": "Supplements",
        "price": 25749.0,
        "image": "assets/images/products/532/main.jpg",
        "rating": 4.3,
        "reviews": 423,
        "description": "The Pure Micronized Creatine Powder (500g Tub) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 602,
        "name": "Canvas Yoga Mat Backpack Bag",
        "category": "Yoga",
        "price": 3399.0,
        "image": "assets/images/products/602/main.jpg",
        "rating": 4.8,
        "reviews": 197,
        "description": "The Canvas Yoga Mat Backpack Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 672,
        "name": "Space-Saving Foldable Incline Decline Bench",
        "category": "Home Gym",
        "price": 6599.0,
        "image": "assets/images/products/672/main.jpg",
        "rating": 4.8,
        "reviews": 96,
        "description": "The Space-Saving Foldable Incline Decline Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 43,
        "name": "Adjustable Speed Bench with Transport Wheels",
        "category": "Strength",
        "price": 15359.0,
        "image": "assets/images/products/43/main.jpg",
        "rating": 4.4,
        "reviews": 395,
        "description": "The Adjustable Speed Bench with Transport Wheels is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 113,
        "name": "Heavy-Duty Elliptical Trainer with 20 Inch Stride",
        "category": "Cardio",
        "price": 38399.0,
        "image": "assets/images/products/113/main.jpg",
        "rating": 4.2,
        "reviews": 263,
        "description": "The Heavy-Duty Elliptical Trainer with 20 Inch Stride is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 183,
        "name": "Grappling Dummy for BJJ & MMA Training (70 lbs)",
        "category": "Combat",
        "price": 4659.0,
        "image": "assets/images/products/183/main.jpg",
        "rating": 4.5,
        "reviews": 307,
        "description": "The Grappling Dummy for BJJ & MMA Training (70 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 253,
        "name": "Electric Cordless Heated Neck & Shoulder Massager",
        "category": "Recovery",
        "price": 8719.0,
        "image": "assets/images/products/253/main.jpg",
        "rating": 4.4,
        "reviews": 257,
        "description": "The Electric Cordless Heated Neck & Shoulder Massager is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 393,
        "name": "Performance Muscle Tank Top with Drop Armholes",
        "category": "Apparel",
        "price": 1319.0,
        "image": "assets/images/products/393/main.jpg",
        "rating": 4.9,
        "reviews": 441,
        "description": "The Performance Muscle Tank Top with Drop Armholes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 463,
        "name": "Wearable Pulse Oximeter Sleep & Workout Tracker",
        "category": "Fit Tech",
        "price": 5279.0,
        "image": "assets/images/products/463/main.jpg",
        "rating": 4.7,
        "reviews": 398,
        "description": "The Wearable Pulse Oximeter Sleep & Workout Tracker is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 533,
        "name": "BCAA 2:1:1 Intra-Workout Powder (Lemonade 30 Servings)",
        "category": "Supplements",
        "price": 1729.0,
        "image": "assets/images/products/533/main.jpg",
        "rating": 4.9,
        "reviews": 149,
        "description": "The BCAA 2:1:1 Intra-Workout Powder (Lemonade 30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 603,
        "name": "Non-Slip Travel Foldable Yoga Mat (1.5mm)",
        "category": "Yoga",
        "price": 1679.0,
        "image": "assets/images/products/603/main.jpg",
        "rating": 4.7,
        "reviews": 482,
        "description": "The Non-Slip Travel Foldable Yoga Mat (1.5mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 673,
        "name": "Wall-Mounted Heavy Steel Pull-Up Bar",
        "category": "Home Gym",
        "price": 919.0,
        "image": "assets/images/products/673/main.jpg",
        "rating": 4.7,
        "reviews": 138,
        "description": "The Wall-Mounted Heavy Steel Pull-Up Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 44,
        "name": "Cast Iron Kettlebell (28kg / 62lbs)",
        "category": "Strength",
        "price": 2769.0,
        "image": "assets/images/products/44/main.jpg",
        "rating": 4.8,
        "reviews": 122,
        "description": "The Cast Iron Kettlebell (28kg / 62lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 114,
        "name": "Foldable Electric Treadmill with Cushioning System",
        "category": "Cardio",
        "price": 28799.0,
        "image": "assets/images/products/114/main.jpg",
        "rating": 4.3,
        "reviews": 488,
        "description": "The Foldable Electric Treadmill with Cushioning System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 184,
        "name": "Gel Padded Boxing Hand Wraps Pair",
        "category": "Combat",
        "price": 1979.0,
        "image": "assets/images/products/184/main.jpg",
        "rating": 4.8,
        "reviews": 83,
        "description": "The Gel Padded Boxing Hand Wraps Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 254,
        "name": "Soft Density Foam Roller for Gentle Muscle Release",
        "category": "Recovery",
        "price": 1889.0,
        "image": "assets/images/products/254/main.jpg",
        "rating": 3.9,
        "reviews": 360,
        "description": "The Soft Density Foam Roller for Gentle Muscle Release is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 394,
        "name": "Tapered Athletic Sweatpants with Zipper Pockets",
        "category": "Apparel",
        "price": 2479.0,
        "image": "assets/images/products/394/main.jpg",
        "rating": 4.0,
        "reviews": 106,
        "description": "The Tapered Athletic Sweatpants with Zipper Pockets is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 464,
        "name": "Smart LED Counter Jump Rope",
        "category": "Fit Tech",
        "price": 1189.0,
        "image": "assets/images/products/464/main.jpg",
        "rating": 4.3,
        "reviews": 470,
        "description": "The Smart LED Counter Jump Rope is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 534,
        "name": "Daily Multivitamin for Men & Women (120 Tablets)",
        "category": "Supplements",
        "price": 1389.0,
        "image": "assets/images/products/534/main.jpg",
        "rating": 4.0,
        "reviews": 179,
        "description": "The Daily Multivitamin for Men & Women (120 Tablets) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 604,
        "name": "High Density EVA Foam Yoga Block Pair (4-Inch)",
        "category": "Yoga",
        "price": 1289.0,
        "image": "assets/images/products/604/main.jpg",
        "rating": 4.7,
        "reviews": 260,
        "description": "The High Density EVA Foam Yoga Block Pair (4-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 674,
        "name": "Suspension Trainer System with Extension Strap",
        "category": "Home Gym",
        "price": 1009.0,
        "image": "assets/images/products/674/main.jpg",
        "rating": 4.2,
        "reviews": 347,
        "description": "The Suspension Trainer System with Extension Strap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 45,
        "name": "Fixed Rubber Barbell Set (Straight Bar)",
        "category": "Strength",
        "price": 15919.0,
        "image": "assets/images/products/45/main.jpg",
        "rating": 4.2,
        "reviews": 235,
        "description": "The Fixed Rubber Barbell Set (Straight Bar) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 115,
        "name": "Air Resistance Rower with Wireless Heart Rate Receiver",
        "category": "Cardio",
        "price": 46999.0,
        "image": "assets/images/products/115/main.jpg",
        "rating": 3.8,
        "reviews": 205,
        "description": "The Air Resistance Rower with Wireless Heart Rate Receiver is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 185,
        "name": "Leather Boxing Sparring Gloves (14 oz)",
        "category": "Combat",
        "price": 3649.0,
        "image": "assets/images/products/185/main.jpg",
        "rating": 4.0,
        "reviews": 391,
        "description": "The Leather Boxing Sparring Gloves (14 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 255,
        "name": "Double Peanut Muscle Massage Ball for Spine",
        "category": "Recovery",
        "price": 679.0,
        "image": "assets/images/products/255/main.jpg",
        "rating": 4.1,
        "reviews": 198,
        "description": "The Double Peanut Muscle Massage Ball for Spine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 395,
        "name": "Dry-Fit Compression Short Sleeve Rashguard",
        "category": "Apparel",
        "price": 1389.0,
        "image": "assets/images/products/395/main.jpg",
        "rating": 4.9,
        "reviews": 279,
        "description": "The Dry-Fit Compression Short Sleeve Rashguard is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 465,
        "name": "Waterproof Fitness Tracker Wristband",
        "category": "Fit Tech",
        "price": 529.0,
        "image": "assets/images/products/465/main.jpg",
        "rating": 5.0,
        "reviews": 472,
        "description": "The Waterproof Fitness Tracker Wristband is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 535,
        "name": "Organic Vegan Plant Protein Powder (Chocolate Silk 2.5 lbs)",
        "category": "Supplements",
        "price": 8839.0,
        "image": "assets/images/products/535/main.jpg",
        "rating": 4.0,
        "reviews": 166,
        "description": "The Organic Vegan Plant Protein Powder (Chocolate Silk 2.5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 605,
        "name": "Adjustable Cotton Yoga Belt Strap (8 Feet)",
        "category": "Yoga",
        "price": 2589.0,
        "image": "assets/images/products/605/main.jpg",
        "rating": 4.0,
        "reviews": 258,
        "description": "The Adjustable Cotton Yoga Belt Strap (8 Feet) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 675,
        "name": "Multi-Station Power Tower Dip Pull-Up Station",
        "category": "Home Gym",
        "price": 2639.0,
        "image": "assets/images/products/675/main.jpg",
        "rating": 4.9,
        "reviews": 63,
        "description": "The Multi-Station Power Tower Dip Pull-Up Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 46,
        "name": "Heavy Duty Plate Storage Tree Tower",
        "category": "Strength",
        "price": 7239.0,
        "image": "assets/images/products/46/main.jpg",
        "rating": 4.6,
        "reviews": 355,
        "description": "The Heavy Duty Plate Storage Tree Tower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 116,
        "name": "Heavy-Duty Fan Air Bike with Custom Workout Modes",
        "category": "Cardio",
        "price": 41599.0,
        "image": "assets/images/products/116/main.jpg",
        "rating": 4.9,
        "reviews": 239,
        "description": "The Heavy-Duty Fan Air Bike with Custom Workout Modes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 186,
        "name": "Pro Muay Thai Belly & Rib Guard Protector",
        "category": "Combat",
        "price": 4989.0,
        "image": "assets/images/products/186/main.jpg",
        "rating": 4.3,
        "reviews": 272,
        "description": "The Pro Muay Thai Belly & Rib Guard Protector is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 256,
        "name": "Portable Insulated Ice Bath Tub Container",
        "category": "Recovery",
        "price": 23949.0,
        "image": "assets/images/products/256/main.jpg",
        "rating": 3.9,
        "reviews": 243,
        "description": "The Portable Insulated Ice Bath Tub Container is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 396,
        "name": "Seamless Ribbed Workout Leggings & Top Set",
        "category": "Apparel",
        "price": 1429.0,
        "image": "assets/images/products/396/main.jpg",
        "rating": 4.4,
        "reviews": 148,
        "description": "The Seamless Ribbed Workout Leggings & Top Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 466,
        "name": "Wireless TENS EMS Muscle Massager Unit",
        "category": "Fit Tech",
        "price": 7579.0,
        "image": "assets/images/products/466/main.jpg",
        "rating": 5.0,
        "reviews": 226,
        "description": "The Wireless TENS EMS Muscle Massager Unit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 536,
        "name": "Nighttime Casein Protein Powder (Vanilla Cream 4 lbs)",
        "category": "Supplements",
        "price": 3989.0,
        "image": "assets/images/products/536/main.jpg",
        "rating": 3.9,
        "reviews": 153,
        "description": "The Nighttime Casein Protein Powder (Vanilla Cream 4 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 606,
        "name": "Buckwheat Meditation Zafu Pillow Cushion",
        "category": "Yoga",
        "price": 1539.0,
        "image": "assets/images/products/606/main.jpg",
        "rating": 4.6,
        "reviews": 92,
        "description": "The Buckwheat Meditation Zafu Pillow Cushion is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 676,
        "name": "Heavy Duty Interlocking Gym Floor Tiles (16-Pack)",
        "category": "Home Gym",
        "price": 3389.0,
        "image": "assets/images/products/676/main.jpg",
        "rating": 4.6,
        "reviews": 439,
        "description": "The Heavy Duty Interlocking Gym Floor Tiles (16-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 47,
        "name": "Multi-Grip Landmine Attachment for Barbells",
        "category": "Strength",
        "price": 12799.0,
        "image": "assets/images/products/47/main.jpg",
        "rating": 4.2,
        "reviews": 466,
        "description": "The Multi-Grip Landmine Attachment for Barbells is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 117,
        "name": "Stair Stepper Machine with Handlebars",
        "category": "Cardio",
        "price": 27999.0,
        "image": "assets/images/products/117/main.jpg",
        "rating": 4.3,
        "reviews": 39,
        "description": "The Stair Stepper Machine with Handlebars is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 187,
        "name": "Reflex Cobra Bag with Adjustable Height",
        "category": "Combat",
        "price": 3099.0,
        "image": "assets/images/products/187/main.jpg",
        "rating": 4.0,
        "reviews": 122,
        "description": "The Reflex Cobra Bag with Adjustable Height is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 257,
        "name": "Pro Percussive Massage Gun with Metal Head Attachment",
        "category": "Recovery",
        "price": 5599.0,
        "image": "assets/images/products/257/main.jpg",
        "rating": 4.9,
        "reviews": 376,
        "description": "The Pro Percussive Massage Gun with Metal Head Attachment is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 327,
        "name": "Gym Chalk Block Single Pack",
        "category": "Accessories",
        "price": 499.0,
        "image": "assets/images/products/327/main.jpg",
        "rating": 4.8,
        "reviews": 357,
        "description": "The Gym Chalk Block Single Pack is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 397,
        "name": "High-Impact Padded Gym Sports Bra",
        "category": "Apparel",
        "price": 3599.0,
        "image": "assets/images/products/397/main.jpg",
        "rating": 3.9,
        "reviews": 278,
        "description": "The High-Impact Padded Gym Sports Bra is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 467,
        "name": "Bluetooth Sports Earphones with Sweat Resistance",
        "category": "Fit Tech",
        "price": 7199.0,
        "image": "assets/images/products/467/main.jpg",
        "rating": 4.7,
        "reviews": 177,
        "description": "The Bluetooth Sports Earphones with Sweat Resistance is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 537,
        "name": "Nitric Oxide Pre-Workout Powder (Tropical Punch)",
        "category": "Supplements",
        "price": 3099.0,
        "image": "assets/images/products/537/main.jpg",
        "rating": 4.5,
        "reviews": 125,
        "description": "The Nitric Oxide Pre-Workout Powder (Tropical Punch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 607,
        "name": "Spine Massager Yoga Wheel Roller",
        "category": "Yoga",
        "price": 8599.0,
        "image": "assets/images/products/607/main.jpg",
        "rating": 4.9,
        "reviews": 72,
        "description": "The Spine Massager Yoga Wheel Roller is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 677,
        "name": "Quick Select Dial Dumbbells Set (5-70 lbs)",
        "category": "Home Gym",
        "price": 23999.0,
        "image": "assets/images/products/677/main.jpg",
        "rating": 4.8,
        "reviews": 194,
        "description": "The Quick Select Dial Dumbbells Set (5-70 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 48,
        "name": "Commercial Cable Crossover Functional Trainer",
        "category": "Strength",
        "price": 96199.0,
        "image": "assets/images/products/48/main.jpg",
        "rating": 4.4,
        "reviews": 96,
        "description": "The Commercial Cable Crossover Functional Trainer is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 118,
        "name": "Magnetic Upright Exercise Bike with Tablet Stand",
        "category": "Cardio",
        "price": 21039.0,
        "image": "assets/images/products/118/main.jpg",
        "rating": 4.8,
        "reviews": 395,
        "description": "The Magnetic Upright Exercise Bike with Tablet Stand is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 188,
        "name": "Canvas Heavy Punching Bag (60 lbs)",
        "category": "Combat",
        "price": 6279.0,
        "image": "assets/images/products/188/main.jpg",
        "rating": 4.7,
        "reviews": 237,
        "description": "The Canvas Heavy Punching Bag (60 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 258,
        "name": "Graduated Knee-High Compression Socks Pair",
        "category": "Recovery",
        "price": 2939.0,
        "image": "assets/images/products/258/main.jpg",
        "rating": 3.9,
        "reviews": 246,
        "description": "The Graduated Knee-High Compression Socks Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 398,
        "name": "Heavy Duty Barefoot Lifting Shoes",
        "category": "Apparel",
        "price": 7119.0,
        "image": "assets/images/products/398/main.jpg",
        "rating": 4.8,
        "reviews": 245,
        "description": "The Heavy Duty Barefoot Lifting Shoes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 468,
        "name": "Smart GPS Cycling Computer Display",
        "category": "Fit Tech",
        "price": 15039.0,
        "image": "assets/images/products/468/main.jpg",
        "rating": 4.3,
        "reviews": 142,
        "description": "The Smart GPS Cycling Computer Display is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 538,
        "name": "Creatine Monohydrate Powder (200 Mesh Ultra-Fine 500g)",
        "category": "Supplements",
        "price": 1299.0,
        "image": "assets/images/products/538/main.jpg",
        "rating": 3.8,
        "reviews": 227,
        "description": "The Creatine Monohydrate Powder (200 Mesh Ultra-Fine 500g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 608,
        "name": "Non-Slip Yoga Towel with Corner Pockets",
        "category": "Yoga",
        "price": 2649.0,
        "image": "assets/images/products/608/main.jpg",
        "rating": 4.6,
        "reviews": 357,
        "description": "The Non-Slip Yoga Towel with Corner Pockets is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 678,
        "name": "Compact Foldable Flat Utility Bench",
        "category": "Home Gym",
        "price": 14959.0,
        "image": "assets/images/products/678/main.jpg",
        "rating": 3.9,
        "reviews": 498,
        "description": "The Compact Foldable Flat Utility Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 49,
        "name": "Rubber Hex Dumbbell Pair (35 lbs)",
        "category": "Strength",
        "price": 3919.0,
        "image": "assets/images/products/49/main.jpg",
        "rating": 4.1,
        "reviews": 497,
        "description": "The Rubber Hex Dumbbell Pair (35 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 119,
        "name": "Commercial Motorized Treadmill (4.0 HP Peak)",
        "category": "Cardio",
        "price": 67399.0,
        "image": "assets/images/products/119/main.jpg",
        "rating": 5.0,
        "reviews": 298,
        "description": "The Commercial Motorized Treadmill (4.0 HP Peak) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 189,
        "name": "Competition Shin & Instep Guards",
        "category": "Combat",
        "price": 5319.0,
        "image": "assets/images/products/189/main.jpg",
        "rating": 3.8,
        "reviews": 396,
        "description": "The Competition Shin & Instep Guards is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 259,
        "name": "Vibrating Deep Tissue Massage Peanut Ball",
        "category": "Recovery",
        "price": 919.0,
        "image": "assets/images/products/259/main.jpg",
        "rating": 4.8,
        "reviews": 309,
        "description": "The Vibrating Deep Tissue Massage Peanut Ball is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 399,
        "name": "Oversized Drop-Shoulder Heavy Cotton Tee",
        "category": "Apparel",
        "price": 1539.0,
        "image": "assets/images/products/399/main.jpg",
        "rating": 4.7,
        "reviews": 212,
        "description": "The Oversized Drop-Shoulder Heavy Cotton Tee is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 469,
        "name": "Smart Fitness Ring with Temperature & Heart Rate Sensor",
        "category": "Fit Tech",
        "price": 4619.0,
        "image": "assets/images/products/469/main.jpg",
        "rating": 4.1,
        "reviews": 473,
        "description": "The Smart Fitness Ring with Temperature & Heart Rate Sensor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 539,
        "name": "EAA Hydration Recovery Powder (Watermelon Ice 30 Servings)",
        "category": "Supplements",
        "price": 2059.0,
        "image": "assets/images/products/539/main.jpg",
        "rating": 4.8,
        "reviews": 250,
        "description": "The EAA Hydration Recovery Powder (Watermelon Ice 30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 609,
        "name": "Extra Thick Comfort Yoga Mat (10mm)",
        "category": "Yoga",
        "price": 2009.0,
        "image": "assets/images/products/609/main.jpg",
        "rating": 4.2,
        "reviews": 383,
        "description": "The Extra Thick Comfort Yoga Mat (10mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 679,
        "name": "Doorway Multi-Grip Pull-Up Bar No-Screws Mount",
        "category": "Home Gym",
        "price": 1859.0,
        "image": "assets/images/products/679/main.jpg",
        "rating": 3.8,
        "reviews": 374,
        "description": "The Doorway Multi-Grip Pull-Up Bar No-Screws Mount is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 50,
        "name": "Calibrated Competition Steel Plate (15kg)",
        "category": "Strength",
        "price": 1409.0,
        "image": "assets/images/products/50/main.jpg",
        "rating": 4.8,
        "reviews": 75,
        "description": "The Calibrated Competition Steel Plate (15kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 120,
        "name": "Dual Resistance Air & Magnetic Rower",
        "category": "Cardio",
        "price": 43249.0,
        "image": "assets/images/products/120/main.jpg",
        "rating": 4.6,
        "reviews": 67,
        "description": "The Dual Resistance Air & Magnetic Rower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 190,
        "name": "Leather Speed Bag with Dual Swivel",
        "category": "Combat",
        "price": 1959.0,
        "image": "assets/images/products/190/main.jpg",
        "rating": 4.6,
        "reviews": 468,
        "description": "The Leather Speed Bag with Dual Swivel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 260,
        "name": "Infrared Heating Pad with Jade & Tourmaline Stones",
        "category": "Recovery",
        "price": 2219.0,
        "image": "assets/images/products/260/main.jpg",
        "rating": 4.5,
        "reviews": 368,
        "description": "The Infrared Heating Pad with Jade & Tourmaline Stones is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 400,
        "name": "Lightweight Breathable Running Tank",
        "category": "Apparel",
        "price": 909.0,
        "image": "assets/images/products/400/main.jpg",
        "rating": 4.5,
        "reviews": 210,
        "description": "The Lightweight Breathable Running Tank is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 470,
        "name": "Multisport GPS Watch with Barometric Altimeter",
        "category": "Fit Tech",
        "price": 16099.0,
        "image": "assets/images/products/470/main.jpg",
        "rating": 4.3,
        "reviews": 417,
        "description": "The Multisport GPS Watch with Barometric Altimeter is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 540,
        "name": "Hydrolyzed Collagen Peptides Unflavored Powder (500g)",
        "category": "Supplements",
        "price": 3519.0,
        "image": "assets/images/products/540/main.jpg",
        "rating": 4.8,
        "reviews": 329,
        "description": "The Hydrolyzed Collagen Peptides Unflavored Powder (500g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 610,
        "name": "Eco Friendly Cork Yoga Block Pair",
        "category": "Yoga",
        "price": 1509.0,
        "image": "assets/images/products/610/main.jpg",
        "rating": 4.6,
        "reviews": 25,
        "description": "The Eco Friendly Cork Yoga Block Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 680,
        "name": "Bodyweight Suspension Fitness Trainer Kit",
        "category": "Home Gym",
        "price": 2409.0,
        "image": "assets/images/products/680/main.jpg",
        "rating": 4.9,
        "reviews": 165,
        "description": "The Bodyweight Suspension Fitness Trainer Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 51,
        "name": "Hard Chrome EZ Curl Barbell (47 Inch)",
        "category": "Strength",
        "price": 18559.0,
        "image": "assets/images/products/51/main.jpg",
        "rating": 4.8,
        "reviews": 72,
        "description": "The Hard Chrome EZ Curl Barbell (47 Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 121,
        "name": "Smart Indoor Spin Bike with Magnetic Resistance",
        "category": "Cardio",
        "price": 38599.0,
        "image": "assets/images/products/121/main.jpg",
        "rating": 4.0,
        "reviews": 158,
        "description": "The Smart Indoor Spin Bike with Magnetic Resistance is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 191,
        "name": "Heavy Leather Angle Uppercut Punching Bag",
        "category": "Combat",
        "price": 6719.0,
        "image": "assets/images/products/191/main.jpg",
        "rating": 4.2,
        "reviews": 307,
        "description": "The Heavy Leather Angle Uppercut Punching Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 261,
        "name": "Compact High-Density Roller (12-Inch)",
        "category": "Recovery",
        "price": 1479.0,
        "image": "assets/images/products/261/main.jpg",
        "rating": 4.6,
        "reviews": 409,
        "description": "The Compact High-Density Roller (12-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 331,
        "name": "Neoprene Padded Ankle Straps Pair for Cable Kickbacks",
        "category": "Accessories",
        "price": 2759.0,
        "image": "assets/images/products/331/main.jpg",
        "rating": 4.7,
        "reviews": 295,
        "description": "The Neoprene Padded Ankle Straps Pair for Cable Kickbacks is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 401,
        "name": "Thermal Compression Long Sleeve Top",
        "category": "Apparel",
        "price": 1659.0,
        "image": "assets/images/products/401/main.jpg",
        "rating": 4.3,
        "reviews": 306,
        "description": "The Thermal Compression Long Sleeve Top is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 471,
        "name": "Soft Fabric Heart Rate Chest Strap Sensor",
        "category": "Fit Tech",
        "price": 3839.0,
        "image": "assets/images/products/471/main.jpg",
        "rating": 3.9,
        "reviews": 42,
        "description": "The Soft Fabric Heart Rate Chest Strap Sensor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 541,
        "name": "Lean Mass Gainer Protein Powder (Vanilla Shake 5 lbs)",
        "category": "Supplements",
        "price": 5719.0,
        "image": "assets/images/products/541/main.jpg",
        "rating": 4.9,
        "reviews": 127,
        "description": "The Lean Mass Gainer Protein Powder (Vanilla Shake 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 611,
        "name": "Heavy Duty Stretching Strap for Flexibility",
        "category": "Yoga",
        "price": 759.0,
        "image": "assets/images/products/611/main.jpg",
        "rating": 4.5,
        "reviews": 290,
        "description": "The Heavy Duty Stretching Strap for Flexibility is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 681,
        "name": "Heavy Duty Power Tower Station for Home Gym",
        "category": "Home Gym",
        "price": 2969.0,
        "image": "assets/images/products/681/main.jpg",
        "rating": 3.8,
        "reviews": 342,
        "description": "The Heavy Duty Power Tower Station for Home Gym is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 52,
        "name": "Commercial Glute Ham Developer (GHD) Machine",
        "category": "Strength",
        "price": 8999.0,
        "image": "assets/images/products/52/main.jpg",
        "rating": 4.4,
        "reviews": 467,
        "description": "The Commercial Glute Ham Developer (GHD) Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 122,
        "name": "Portable Walking Pad Treadmill for Home Office",
        "category": "Cardio",
        "price": 27999.0,
        "image": "assets/images/products/122/main.jpg",
        "rating": 4.2,
        "reviews": 414,
        "description": "The Portable Walking Pad Treadmill for Home Office is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 192,
        "name": "MMA Open-Palm Sparring Gloves (6 oz)",
        "category": "Combat",
        "price": 1369.0,
        "image": "assets/images/products/192/main.jpg",
        "rating": 4.8,
        "reviews": 382,
        "description": "The MMA Open-Palm Sparring Gloves (6 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 262,
        "name": "Targeted Plantar Fasciitis Foot Massage Roller",
        "category": "Recovery",
        "price": 3699.0,
        "image": "assets/images/products/262/main.jpg",
        "rating": 4.1,
        "reviews": 184,
        "description": "The Targeted Plantar Fasciitis Foot Massage Roller is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 402,
        "name": "Stretch Woven Athletic Shorts (7-Inch)",
        "category": "Apparel",
        "price": 2419.0,
        "image": "assets/images/products/402/main.jpg",
        "rating": 3.9,
        "reviews": 74,
        "description": "The Stretch Woven Athletic Shorts (7-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 472,
        "name": "Smart Body Fat Scale with 8 Electrode Sensors",
        "category": "Fit Tech",
        "price": 3299.0,
        "image": "assets/images/products/472/main.jpg",
        "rating": 4.8,
        "reviews": 150,
        "description": "The Smart Body Fat Scale with 8 Electrode Sensors is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 542,
        "name": "100% Whey Protein Isolate (Rich Chocolate 5 lbs)",
        "category": "Supplements",
        "price": 7199.0,
        "image": "assets/images/products/542/main.jpg",
        "rating": 4.3,
        "reviews": 188,
        "description": "The 100% Whey Protein Isolate (Rich Chocolate 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 612,
        "name": "Organic Cotton Yoga Bolster Pillow (Large)",
        "category": "Yoga",
        "price": 1869.0,
        "image": "assets/images/products/612/main.jpg",
        "rating": 4.2,
        "reviews": 86,
        "description": "The Organic Cotton Yoga Bolster Pillow (Large) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 682,
        "name": "Interlocking Rubber Gym Matting Tiles (24-Pack)",
        "category": "Home Gym",
        "price": 2019.0,
        "image": "assets/images/products/682/main.jpg",
        "rating": 4.3,
        "reviews": 306,
        "description": "The Interlocking Rubber Gym Matting Tiles (24-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 53,
        "name": "Heavy Duty Adjustable Squat Stands Pair",
        "category": "Strength",
        "price": 11959.0,
        "image": "assets/images/products/53/main.jpg",
        "rating": 3.8,
        "reviews": 224,
        "description": "The Heavy Duty Adjustable Squat Stands Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 123,
        "name": "Recumbent Exercise Bike with Quick-Adjust Seat",
        "category": "Cardio",
        "price": 19239.0,
        "image": "assets/images/products/123/main.jpg",
        "rating": 4.8,
        "reviews": 154,
        "description": "The Recumbent Exercise Bike with Quick-Adjust Seat is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 193,
        "name": "Elasticized Boxing Hand Wraps (180-Inch)",
        "category": "Combat",
        "price": 609.0,
        "image": "assets/images/products/193/main.jpg",
        "rating": 4.8,
        "reviews": 235,
        "description": "The Elasticized Boxing Hand Wraps (180-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 263,
        "name": "Air Compression Leg Recovery Boots System",
        "category": "Recovery",
        "price": 2639.0,
        "image": "assets/images/products/263/main.jpg",
        "rating": 4.1,
        "reviews": 361,
        "description": "The Air Compression Leg Recovery Boots System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 403,
        "name": "Fleece Athletic Hoodie with Kangaroo Pocket",
        "category": "Apparel",
        "price": 2239.0,
        "image": "assets/images/products/403/main.jpg",
        "rating": 4.2,
        "reviews": 212,
        "description": "The Fleece Athletic Hoodie with Kangaroo Pocket is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 473,
        "name": "Pneumatic Compression Recovery Pants System",
        "category": "Fit Tech",
        "price": 1529.0,
        "image": "assets/images/products/473/main.jpg",
        "rating": 4.4,
        "reviews": 411,
        "description": "The Pneumatic Compression Recovery Pants System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 543,
        "name": "Stim-Free Pre-Workout Pump Formula (30 Servings)",
        "category": "Supplements",
        "price": 3539.0,
        "image": "assets/images/products/543/main.jpg",
        "rating": 4.4,
        "reviews": 319,
        "description": "The Stim-Free Pre-Workout Pump Formula (30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 613,
        "name": "Deep Back Stretcher Yoga Wheel (12-Inch)",
        "category": "Yoga",
        "price": 2529.0,
        "image": "assets/images/products/613/main.jpg",
        "rating": 4.1,
        "reviews": 70,
        "description": "The Deep Back Stretcher Yoga Wheel (12-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 683,
        "name": "Adjustable Dumbbells Pair with Custom Rack (5-50 lbs)",
        "category": "Home Gym",
        "price": 27959.0,
        "image": "assets/images/products/683/main.jpg",
        "rating": 4.3,
        "reviews": 239,
        "description": "The Adjustable Dumbbells Pair with Custom Rack (5-50 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 54,
        "name": "Cast Iron Kettlebell (14kg / 31lbs)",
        "category": "Strength",
        "price": 4869.0,
        "image": "assets/images/products/54/main.jpg",
        "rating": 4.1,
        "reviews": 381,
        "description": "The Cast Iron Kettlebell (14kg / 31lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 124,
        "name": "Water Resistance Rower with Ergonomic Handle",
        "category": "Cardio",
        "price": 55249.0,
        "image": "assets/images/products/124/main.jpg",
        "rating": 4.4,
        "reviews": 204,
        "description": "The Water Resistance Rower with Ergonomic Handle is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 194,
        "name": "Freestanding Punching Tower with Water Base",
        "category": "Combat",
        "price": 4869.0,
        "image": "assets/images/products/194/main.jpg",
        "rating": 4.6,
        "reviews": 440,
        "description": "The Freestanding Punching Tower with Water Base is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 264,
        "name": "Deep Muscle Massage Stick Roller with Handles",
        "category": "Recovery",
        "price": 1589.0,
        "image": "assets/images/products/264/main.jpg",
        "rating": 4.2,
        "reviews": 309,
        "description": "The Deep Muscle Massage Stick Roller with Handles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 334,
        "name": "Genuine Leather Workout Gloves with Wrist Wraps",
        "category": "Accessories",
        "price": 3969.0,
        "image": "assets/images/products/334/main.jpg",
        "rating": 4.4,
        "reviews": 299,
        "description": "The Genuine Leather Workout Gloves with Wrist Wraps is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 404,
        "name": "Tapered Cargo Gym Joggers with Zip Pockets",
        "category": "Apparel",
        "price": 2029.0,
        "image": "assets/images/products/404/main.jpg",
        "rating": 4.3,
        "reviews": 45,
        "description": "The Tapered Cargo Gym Joggers with Zip Pockets is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 474,
        "name": "Smart Bluetooth Fitness Wristband",
        "category": "Fit Tech",
        "price": 689.0,
        "image": "assets/images/products/474/main.jpg",
        "rating": 4.1,
        "reviews": 442,
        "description": "The Smart Bluetooth Fitness Wristband is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 544,
        "name": "Pure Micronized Creatine Monohydrate (250g)",
        "category": "Supplements",
        "price": 1629.0,
        "image": "assets/images/products/544/main.jpg",
        "rating": 4.8,
        "reviews": 226,
        "description": "The Pure Micronized Creatine Monohydrate (250g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 614,
        "name": "Water Resistant Yoga Mat Bag Sleeve",
        "category": "Yoga",
        "price": 1429.0,
        "image": "assets/images/products/614/main.jpg",
        "rating": 4.9,
        "reviews": 95,
        "description": "The Water Resistant Yoga Mat Bag Sleeve is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 684,
        "name": "Foldable Multi-Position Weight Bench",
        "category": "Home Gym",
        "price": 4359.0,
        "image": "assets/images/products/684/main.jpg",
        "rating": 4.4,
        "reviews": 347,
        "description": "The Foldable Multi-Position Weight Bench is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 55,
        "name": "Rubber Coated Hex Dumbbell (20 lbs)",
        "category": "Strength",
        "price": 2219.0,
        "image": "assets/images/products/55/main.jpg",
        "rating": 4.1,
        "reviews": 54,
        "description": "The Rubber Coated Hex Dumbbell (20 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 125,
        "name": "Heavy Duty Elliptical Cross Trainer with Power Incline",
        "category": "Cardio",
        "price": 27199.0,
        "image": "assets/images/products/125/main.jpg",
        "rating": 4.9,
        "reviews": 45,
        "description": "The Heavy Duty Elliptical Cross Trainer with Power Incline is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 195,
        "name": "Pro Boxing Training Gloves (12 oz)",
        "category": "Combat",
        "price": 2899.0,
        "image": "assets/images/products/195/main.jpg",
        "rating": 4.8,
        "reviews": 358,
        "description": "The Pro Boxing Training Gloves (12 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 265,
        "name": "Cold Plunge Tub Protection Cover & Pump Kit",
        "category": "Recovery",
        "price": 13899.0,
        "image": "assets/images/products/265/main.jpg",
        "rating": 4.5,
        "reviews": 438,
        "description": "The Cold Plunge Tub Protection Cover & Pump Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 335,
        "name": "Pull-Up Assistance Rubber Resistance Bands Set",
        "category": "Accessories",
        "price": 1859.0,
        "image": "assets/images/products/335/main.jpg",
        "rating": 4.1,
        "reviews": 98,
        "description": "The Pull-Up Assistance Rubber Resistance Bands Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 405,
        "name": "High-Waisted Seamless Pocket Leggings",
        "category": "Apparel",
        "price": 2589.0,
        "image": "assets/images/products/405/main.jpg",
        "rating": 4.2,
        "reviews": 267,
        "description": "The High-Waisted Seamless Pocket Leggings is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 475,
        "name": "Wearable EMS Muscle Toning Belt",
        "category": "Fit Tech",
        "price": 4399.0,
        "image": "assets/images/products/475/main.jpg",
        "rating": 4.6,
        "reviews": 189,
        "description": "The Wearable EMS Muscle Toning Belt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 545,
        "name": "BCAA Energy Intra-Workout Powder (Cherry Limeade)",
        "category": "Supplements",
        "price": 2389.0,
        "image": "assets/images/products/545/main.jpg",
        "rating": 4.0,
        "reviews": 304,
        "description": "The BCAA Energy Intra-Workout Powder (Cherry Limeade) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 615,
        "name": "Alignment Marker Non-Slip Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 2339.0,
        "image": "assets/images/products/615/main.jpg",
        "rating": 4.6,
        "reviews": 60,
        "description": "The Alignment Marker Non-Slip Yoga Mat (6mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 685,
        "name": "Heavy Duty Ceiling Mount Pull-Up Bar",
        "category": "Home Gym",
        "price": 2189.0,
        "image": "assets/images/products/685/main.jpg",
        "rating": 4.2,
        "reviews": 303,
        "description": "The Heavy Duty Ceiling Mount Pull-Up Bar is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 56,
        "name": "Commercial Functional Trainer Dual Pulley",
        "category": "Strength",
        "price": 93799.0,
        "image": "assets/images/products/56/main.jpg",
        "rating": 3.9,
        "reviews": 269,
        "description": "The Commercial Functional Trainer Dual Pulley is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 126,
        "name": "Curved Manual Treadmill with Rubber Slat Belt",
        "category": "Cardio",
        "price": 37599.0,
        "image": "assets/images/products/126/main.jpg",
        "rating": 3.8,
        "reviews": 103,
        "description": "The Curved Manual Treadmill with Rubber Slat Belt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 196,
        "name": "Curved Leather Target Punch Mitts Pair",
        "category": "Combat",
        "price": 2859.0,
        "image": "assets/images/products/196/main.jpg",
        "rating": 4.0,
        "reviews": 327,
        "description": "The Curved Leather Target Punch Mitts Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 266,
        "name": "Professional Heavy-Duty Percussive Massager",
        "category": "Recovery",
        "price": 7579.0,
        "image": "assets/images/products/266/main.jpg",
        "rating": 4.8,
        "reviews": 339,
        "description": "The Professional Heavy-Duty Percussive Massager is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 336,
        "name": "Professional Lever Powerlifting Belt (Custom Fit)",
        "category": "Accessories",
        "price": 3319.0,
        "image": "assets/images/products/336/main.jpg",
        "rating": 4.2,
        "reviews": 317,
        "description": "The Professional Lever Powerlifting Belt (Custom Fit) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 406,
        "name": "Dry-Fit Short Sleeve Performance Training Shirt",
        "category": "Apparel",
        "price": 1479.0,
        "image": "assets/images/products/406/main.jpg",
        "rating": 4.4,
        "reviews": 192,
        "description": "The Dry-Fit Short Sleeve Performance Training Shirt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 476,
        "name": "Open-Ear Bone Conduction Wireless Sport Headset",
        "category": "Fit Tech",
        "price": 4519.0,
        "image": "assets/images/products/476/main.jpg",
        "rating": 5.0,
        "reviews": 291,
        "description": "The Open-Ear Bone Conduction Wireless Sport Headset is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 546,
        "name": "High-Yield Fish Oil Omega-3 Softgels (180 Count)",
        "category": "Supplements",
        "price": 829.0,
        "image": "assets/images/products/546/main.jpg",
        "rating": 3.8,
        "reviews": 397,
        "description": "The High-Yield Fish Oil Omega-3 Softgels (180 Count) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 616,
        "name": "High Density Foam Yoga Block Pair (3-Inch)",
        "category": "Yoga",
        "price": 1729.0,
        "image": "assets/images/products/616/main.jpg",
        "rating": 4.3,
        "reviews": 394,
        "description": "The High Density Foam Yoga Block Pair (3-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 686,
        "name": "Commercial Suspension Trainer System",
        "category": "Home Gym",
        "price": 2739.0,
        "image": "assets/images/products/686/main.jpg",
        "rating": 4.4,
        "reviews": 223,
        "description": "The Commercial Suspension Trainer System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 57,
        "name": "High-Tenacity Olympic Barbell Collar Clamp Pair",
        "category": "Strength",
        "price": 9199.0,
        "image": "assets/images/products/57/main.jpg",
        "rating": 3.9,
        "reviews": 120,
        "description": "The High-Tenacity Olympic Barbell Collar Clamp Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 127,
        "name": "Pro Studio Spin Bike with Dual SPD Pedals",
        "category": "Cardio",
        "price": 22999.0,
        "image": "assets/images/products/127/main.jpg",
        "rating": 3.9,
        "reviews": 136,
        "description": "The Pro Studio Spin Bike with Dual SPD Pedals is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 197,
        "name": "Leather Headgear with Cheek & Chin Guard",
        "category": "Combat",
        "price": 5199.0,
        "image": "assets/images/products/197/main.jpg",
        "rating": 4.3,
        "reviews": 294,
        "description": "The Leather Headgear with Cheek & Chin Guard is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 267,
        "name": "Spiky Trigger Point Massage Ball Set of 3",
        "category": "Recovery",
        "price": 899.0,
        "image": "assets/images/products/267/main.jpg",
        "rating": 4.8,
        "reviews": 161,
        "description": "The Spiky Trigger Point Massage Ball Set of 3 is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 407,
        "name": "Low-Impact Strappy Yoga & Gym Sports Bra",
        "category": "Apparel",
        "price": 1179.0,
        "image": "assets/images/products/407/main.jpg",
        "rating": 4.5,
        "reviews": 456,
        "description": "The Low-Impact Strappy Yoga & Gym Sports Bra is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 477,
        "name": "Smart Cadence & Speed Sensor Pair for Bikes",
        "category": "Fit Tech",
        "price": 32999.0,
        "image": "assets/images/products/477/main.jpg",
        "rating": 3.9,
        "reviews": 327,
        "description": "The Smart Cadence & Speed Sensor Pair for Bikes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 547,
        "name": "Plant Based Pea & Rice Protein Powder (Vanilla 2 lbs)",
        "category": "Supplements",
        "price": 4199.0,
        "image": "assets/images/products/547/main.jpg",
        "rating": 4.8,
        "reviews": 450,
        "description": "The Plant Based Pea & Rice Protein Powder (Vanilla 2 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 617,
        "name": "Multi Grip Yoga Stretching Strap",
        "category": "Yoga",
        "price": 939.0,
        "image": "assets/images/products/617/main.jpg",
        "rating": 4.5,
        "reviews": 251,
        "description": "The Multi Grip Yoga Stretching Strap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 687,
        "name": "Multi-Grip Power Tower Dip Pull-Up Station",
        "category": "Home Gym",
        "price": 1799.0,
        "image": "assets/images/products/687/main.jpg",
        "rating": 4.5,
        "reviews": 40,
        "description": "The Multi-Grip Power Tower Dip Pull-Up Station is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 58,
        "name": "Calibrated Bumper Plate Pair (10 lbs)",
        "category": "Strength",
        "price": 3439.0,
        "image": "assets/images/products/58/main.jpg",
        "rating": 4.8,
        "reviews": 231,
        "description": "The Calibrated Bumper Plate Pair (10 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 128,
        "name": "Compact Folding Motorized Treadmill",
        "category": "Cardio",
        "price": 32399.0,
        "image": "assets/images/products/128/main.jpg",
        "rating": 4.2,
        "reviews": 335,
        "description": "The Compact Folding Motorized Treadmill is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 198,
        "name": "Muay Thai Strike Shield Target Pad",
        "category": "Combat",
        "price": 2339.0,
        "image": "assets/images/products/198/main.jpg",
        "rating": 4.3,
        "reviews": 360,
        "description": "The Muay Thai Strike Shield Target Pad is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 268,
        "name": "Electric Heated Arm & Elbow Compression Wrap",
        "category": "Recovery",
        "price": 484.0,
        "image": "assets/images/products/268/main.jpg",
        "rating": 4.7,
        "reviews": 496,
        "description": "The Electric Heated Arm & Elbow Compression Wrap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 408,
        "name": "Minimalist Weightlifting Barefoot Shoes",
        "category": "Apparel",
        "price": 11319.0,
        "image": "assets/images/products/408/main.jpg",
        "rating": 4.8,
        "reviews": 297,
        "description": "The Minimalist Weightlifting Barefoot Shoes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 478,
        "name": "Digital Grip Strength Tester Meter",
        "category": "Fit Tech",
        "price": 7479.0,
        "image": "assets/images/products/478/main.jpg",
        "rating": 3.9,
        "reviews": 201,
        "description": "The Digital Grip Strength Tester Meter is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 548,
        "name": "Slow Release Casein Protein Powder (Chocolate 5 lbs)",
        "category": "Supplements",
        "price": 8079.0,
        "image": "assets/images/products/548/main.jpg",
        "rating": 4.0,
        "reviews": 180,
        "description": "The Slow Release Casein Protein Powder (Chocolate 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 618,
        "name": "Round Velvet Meditation Cushion",
        "category": "Yoga",
        "price": 2199.0,
        "image": "assets/images/products/618/main.jpg",
        "rating": 4.0,
        "reviews": 88,
        "description": "The Round Velvet Meditation Cushion is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 688,
        "name": "High Density Rubber Gym Flooring Mat (1/4 Inch)",
        "category": "Home Gym",
        "price": 2349.0,
        "image": "assets/images/products/688/main.jpg",
        "rating": 4.4,
        "reviews": 208,
        "description": "The High Density Rubber Gym Flooring Mat (1/4 Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 59,
        "name": "Steel T-Bar Row Platform & Handle System",
        "category": "Strength",
        "price": 1739.0,
        "image": "assets/images/products/59/main.jpg",
        "rating": 4.5,
        "reviews": 342,
        "description": "The Steel T-Bar Row Platform & Handle System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 129,
        "name": "Commercial Grade Air Rower with Steel Chain",
        "category": "Cardio",
        "price": 51499.0,
        "image": "assets/images/products/129/main.jpg",
        "rating": 3.9,
        "reviews": 38,
        "description": "The Commercial Grade Air Rower with Steel Chain is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 199,
        "name": "Double-End Speed Bag Assembly",
        "category": "Combat",
        "price": 2459.0,
        "image": "assets/images/products/199/main.jpg",
        "rating": 5.0,
        "reviews": 198,
        "description": "The Double-End Speed Bag Assembly is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 269,
        "name": "Magnesium Bath Flakes for Post-Workout Recovery",
        "category": "Recovery",
        "price": 3079.0,
        "image": "assets/images/products/269/main.jpg",
        "rating": 4.8,
        "reviews": 314,
        "description": "The Magnesium Bath Flakes for Post-Workout Recovery is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 409,
        "name": "Breathable Mesh Muscle Cut Tank",
        "category": "Apparel",
        "price": 1239.0,
        "image": "assets/images/products/409/main.jpg",
        "rating": 4.4,
        "reviews": 33,
        "description": "The Breathable Mesh Muscle Cut Tank is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 479,
        "name": "Advanced GPS Multisport Smartwatch",
        "category": "Fit Tech",
        "price": 9399.0,
        "image": "assets/images/products/479/main.jpg",
        "rating": 4.3,
        "reviews": 101,
        "description": "The Advanced GPS Multisport Smartwatch is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 549,
        "name": "Pre-Workout Energy & Focus Powder (Sour Gummy)",
        "category": "Supplements",
        "price": 1979.0,
        "image": "assets/images/products/549/main.jpg",
        "rating": 4.7,
        "reviews": 429,
        "description": "The Pre-Workout Energy & Focus Powder (Sour Gummy) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 619,
        "name": "Textured Spine Release Yoga Wheel",
        "category": "Yoga",
        "price": 729.0,
        "image": "assets/images/products/619/main.jpg",
        "rating": 4.2,
        "reviews": 96,
        "description": "The Textured Spine Release Yoga Wheel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 689,
        "name": "Quick-Select Adjustable Dumbbells Pair (10-40 lbs)",
        "category": "Home Gym",
        "price": 31919.0,
        "image": "assets/images/products/689/main.jpg",
        "rating": 4.6,
        "reviews": 161,
        "description": "The Quick-Select Adjustable Dumbbells Pair (10-40 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 60,
        "name": "Adjustable FID Bench (Flat Incline Decline)",
        "category": "Strength",
        "price": 9679.0,
        "image": "assets/images/products/60/main.jpg",
        "rating": 4.5,
        "reviews": 186,
        "description": "The Adjustable FID Bench (Flat Incline Decline) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 130,
        "name": "Heavy Duty Resistance Fan Bike",
        "category": "Cardio",
        "price": 25199.0,
        "image": "assets/images/products/130/main.jpg",
        "rating": 4.9,
        "reviews": 228,
        "description": "The Heavy Duty Resistance Fan Bike is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 200,
        "name": "Heavy Duty Steel Heavy Bag Wall Hanger",
        "category": "Combat",
        "price": 4039.0,
        "image": "assets/images/products/200/main.jpg",
        "rating": 4.2,
        "reviews": 370,
        "description": "The Heavy Duty Steel Heavy Bag Wall Hanger is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 270,
        "name": "High-Density Grid Foam Roller (30-Inch)",
        "category": "Recovery",
        "price": 1809.0,
        "image": "assets/images/products/270/main.jpg",
        "rating": 4.6,
        "reviews": 40,
        "description": "The High-Density Grid Foam Roller (30-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 340,
        "name": "Quick-Lock Nylon Lifting Belt for Cross Training",
        "category": "Accessories",
        "price": 2509.0,
        "image": "assets/images/products/340/main.jpg",
        "rating": 4.2,
        "reviews": 59,
        "description": "The Quick-Lock Nylon Lifting Belt for Cross Training is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 410,
        "name": "Compression Tights Shorts (6-Inch)",
        "category": "Apparel",
        "price": 2359.0,
        "image": "assets/images/products/410/main.jpg",
        "rating": 5.0,
        "reviews": 323,
        "description": "The Compression Tights Shorts (6-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 480,
        "name": "Bluetooth Heart Rate Monitor Strap",
        "category": "Fit Tech",
        "price": 4829.0,
        "image": "assets/images/products/480/main.jpg",
        "rating": 4.4,
        "reviews": 148,
        "description": "The Bluetooth Heart Rate Monitor Strap is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 550,
        "name": "Micronized Creatine Monohydrate Powder (500g Unflavored) (v60)",
        "category": "Supplements",
        "price": 1959.0,
        "image": "assets/images/products/550/main.jpg",
        "rating": 4.5,
        "reviews": 323,
        "description": "The Micronized Creatine Monohydrate Powder (500g Unflavored) (v60) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 620,
        "name": "Full Length Microfiber Yoga Towel",
        "category": "Yoga",
        "price": 1809.0,
        "image": "assets/images/products/620/main.jpg",
        "rating": 4.1,
        "reviews": 332,
        "description": "The Full Length Microfiber Yoga Towel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 690,
        "name": "Space-Saving Foldable Utility Weight Bench (v60)",
        "category": "Home Gym",
        "price": 10479.0,
        "image": "assets/images/products/690/main.jpg",
        "rating": 5.0,
        "reviews": 223,
        "description": "The Space-Saving Foldable Utility Weight Bench (v60) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 61,
        "name": "Cast Iron Competition Kettlebell (10kg)",
        "category": "Strength",
        "price": 3639.0,
        "image": "assets/images/products/61/main.jpg",
        "rating": 4.2,
        "reviews": 160,
        "description": "The Cast Iron Competition Kettlebell (10kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 131,
        "name": "Under-Desk Walking Pad Treadmill with Armrests",
        "category": "Cardio",
        "price": 34599.0,
        "image": "assets/images/products/131/main.jpg",
        "rating": 4.8,
        "reviews": 149,
        "description": "The Under-Desk Walking Pad Treadmill with Armrests is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 201,
        "name": "Leather Boxing Training Gloves (16 oz)",
        "category": "Combat",
        "price": 3449.0,
        "image": "assets/images/products/201/main.jpg",
        "rating": 4.9,
        "reviews": 274,
        "description": "The Leather Boxing Training Gloves (16 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 271,
        "name": "Stainless Steel Muscle Scraping Tool (Type 2)",
        "category": "Recovery",
        "price": 1179.0,
        "image": "assets/images/products/271/main.jpg",
        "rating": 4.3,
        "reviews": 257,
        "description": "The Stainless Steel Muscle Scraping Tool (Type 2) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 341,
        "name": "Heavy Duty Steel Dip Belt with Chain Assembly",
        "category": "Accessories",
        "price": 1569.0,
        "image": "assets/images/products/341/main.jpg",
        "rating": 4.6,
        "reviews": 420,
        "description": "The Heavy Duty Steel Dip Belt with Chain Assembly is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 411,
        "name": "Technical Quarter-Zip Training Top",
        "category": "Apparel",
        "price": 979.0,
        "image": "assets/images/products/411/main.jpg",
        "rating": 4.6,
        "reviews": 330,
        "description": "The Technical Quarter-Zip Training Top is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 481,
        "name": "Smart Wi-Fi Body Fat Composition Scale",
        "category": "Fit Tech",
        "price": 3959.0,
        "image": "assets/images/products/481/main.jpg",
        "rating": 4.0,
        "reviews": 262,
        "description": "The Smart Wi-Fi Body Fat Composition Scale is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 551,
        "name": "EAA + BCAAs Amino Recovery Powder (Fruit Punch)",
        "category": "Supplements",
        "price": 2719.0,
        "image": "assets/images/products/551/main.jpg",
        "rating": 4.9,
        "reviews": 379,
        "description": "The EAA + BCAAs Amino Recovery Powder (Fruit Punch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 621,
        "name": "Natural Rubber Pro Yoga Mat (5mm)",
        "category": "Yoga",
        "price": 2669.0,
        "image": "assets/images/products/621/main.jpg",
        "rating": 4.6,
        "reviews": 179,
        "description": "The Natural Rubber Pro Yoga Mat (5mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 691,
        "name": "Doorway Chin-Up Bar with Safety Lock",
        "category": "Home Gym",
        "price": 2519.0,
        "image": "assets/images/products/691/main.jpg",
        "rating": 4.5,
        "reviews": 437,
        "description": "The Doorway Chin-Up Bar with Safety Lock is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 62,
        "name": "Rubber Hex Dumbbell Pair (45 lbs)",
        "category": "Strength",
        "price": 6349.0,
        "image": "assets/images/products/62/main.jpg",
        "rating": 4.2,
        "reviews": 186,
        "description": "The Rubber Hex Dumbbell Pair (45 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 132,
        "name": "Magnetic Elliptical Trainer with Heart Rate Sensors",
        "category": "Cardio",
        "price": 38999.0,
        "image": "assets/images/products/132/main.jpg",
        "rating": 4.8,
        "reviews": 332,
        "description": "The Magnetic Elliptical Trainer with Heart Rate Sensors is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 202,
        "name": "Gel Enforced Shin Guards for Martial Arts",
        "category": "Combat",
        "price": 3299.0,
        "image": "assets/images/products/202/main.jpg",
        "rating": 4.6,
        "reviews": 496,
        "description": "The Gel Enforced Shin Guards for Martial Arts is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 272,
        "name": "Acupressure Back Stretcher & Lumbar Massage Board",
        "category": "Recovery",
        "price": 2269.0,
        "image": "assets/images/products/272/main.jpg",
        "rating": 4.7,
        "reviews": 422,
        "description": "The Acupressure Back Stretcher & Lumbar Massage Board is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 342,
        "name": "Pro Aluminum Handle Speed Jump Rope",
        "category": "Accessories",
        "price": 1049.0,
        "image": "assets/images/products/342/main.jpg",
        "rating": 4.5,
        "reviews": 441,
        "description": "The Pro Aluminum Handle Speed Jump Rope is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 412,
        "name": "Oversized Vintage Washed Gym Tee",
        "category": "Apparel",
        "price": 1349.0,
        "image": "assets/images/products/412/main.jpg",
        "rating": 4.7,
        "reviews": 422,
        "description": "The Oversized Vintage Washed Gym Tee is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 482,
        "name": "Air Compression Leg Massager Boots Device",
        "category": "Fit Tech",
        "price": 7099.0,
        "image": "assets/images/products/482/main.jpg",
        "rating": 4.3,
        "reviews": 296,
        "description": "The Air Compression Leg Massager Boots Device is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 552,
        "name": "Daily Athlete Multivitamin Tablets (90 Count)",
        "category": "Supplements",
        "price": 1049.0,
        "image": "assets/images/products/552/main.jpg",
        "rating": 5.0,
        "reviews": 384,
        "description": "The Daily Athlete Multivitamin Tablets (90 Count) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 622,
        "name": "Premium Cork Yoga Block Set",
        "category": "Yoga",
        "price": 949.0,
        "image": "assets/images/products/622/main.jpg",
        "rating": 4.0,
        "reviews": 225,
        "description": "The Premium Cork Yoga Block Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 692,
        "name": "Suspension Bodyweight Fitness Trainer Kit",
        "category": "Home Gym",
        "price": 1569.0,
        "image": "assets/images/products/692/main.jpg",
        "rating": 4.6,
        "reviews": 315,
        "description": "The Suspension Bodyweight Fitness Trainer Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 63,
        "name": "Cerakote Women's Olympic Barbell (15kg)",
        "category": "Strength",
        "price": 11839.0,
        "image": "assets/images/products/63/main.jpg",
        "rating": 5.0,
        "reviews": 76,
        "description": "The Cerakote Women's Olympic Barbell (15kg) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 133,
        "name": "Wood Frame Hydro Rower Machine",
        "category": "Cardio",
        "price": 22299.0,
        "image": "assets/images/products/133/main.jpg",
        "rating": 4.2,
        "reviews": 244,
        "description": "The Wood Frame Hydro Rower Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 203,
        "name": "Tear Drop Leather Punching Bag (80 lbs)",
        "category": "Combat",
        "price": 4479.0,
        "image": "assets/images/products/203/main.jpg",
        "rating": 4.3,
        "reviews": 75,
        "description": "The Tear Drop Leather Punching Bag (80 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 273,
        "name": "Mini Percussive Massage Gun (USB-C Rechargeable)",
        "category": "Recovery",
        "price": 5119.0,
        "image": "assets/images/products/273/main.jpg",
        "rating": 4.7,
        "reviews": 50,
        "description": "The Mini Percussive Massage Gun (USB-C Rechargeable) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 343,
        "name": "Insulated Vacuum Gym Water Bottle (40oz)",
        "category": "Accessories",
        "price": 1919.0,
        "image": "assets/images/products/343/main.jpg",
        "rating": 4.6,
        "reviews": 348,
        "description": "The Insulated Vacuum Gym Water Bottle (40oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 413,
        "name": "High-Waisted Compression Leggings (7/8 Length)",
        "category": "Apparel",
        "price": 2529.0,
        "image": "assets/images/products/413/main.jpg",
        "rating": 4.4,
        "reviews": 293,
        "description": "The High-Waisted Compression Leggings (7/8 Length) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 483,
        "name": "Smart Fitness Tracker Ring (Black Edition)",
        "category": "Fit Tech",
        "price": 6879.0,
        "image": "assets/images/products/483/main.jpg",
        "rating": 4.0,
        "reviews": 356,
        "description": "The Smart Fitness Tracker Ring (Black Edition) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 553,
        "name": "High Calorie Mass Gainer Protein (Chocolate 10 lbs)",
        "category": "Supplements",
        "price": 4859.0,
        "image": "assets/images/products/553/main.jpg",
        "rating": 4.6,
        "reviews": 206,
        "description": "The High Calorie Mass Gainer Protein (Chocolate 10 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 623,
        "name": "Cotton Yoga Stretching Strap (10 Feet)",
        "category": "Yoga",
        "price": 1119.0,
        "image": "assets/images/products/623/main.jpg",
        "rating": 4.8,
        "reviews": 147,
        "description": "The Cotton Yoga Stretching Strap (10 Feet) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 693,
        "name": "Power Tower Dip Station Pull-Up Machine",
        "category": "Home Gym",
        "price": 2129.0,
        "image": "assets/images/products/693/main.jpg",
        "rating": 4.8,
        "reviews": 439,
        "description": "The Power Tower Dip Station Pull-Up Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 64,
        "name": "Plate Loaded Seated Calf Raise Machine",
        "category": "Strength",
        "price": 12519.0,
        "image": "assets/images/products/64/main.jpg",
        "rating": 4.1,
        "reviews": 203,
        "description": "The Plate Loaded Seated Calf Raise Machine is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 134,
        "name": "Upright Magnetic Fitness Bike",
        "category": "Cardio",
        "price": 20079.0,
        "image": "assets/images/products/134/main.jpg",
        "rating": 4.2,
        "reviews": 459,
        "description": "The Upright Magnetic Fitness Bike is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 204,
        "name": "Hand Wraps Cotton Boxing Bandages Pair",
        "category": "Combat",
        "price": 639.0,
        "image": "assets/images/products/204/main.jpg",
        "rating": 4.2,
        "reviews": 39,
        "description": "The Hand Wraps Cotton Boxing Bandages Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 274,
        "name": "Cold Therapy Ankle & Foot Ice Gel Boot",
        "category": "Recovery",
        "price": 2779.0,
        "image": "assets/images/products/274/main.jpg",
        "rating": 4.3,
        "reviews": 335,
        "description": "The Cold Therapy Ankle & Foot Ice Gel Boot is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 344,
        "name": "Heavy Cotton Padded Weightlifting Straps",
        "category": "Accessories",
        "price": 2379.0,
        "image": "assets/images/products/344/main.jpg",
        "rating": 4.7,
        "reviews": 259,
        "description": "The Heavy Cotton Padded Weightlifting Straps is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 414,
        "name": "Lightweight Track Jacket with Mesh Lining",
        "category": "Apparel",
        "price": 2379.0,
        "image": "assets/images/products/414/main.jpg",
        "rating": 4.1,
        "reviews": 318,
        "description": "The Lightweight Track Jacket with Mesh Lining is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 484,
        "name": "Wireless Heart Rate Armband Monitor",
        "category": "Fit Tech",
        "price": 3269.0,
        "image": "assets/images/products/484/main.jpg",
        "rating": 3.9,
        "reviews": 395,
        "description": "The Wireless Heart Rate Armband Monitor is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 554,
        "name": "Hydrolyzed Whey Isolate Powder (Vanilla 5 lbs)",
        "category": "Supplements",
        "price": 8959.0,
        "image": "assets/images/products/554/main.jpg",
        "rating": 4.5,
        "reviews": 355,
        "description": "The Hydrolyzed Whey Isolate Powder (Vanilla 5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 624,
        "name": "Rectangular Yoga Bolster Pillow",
        "category": "Yoga",
        "price": 2529.0,
        "image": "assets/images/products/624/main.jpg",
        "rating": 4.4,
        "reviews": 329,
        "description": "The Rectangular Yoga Bolster Pillow is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 694,
        "name": "Interlocking High-Density Rubber Gym Tiles (8-Pack)",
        "category": "Home Gym",
        "price": 5369.0,
        "image": "assets/images/products/694/main.jpg",
        "rating": 4.4,
        "reviews": 71,
        "description": "The Interlocking High-Density Rubber Gym Tiles (8-Pack) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 65,
        "name": "Heavy Duty Power Rack Extension Conversion Kit",
        "category": "Strength",
        "price": 37999.0,
        "image": "assets/images/products/65/main.jpg",
        "rating": 4.0,
        "reviews": 451,
        "description": "The Heavy Duty Power Rack Extension Conversion Kit is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 135,
        "name": "Motorized Treadmill with Shock Absorption Deck",
        "category": "Cardio",
        "price": 44199.0,
        "image": "assets/images/products/135/main.jpg",
        "rating": 5.0,
        "reviews": 350,
        "description": "The Motorized Treadmill with Shock Absorption Deck is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 205,
        "name": "Pro Leather Focus Mitts for Trainer",
        "category": "Combat",
        "price": 5079.0,
        "image": "assets/images/products/205/main.jpg",
        "rating": 4.2,
        "reviews": 216,
        "description": "The Pro Leather Focus Mitts for Trainer is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 275,
        "name": "Full Body Pneumatic Compression Massager",
        "category": "Recovery",
        "price": 9559.0,
        "image": "assets/images/products/275/main.jpg",
        "rating": 4.7,
        "reviews": 83,
        "description": "The Full Body Pneumatic Compression Massager is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 345,
        "name": "Latex Free Fabric Resistance Loop Bands",
        "category": "Accessories",
        "price": 829.0,
        "image": "assets/images/products/345/main.jpg",
        "rating": 4.7,
        "reviews": 478,
        "description": "The Latex Free Fabric Resistance Loop Bands is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 415,
        "name": "Fleece Lined Athletic Training Hoodie",
        "category": "Apparel",
        "price": 3119.0,
        "image": "assets/images/products/415/main.jpg",
        "rating": 4.2,
        "reviews": 102,
        "description": "The Fleece Lined Athletic Training Hoodie is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 485,
        "name": "Portable TENS EMS Electronic Pulse Massager",
        "category": "Fit Tech",
        "price": 7759.0,
        "image": "assets/images/products/485/main.jpg",
        "rating": 4.6,
        "reviews": 333,
        "description": "The Portable TENS EMS Electronic Pulse Massager is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 555,
        "name": "Pre-Workout Nitric Oxide Booster (Unflavored Powder)",
        "category": "Supplements",
        "price": 2419.0,
        "image": "assets/images/products/555/main.jpg",
        "rating": 4.3,
        "reviews": 30,
        "description": "The Pre-Workout Nitric Oxide Booster (Unflavored Powder) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 625,
        "name": "Ergonomic Yoga Wheel Back Roller",
        "category": "Yoga",
        "price": 1159.0,
        "image": "assets/images/products/625/main.jpg",
        "rating": 3.8,
        "reviews": 209,
        "description": "The Ergonomic Yoga Wheel Back Roller is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 695,
        "name": "Adjustable Dial Dumbbell Pair (5-52.5 lbs)",
        "category": "Home Gym",
        "price": 17879.0,
        "image": "assets/images/products/695/main.jpg",
        "rating": 3.8,
        "reviews": 269,
        "description": "The Adjustable Dial Dumbbell Pair (5-52.5 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 66,
        "name": "Solid Steel Farmers Walk Handles Pair",
        "category": "Strength",
        "price": 1329.0,
        "image": "assets/images/products/66/main.jpg",
        "rating": 4.8,
        "reviews": 295,
        "description": "The Solid Steel Farmers Walk Handles Pair is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 136,
        "name": "Smart Air Rower with Bluetooth Connectivity",
        "category": "Cardio",
        "price": 41249.0,
        "image": "assets/images/products/136/main.jpg",
        "rating": 4.0,
        "reviews": 292,
        "description": "The Smart Air Rower with Bluetooth Connectivity is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 206,
        "name": "MMA Combat Sparring Gloves (5 oz)",
        "category": "Combat",
        "price": 1639.0,
        "image": "assets/images/products/206/main.jpg",
        "rating": 4.3,
        "reviews": 374,
        "description": "The MMA Combat Sparring Gloves (5 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 276,
        "name": "Ergonomic Textured Foam Roller (14-Inch)",
        "category": "Recovery",
        "price": 1029.0,
        "image": "assets/images/products/276/main.jpg",
        "rating": 4.6,
        "reviews": 328,
        "description": "The Ergonomic Textured Foam Roller (14-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 346,
        "name": "Liquid Gym Chalk Tube (100ml)",
        "category": "Accessories",
        "price": 13449.0,
        "image": "assets/images/products/346/main.jpg",
        "rating": 4.4,
        "reviews": 442,
        "description": "The Liquid Gym Chalk Tube (100ml) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 416,
        "name": "Stretch Athletic Shorts with Built-In Liner",
        "category": "Apparel",
        "price": 2689.0,
        "image": "assets/images/products/416/main.jpg",
        "rating": 4.4,
        "reviews": 338,
        "description": "The Stretch Athletic Shorts with Built-In Liner is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 486,
        "name": "Waterproof Sport Earbuds with Secure Fit Hooks",
        "category": "Fit Tech",
        "price": 7319.0,
        "image": "assets/images/products/486/main.jpg",
        "rating": 4.7,
        "reviews": 395,
        "description": "The Waterproof Sport Earbuds with Secure Fit Hooks is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 556,
        "name": "Pure Creatine Monohydrate Powder (1000g Bulk)",
        "category": "Supplements",
        "price": 2289.0,
        "image": "assets/images/products/556/main.jpg",
        "rating": 4.7,
        "reviews": 310,
        "description": "The Pure Creatine Monohydrate Powder (1000g Bulk) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 626,
        "name": "Canvas Yoga Mat Carrying Shoulder Bag",
        "category": "Yoga",
        "price": 2439.0,
        "image": "assets/images/products/626/main.jpg",
        "rating": 4.8,
        "reviews": 240,
        "description": "The Canvas Yoga Mat Carrying Shoulder Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 696,
        "name": "Compact Foldable Incline Weight Bench (v66)",
        "category": "Home Gym",
        "price": 6119.0,
        "image": "assets/images/products/696/main.jpg",
        "rating": 4.0,
        "reviews": 91,
        "description": "The Compact Foldable Incline Weight Bench (v66) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 67,
        "name": "Rubber Coated Hex Dumbbell (60 lbs)",
        "category": "Strength",
        "price": 3099.0,
        "image": "assets/images/products/67/main.jpg",
        "rating": 4.2,
        "reviews": 364,
        "description": "The Rubber Coated Hex Dumbbell (60 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 137,
        "name": "Commercial Indoor Spin Bike with Heavy Flywheel",
        "category": "Cardio",
        "price": 36999.0,
        "image": "assets/images/products/137/main.jpg",
        "rating": 4.4,
        "reviews": 272,
        "description": "The Commercial Indoor Spin Bike with Heavy Flywheel is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 207,
        "name": "Competition Style Boxing Headgear",
        "category": "Combat",
        "price": 4299.0,
        "image": "assets/images/products/207/main.jpg",
        "rating": 4.5,
        "reviews": 220,
        "description": "The Competition Style Boxing Headgear is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 277,
        "name": "Deep Tissue Muscle Massage Ball (Solid Rubber)",
        "category": "Recovery",
        "price": 749.0,
        "image": "assets/images/products/277/main.jpg",
        "rating": 3.9,
        "reviews": 227,
        "description": "The Deep Tissue Muscle Massage Ball (Solid Rubber) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 347,
        "name": "Prong Buckle Leather Powerlifting Belt (10mm)",
        "category": "Accessories",
        "price": 3499.0,
        "image": "assets/images/products/347/main.jpg",
        "rating": 4.6,
        "reviews": 171,
        "description": "The Prong Buckle Leather Powerlifting Belt (10mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 417,
        "name": "Seamless Long Sleeve Crop Top",
        "category": "Apparel",
        "price": 1559.0,
        "image": "assets/images/products/417/main.jpg",
        "rating": 4.6,
        "reviews": 290,
        "description": "The Seamless Long Sleeve Crop Top is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 487,
        "name": "Smart Bike GPS Navigation Display",
        "category": "Fit Tech",
        "price": 15399.0,
        "image": "assets/images/products/487/main.jpg",
        "rating": 4.9,
        "reviews": 180,
        "description": "The Smart Bike GPS Navigation Display is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 557,
        "name": "BCAA 2:1:1 Recovery Powder (Blue Raspberry 30 Servings)",
        "category": "Supplements",
        "price": 1549.0,
        "image": "assets/images/products/557/main.jpg",
        "rating": 4.4,
        "reviews": 372,
        "description": "The BCAA 2:1:1 Recovery Powder (Blue Raspberry 30 Servings) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 627,
        "name": "Eco TPE Non-Slip Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 1499.0,
        "image": "assets/images/products/627/main.jpg",
        "rating": 4.7,
        "reviews": 419,
        "description": "The Eco TPE Non-Slip Yoga Mat (6mm) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 697,
        "name": "Wall-Mounted Steel Pull-Up Bar System",
        "category": "Home Gym",
        "price": 1799.0,
        "image": "assets/images/products/697/main.jpg",
        "rating": 4.8,
        "reviews": 469,
        "description": "The Wall-Mounted Steel Pull-Up Bar System is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 68,
        "name": "Cast Iron Kettlebell (18kg / 40lbs)",
        "category": "Strength",
        "price": 2409.0,
        "image": "assets/images/products/68/main.jpg",
        "rating": 4.9,
        "reviews": 405,
        "description": "The Cast Iron Kettlebell (18kg / 40lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 138,
        "name": "Stair Climber Stepper with Multi-Grip Handles",
        "category": "Cardio",
        "price": 23399.0,
        "image": "assets/images/products/138/main.jpg",
        "rating": 4.5,
        "reviews": 190,
        "description": "The Stair Climber Stepper with Multi-Grip Handles is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 208,
        "name": "Freestanding Reflex Boxing Punching Bag",
        "category": "Combat",
        "price": 7879.0,
        "image": "assets/images/products/208/main.jpg",
        "rating": 4.0,
        "reviews": 261,
        "description": "The Freestanding Reflex Boxing Punching Bag is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 278,
        "name": "Electric Infrared Heating Waist & Back Belt",
        "category": "Recovery",
        "price": 2599.0,
        "image": "assets/images/products/278/main.jpg",
        "rating": 4.9,
        "reviews": 417,
        "description": "The Electric Infrared Heating Waist & Back Belt is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 348,
        "name": "Elasticated Heavy Wrist Wraps Pair (20-Inch)",
        "category": "Accessories",
        "price": 779.0,
        "image": "assets/images/products/348/main.jpg",
        "rating": 4.2,
        "reviews": 88,
        "description": "The Elasticated Heavy Wrist Wraps Pair (20-Inch) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 418,
        "name": "Tapered Performance Gym Joggers",
        "category": "Apparel",
        "price": 2299.0,
        "image": "assets/images/products/418/main.jpg",
        "rating": 4.6,
        "reviews": 294,
        "description": "The Tapered Performance Gym Joggers is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 488,
        "name": "Continuous Heart Rate & Activity Tracker Ring",
        "category": "Fit Tech",
        "price": 4709.0,
        "image": "assets/images/products/488/main.jpg",
        "rating": 5.0,
        "reviews": 85,
        "description": "The Continuous Heart Rate & Activity Tracker Ring is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 558,
        "name": "Superfood Greens & Berry Antioxidant Powder (300g)",
        "category": "Supplements",
        "price": 2839.0,
        "image": "assets/images/products/558/main.jpg",
        "rating": 4.4,
        "reviews": 176,
        "description": "The Superfood Greens & Berry Antioxidant Powder (300g) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 628,
        "name": "High Density EVA Foam Yoga Block",
        "category": "Yoga",
        "price": 1169.0,
        "image": "assets/images/products/628/main.jpg",
        "rating": 3.8,
        "reviews": 135,
        "description": "The High Density EVA Foam Yoga Block is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 698,
        "name": "Bodyweight Suspension Trainer Straps Set",
        "category": "Home Gym",
        "price": 919.0,
        "image": "assets/images/products/698/main.jpg",
        "rating": 4.5,
        "reviews": 494,
        "description": "The Bodyweight Suspension Trainer Straps Set is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 69,
        "name": "Steel Weight Plate Set (300lb Olympic Set)",
        "category": "Strength",
        "price": 35799.0,
        "image": "assets/images/products/69/main.jpg",
        "rating": 4.1,
        "reviews": 200,
        "description": "The Steel Weight Plate Set (300lb Olympic Set) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 139,
        "name": "Foldable Space-Saving Magnetic Rower",
        "category": "Cardio",
        "price": 25599.0,
        "image": "assets/images/products/139/main.jpg",
        "rating": 4.3,
        "reviews": 409,
        "description": "The Foldable Space-Saving Magnetic Rower is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 209,
        "name": "Heavy Leather Banana Bag (130 lbs / 6ft)",
        "category": "Combat",
        "price": 3519.0,
        "image": "assets/images/products/209/main.jpg",
        "rating": 3.8,
        "reviews": 436,
        "description": "The Heavy Leather Banana Bag (130 lbs / 6ft) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 279,
        "name": "Epsom Salt Recovery Bath Soak with Eucalyptus",
        "category": "Recovery",
        "price": 2479.0,
        "image": "assets/images/products/279/main.jpg",
        "rating": 3.9,
        "reviews": 279,
        "description": "The Epsom Salt Recovery Bath Soak with Eucalyptus is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 419,
        "name": "Dry-Fit Sleeveless Training Hoodie",
        "category": "Apparel",
        "price": 1249.0,
        "image": "assets/images/products/419/main.jpg",
        "rating": 4.4,
        "reviews": 297,
        "description": "The Dry-Fit Sleeveless Training Hoodie is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 489,
        "name": "GPS Smartwatch with AMOLED Display",
        "category": "Fit Tech",
        "price": 16399.0,
        "image": "assets/images/products/489/main.jpg",
        "rating": 4.6,
        "reviews": 228,
        "description": "The GPS Smartwatch with AMOLED Display is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 559,
        "name": "Organic Plant Protein Powder (Salted Caramel 2 lbs)",
        "category": "Supplements",
        "price": 5519.0,
        "image": "assets/images/products/559/main.jpg",
        "rating": 4.9,
        "reviews": 97,
        "description": "The Organic Plant Protein Powder (Salted Caramel 2 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 629,
        "name": "Adjustable Metal Buckle Yoga Strap (8ft)",
        "category": "Yoga",
        "price": 1289.0,
        "image": "assets/images/products/629/main.jpg",
        "rating": 4.3,
        "reviews": 171,
        "description": "The Adjustable Metal Buckle Yoga Strap (8ft) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 699,
        "name": "Heavy Duty Power Tower Station (1000lb Limit)",
        "category": "Home Gym",
        "price": 2459.0,
        "image": "assets/images/products/699/main.jpg",
        "rating": 4.8,
        "reviews": 62,
        "description": "The Heavy Duty Power Tower Station (1000lb Limit) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 70,
        "name": "Heavy Duty Commercial Power Rack Cage",
        "category": "Strength",
        "price": 80499.0,
        "image": "assets/images/products/70/main.jpg",
        "rating": 4.1,
        "reviews": 275,
        "description": "The Heavy Duty Commercial Power Rack Cage is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 140,
        "name": "Commercial Heavy-Duty Motorized Treadmill",
        "category": "Cardio",
        "price": 113599.0,
        "image": "assets/images/products/140/main.jpg",
        "rating": 4.3,
        "reviews": 39,
        "description": "The Commercial Heavy-Duty Motorized Treadmill is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 210,
        "name": "Professional Lace-Up Boxing Gloves (14 oz)",
        "category": "Combat",
        "price": 4269.0,
        "image": "assets/images/products/210/main.jpg",
        "rating": 4.0,
        "reviews": 251,
        "description": "The Professional Lace-Up Boxing Gloves (14 oz) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 280,
        "name": "Pro Air Compression Leg & Thigh Recovery Boots",
        "category": "Recovery",
        "price": 3219.0,
        "image": "assets/images/products/280/main.jpg",
        "rating": 4.4,
        "reviews": 142,
        "description": "The Pro Air Compression Leg & Thigh Recovery Boots is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 420,
        "name": "Heavy Duty Leather Powerlifting Shoes",
        "category": "Apparel",
        "price": 7959.0,
        "image": "assets/images/products/420/main.jpg",
        "rating": 4.7,
        "reviews": 394,
        "description": "The Heavy Duty Leather Powerlifting Shoes is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 490,
        "name": "Chest Strap Heart Rate Sensor Transmitter",
        "category": "Fit Tech",
        "price": 3929.0,
        "image": "assets/images/products/490/main.jpg",
        "rating": 4.1,
        "reviews": 263,
        "description": "The Chest Strap Heart Rate Sensor Transmitter is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 560,
        "name": "Micellar Casein Nighttime Protein (Chocolate Milk 4 lbs)",
        "category": "Supplements",
        "price": 3629.0,
        "image": "assets/images/products/560/main.jpg",
        "rating": 4.7,
        "reviews": 291,
        "description": "The Micellar Casein Nighttime Protein (Chocolate Milk 4 lbs) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 630,
        "name": "Organic Cotton Meditation Bolster Pillow (v70)",
        "category": "Yoga",
        "price": 1359.0,
        "image": "assets/images/products/630/main.jpg",
        "rating": 3.9,
        "reviews": 299,
        "description": "The Organic Cotton Meditation Bolster Pillow (v70) is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    },
    {
        "id": 700,
        "name": "Interlocking Rubber Gym Floor Mat Roll",
        "category": "Home Gym",
        "price": 1509.0,
        "image": "assets/images/products/700/main.jpg",
        "rating": 4.3,
        "reviews": 76,
        "description": "The Interlocking Rubber Gym Floor Mat Roll is engineered to deliver peak durability, high performance, and ergonomic comfort for athletes and training facilities."
    }
];
