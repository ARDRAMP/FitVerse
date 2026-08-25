var shopProducts = [
    {
        "id": 1,
        "name": "Calibrated Steel Competition Bumper Plate (45 lbs)",
        "category": "Strength",
        "price": 1125.25,
        "image": "assets/images/products/1/main.jpg",
        "rating": 4.1,
        "reviews": 96,
        "description": "The Calibrated Steel Competition Bumper Plate is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 71,
        "name": "Commercial Motorized Treadmill with 15.6 Inch HD Touchscreen",
        "category": "Cardio",
        "price": 458.44,
        "image": "assets/images/products/71/main.jpg",
        "rating": 4.3,
        "reviews": 166,
        "description": "The Commercial Motorized Treadmill with 15.6 Inch HD Touchscreen is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 141,
        "name": "Heavy Leather Punching Bag (100 lbs / 4ft)",
        "category": "Combat",
        "price": 56.82,
        "image": "assets/images/products/141/main.jpg",
        "rating": 4.1,
        "reviews": 433,
        "description": "The Heavy Leather Punching Bag is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 211,
        "name": "High-Density Grid Foam Roller (18-Inch)",
        "category": "Recovery",
        "price": 483.77,
        "image": "assets/images/products/211/main.jpg",
        "rating": 5.0,
        "reviews": 378,
        "description": "The High-Density Grid Foam Roller is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 281,
        "name": "Heavy-Duty Resistance Loop Bands Set (5 Resistance Levels)",
        "category": "Accessories",
        "price": 45.74,
        "image": "assets/images/products/281/main.jpg",
        "rating": 4.7,
        "reviews": 248,
        "description": "The Heavy-Duty Resistance Loop Bands Set is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 351,
        "name": "Sweat-Wicking Performance Training Tee",
        "category": "Apparel",
        "price": 71.68,
        "image": "assets/images/products/351/main.jpg",
        "rating": 3.9,
        "reviews": 242,
        "description": "The Sweat-Wicking Performance Training Tee is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 421,
        "name": "GPS Sports Smartwatch with Heart Rate Monitor",
        "category": "Fit Tech",
        "price": 752.06,
        "image": "assets/images/products/421/main.jpg",
        "rating": 4.9,
        "reviews": 167,
        "description": "The GPS Sports Smartwatch with Heart Rate Monitor is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 491,
        "name": "100% Whey Protein Isolate Powder (Vanilla 5 lbs)",
        "category": "Supplements",
        "price": 33.54,
        "image": "assets/images/products/491/main.jpg",
        "rating": 4.4,
        "reviews": 279,
        "description": "The 100% Whey Protein Isolate Powder is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 561,
        "name": "Eco-Friendly Non-Slip Alignment Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 52.85,
        "image": "assets/images/products/561/main.jpg",
        "rating": 4.3,
        "reviews": 381,
        "description": "The Eco-Friendly Non-Slip Alignment Yoga Mat is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 631,
        "name": "Quick-Select Adjustable Dumbbells Pair (5-52.5 lbs)",
        "category": "Home Gym",
        "price": 434.07,
        "image": "assets/images/products/631/main.jpg",
        "rating": 3.9,
        "reviews": 496,
        "description": "The Quick-Select Adjustable Dumbbells Pair is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 2,
        "name": "Chrome Olympic Barbell (220K PSI Steel)",
        "category": "Strength",
        "price": 1123.97,
        "image": "assets/images/products/2/main.jpg",
        "rating": 4.5,
        "reviews": 327,
        "description": "The Chrome Olympic Barbell is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 72,
        "name": "Air Resistance Rowing Machine with Performance Monitor",
        "category": "Cardio",
        "price": 1133.96,
        "image": "assets/images/products/72/main.jpg",
        "rating": 4.0,
        "reviews": 159,
        "description": "The Air Resistance Rowing Machine with Performance Monitor is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 142,
        "name": "Pro Style Leather Boxing Headgear",
        "category": "Combat",
        "price": 73.94,
        "image": "assets/images/products/142/main.jpg",
        "rating": 4.5,
        "reviews": 475,
        "description": "The Pro Style Leather Boxing Headgear is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 212,
        "name": "Percussive Deep Tissue Massage Gun with 6 Heads",
        "category": "Recovery",
        "price": 1275.69,
        "image": "assets/images/products/212/main.jpg",
        "rating": 4.0,
        "reviews": 221,
        "description": "The Percussive Deep Tissue Massage Gun with 6 Heads is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 282,
        "name": "Genuine Grain Leather Powerlifting Belt (10mm Thickness)",
        "category": "Accessories",
        "price": 92.9,
        "image": "assets/images/products/282/main.jpg",
        "rating": 4.8,
        "reviews": 319,
        "description": "The Genuine Grain Leather Powerlifting Belt is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 352,
        "name": "High-Waisted Compression Workout Shorts (5-Inch)",
        "category": "Apparel",
        "price": 130.43,
        "image": "assets/images/products/352/main.jpg",
        "rating": 4.8,
        "reviews": 304,
        "description": "The High-Waisted Compression Workout Shorts is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 422,
        "name": "Chest Strap Heart Rate Monitor Sensor (ANT+ & Bluetooth)",
        "category": "Fit Tech",
        "price": 1415.15,
        "image": "assets/images/products/422/main.jpg",
        "rating": 5.0,
        "reviews": 419,
        "description": "The Chest Strap Heart Rate Monitor Sensor is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 492,
        "name": "High-Explosive Pre-Workout Powder (Sour Apple 30 Servings)",
        "category": "Supplements",
        "price": 82.25,
        "image": "assets/images/products/492/main.jpg",
        "rating": 4.7,
        "reviews": 414,
        "description": "The High-Explosive Pre-Workout Powder is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 562,
        "name": "High-Density EVA Foam Yoga Blocks (Set of 2)",
        "category": "Yoga",
        "price": 16.05,
        "image": "assets/images/products/562/main.jpg",
        "rating": 3.9,
        "reviews": 388,
        "description": "The High-Density EVA Foam Yoga Blocks is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 632,
        "name": "Space-Saving Foldable Utility Weight Bench",
        "category": "Home Gym",
        "price": 1701.89,
        "image": "assets/images/products/632/main.jpg",
        "rating": 4.3,
        "reviews": 349,
        "description": "The Space-Saving Foldable Utility Weight Bench is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 3,
        "name": "Cast Iron Kettlebell (24kg / 53lbs)",
        "category": "Strength",
        "price": 93.21,
        "image": "assets/images/products/3/main.jpg",
        "rating": 4.1,
        "reviews": 283,
        "description": "The Cast Iron Kettlebell is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 73,
        "name": "Heavy-Duty Fan Blade Air Bike with LCD Console",
        "category": "Cardio",
        "price": 1437.14,
        "image": "assets/images/products/73/main.jpg",
        "rating": 4.6,
        "reviews": 312,
        "description": "The Heavy-Duty Fan Blade Air Bike with LCD Console is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 143,
        "name": "Elasticated Cotton Hand Wraps (180-Inch Pair)",
        "category": "Combat",
        "price": 26.78,
        "image": "assets/images/products/143/main.jpg",
        "rating": 4.9,
        "reviews": 68,
        "description": "The Elasticated Cotton Hand Wraps is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 213,
        "name": "Cold Plunge Cryotherapy Ice Bath Tub Container",
        "category": "Recovery",
        "price": 393.95,
        "image": "assets/images/products/213/main.jpg",
        "rating": 4.5,
        "reviews": 319,
        "description": "The Cold Plunge Cryotherapy Ice Bath Tub Container is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 283,
        "name": "Elasticated Heavy-Duty Wrist Wraps (18-Inch Pair)",
        "category": "Accessories",
        "price": 46.4,
        "image": "assets/images/products/283/main.jpg",
        "rating": 4.6,
        "reviews": 173,
        "description": "The Elasticated Heavy-Duty Wrist Wraps is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 353,
        "name": "Heavyweight Fleece Athletic Pullover Hoodie",
        "category": "Apparel",
        "price": 42.95,
        "image": "assets/images/products/353/main.jpg",
        "rating": 4.2,
        "reviews": 176,
        "description": "The Heavyweight Fleece Athletic Pullover Hoodie is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 423,
        "name": "Smart Body Fat & Composition Digital Scale",
        "category": "Fit Tech",
        "price": 1050.85,
        "image": "assets/images/products/423/main.jpg",
        "rating": 4.4,
        "reviews": 270,
        "description": "The Smart Body Fat & Composition Digital Scale is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 493,
        "name": "Micronized Creatine Monohydrate Powder (500g Unflavored)",
        "category": "Supplements",
        "price": 43.36,
        "image": "assets/images/products/493/main.jpg",
        "rating": 4.3,
        "reviews": 313,
        "description": "The Micronized Creatine Monohydrate Powder is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 563,
        "name": "Durable Cotton Yoga Stretching Strap (8 Feet)",
        "category": "Yoga",
        "price": 86.43,
        "image": "assets/images/products/563/main.jpg",
        "rating": 4.6,
        "reviews": 371,
        "description": "The Durable Cotton Yoga Stretching Strap is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 633,
        "name": "Doorway Multi-Grip Pull-Up Bar Station",
        "category": "Home Gym",
        "price": 2156.29,
        "image": "assets/images/products/633/main.jpg",
        "rating": 4.7,
        "reviews": 458,
        "description": "The Doorway Multi-Grip Pull-Up Bar Station is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 4,
        "name": "Rubber Coated Hex Dumbbell (30 lbs)",
        "category": "Strength",
        "price": 338.31,
        "image": "assets/images/products/4/main.jpg",
        "rating": 4.6,
        "reviews": 304,
        "description": "The Rubber Coated Hex Dumbbell is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 74,
        "name": "Magnetic Resistance Elliptical Cross Trainer",
        "category": "Cardio",
        "price": 410.68,
        "image": "assets/images/products/74/main.jpg",
        "rating": 4.9,
        "reviews": 487,
        "description": "The Magnetic Resistance Elliptical Cross Trainer is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 144,
        "name": "Pro Guard Shin & Instep Protection Guards",
        "category": "Combat",
        "price": 96.12,
        "image": "assets/images/products/144/main.jpg",
        "rating": 4.5,
        "reviews": 148,
        "description": "The Pro Guard Shin & Instep Protection Guards is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 214,
        "name": "Gradient Athletic Leg Compression Sleeves Pair",
        "category": "Recovery",
        "price": 478.08,
        "image": "assets/images/products/214/main.jpg",
        "rating": 5.0,
        "reviews": 362,
        "description": "The Gradient Athletic Leg Compression Sleeves Pair is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 284,
        "name": "Magnesium Carbonate Pure Gym Chalk Block (8-Pack)",
        "category": "Accessories",
        "price": 11.88,
        "image": "assets/images/products/284/main.jpg",
        "rating": 4.2,
        "reviews": 435,
        "description": "The Magnesium Carbonate Pure Gym Chalk Block is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 354,
        "name": "Leather Olympic Weightlifting Shoes with Raised Heel",
        "category": "Apparel",
        "price": 130.46,
        "image": "assets/images/products/354/main.jpg",
        "rating": 4.3,
        "reviews": 378,
        "description": "The Leather Olympic Weightlifting Shoes with Raised Heel is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 424,
        "name": "Pneumatic Air Compression Leg Recovery Boots",
        "category": "Fit Tech",
        "price": 1403.87,
        "image": "assets/images/products/424/main.jpg",
        "rating": 4.8,
        "reviews": 165,
        "description": "The Pneumatic Air Compression Leg Recovery Boots is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 494,
        "name": "Instantized BCAA 2:1:1 Energy Powder (Blue Raspberry 300g)",
        "category": "Supplements",
        "price": 23.13,
        "image": "assets/images/products/494/main.jpg",
        "rating": 4.1,
        "reviews": 324,
        "description": "The Instantized BCAA 2:1:1 Energy Powder is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 564,
        "name": "Organic Cotton Meditation Bolster Pillow",
        "category": "Yoga",
        "price": 56.44,
        "image": "assets/images/products/564/main.jpg",
        "rating": 4.5,
        "reviews": 194,
        "description": "The Organic Cotton Meditation Bolster Pillow is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 634,
        "name": "Suspension Bodyweight Trainer Straps Kit",
        "category": "Home Gym",
        "price": 884.54,
        "image": "assets/images/products/634/main.jpg",
        "rating": 4.9,
        "reviews": 84,
        "description": "The Suspension Bodyweight Trainer Straps Kit is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 5,
        "name": "Heavy-Duty Commercial Squat Rack",
        "category": "Strength",
        "price": 701.35,
        "image": "assets/images/products/5/main.jpg",
        "rating": 4.1,
        "reviews": 470,
        "description": "The Heavy-Duty Commercial Squat Rack is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 75,
        "name": "Foldable Space-Saving Electric Treadmill",
        "category": "Cardio",
        "price": 300.88,
        "image": "assets/images/products/75/main.jpg",
        "rating": 4.2,
        "reviews": 307,
        "description": "The Foldable Space-Saving Electric Treadmill is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 145,
        "name": "Curved Leather Focus Punching Mitts Pair",
        "category": "Combat",
        "price": 149.57,
        "image": "assets/images/products/145/main.jpg",
        "rating": 4.3,
        "reviews": 33,
        "description": "The Curved Leather Focus Punching Mitts Pair is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 215,
        "name": "Recovery Epsom Salt Muscle Bath Soak (5 lbs)",
        "category": "Recovery",
        "price": 61.74,
        "image": "assets/images/products/215/main.jpg",
        "rating": 4.8,
        "reviews": 423,
        "description": "The Recovery Epsom Salt Muscle Bath Soak is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 285,
        "name": "Speed Cable Jump Rope with Ball Bearings & Spare Cable",
        "category": "Accessories",
        "price": 92.78,
        "image": "assets/images/products/285/main.jpg",
        "rating": 3.9,
        "reviews": 457,
        "description": "The Speed Cable Jump Rope with Ball Bearings & Spare Cable is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 355,
        "name": "Tapered Sweat-Wicking Athletic Joggers",
        "category": "Apparel",
        "price": 103.25,
        "image": "assets/images/products/355/main.jpg",
        "rating": 4.7,
        "reviews": 491,
        "description": "The Tapered Sweat-Wicking Athletic Joggers is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 425,
        "name": "Continuous Pulse Oximeter & Oxygen Tracker",
        "category": "Fit Tech",
        "price": 881.54,
        "image": "assets/images/products/425/main.jpg",
        "rating": 4.5,
        "reviews": 483,
        "description": "The Continuous Pulse Oximeter & Oxygen Tracker is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 495,
        "name": "Essential Athlete Daily Multivitamin Pack (60 Capsules)",
        "category": "Supplements",
        "price": 23.72,
        "image": "assets/images/products/495/main.jpg",
        "rating": 4.2,
        "reviews": 219,
        "description": "The Essential Athlete Daily Multivitamin Pack is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 565,
        "name": "Textured Cork Yoga Wheel for Back Extension",
        "category": "Yoga",
        "price": 30.87,
        "image": "assets/images/products/565/main.jpg",
        "rating": 4.3,
        "reviews": 119,
        "description": "The Textured Cork Yoga Wheel for Back Extension is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 635,
        "name": "Multi-Station Heavy Duty Power Tower",
        "category": "Home Gym",
        "price": 1904.73,
        "image": "assets/images/products/635/main.jpg",
        "rating": 4.2,
        "reviews": 404,
        "description": "The Multi-Station Heavy Duty Power Tower is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 6,
        "name": "Multi-Angle Adjustable Weight Bench",
        "category": "Strength",
        "price": 1218.44,
        "image": "assets/images/products/6/main.jpg",
        "rating": 4.6,
        "reviews": 199,
        "description": "The Multi-Angle Adjustable Weight Bench is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 76,
        "name": "Commercial Indoor Cycling Spin Bike with Magnetic Flywheel",
        "category": "Cardio",
        "price": 556.85,
        "image": "assets/images/products/76/main.jpg",
        "rating": 4.2,
        "reviews": 485,
        "description": "The Commercial Indoor Cycling Spin Bike with Magnetic Flywheel is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 146,
        "name": "Full-Face Protection Leather Boxing Headgear",
        "category": "Combat",
        "price": 63.78,
        "image": "assets/images/products/146/main.jpg",
        "rating": 4.6,
        "reviews": 181,
        "description": "The Full-Face Protection Leather Boxing Headgear is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 216,
        "name": "Electric Heated Muscle Massage Wrap Pad",
        "category": "Recovery",
        "price": 1130.5,
        "image": "assets/images/products/216/main.jpg",
        "rating": 4.8,
        "reviews": 487,
        "description": "The Electric Heated Muscle Massage Wrap Pad is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 286,
        "name": "Tactical Gym Duffel Bag with Shoe & Wet Compartment",
        "category": "Accessories",
        "price": 49.21,
        "image": "assets/images/products/286/main.jpg",
        "rating": 4.3,
        "reviews": 65,
        "description": "The Tactical Gym Duffel Bag with Shoe & Wet Compartment is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 356,
        "name": "Breathable Mesh Muscle Tank Top",
        "category": "Apparel",
        "price": 199.68,
        "image": "assets/images/products/356/main.jpg",
        "rating": 4.1,
        "reviews": 430,
        "description": "The Breathable Mesh Muscle Tank Top is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 426,
        "name": "Smart Fitness Tracker Ring with Sleep Analysis",
        "category": "Fit Tech",
        "price": 1434.18,
        "image": "assets/images/products/426/main.jpg",
        "rating": 4.8,
        "reviews": 173,
        "description": "The Smart Fitness Tracker Ring with Sleep Analysis is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 496,
        "name": "Advanced Clean Mass Gainer Powder (Chocolate 6 lbs)",
        "category": "Supplements",
        "price": 59.56,
        "image": "assets/images/products/496/main.jpg",
        "rating": 4.9,
        "reviews": 197,
        "description": "The Advanced Clean Mass Gainer Powder is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 566,
        "name": "Lightweight Yoga Mat Carrying Sling Strap",
        "category": "Yoga",
        "price": 45.6,
        "image": "assets/images/products/566/main.jpg",
        "rating": 4.7,
        "reviews": 477,
        "description": "The Lightweight Yoga Mat Carrying Sling Strap is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 636,
        "name": "Interlocking High-Density Rubber Gym Floor Tiles (6-Pack)",
        "category": "Home Gym",
        "price": 235.46,
        "image": "assets/images/products/636/main.jpg",
        "rating": 4.0,
        "reviews": 30,
        "description": "The Interlocking High-Density Rubber Gym Floor Tiles is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 7,
        "name": "Zinc-Coated Olympic Hex Trap Bar",
        "category": "Strength",
        "price": 362.2,
        "image": "assets/images/products/7/main.jpg",
        "rating": 4.7,
        "reviews": 77,
        "description": "The Zinc-Coated Olympic Hex Trap Bar is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 77,
        "name": "Stair Climber Stepper Machine with Ergonomic Handrails",
        "category": "Cardio",
        "price": 788.21,
        "image": "assets/images/products/77/main.jpg",
        "rating": 4.1,
        "reviews": 77,
        "description": "The Stair Climber Stepper Machine with Ergonomic Handrails is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 147,
        "name": "Heavy Duty Speed Bag Swivel Assembly Kit",
        "category": "Combat",
        "price": 121.86,
        "image": "assets/images/products/147/main.jpg",
        "rating": 4.2,
        "reviews": 406,
        "description": "The Heavy Duty Speed Bag Swivel Assembly Kit is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 217,
        "name": "Vibrating Foam Roller for Deep Tissue Recovery",
        "category": "Recovery",
        "price": 930.24,
        "image": "assets/images/products/217/main.jpg",
        "rating": 4.2,
        "reviews": 350,
        "description": "The Vibrating Foam Roller for Deep Tissue Recovery is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 287,
        "name": "Padded Weightlifting Straps Pair (Heavy Cotton)",
        "category": "Accessories",
        "price": 77.12,
        "image": "assets/images/products/287/main.jpg",
        "rating": 4.1,
        "reviews": 423,
        "description": "The Padded Weightlifting Straps Pair is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 357,
        "name": "Seamless High-Support Gym Sports Bra",
        "category": "Apparel",
        "price": 142.46,
        "image": "assets/images/products/357/main.jpg",
        "rating": 4.3,
        "reviews": 287,
        "description": "The Seamless High-Support Gym Sports Bra is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 427,
        "name": "Bluetooth Heart Rate Armband Monitor",
        "category": "Fit Tech",
        "price": 1435.2,
        "image": "assets/images/products/427/main.jpg",
        "rating": 3.9,
        "reviews": 498,
        "description": "The Bluetooth Heart Rate Armband Monitor is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 497,
        "name": "Pure Hydrolyzed Collagen Peptides Powder (450g)",
        "category": "Supplements",
        "price": 96.99,
        "image": "assets/images/products/497/main.jpg",
        "rating": 4.6,
        "reviews": 276,
        "description": "The Pure Hydrolyzed Collagen Peptides Powder is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 567,
        "name": "Premium Natural Rubber Yoga Mat (5mm)",
        "category": "Yoga",
        "price": 63.3,
        "image": "assets/images/products/567/main.jpg",
        "rating": 4.3,
        "reviews": 385,
        "description": "The Premium Natural Rubber Yoga Mat is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 637,
        "name": "Adjustable Dumbbells Set with Stand (5-70 lbs)",
        "category": "Home Gym",
        "price": 2868.45,
        "image": "assets/images/products/637/main.jpg",
        "rating": 4.4,
        "reviews": 425,
        "description": "The Adjustable Dumbbells Set with Stand is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 8,
        "name": "Urethane Pro Dumbbell Set (5-50 lbs)",
        "category": "Strength",
        "price": 190.24,
        "image": "assets/images/products/8/main.jpg",
        "rating": 4.8,
        "reviews": 334,
        "description": "The Urethane Pro Dumbbell Set is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 78,
        "name": "Self-Powered Curved Manual Treadmill",
        "category": "Cardio",
        "price": 2675.58,
        "image": "assets/images/products/78/main.jpg",
        "rating": 4.3,
        "reviews": 342,
        "description": "The Self-Powered Curved Manual Treadmill is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 148,
        "name": "Freestanding Heavy Punching Bag with Water Base",
        "category": "Combat",
        "price": 148.0,
        "image": "assets/images/products/148/main.jpg",
        "rating": 4.1,
        "reviews": 153,
        "description": "The Freestanding Heavy Punching Bag with Water Base is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 218,
        "name": "Ergonomic Massage Ball for Trigger Point Release",
        "category": "Recovery",
        "price": 413.41,
        "image": "assets/images/products/218/main.jpg",
        "rating": 4.7,
        "reviews": 417,
        "description": "The Ergonomic Massage Ball for Trigger Point Release is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 288,
        "name": "Fabric Resistance Hip Circle Booty Bands (Set of 3)",
        "category": "Accessories",
        "price": 55.94,
        "image": "assets/images/products/288/main.jpg",
        "rating": 3.9,
        "reviews": 286,
        "description": "The Fabric Resistance Hip Circle Booty Bands is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 358,
        "name": "Dry-Fit Compression Short Sleeve Shirt",
        "category": "Apparel",
        "price": 49.99,
        "image": "assets/images/products/358/main.jpg",
        "rating": 4.5,
        "reviews": 425,
        "description": "The Dry-Fit Compression Short Sleeve Shirt is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 428,
        "name": "HD Touchscreen Fitness Display Console",
        "category": "Fit Tech",
        "price": 1133.64,
        "image": "assets/images/products/428/main.jpg",
        "rating": 4.1,
        "reviews": 448,
        "description": "The HD Touchscreen Fitness Display Console is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 498,
        "name": "Electrolyte Hydration Powder Sticks (Lemon Lime 30 Packs)",
        "category": "Supplements",
        "price": 75.95,
        "image": "assets/images/products/498/main.jpg",
        "rating": 4.2,
        "reviews": 96,
        "description": "The Electrolyte Hydration Powder Sticks is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 568,
        "name": "High-Density Cork Yoga Blocks Pair",
        "category": "Yoga",
        "price": 35.05,
        "image": "assets/images/products/568/main.jpg",
        "rating": 4.6,
        "reviews": 432,
        "description": "The High-Density Cork Yoga Blocks Pair is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 638,
        "name": "Heavy Duty Wall-Mounted Pull-Up Bar",
        "category": "Home Gym",
        "price": 1241.23,
        "image": "assets/images/products/638/main.jpg",
        "rating": 4.7,
        "reviews": 472,
        "description": "The Heavy Duty Wall-Mounted Pull-Up Bar is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 9,
        "name": "Steel Loadable Macebell (15 lbs)",
        "category": "Strength",
        "price": 113.0,
        "image": "assets/images/products/9/main.jpg",
        "rating": 4.4,
        "reviews": 88,
        "description": "The Steel Loadable Macebell is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 79,
        "name": "Water Resistance Wood Rower with LCD Display",
        "category": "Cardio",
        "price": 2620.9,
        "image": "assets/images/products/79/main.jpg",
        "rating": 5.0,
        "reviews": 440,
        "description": "The Water Resistance Wood Rower with LCD Display is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 149,
        "name": "Muay Thai Kick Pads (Pair)",
        "category": "Combat",
        "price": 151.22,
        "image": "assets/images/products/149/main.jpg",
        "rating": 4.2,
        "reviews": 405,
        "description": "The Muay Thai Kick Pads is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 219,
        "name": "Pneumatic Air Compression Leg Recovery Boots (v9)",
        "category": "Recovery",
        "price": 190.89,
        "image": "assets/images/products/219/main.jpg",
        "rating": 4.6,
        "reviews": 45,
        "description": "The Pneumatic Air Compression Leg Recovery Boots is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 289,
        "name": "Heavy-Duty Lifting Hooks Grip Straps Pair",
        "category": "Accessories",
        "price": 41.6,
        "image": "assets/images/products/289/main.jpg",
        "rating": 4.9,
        "reviews": 355,
        "description": "The Heavy-Duty Lifting Hooks Grip Straps Pair is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 359,
        "name": "Technical Training Shorts with Liner (7-Inch)",
        "category": "Apparel",
        "price": 47.09,
        "image": "assets/images/products/359/main.jpg",
        "rating": 4.1,
        "reviews": 355,
        "description": "The Technical Training Shorts with Liner is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 429,
        "name": "Smart Muscle Stimulator TENS EMS Device",
        "category": "Fit Tech",
        "price": 1059.45,
        "image": "assets/images/products/429/main.jpg",
        "rating": 4.0,
        "reviews": 340,
        "description": "The Smart Muscle Stimulator TENS EMS Device is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 499,
        "name": "Plant-Based Vegan Organic Protein Powder (Chocolate 2 lbs)",
        "category": "Supplements",
        "price": 92.52,
        "image": "assets/images/products/499/main.jpg",
        "rating": 4.5,
        "reviews": 353,
        "description": "The Plant-Based Vegan Organic Protein Powder is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 569,
        "name": "Adjustable Metal Buckle Yoga Strap (10 Feet)",
        "category": "Yoga",
        "price": 19.16,
        "image": "assets/images/products/569/main.jpg",
        "rating": 4.8,
        "reviews": 120,
        "description": "The Adjustable Metal Buckle Yoga Strap is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 639,
        "name": "Suspension Trainer Pro Kit with Door Anchor",
        "category": "Home Gym",
        "price": 2681.96,
        "image": "assets/images/products/639/main.jpg",
        "rating": 4.7,
        "reviews": 40,
        "description": "The Suspension Trainer Pro Kit with Door Anchor is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 10,
        "name": "Wall-Mounted Heavy Foldable Power Rack",
        "category": "Strength",
        "price": 850.46,
        "image": "assets/images/products/10/main.jpg",
        "rating": 4.8,
        "reviews": 341,
        "description": "The Wall-Mounted Heavy Foldable Power Rack is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 80,
        "name": "Compact Under-Desk Walking Pad Treadmill",
        "category": "Cardio",
        "price": 269.4,
        "image": "assets/images/products/80/main.jpg",
        "rating": 4.7,
        "reviews": 195,
        "description": "The Compact Under-Desk Walking Pad Treadmill is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 150,
        "name": "Professional Leather Sparring Gloves (16 oz)",
        "category": "Combat",
        "price": 62.87,
        "image": "assets/images/products/150/main.jpg",
        "rating": 4.4,
        "reviews": 395,
        "description": "The Professional Leather Sparring Gloves is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 220,
        "name": "Compact Deep Tissue Massage Gun (Quiet Brushless)",
        "category": "Recovery",
        "price": 98.38,
        "image": "assets/images/products/220/main.jpg",
        "rating": 4.2,
        "reviews": 92,
        "description": "The Compact Deep Tissue Massage Gun is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 290,
        "name": "Stainless Steel Vacuum Insulated Gym Shaker Bottle (24oz)",
        "category": "Accessories",
        "price": 19.25,
        "image": "assets/images/products/290/main.jpg",
        "rating": 4.1,
        "reviews": 113,
        "description": "The Stainless Steel Vacuum Insulated Gym Shaker Bottle is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 360,
        "name": "Lightweight Zip-Up Gym Track Jacket",
        "category": "Apparel",
        "price": 92.0,
        "image": "assets/images/products/360/main.jpg",
        "rating": 4.5,
        "reviews": 334,
        "description": "The Lightweight Zip-Up Gym Track Jacket is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 430,
        "name": "Wearable GPS Multisport Watch with Map Navigation",
        "category": "Fit Tech",
        "price": 123.61,
        "image": "assets/images/products/430/main.jpg",
        "rating": 4.9,
        "reviews": 140,
        "description": "The Wearable GPS Multisport Watch with Map Navigation is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 500,
        "name": "Nighttime Micellar Casein Protein Powder (Chocolate 4 lbs)",
        "category": "Supplements",
        "price": 13.04,
        "image": "assets/images/products/500/main.jpg",
        "rating": 4.8,
        "reviews": 443,
        "description": "The Nighttime Micellar Casein Protein Powder is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 570,
        "name": "Round Cotton Meditation Cushion (Zafu)",
        "category": "Yoga",
        "price": 27.74,
        "image": "assets/images/products/570/main.jpg",
        "rating": 3.9,
        "reviews": 368,
        "description": "The Round Cotton Meditation Cushion is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 640,
        "name": "Power Tower Dip Station with Captains Chair",
        "category": "Home Gym",
        "price": 961.55,
        "image": "assets/images/products/640/main.jpg",
        "rating": 3.9,
        "reviews": 389,
        "description": "The Power Tower Dip Station with Captains Chair is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 11,
        "name": "Cast Iron Competition Kettlebell (16kg)",
        "category": "Strength",
        "price": 328.82,
        "image": "assets/images/products/11/main.jpg",
        "rating": 3.9,
        "reviews": 363,
        "description": "The Cast Iron Competition Kettlebell is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 81,
        "name": "Recumbent Exercise Bike with Padded Lumbar Support",
        "category": "Cardio",
        "price": 2619.38,
        "image": "assets/images/products/81/main.jpg",
        "rating": 4.8,
        "reviews": 161,
        "description": "The Recumbent Exercise Bike with Padded Lumbar Support is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 151,
        "name": "Tear-Resistant Canvas Heavy Bag (80 lbs)",
        "category": "Combat",
        "price": 170.71,
        "image": "assets/images/products/151/main.jpg",
        "rating": 4.2,
        "reviews": 209,
        "description": "The Tear-Resistant Canvas Heavy Bag is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 221,
        "name": "Full Body Acupressure Mat & Pillow Set",
        "category": "Recovery",
        "price": 523.74,
        "image": "assets/images/products/221/main.jpg",
        "rating": 4.3,
        "reviews": 127,
        "description": "The Full Body Acupressure Mat & Pillow Set is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 291,
        "name": "Thick Bar Grips for Dumbbells & Barbells (Pair)",
        "category": "Accessories",
        "price": 16.78,
        "image": "assets/images/products/291/main.jpg",
        "rating": 4.9,
        "reviews": 346,
        "description": "The Thick Bar Grips for Dumbbells & Barbells is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 361,
        "name": "Ribbed Crop Top Workout Tank",
        "category": "Apparel",
        "price": 103.74,
        "image": "assets/images/products/361/main.jpg",
        "rating": 4.2,
        "reviews": 252,
        "description": "The Ribbed Crop Top Workout Tank is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 431,
        "name": "Bluetooth Smart Body Analyzer Scale",
        "category": "Fit Tech",
        "price": 195.29,
        "image": "assets/images/products/431/main.jpg",
        "rating": 4.2,
        "reviews": 266,
        "description": "The Bluetooth Smart Body Analyzer Scale is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 501,
        "name": "Nitric Oxide Pump Pre-Workout Booster (Fruit Punch)",
        "category": "Supplements",
        "price": 47.12,
        "image": "assets/images/products/501/main.jpg",
        "rating": 4.8,
        "reviews": 143,
        "description": "The Nitric Oxide Pump Pre-Workout Booster is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 571,
        "name": "Deep Tissue Muscle Yoga Wheel (12-Inch)",
        "category": "Yoga",
        "price": 96.93,
        "image": "assets/images/products/571/main.jpg",
        "rating": 4.2,
        "reviews": 223,
        "description": "The Deep Tissue Muscle Yoga Wheel is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 641,
        "name": "Heavy Duty Interlocking Rubber Gym Matting (1/2 Inch)",
        "category": "Home Gym",
        "price": 1474.55,
        "image": "assets/images/products/641/main.jpg",
        "rating": 4.2,
        "reviews": 280,
        "description": "The Heavy Duty Interlocking Rubber Gym Matting is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 12,
        "name": "Machined Steel Weight Plate (25 lbs)",
        "category": "Strength",
        "price": 469.61,
        "image": "assets/images/products/12/main.jpg",
        "rating": 3.9,
        "reviews": 144,
        "description": "The Machined Steel Weight Plate is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 82,
        "name": "Commercial Grade Air Bike with Dual-Action Arms",
        "category": "Cardio",
        "price": 502.67,
        "image": "assets/images/products/82/main.jpg",
        "rating": 4.8,
        "reviews": 464,
        "description": "The Commercial Grade Air Bike with Dual-Action Arms is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 152,
        "name": "Gel-Enforced Inner Glove Hand Wraps",
        "category": "Combat",
        "price": 27.48,
        "image": "assets/images/products/152/main.jpg",
        "rating": 4.4,
        "reviews": 165,
        "description": "The Gel-Enforced Inner Glove Hand Wraps is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 222,
        "name": "Infrared Thermal Heating Pad for Back & Joints",
        "category": "Recovery",
        "price": 1320.87,
        "image": "assets/images/products/222/main.jpg",
        "rating": 4.2,
        "reviews": 281,
        "description": "The Infrared Thermal Heating Pad for Back & Joints is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 292,
        "name": "Neoprene Dip Belt with Heavy Duty Steel Chain",
        "category": "Accessories",
        "price": 77.9,
        "image": "assets/images/products/292/main.jpg",
        "rating": 4.7,
        "reviews": 254,
        "description": "The Neoprene Dip Belt with Heavy Duty Steel Chain is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 362,
        "name": "Thermal Compression Tights Pants",
        "category": "Apparel",
        "price": 49.1,
        "image": "assets/images/products/362/main.jpg",
        "rating": 4.2,
        "reviews": 185,
        "description": "The Thermal Compression Tights Pants is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 432,
        "name": "Wireless Heart Rate Chest Strap Sensor",
        "category": "Fit Tech",
        "price": 57.51,
        "image": "assets/images/products/432/main.jpg",
        "rating": 4.5,
        "reviews": 500,
        "description": "The Wireless Heart Rate Chest Strap Sensor is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 502,
        "name": "Creapure Micronized Creatine Powder (250g)",
        "category": "Supplements",
        "price": 23.59,
        "image": "assets/images/products/502/main.jpg",
        "rating": 4.1,
        "reviews": 258,
        "description": "The Creapure Micronized Creatine Powder is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 572,
        "name": "Absorbent Microfiber Yoga Mat Towel",
        "category": "Yoga",
        "price": 20.28,
        "image": "assets/images/products/572/main.jpg",
        "rating": 4.2,
        "reviews": 259,
        "description": "The Absorbent Microfiber Yoga Mat Towel is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 642,
        "name": "Compact Foldable Incline Weight Bench",
        "category": "Home Gym",
        "price": 640.47,
        "image": "assets/images/products/642/main.jpg",
        "rating": 4.7,
        "reviews": 482,
        "description": "The Compact Foldable Incline Weight Bench is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 13,
        "name": "Stainless Steel Powerlifting Barbell",
        "category": "Strength",
        "price": 453.06,
        "image": "assets/images/products/13/main.jpg",
        "rating": 4.6,
        "reviews": 211,
        "description": "The Stainless Steel Powerlifting Barbell is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 83,
        "name": "High-Intensity Interval Training Rower",
        "category": "Cardio",
        "price": 758.8,
        "image": "assets/images/products/83/main.jpg",
        "rating": 4.9,
        "reviews": 204,
        "description": "The High-Intensity Interval Training Rower is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 153,
        "name": "Leather Thai Shin Guards with Hook & Loop Strap",
        "category": "Combat",
        "price": 121.84,
        "image": "assets/images/products/153/main.jpg",
        "rating": 4.6,
        "reviews": 89,
        "description": "The Leather Thai Shin Guards with Hook & Loop Strap is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 223,
        "name": "Stainless Steel Scraping Muscle Gua Sha Tool Set",
        "category": "Recovery",
        "price": 422.61,
        "image": "assets/images/products/223/main.jpg",
        "rating": 4.8,
        "reviews": 271,
        "description": "The Stainless Steel Scraping Muscle Gua Sha Tool Set is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 293,
        "name": "Weighted Jump Rope with Removable Handle Weights",
        "category": "Accessories",
        "price": 38.45,
        "image": "assets/images/products/293/main.jpg",
        "rating": 4.3,
        "reviews": 265,
        "description": "The Weighted Jump Rope with Removable Handle Weights is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 363,
        "name": "Minimalist Cross-Training Athletic Shoes",
        "category": "Apparel",
        "price": 193.09,
        "image": "assets/images/products/363/main.jpg",
        "rating": 3.8,
        "reviews": 120,
        "description": "The Minimalist Cross-Training Athletic Shoes is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 433,
        "name": "Smart Jump Rope with LED Jump Counter",
        "category": "Fit Tech",
        "price": 996.69,
        "image": "assets/images/products/433/main.jpg",
        "rating": 4.9,
        "reviews": 268,
        "description": "The Smart Jump Rope with LED Jump Counter is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 503,
        "name": "Fermented Essential Amino Acids EAA Powder (Watermelon)",
        "category": "Supplements",
        "price": 65.61,
        "image": "assets/images/products/503/main.jpg",
        "rating": 4.6,
        "reviews": 340,
        "description": "The Fermented Essential Amino Acids EAA Powder is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 573,
        "name": "Extra Thick Cushioning Yoga Mat (8mm)",
        "category": "Yoga",
        "price": 92.68,
        "image": "assets/images/products/573/main.jpg",
        "rating": 4.5,
        "reviews": 369,
        "description": "The Extra Thick Cushioning Yoga Mat is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 643,
        "name": "Doorway Chin-Up & Pull-Up Bar",
        "category": "Home Gym",
        "price": 2274.18,
        "image": "assets/images/products/643/main.jpg",
        "rating": 3.8,
        "reviews": 464,
        "description": "The Doorway Chin-Up & Pull-Up Bar is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 14,
        "name": "Commercial Smith Machine Rack System",
        "category": "Strength",
        "price": 565.14,
        "image": "assets/images/products/14/main.jpg",
        "rating": 4.6,
        "reviews": 384,
        "description": "The Commercial Smith Machine Rack System is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 84,
        "name": "Smart Bluetooth Studio Spin Bike with Auto-Resistance",
        "category": "Cardio",
        "price": 824.19,
        "image": "assets/images/products/84/main.jpg",
        "rating": 4.6,
        "reviews": 229,
        "description": "The Smart Bluetooth Studio Spin Bike with Auto-Resistance is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 154,
        "name": "Target Kick Shield for Martial Arts Training",
        "category": "Combat",
        "price": 177.73,
        "image": "assets/images/products/154/main.jpg",
        "rating": 4.5,
        "reviews": 265,
        "description": "The Target Kick Shield for Martial Arts Training is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 224,
        "name": "Deep Tissue Dual Peanut Massage Ball",
        "category": "Recovery",
        "price": 1312.08,
        "image": "assets/images/products/224/main.jpg",
        "rating": 4.8,
        "reviews": 264,
        "description": "The Deep Tissue Dual Peanut Massage Ball is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 294,
        "name": "Gym Chalk Powder Ball in Reusable Mesh Bag",
        "category": "Accessories",
        "price": 37.25,
        "image": "assets/images/products/294/main.jpg",
        "rating": 4.1,
        "reviews": 53,
        "description": "The Gym Chalk Powder Ball in Reusable Mesh Bag is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 364,
        "name": "Oversized Cotton Heavy Weightlifting Tee",
        "category": "Apparel",
        "price": 92.72,
        "image": "assets/images/products/364/main.jpg",
        "rating": 4.5,
        "reviews": 159,
        "description": "The Oversized Cotton Heavy Weightlifting Tee is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 434,
        "name": "Handheld Percussive Body Composition Analyzer",
        "category": "Fit Tech",
        "price": 1146.07,
        "image": "assets/images/products/434/main.jpg",
        "rating": 4.1,
        "reviews": 171,
        "description": "The Handheld Percussive Body Composition Analyzer is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 504,
        "name": "High-Potency Omega-3 Fish Oil Softgels (120 Softgels)",
        "category": "Supplements",
        "price": 53.91,
        "image": "assets/images/products/504/main.jpg",
        "rating": 3.8,
        "reviews": 307,
        "description": "The High-Potency Omega-3 Fish Oil Softgels is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 574,
        "name": "Recycled EVA Foam Yoga Block Pair",
        "category": "Yoga",
        "price": 20.61,
        "image": "assets/images/products/574/main.jpg",
        "rating": 4.2,
        "reviews": 118,
        "description": "The Recycled EVA Foam Yoga Block Pair is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 644,
        "name": "Bodyweight Suspension Strap System with Anchor",
        "category": "Home Gym",
        "price": 328.75,
        "image": "assets/images/products/644/main.jpg",
        "rating": 4.2,
        "reviews": 496,
        "description": "The Bodyweight Suspension Strap System with Anchor is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 15,
        "name": "Adjustable Incline Flat Decline Bench",
        "category": "Strength",
        "price": 970.72,
        "image": "assets/images/products/15/main.jpg",
        "rating": 4.4,
        "reviews": 150,
        "description": "The Adjustable Incline Flat Decline Bench is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 85,
        "name": "Heavy-Duty Commercial Elliptical Trainer",
        "category": "Cardio",
        "price": 2620.19,
        "image": "assets/images/products/85/main.jpg",
        "rating": 5.0,
        "reviews": 167,
        "description": "The Heavy-Duty Commercial Elliptical Trainer is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 155,
        "name": "Leather Speed Bag (Medium 9x6 Inch)",
        "category": "Combat",
        "price": 84.62,
        "image": "assets/images/products/155/main.jpg",
        "rating": 5.0,
        "reviews": 154,
        "description": "The Leather Speed Bag is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 225,
        "name": "Portable Cold Therapy Ice Bath Tub with Cover",
        "category": "Recovery",
        "price": 1143.52,
        "image": "assets/images/products/225/main.jpg",
        "rating": 4.1,
        "reviews": 371,
        "description": "The Portable Cold Therapy Ice Bath Tub with Cover is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 295,
        "name": "Leather Weightlifting Gloves with Wrist Support",
        "category": "Accessories",
        "price": 16.68,
        "image": "assets/images/products/295/main.jpg",
        "rating": 4.4,
        "reviews": 44,
        "description": "The Leather Weightlifting Gloves with Wrist Support is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 365,
        "name": "High-Impact Zip Front Sports Bra",
        "category": "Apparel",
        "price": 103.1,
        "image": "assets/images/products/365/main.jpg",
        "rating": 5.0,
        "reviews": 171,
        "description": "The High-Impact Zip Front Sports Bra is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 435,
        "name": "Smart Workout Tracker Wristband with SpO2 Sensor",
        "category": "Fit Tech",
        "price": 995.83,
        "image": "assets/images/products/435/main.jpg",
        "rating": 4.1,
        "reviews": 403,
        "description": "The Smart Workout Tracker Wristband with SpO2 Sensor is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 505,
        "name": "Extreme Mass Gainer Powder (Vanilla 10 lbs)",
        "category": "Supplements",
        "price": 11.51,
        "image": "assets/images/products/505/main.jpg",
        "rating": 4.7,
        "reviews": 299,
        "description": "The Extreme Mass Gainer Powder is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 575,
        "name": "Cotton Yoga Stretching Belt Strap (6 Feet)",
        "category": "Yoga",
        "price": 55.97,
        "image": "assets/images/products/575/main.jpg",
        "rating": 4.3,
        "reviews": 95,
        "description": "The Cotton Yoga Stretching Belt Strap is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 645,
        "name": "Multi-Grip Power Tower Dip Station",
        "category": "Home Gym",
        "price": 2807.25,
        "image": "assets/images/products/645/main.jpg",
        "rating": 4.8,
        "reviews": 308,
        "description": "The Multi-Grip Power Tower Dip Station is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 16,
        "name": "Solid Rubber Bumper Plate (10kg)",
        "category": "Strength",
        "price": 600.21,
        "image": "assets/images/products/16/main.jpg",
        "rating": 5.0,
        "reviews": 352,
        "description": "The Solid Rubber Bumper Plate is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 86,
        "name": "Compact Folding Magnetic Exercise Bike",
        "category": "Cardio",
        "price": 1626.34,
        "image": "assets/images/products/86/main.jpg",
        "rating": 4.6,
        "reviews": 456,
        "description": "The Compact Folding Magnetic Exercise Bike is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 156,
        "name": "Freestanding Reflex Boxing Bag with Spring Neck",
        "category": "Combat",
        "price": 168.87,
        "image": "assets/images/products/156/main.jpg",
        "rating": 4.3,
        "reviews": 62,
        "description": "The Freestanding Reflex Boxing Bag with Spring Neck is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 226,
        "name": "Percussive Massage Gun with OLED Touchscreen",
        "category": "Recovery",
        "price": 580.37,
        "image": "assets/images/products/226/main.jpg",
        "rating": 4.7,
        "reviews": 32,
        "description": "The Percussive Massage Gun with OLED Touchscreen is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 296,
        "name": "Non-Slip Fabric Resistance Loop Band Set",
        "category": "Accessories",
        "price": 84.85,
        "image": "assets/images/products/296/main.jpg",
        "rating": 3.9,
        "reviews": 467,
        "description": "The Non-Slip Fabric Resistance Loop Band Set is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 366,
        "name": "Lightweight Running Shorts with Phone Pocket",
        "category": "Apparel",
        "price": 46.46,
        "image": "assets/images/products/366/main.jpg",
        "rating": 4.8,
        "reviews": 256,
        "description": "The Lightweight Running Shorts with Phone Pocket is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 436,
        "name": "Bluetooth Audio Sport Earbuds with Earhooks",
        "category": "Fit Tech",
        "price": 655.93,
        "image": "assets/images/products/436/main.jpg",
        "rating": 4.8,
        "reviews": 495,
        "description": "The Bluetooth Audio Sport Earbuds with Earhooks is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 506,
        "name": "Hydrolyzed Whey Isolate Protein (Strawberry 4 lbs)",
        "category": "Supplements",
        "price": 55.2,
        "image": "assets/images/products/506/main.jpg",
        "rating": 4.6,
        "reviews": 245,
        "description": "The Hydrolyzed Whey Isolate Protein is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 576,
        "name": "Rectangular Yoga Bolster Pillow Cushion",
        "category": "Yoga",
        "price": 26.72,
        "image": "assets/images/products/576/main.jpg",
        "rating": 4.6,
        "reviews": 380,
        "description": "The Rectangular Yoga Bolster Pillow Cushion is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 646,
        "name": "High-Density Rubber Gym Flooring Mats (4-Pack)",
        "category": "Home Gym",
        "price": 1101.05,
        "image": "assets/images/products/646/main.jpg",
        "rating": 4.3,
        "reviews": 393,
        "description": "The High-Density Rubber Gym Flooring Mats is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 17,
        "name": "Open Ended Trap Bar with Built-in Jack",
        "category": "Strength",
        "price": 520.21,
        "image": "assets/images/products/17/main.jpg",
        "rating": 4.7,
        "reviews": 53,
        "description": "The Open Ended Trap Bar with Built-in Jack is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 87,
        "name": "Commercial Stepper Mill Climber Machine",
        "category": "Cardio",
        "price": 522.96,
        "image": "assets/images/products/87/main.jpg",
        "rating": 5.0,
        "reviews": 116,
        "description": "The Commercial Stepper Mill Climber Machine is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 157,
        "name": "Muay Thai Pro Boxing Gloves (12 oz)",
        "category": "Combat",
        "price": 51.11,
        "image": "assets/images/products/157/main.jpg",
        "rating": 4.5,
        "reviews": 180,
        "description": "The Muay Thai Pro Boxing Gloves is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 227,
        "name": "High-Density EVA Foam Roller (36-Inch Full Size)",
        "category": "Recovery",
        "price": 229.2,
        "image": "assets/images/products/227/main.jpg",
        "rating": 4.2,
        "reviews": 408,
        "description": "The High-Density EVA Foam Roller is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 297,
        "name": "Prong Steel Buckle Leather Lifting Belt (13mm)",
        "category": "Accessories",
        "price": 63.47,
        "image": "assets/images/products/297/main.jpg",
        "rating": 4.3,
        "reviews": 322,
        "description": "The Prong Steel Buckle Leather Lifting Belt is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 367,
        "name": "Fleece Lined Athletic Training Sweatpants",
        "category": "Apparel",
        "price": 102.89,
        "image": "assets/images/products/367/main.jpg",
        "rating": 3.9,
        "reviews": 374,
        "description": "The Fleece Lined Athletic Training Sweatpants is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 437,
        "name": "Smart Speedometer & Cadence Sensor for Bikes",
        "category": "Fit Tech",
        "price": 1192.54,
        "image": "assets/images/products/437/main.jpg",
        "rating": 4.0,
        "reviews": 408,
        "description": "The Smart Speedometer & Cadence Sensor for Bikes is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 507,
        "name": "Stimulant-Free Pump Pre-Workout Powder (Unflavored)",
        "category": "Supplements",
        "price": 92.62,
        "image": "assets/images/products/507/main.jpg",
        "rating": 4.4,
        "reviews": 148,
        "description": "The Stimulant-Free Pump Pre-Workout Powder is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 577,
        "name": "Wood Grain Yoga Wheel Back Stretcher",
        "category": "Yoga",
        "price": 25.02,
        "image": "assets/images/products/577/main.jpg",
        "rating": 4.1,
        "reviews": 120,
        "description": "The Wood Grain Yoga Wheel Back Stretcher is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 647,
        "name": "Dial Adjustable Dumbbells Pair (10-90 lbs)",
        "category": "Home Gym",
        "price": 2512.79,
        "image": "assets/images/products/647/main.jpg",
        "rating": 4.5,
        "reviews": 86,
        "description": "The Dial Adjustable Dumbbells Pair is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 18,
        "name": "Rubber Hex Dumbbell Pair (40 lbs)",
        "category": "Strength",
        "price": 96.55,
        "image": "assets/images/products/18/main.jpg",
        "rating": 4.2,
        "reviews": 162,
        "description": "The Rubber Hex Dumbbell Pair is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 88,
        "name": "Ultra-Quiet Magnetic Rowing Machine",
        "category": "Cardio",
        "price": 503.53,
        "image": "assets/images/products/88/main.jpg",
        "rating": 4.3,
        "reviews": 398,
        "description": "The Ultra-Quiet Magnetic Rowing Machine is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 158,
        "name": "Ergonomic Leather Focus Mitts Pair",
        "category": "Combat",
        "price": 45.73,
        "image": "assets/images/products/158/main.jpg",
        "rating": 4.7,
        "reviews": 335,
        "description": "The Ergonomic Leather Focus Mitts Pair is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 228,
        "name": "Targeted Calf & Foot Compression Sleeves",
        "category": "Recovery",
        "price": 602.49,
        "image": "assets/images/products/228/main.jpg",
        "rating": 4.6,
        "reviews": 215,
        "description": "The Targeted Calf & Foot Compression Sleeves is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 298,
        "name": "Heavy Cotton Wrist Wraps with Thumb Loop (24-Inch)",
        "category": "Accessories",
        "price": 91.81,
        "image": "assets/images/products/298/main.jpg",
        "rating": 4.5,
        "reviews": 121,
        "description": "The Heavy Cotton Wrist Wraps with Thumb Loop is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 368,
        "name": "Seamless Camo Workout Leggings",
        "category": "Apparel",
        "price": 85.8,
        "image": "assets/images/products/368/main.jpg",
        "rating": 3.9,
        "reviews": 302,
        "description": "The Seamless Camo Workout Leggings is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 438,
        "name": "Wearable Thermal Muscle Warming Device",
        "category": "Fit Tech",
        "price": 63.44,
        "image": "assets/images/products/438/main.jpg",
        "rating": 4.5,
        "reviews": 79,
        "description": "The Wearable Thermal Muscle Warming Device is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 508,
        "name": "Micronized Creatine Monohydrate Powder (1kg Bulk)",
        "category": "Supplements",
        "price": 57.38,
        "image": "assets/images/products/508/main.jpg",
        "rating": 4.8,
        "reviews": 161,
        "description": "The Micronized Creatine Monohydrate Powder is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 578,
        "name": "Waterproof Canvas Yoga Mat Bag with Pockets",
        "category": "Yoga",
        "price": 65.75,
        "image": "assets/images/products/578/main.jpg",
        "rating": 4.8,
        "reviews": 29,
        "description": "The Waterproof Canvas Yoga Mat Bag with Pockets is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 648,
        "name": "Heavy Duty Foldable Flat Weight Bench",
        "category": "Home Gym",
        "price": 824.92,
        "image": "assets/images/products/648/main.jpg",
        "rating": 4.4,
        "reviews": 48,
        "description": "The Heavy Duty Foldable Flat Weight Bench is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 19,
        "name": "Cast Iron Kettlebell (32kg / 70lbs)",
        "category": "Strength",
        "price": 1374.05,
        "image": "assets/images/products/19/main.jpg",
        "rating": 4.5,
        "reviews": 392,
        "description": "The Cast Iron Kettlebell is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 89,
        "name": "Heavy-Duty Treadmill with 3.5 HP Continuous Motor",
        "category": "Cardio",
        "price": 1897.38,
        "image": "assets/images/products/89/main.jpg",
        "rating": 4.4,
        "reviews": 222,
        "description": "The Heavy-Duty Treadmill with 3.5 HP Continuous Motor is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 159,
        "name": "Pro Sparring Headgear with Removable Face Grill",
        "category": "Combat",
        "price": 91.57,
        "image": "assets/images/products/159/main.jpg",
        "rating": 4.9,
        "reviews": 177,
        "description": "The Pro Sparring Headgear with Removable Face Grill is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 229,
        "name": "Aromatherapy Epsom Salt Recovery Soak (3.5 lbs)",
        "category": "Recovery",
        "price": 389.04,
        "image": "assets/images/products/229/main.jpg",
        "rating": 3.8,
        "reviews": 477,
        "description": "The Aromatherapy Epsom Salt Recovery Soak is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 299,
        "name": "Large Capacity Gym Duffel Bag with Water Bottle Holder",
        "category": "Accessories",
        "price": 52.81,
        "image": "assets/images/products/299/main.jpg",
        "rating": 4.0,
        "reviews": 56,
        "description": "The Large Capacity Gym Duffel Bag with Water Bottle Holder is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 369,
        "name": "Performance Quarter-Zip Running Pullover",
        "category": "Apparel",
        "price": 173.99,
        "image": "assets/images/products/369/main.jpg",
        "rating": 4.7,
        "reviews": 499,
        "description": "The Performance Quarter-Zip Running Pullover is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 439,
        "name": "Wireless Digital Grip Strength Dynamometer Tester",
        "category": "Fit Tech",
        "price": 708.81,
        "image": "assets/images/products/439/main.jpg",
        "rating": 4.6,
        "reviews": 293,
        "description": "The Wireless Digital Grip Strength Dynamometer Tester is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 509,
        "name": "BCAA Intra-Workout Powder with Electrolytes (Mango 400g)",
        "category": "Supplements",
        "price": 43.57,
        "image": "assets/images/products/509/main.jpg",
        "rating": 4.3,
        "reviews": 314,
        "description": "The BCAA Intra-Workout Powder with Electrolytes is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 579,
        "name": "Non-Slip PU Leather Yoga Mat (4.5mm)",
        "category": "Yoga",
        "price": 27.56,
        "image": "assets/images/products/579/main.jpg",
        "rating": 4.3,
        "reviews": 312,
        "description": "The Non-Slip PU Leather Yoga Mat is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 649,
        "name": "Wall Mounted Multi-Grip Chin-Up Bar",
        "category": "Home Gym",
        "price": 2655.58,
        "image": "assets/images/products/649/main.jpg",
        "rating": 4.8,
        "reviews": 421,
        "description": "The Wall Mounted Multi-Grip Chin-Up Bar is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 20,
        "name": "Half Rack Rig with Safety Spotter Arms",
        "category": "Strength",
        "price": 1000.39,
        "image": "assets/images/products/20/main.jpg",
        "rating": 4.3,
        "reviews": 493,
        "description": "The Half Rack Rig with Safety Spotter Arms is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 90,
        "name": "Air Resistance Cross Trainer Fitness Bike",
        "category": "Cardio",
        "price": 324.28,
        "image": "assets/images/products/90/main.jpg",
        "rating": 4.3,
        "reviews": 291,
        "description": "The Air Resistance Cross Trainer Fitness Bike is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 160,
        "name": "Double End Strike Bag with Bungee Cord Kit",
        "category": "Combat",
        "price": 124.51,
        "image": "assets/images/products/160/main.jpg",
        "rating": 3.9,
        "reviews": 403,
        "description": "The Double End Strike Bag with Bungee Cord Kit is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 230,
        "name": "Heat Therapy Electric Knee Massage Wrap",
        "category": "Recovery",
        "price": 370.98,
        "image": "assets/images/products/230/main.jpg",
        "rating": 3.9,
        "reviews": 446,
        "description": "The Heat Therapy Electric Knee Massage Wrap is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 300,
        "name": "Self-Locking Nylon Weightlifting Belt (4-Inch)",
        "category": "Accessories",
        "price": 82.99,
        "image": "assets/images/products/300/main.jpg",
        "rating": 4.8,
        "reviews": 390,
        "description": "The Self-Locking Nylon Weightlifting Belt is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 370,
        "name": "Breathable Mesh Inset Athletic Tank",
        "category": "Apparel",
        "price": 114.03,
        "image": "assets/images/products/370/main.jpg",
        "rating": 3.9,
        "reviews": 127,
        "description": "The Breathable Mesh Inset Athletic Tank is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 440,
        "name": "GPS Running Smartwatch with Music Storage",
        "category": "Fit Tech",
        "price": 1284.04,
        "image": "assets/images/products/440/main.jpg",
        "rating": 4.4,
        "reviews": 123,
        "description": "The GPS Running Smartwatch with Music Storage is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 510,
        "name": "Athlete Joint Support Complex Capsules (90 Capsules)",
        "category": "Supplements",
        "price": 30.33,
        "image": "assets/images/products/510/main.jpg",
        "rating": 4.6,
        "reviews": 459,
        "description": "The Athlete Joint Support Complex Capsules is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 580,
        "name": "Natural Eco Cork Yoga Block Pair",
        "category": "Yoga",
        "price": 71.62,
        "image": "assets/images/products/580/main.jpg",
        "rating": 4.3,
        "reviews": 455,
        "description": "The Natural Eco Cork Yoga Block Pair is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 650,
        "name": "Commercial Suspension Bodyweight Trainer Kit",
        "category": "Home Gym",
        "price": 441.88,
        "image": "assets/images/products/650/main.jpg",
        "rating": 4.3,
        "reviews": 213,
        "description": "The Commercial Suspension Bodyweight Trainer Kit is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 21,
        "name": "Hard Chrome Olympic Training Bar (20kg)",
        "category": "Strength",
        "price": 434.08,
        "image": "assets/images/products/21/main.jpg",
        "rating": 4.1,
        "reviews": 312,
        "description": "The Hard Chrome Olympic Training Bar is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 91,
        "name": "Foldable Walking Pad with Remote Control",
        "category": "Cardio",
        "price": 1407.63,
        "image": "assets/images/products/91/main.jpg",
        "rating": 4.9,
        "reviews": 496,
        "description": "The Foldable Walking Pad with Remote Control is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 161,
        "name": "Heavy Leather Tear Drop Punching Bag (70 lbs)",
        "category": "Combat",
        "price": 134.47,
        "image": "assets/images/products/161/main.jpg",
        "rating": 4.1,
        "reviews": 66,
        "description": "The Heavy Leather Tear Drop Punching Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 231,
        "name": "Vibrating Massage Ball for Foot & Plantar Fasciitis",
        "category": "Recovery",
        "price": 488.18,
        "image": "assets/images/products/231/main.jpg",
        "rating": 4.3,
        "reviews": 96,
        "description": "The Vibrating Massage Ball for Foot & Plantar Fasciitis is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 301,
        "name": "High-Speed Aluminum Handle Jump Rope",
        "category": "Accessories",
        "price": 68.15,
        "image": "assets/images/products/301/main.jpg",
        "rating": 3.8,
        "reviews": 387,
        "description": "The High-Speed Aluminum Handle Jump Rope is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 371,
        "name": "High-Performance Compression Base Layer Shirt",
        "category": "Apparel",
        "price": 163.32,
        "image": "assets/images/products/371/main.jpg",
        "rating": 3.8,
        "reviews": 308,
        "description": "The High-Performance Compression Base Layer Shirt is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 441,
        "name": "Chest Harness Heart Rate Sensor for Training",
        "category": "Fit Tech",
        "price": 285.62,
        "image": "assets/images/products/441/main.jpg",
        "rating": 4.4,
        "reviews": 156,
        "description": "The Chest Harness Heart Rate Sensor for Training is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 511,
        "name": "Organic Plant Protein Powder (Vanilla Bean 2 lbs)",
        "category": "Supplements",
        "price": 99.25,
        "image": "assets/images/products/511/main.jpg",
        "rating": 4.6,
        "reviews": 41,
        "description": "The Organic Plant Protein Powder is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 581,
        "name": "Heavy Duty Cotton Yoga Strap with D-Ring",
        "category": "Yoga",
        "price": 25.05,
        "image": "assets/images/products/581/main.jpg",
        "rating": 4.5,
        "reviews": 432,
        "description": "The Heavy Duty Cotton Yoga Strap with D-Ring is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 651,
        "name": "Heavy Duty Power Tower Pull-Up Dip Station",
        "category": "Home Gym",
        "price": 1778.66,
        "image": "assets/images/products/651/main.jpg",
        "rating": 4.2,
        "reviews": 343,
        "description": "The Heavy Duty Power Tower Pull-Up Dip Station is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 22,
        "name": "Urethane Coated Weight Plate (35 lbs)",
        "category": "Strength",
        "price": 897.65,
        "image": "assets/images/products/22/main.jpg",
        "rating": 4.9,
        "reviews": 229,
        "description": "The Urethane Coated Weight Plate is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 92,
        "name": "Professional Recumbent Stationary Bike",
        "category": "Cardio",
        "price": 1078.96,
        "image": "assets/images/products/92/main.jpg",
        "rating": 4.8,
        "reviews": 393,
        "description": "The Professional Recumbent Stationary Bike is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 162,
        "name": "MMA Grappling Gloves (4 oz Competition Style)",
        "category": "Combat",
        "price": 55.42,
        "image": "assets/images/products/162/main.jpg",
        "rating": 3.9,
        "reviews": 26,
        "description": "The MMA Grappling Gloves is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 232,
        "name": "Multi-Chamber Air Compression Leg Recovery System",
        "category": "Recovery",
        "price": 491.33,
        "image": "assets/images/products/232/main.jpg",
        "rating": 4.4,
        "reviews": 74,
        "description": "The Multi-Chamber Air Compression Leg Recovery System is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 302,
        "name": "Tritan BPA-Free Leakproof Protein Shaker Bottle (28oz)",
        "category": "Accessories",
        "price": 57.17,
        "image": "assets/images/products/302/main.jpg",
        "rating": 4.5,
        "reviews": 211,
        "description": "The Tritan BPA-Free Leakproof Protein Shaker Bottle is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 372,
        "name": "Stretch Woven Training Shorts (9-Inch)",
        "category": "Apparel",
        "price": 165.64,
        "image": "assets/images/products/372/main.jpg",
        "rating": 4.5,
        "reviews": 338,
        "description": "The Stretch Woven Training Shorts is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 442,
        "name": "Smart Digital Scale with Smartphone App Sync",
        "category": "Fit Tech",
        "price": 1118.1,
        "image": "assets/images/products/442/main.jpg",
        "rating": 4.7,
        "reviews": 315,
        "description": "The Smart Digital Scale with Smartphone App Sync is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 512,
        "name": "Slow-Digesting Micellar Casein Powder (Vanilla 4 lbs)",
        "category": "Supplements",
        "price": 44.13,
        "image": "assets/images/products/512/main.jpg",
        "rating": 4.5,
        "reviews": 53,
        "description": "The Slow-Digesting Micellar Casein Powder is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 582,
        "name": "Buckwheat Meditation Cushion Pillow",
        "category": "Yoga",
        "price": 12.94,
        "image": "assets/images/products/582/main.jpg",
        "rating": 4.1,
        "reviews": 172,
        "description": "The Buckwheat Meditation Cushion Pillow is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 652,
        "name": "Interlocking Rubber Gym Floor Tiles (12-Pack)",
        "category": "Home Gym",
        "price": 1231.17,
        "image": "assets/images/products/652/main.jpg",
        "rating": 5.0,
        "reviews": 420,
        "description": "The Interlocking Rubber Gym Floor Tiles is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 23,
        "name": "Heavy Duty Flat Utility Bench (1000lb Capacity)",
        "category": "Strength",
        "price": 1496.12,
        "image": "assets/images/products/23/main.jpg",
        "rating": 4.0,
        "reviews": 277,
        "description": "The Heavy Duty Flat Utility Bench is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 93,
        "name": "Commercial Fluid Rower with Adjustable Resistance",
        "category": "Cardio",
        "price": 1066.0,
        "image": "assets/images/products/93/main.jpg",
        "rating": 4.3,
        "reviews": 231,
        "description": "The Commercial Fluid Rower with Adjustable Resistance is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 163,
        "name": "Semi-Elastic Boxing Hand Wraps (120-Inch)",
        "category": "Combat",
        "price": 145.64,
        "image": "assets/images/products/163/main.jpg",
        "rating": 4.4,
        "reviews": 41,
        "description": "The Semi-Elastic Boxing Hand Wraps is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 233,
        "name": "Mini Pocket Massage Gun for On-The-Go",
        "category": "Recovery",
        "price": 246.71,
        "image": "assets/images/products/233/main.jpg",
        "rating": 4.3,
        "reviews": 368,
        "description": "The Mini Pocket Massage Gun for On-The-Go is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 303,
        "name": "Silicone Padded Gym Workout Gloves Pair",
        "category": "Accessories",
        "price": 44.87,
        "image": "assets/images/products/303/main.jpg",
        "rating": 4.7,
        "reviews": 372,
        "description": "The Silicone Padded Gym Workout Gloves Pair is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 373,
        "name": "Heavy Duty Leather Squat & Deadlift Shoes",
        "category": "Apparel",
        "price": 79.13,
        "image": "assets/images/products/373/main.jpg",
        "rating": 5.0,
        "reviews": 393,
        "description": "The Heavy Duty Leather Squat & Deadlift Shoes is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 443,
        "name": "Pneumatic Compression Arm & Leg Boots System",
        "category": "Fit Tech",
        "price": 935.88,
        "image": "assets/images/products/443/main.jpg",
        "rating": 4.6,
        "reviews": 232,
        "description": "The Pneumatic Compression Arm & Leg Boots System is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 513,
        "name": "High Energy Pre-Workout Formula (Watermelon 30 Servings)",
        "category": "Supplements",
        "price": 25.42,
        "image": "assets/images/products/513/main.jpg",
        "rating": 4.4,
        "reviews": 247,
        "description": "The High Energy Pre-Workout Formula is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 583,
        "name": "Spine Release Yoga Wheel (10-Inch)",
        "category": "Yoga",
        "price": 60.91,
        "image": "assets/images/products/583/main.jpg",
        "rating": 4.7,
        "reviews": 278,
        "description": "The Spine Release Yoga Wheel is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 653,
        "name": "Quick-Change Adjustable Dumbbells Pair (5-25 lbs)",
        "category": "Home Gym",
        "price": 2721.24,
        "image": "assets/images/products/653/main.jpg",
        "rating": 4.7,
        "reviews": 150,
        "description": "The Quick-Change Adjustable Dumbbells Pair is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 24,
        "name": "Powder Coated Cast Iron Kettlebell (12kg)",
        "category": "Strength",
        "price": 118.32,
        "image": "assets/images/products/24/main.jpg",
        "rating": 3.9,
        "reviews": 346,
        "description": "The Powder Coated Cast Iron Kettlebell is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 94,
        "name": "Smart Interactive Spin Bike with Tablet Holder",
        "category": "Cardio",
        "price": 556.41,
        "image": "assets/images/products/94/main.jpg",
        "rating": 4.3,
        "reviews": 219,
        "description": "The Smart Interactive Spin Bike with Tablet Holder is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 164,
        "name": "Leather Muay Thai Belly Pad Guard",
        "category": "Combat",
        "price": 148.72,
        "image": "assets/images/products/164/main.jpg",
        "rating": 4.6,
        "reviews": 257,
        "description": "The Leather Muay Thai Belly Pad Guard is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 234,
        "name": "Ergonomic Contour Foam Roller (24-Inch)",
        "category": "Recovery",
        "price": 1126.29,
        "image": "assets/images/products/234/main.jpg",
        "rating": 4.0,
        "reviews": 237,
        "description": "The Ergonomic Contour Foam Roller is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 304,
        "name": "Long Pull-Up Assist Resistance Bands Set",
        "category": "Accessories",
        "price": 68.26,
        "image": "assets/images/products/304/main.jpg",
        "rating": 3.9,
        "reviews": 73,
        "description": "The Long Pull-Up Assist Resistance Bands Set is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 374,
        "name": "Classic Cotton Gym Graphic Tee",
        "category": "Apparel",
        "price": 96.89,
        "image": "assets/images/products/374/main.jpg",
        "rating": 4.3,
        "reviews": 319,
        "description": "The Classic Cotton Gym Graphic Tee is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 444,
        "name": "Smart Speed & Jump Counter Rope",
        "category": "Fit Tech",
        "price": 525.49,
        "image": "assets/images/products/444/main.jpg",
        "rating": 4.3,
        "reviews": 73,
        "description": "The Smart Speed & Jump Counter Rope is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 514,
        "name": "Pure Creatine Monohydrate Capsules (250 Capsules)",
        "category": "Supplements",
        "price": 97.96,
        "image": "assets/images/products/514/main.jpg",
        "rating": 5.0,
        "reviews": 483,
        "description": "The Pure Creatine Monohydrate Capsules is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 584,
        "name": "Non-Slip Microfiber Yoga Towel with Grip Dots",
        "category": "Yoga",
        "price": 20.28,
        "image": "assets/images/products/584/main.jpg",
        "rating": 4.7,
        "reviews": 446,
        "description": "The Non-Slip Microfiber Yoga Towel with Grip Dots is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 654,
        "name": "Foldable Slope Utility Bench for Home Gym",
        "category": "Home Gym",
        "price": 2810.71,
        "image": "assets/images/products/654/main.jpg",
        "rating": 3.8,
        "reviews": 302,
        "description": "The Foldable Slope Utility Bench for Home Gym is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 25,
        "name": "Pro Style Steel Dumbbell Pair (25 lbs)",
        "category": "Strength",
        "price": 1036.7,
        "image": "assets/images/products/25/main.jpg",
        "rating": 4.5,
        "reviews": 222,
        "description": "The Pro Style Steel Dumbbell Pair is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 95,
        "name": "Incline Trainer Treadmill with 0-40 Percent Incline",
        "category": "Cardio",
        "price": 1793.49,
        "image": "assets/images/products/95/main.jpg",
        "rating": 4.3,
        "reviews": 451,
        "description": "The Incline Trainer Treadmill with 0-40 Percent Incline is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 165,
        "name": "Pro Leather Boxing Bag (120 lbs / 5ft)",
        "category": "Combat",
        "price": 65.85,
        "image": "assets/images/products/165/main.jpg",
        "rating": 4.1,
        "reviews": 430,
        "description": "The Pro Leather Boxing Bag is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 235,
        "name": "Stainless Steel Muscle Scraper Soft Tissue Tool",
        "category": "Recovery",
        "price": 942.7,
        "image": "assets/images/products/235/main.jpg",
        "rating": 4.9,
        "reviews": 168,
        "description": "The Stainless Steel Muscle Scraper Soft Tissue Tool is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 305,
        "name": "Figure 8 Weightlifting Straps Pair",
        "category": "Accessories",
        "price": 32.68,
        "image": "assets/images/products/305/main.jpg",
        "rating": 4.8,
        "reviews": 489,
        "description": "The Figure 8 Weightlifting Straps Pair is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 375,
        "name": "Padded Medium Support Workout Sports Bra",
        "category": "Apparel",
        "price": 195.17,
        "image": "assets/images/products/375/main.jpg",
        "rating": 4.6,
        "reviews": 255,
        "description": "The Padded Medium Support Workout Sports Bra is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 445,
        "name": "Bluetooth Fitness Tracker Wristband",
        "category": "Fit Tech",
        "price": 742.31,
        "image": "assets/images/products/445/main.jpg",
        "rating": 4.9,
        "reviews": 28,
        "description": "The Bluetooth Fitness Tracker Wristband is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 515,
        "name": "EAA + Electrolyte Recovery Powder (Fruit Punch 30 Servings)",
        "category": "Supplements",
        "price": 29.03,
        "image": "assets/images/products/515/main.jpg",
        "rating": 4.8,
        "reviews": 479,
        "description": "The EAA + Electrolyte Recovery Powder is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 585,
        "name": "Extra Wide TPE Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 84.03,
        "image": "assets/images/products/585/main.jpg",
        "rating": 3.8,
        "reviews": 393,
        "description": "The Extra Wide TPE Yoga Mat is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 655,
        "name": "Doorway Pull-Up Bar with Padded Handles",
        "category": "Home Gym",
        "price": 2550.81,
        "image": "assets/images/products/655/main.jpg",
        "rating": 4.9,
        "reviews": 196,
        "description": "The Doorway Pull-Up Bar with Padded Handles is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 26,
        "name": "Steel Cable Crossover Machine Tower",
        "category": "Strength",
        "price": 1494.38,
        "image": "assets/images/products/26/main.jpg",
        "rating": 4.4,
        "reviews": 308,
        "description": "The Steel Cable Crossover Machine Tower is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 96,
        "name": "Heavy Duty Fan Bike for Cross-Training",
        "category": "Cardio",
        "price": 1003.36,
        "image": "assets/images/products/96/main.jpg",
        "rating": 4.3,
        "reviews": 321,
        "description": "The Heavy Duty Fan Bike for Cross-Training is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 166,
        "name": "Training Boxing Gloves (10 oz Lace-Up Style)",
        "category": "Combat",
        "price": 45.09,
        "image": "assets/images/products/166/main.jpg",
        "rating": 4.1,
        "reviews": 101,
        "description": "The Training Boxing Gloves is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 236,
        "name": "Therapeutic Heating & Cooling Gel Ice Pack Wrap",
        "category": "Recovery",
        "price": 587.27,
        "image": "assets/images/products/236/main.jpg",
        "rating": 4.3,
        "reviews": 145,
        "description": "The Therapeutic Heating & Cooling Gel Ice Pack Wrap is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 306,
        "name": "Liquid Gym Chalk Bottle (250ml Fast-Drying)",
        "category": "Accessories",
        "price": 17.34,
        "image": "assets/images/products/306/main.jpg",
        "rating": 4.6,
        "reviews": 494,
        "description": "The Liquid Gym Chalk Bottle is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 376,
        "name": "Ultra-Lightweight Track Running Pants",
        "category": "Apparel",
        "price": 115.54,
        "image": "assets/images/products/376/main.jpg",
        "rating": 4.0,
        "reviews": 449,
        "description": "The Ultra-Lightweight Track Running Pants is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 446,
        "name": "Smart TENS Unit Muscle Relief Controller",
        "category": "Fit Tech",
        "price": 391.51,
        "image": "assets/images/products/446/main.jpg",
        "rating": 4.7,
        "reviews": 193,
        "description": "The Smart TENS Unit Muscle Relief Controller is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 516,
        "name": "Daily Greens & Superfood Powder Blend (300g)",
        "category": "Supplements",
        "price": 14.19,
        "image": "assets/images/products/516/main.jpg",
        "rating": 3.9,
        "reviews": 498,
        "description": "The Daily Greens & Superfood Powder Blend is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 586,
        "name": "High Density Foam Yoga Block Set with Strap",
        "category": "Yoga",
        "price": 29.67,
        "image": "assets/images/products/586/main.jpg",
        "rating": 4.3,
        "reviews": 401,
        "description": "The High Density Foam Yoga Block Set with Strap is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 656,
        "name": "Professional Suspension Trainer Straps System",
        "category": "Home Gym",
        "price": 1253.57,
        "image": "assets/images/products/656/main.jpg",
        "rating": 4.7,
        "reviews": 182,
        "description": "The Professional Suspension Trainer Straps System is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 27,
        "name": "Competition Bumper Plate Pair (20kg)",
        "category": "Strength",
        "price": 1095.05,
        "image": "assets/images/products/27/main.jpg",
        "rating": 4.6,
        "reviews": 299,
        "description": "The Competition Bumper Plate Pair is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 97,
        "name": "Under-Desk Treadmill Walking Pad with LED Display",
        "category": "Cardio",
        "price": 1437.0,
        "image": "assets/images/products/97/main.jpg",
        "rating": 4.6,
        "reviews": 286,
        "description": "The Under-Desk Treadmill Walking Pad with LED Display is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 167,
        "name": "Contoured Shin Guards for Kickboxing",
        "category": "Combat",
        "price": 37.5,
        "image": "assets/images/products/167/main.jpg",
        "rating": 4.0,
        "reviews": 182,
        "description": "The Contoured Shin Guards for Kickboxing is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 237,
        "name": "Deep Tissue Lacrosse Massage Ball Pair",
        "category": "Recovery",
        "price": 1472.35,
        "image": "assets/images/products/237/main.jpg",
        "rating": 4.2,
        "reviews": 486,
        "description": "The Deep Tissue Lacrosse Massage Ball Pair is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 307,
        "name": "Weighted Fitness Jump Rope (1 lb Heavy Cable)",
        "category": "Accessories",
        "price": 97.09,
        "image": "assets/images/products/307/main.jpg",
        "rating": 4.6,
        "reviews": 225,
        "description": "The Weighted Fitness Jump Rope is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 377,
        "name": "Seamless High-Waisted Gym Leggings",
        "category": "Apparel",
        "price": 100.71,
        "image": "assets/images/products/377/main.jpg",
        "rating": 4.9,
        "reviews": 53,
        "description": "The Seamless High-Waisted Gym Leggings is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 447,
        "name": "Wireless Sports Earbuds with Active Noise Cancellation",
        "category": "Fit Tech",
        "price": 1098.18,
        "image": "assets/images/products/447/main.jpg",
        "rating": 3.8,
        "reviews": 359,
        "description": "The Wireless Sports Earbuds with Active Noise Cancellation is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 517,
        "name": "High Calorie Lean Mass Gainer (Cookies & Cream 5 lbs)",
        "category": "Supplements",
        "price": 60.72,
        "image": "assets/images/products/517/main.jpg",
        "rating": 3.8,
        "reviews": 500,
        "description": "The High Calorie Lean Mass Gainer is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 587,
        "name": "Multi-Loop Stretching Yoga Belt Strap",
        "category": "Yoga",
        "price": 88.73,
        "image": "assets/images/products/587/main.jpg",
        "rating": 3.8,
        "reviews": 159,
        "description": "The Multi-Loop Stretching Yoga Belt Strap is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 657,
        "name": "Multi-Grip Pull-Up Dip Power Tower Station",
        "category": "Home Gym",
        "price": 1683.48,
        "image": "assets/images/products/657/main.jpg",
        "rating": 4.1,
        "reviews": 276,
        "description": "The Multi-Grip Pull-Up Dip Power Tower Station is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 28,
        "name": "Multi-Grip Curved Swiss Barbell",
        "category": "Strength",
        "price": 979.39,
        "image": "assets/images/products/28/main.jpg",
        "rating": 3.9,
        "reviews": 247,
        "description": "The Multi-Grip Curved Swiss Barbell is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 98,
        "name": "Commercial Magnetic Elliptical Machine",
        "category": "Cardio",
        "price": 675.14,
        "image": "assets/images/products/98/main.jpg",
        "rating": 3.9,
        "reviews": 288,
        "description": "The Commercial Magnetic Elliptical Machine is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 168,
        "name": "Curved Micro Punch Mitts for Precision",
        "category": "Combat",
        "price": 46.76,
        "image": "assets/images/products/168/main.jpg",
        "rating": 4.6,
        "reviews": 383,
        "description": "The Curved Micro Punch Mitts for Precision is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 238,
        "name": "Inflatable Cold Therapy Ice Plunge Tub",
        "category": "Recovery",
        "price": 627.3,
        "image": "assets/images/products/238/main.jpg",
        "rating": 4.0,
        "reviews": 87,
        "description": "The Inflatable Cold Therapy Ice Plunge Tub is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 308,
        "name": "Convertible Gym Backpack & Duffel Bag",
        "category": "Accessories",
        "price": 73.8,
        "image": "assets/images/products/308/main.jpg",
        "rating": 3.9,
        "reviews": 311,
        "description": "The Convertible Gym Backpack & Duffel Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 378,
        "name": "Oversized Heavyweight Gym Hoodie",
        "category": "Apparel",
        "price": 51.78,
        "image": "assets/images/products/378/main.jpg",
        "rating": 4.0,
        "reviews": 190,
        "description": "The Oversized Heavyweight Gym Hoodie is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 448,
        "name": "Smart Bike Computer with GPS Navigation",
        "category": "Fit Tech",
        "price": 140.08,
        "image": "assets/images/products/448/main.jpg",
        "rating": 3.9,
        "reviews": 182,
        "description": "The Smart Bike Computer with GPS Navigation is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 518,
        "name": "100% Whey Isolate Protein Powder (Chocolate Fudge 5 lbs)",
        "category": "Supplements",
        "price": 96.53,
        "image": "assets/images/products/518/main.jpg",
        "rating": 4.5,
        "reviews": 410,
        "description": "The 100% Whey Isolate Protein Powder is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 588,
        "name": "Organic Cotton Round Yoga Bolster",
        "category": "Yoga",
        "price": 49.52,
        "image": "assets/images/products/588/main.jpg",
        "rating": 5.0,
        "reviews": 422,
        "description": "The Organic Cotton Round Yoga Bolster is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 658,
        "name": "High Density Rubber Gym Flooring Tile (single)",
        "category": "Home Gym",
        "price": 2192.63,
        "image": "assets/images/products/658/main.jpg",
        "rating": 3.9,
        "reviews": 496,
        "description": "The High Density Rubber Gym Flooring Tile is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 29,
        "name": "Foldable Wall Rack with Pull-Up Bar",
        "category": "Strength",
        "price": 54.71,
        "image": "assets/images/products/29/main.jpg",
        "rating": 4.7,
        "reviews": 393,
        "description": "The Foldable Wall Rack with Pull-Up Bar is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 99,
        "name": "Dual-Handle Hydro Rowing Machine",
        "category": "Cardio",
        "price": 2491.59,
        "image": "assets/images/products/99/main.jpg",
        "rating": 4.7,
        "reviews": 369,
        "description": "The Dual-Handle Hydro Rowing Machine is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 169,
        "name": "Competition Boxing Headgear (Cheek Protection)",
        "category": "Combat",
        "price": 112.58,
        "image": "assets/images/products/169/main.jpg",
        "rating": 4.4,
        "reviews": 66,
        "description": "The Competition Boxing Headgear is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 239,
        "name": "Professional Percussive Massage Gun (8 Speeds)",
        "category": "Recovery",
        "price": 1011.01,
        "image": "assets/images/products/239/main.jpg",
        "rating": 4.6,
        "reviews": 330,
        "description": "The Professional Percussive Massage Gun is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 309,
        "name": "Neoprene Knee Sleeves 7mm Pair for Squats",
        "category": "Accessories",
        "price": 81.25,
        "image": "assets/images/products/309/main.jpg",
        "rating": 4.8,
        "reviews": 368,
        "description": "The Neoprene Knee Sleeves 7mm Pair for Squats is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 379,
        "name": "Dry-Fit Sleeveless Muscle Shirt",
        "category": "Apparel",
        "price": 190.81,
        "image": "assets/images/products/379/main.jpg",
        "rating": 4.4,
        "reviews": 170,
        "description": "The Dry-Fit Sleeveless Muscle Shirt is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 449,
        "name": "Continuous Glucose & Workout Monitor Sensor",
        "category": "Fit Tech",
        "price": 1044.81,
        "image": "assets/images/products/449/main.jpg",
        "rating": 4.9,
        "reviews": 479,
        "description": "The Continuous Glucose & Workout Monitor Sensor is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 519,
        "name": "Non-Stim Pre-Workout Pump Matrix (300g)",
        "category": "Supplements",
        "price": 36.93,
        "image": "assets/images/products/519/main.jpg",
        "rating": 4.5,
        "reviews": 315,
        "description": "The Non-Stim Pre-Workout Pump Matrix is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 589,
        "name": "Textured Rubber Yoga Wheel Stretcher",
        "category": "Yoga",
        "price": 82.96,
        "image": "assets/images/products/589/main.jpg",
        "rating": 4.5,
        "reviews": 204,
        "description": "The Textured Rubber Yoga Wheel Stretcher is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 659,
        "name": "Adjustable Dial Dumbbell Set with Tray (5-50 lbs)",
        "category": "Home Gym",
        "price": 1356.56,
        "image": "assets/images/products/659/main.jpg",
        "rating": 4.9,
        "reviews": 259,
        "description": "The Adjustable Dial Dumbbell Set with Tray is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 30,
        "name": "Commercial Preacher Curl Bench",
        "category": "Strength",
        "price": 1154.85,
        "image": "assets/images/products/30/main.jpg",
        "rating": 4.4,
        "reviews": 79,
        "description": "The Commercial Preacher Curl Bench is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 100,
        "name": "Upright Fitness Exercise Bike with Heart Rate Grips",
        "category": "Cardio",
        "price": 2458.38,
        "image": "assets/images/products/100/main.jpg",
        "rating": 4.0,
        "reviews": 48,
        "description": "The Upright Fitness Exercise Bike with Heart Rate Grips is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 170,
        "name": "Freestanding Heavy Bag with Multi-Zone Targets",
        "category": "Combat",
        "price": 153.54,
        "image": "assets/images/products/170/main.jpg",
        "rating": 4.5,
        "reviews": 38,
        "description": "The Freestanding Heavy Bag with Multi-Zone Targets is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 240,
        "name": "Textured Hollow Grid Foam Roller (13-Inch)",
        "category": "Recovery",
        "price": 1190.85,
        "image": "assets/images/products/240/main.jpg",
        "rating": 4.1,
        "reviews": 89,
        "description": "The Textured Hollow Grid Foam Roller is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 310,
        "name": "Genuine Leather Contour Weightlifting Belt",
        "category": "Accessories",
        "price": 70.34,
        "image": "assets/images/products/310/main.jpg",
        "rating": 4.4,
        "reviews": 34,
        "description": "The Genuine Leather Contour Weightlifting Belt is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 380,
        "name": "Stretch Athletic Training Shorts (5-Inch)",
        "category": "Apparel",
        "price": 59.35,
        "image": "assets/images/products/380/main.jpg",
        "rating": 4.9,
        "reviews": 165,
        "description": "The Stretch Athletic Training Shorts is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 450,
        "name": "GPS Multisport Watch with Sapphire Crystal Lens",
        "category": "Fit Tech",
        "price": 976.13,
        "image": "assets/images/products/450/main.jpg",
        "rating": 4.9,
        "reviews": 213,
        "description": "The GPS Multisport Watch with Sapphire Crystal Lens is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 520,
        "name": "Micronized Creatine Monohydrate Powder (300g)",
        "category": "Supplements",
        "price": 90.69,
        "image": "assets/images/products/520/main.jpg",
        "rating": 4.2,
        "reviews": 411,
        "description": "The Micronized Creatine Monohydrate Powder is formulated to deliver stability and safety throughout intense exercise. Provides essential utility for structured workout regimens."
    },
    {
        "id": 590,
        "name": "Full Zip Canvas Yoga Mat Tote Bag",
        "category": "Yoga",
        "price": 65.45,
        "image": "assets/images/products/590/main.jpg",
        "rating": 4.7,
        "reviews": 441,
        "description": "The Full Zip Canvas Yoga Mat Tote Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 660,
        "name": "Compact Folding Weight Bench Press",
        "category": "Home Gym",
        "price": 467.62,
        "image": "assets/images/products/660/main.jpg",
        "rating": 4.0,
        "reviews": 444,
        "description": "The Compact Folding Weight Bench Press is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 31,
        "name": "Rubber Hex Dumbbell Pair (15 lbs)",
        "category": "Strength",
        "price": 976.48,
        "image": "assets/images/products/31/main.jpg",
        "rating": 4.5,
        "reviews": 103,
        "description": "The Rubber Hex Dumbbell Pair is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 101,
        "name": "Smart Motorized Treadmill with Auto-Incline",
        "category": "Cardio",
        "price": 1911.57,
        "image": "assets/images/products/101/main.jpg",
        "rating": 4.7,
        "reviews": 258,
        "description": "The Smart Motorized Treadmill with Auto-Incline is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 171,
        "name": "Heavy Canvas Wrecking Ball Punching Bag",
        "category": "Combat",
        "price": 193.33,
        "image": "assets/images/products/171/main.jpg",
        "rating": 4.8,
        "reviews": 319,
        "description": "The Heavy Canvas Wrecking Ball Punching Bag is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 241,
        "name": "Graduated Arm Compression Sleeves Pair",
        "category": "Recovery",
        "price": 1253.24,
        "image": "assets/images/products/241/main.jpg",
        "rating": 4.5,
        "reviews": 325,
        "description": "The Graduated Arm Compression Sleeves Pair is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 311,
        "name": "Elastic Ankle Straps for Cable Machine Attachment",
        "category": "Accessories",
        "price": 26.22,
        "image": "assets/images/products/311/main.jpg",
        "rating": 4.1,
        "reviews": 417,
        "description": "The Elastic Ankle Straps for Cable Machine Attachment is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 381,
        "name": "Thermal Base Layer Compression Leggings",
        "category": "Apparel",
        "price": 77.99,
        "image": "assets/images/products/381/main.jpg",
        "rating": 4.4,
        "reviews": 282,
        "description": "The Thermal Base Layer Compression Leggings is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 451,
        "name": "Dual-Band Heart Rate Chest Strap (Bluetooth/ANT+)",
        "category": "Fit Tech",
        "price": 1438.17,
        "image": "assets/images/products/451/main.jpg",
        "rating": 4.4,
        "reviews": 257,
        "description": "The Dual-Band Heart Rate Chest Strap is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 521,
        "name": "BCAA Energy Powder Drink Mix (Grape 30 Servings)",
        "category": "Supplements",
        "price": 75.17,
        "image": "assets/images/products/521/main.jpg",
        "rating": 4.4,
        "reviews": 202,
        "description": "The BCAA Energy Powder Drink Mix is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 591,
        "name": "Alignment Line Non-Slip Yoga Mat (5mm)",
        "category": "Yoga",
        "price": 61.31,
        "image": "assets/images/products/591/main.jpg",
        "rating": 4.4,
        "reviews": 330,
        "description": "The Alignment Line Non-Slip Yoga Mat is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 661,
        "name": "Ceiling Mounted Steel Pull-Up Bar Station",
        "category": "Home Gym",
        "price": 1857.31,
        "image": "assets/images/products/661/main.jpg",
        "rating": 3.9,
        "reviews": 364,
        "description": "The Ceiling Mounted Steel Pull-Up Bar Station is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 32,
        "name": "Cast Iron Kettlebell (20kg / 44lbs)",
        "category": "Strength",
        "price": 284.25,
        "image": "assets/images/products/32/main.jpg",
        "rating": 4.9,
        "reviews": 497,
        "description": "The Cast Iron Kettlebell is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 102,
        "name": "Full Body Air Rower with Smartphone Mount",
        "category": "Cardio",
        "price": 1811.88,
        "image": "assets/images/products/102/main.jpg",
        "rating": 4.7,
        "reviews": 221,
        "description": "The Full Body Air Rower with Smartphone Mount is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 172,
        "name": "MMA Hybrid Training Gloves (7 oz)",
        "category": "Combat",
        "price": 168.75,
        "image": "assets/images/products/172/main.jpg",
        "rating": 4.5,
        "reviews": 415,
        "description": "The MMA Hybrid Training Gloves is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 242,
        "name": "Pure Magnesium Chloride Muscle Recovery Spray",
        "category": "Recovery",
        "price": 526.41,
        "image": "assets/images/products/242/main.jpg",
        "rating": 4.0,
        "reviews": 486,
        "description": "The Pure Magnesium Chloride Muscle Recovery Spray is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 312,
        "name": "Heavy Duty Chalk Block 4-Pack Box",
        "category": "Accessories",
        "price": 30.39,
        "image": "assets/images/products/312/main.jpg",
        "rating": 4.0,
        "reviews": 64,
        "description": "The Heavy Duty Chalk Block 4-Pack Box is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 382,
        "name": "Technical Windbreaker Running Jacket",
        "category": "Apparel",
        "price": 189.78,
        "image": "assets/images/products/382/main.jpg",
        "rating": 4.0,
        "reviews": 362,
        "description": "The Technical Windbreaker Running Jacket is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 452,
        "name": "Smart Wi-Fi Body Composition Glass Scale",
        "category": "Fit Tech",
        "price": 1067.81,
        "image": "assets/images/products/452/main.jpg",
        "rating": 4.9,
        "reviews": 412,
        "description": "The Smart Wi-Fi Body Composition Glass Scale is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 522,
        "name": "ZMA Nighttime Recovery Capsules (90 Capsules)",
        "category": "Supplements",
        "price": 49.34,
        "image": "assets/images/products/522/main.jpg",
        "rating": 4.8,
        "reviews": 199,
        "description": "The ZMA Nighttime Recovery Capsules is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 592,
        "name": "Lightweight Travel EVA Foam Yoga Block",
        "category": "Yoga",
        "price": 98.11,
        "image": "assets/images/products/592/main.jpg",
        "rating": 4.2,
        "reviews": 318,
        "description": "The Lightweight Travel EVA Foam Yoga Block is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 662,
        "name": "Bodyweight Suspension Trainer with Door Mount",
        "category": "Home Gym",
        "price": 1016.69,
        "image": "assets/images/products/662/main.jpg",
        "rating": 4.8,
        "reviews": 499,
        "description": "The Bodyweight Suspension Trainer with Door Mount is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 33,
        "name": "Black Oxide Olympic Barbell (7 Foot)",
        "category": "Strength",
        "price": 520.03,
        "image": "assets/images/products/33/main.jpg",
        "rating": 3.8,
        "reviews": 500,
        "description": "The Black Oxide Olympic Barbell is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 103,
        "name": "Magnetic Spin Bike with 40lb Flywheel",
        "category": "Cardio",
        "price": 883.16,
        "image": "assets/images/products/103/main.jpg",
        "rating": 4.6,
        "reviews": 27,
        "description": "The Magnetic Spin Bike with 40lb Flywheel is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 173,
        "name": "Mexican Style Cotton Hand Wraps (180-Inch)",
        "category": "Combat",
        "price": 115.82,
        "image": "assets/images/products/173/main.jpg",
        "rating": 4.3,
        "reviews": 167,
        "description": "The Mexican Style Cotton Hand Wraps is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 243,
        "name": "Electric Heating Pad for Lower Back Pain Relief",
        "category": "Recovery",
        "price": 1294.69,
        "image": "assets/images/products/243/main.jpg",
        "rating": 4.0,
        "reviews": 91,
        "description": "The Electric Heating Pad for Lower Back Pain Relief is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 313,
        "name": "Adjustable Leather Lifting Belt with Quick Release Lever",
        "category": "Accessories",
        "price": 55.69,
        "image": "assets/images/products/313/main.jpg",
        "rating": 4.4,
        "reviews": 403,
        "description": "The Adjustable Leather Lifting Belt with Quick Release Lever is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 383,
        "name": "Ribbed Seamless Crop Workout Top",
        "category": "Apparel",
        "price": 32.21,
        "image": "assets/images/products/383/main.jpg",
        "rating": 4.8,
        "reviews": 66,
        "description": "The Ribbed Seamless Crop Workout Top is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 453,
        "name": "Air Compression Recovery Boots with Control Unit",
        "category": "Fit Tech",
        "price": 1036.5,
        "image": "assets/images/products/453/main.jpg",
        "rating": 4.5,
        "reviews": 428,
        "description": "The Air Compression Recovery Boots with Control Unit is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 523,
        "name": "Plant Protein Isolate Powder (Unflavored 2 lbs)",
        "category": "Supplements",
        "price": 12.67,
        "image": "assets/images/products/523/main.jpg",
        "rating": 4.1,
        "reviews": 255,
        "description": "The Plant Protein Isolate Powder is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 593,
        "name": "Cotton Yoga Strap with Metal D-Ring (8ft)",
        "category": "Yoga",
        "price": 98.69,
        "image": "assets/images/products/593/main.jpg",
        "rating": 4.6,
        "reviews": 73,
        "description": "The Cotton Yoga Strap with Metal D-Ring is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 663,
        "name": "Heavy Duty Power Tower Station with Push-Up Handles",
        "category": "Home Gym",
        "price": 2529.32,
        "image": "assets/images/products/663/main.jpg",
        "rating": 4.2,
        "reviews": 256,
        "description": "The Heavy Duty Power Tower Station with Push-Up Handles is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 34,
        "name": "Steel Plate Loaded Lat Pulldown Machine",
        "category": "Strength",
        "price": 1219.82,
        "image": "assets/images/products/34/main.jpg",
        "rating": 4.1,
        "reviews": 148,
        "description": "The Steel Plate Loaded Lat Pulldown Machine is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 104,
        "name": "Commercial Grade Stair Climber Stepper",
        "category": "Cardio",
        "price": 812.76,
        "image": "assets/images/products/104/main.jpg",
        "rating": 4.8,
        "reviews": 381,
        "description": "The Commercial Grade Stair Climber Stepper is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 174,
        "name": "Heavy Duty Wall Mount Heavy Bag Hanger Bracket",
        "category": "Combat",
        "price": 101.28,
        "image": "assets/images/products/174/main.jpg",
        "rating": 4.8,
        "reviews": 71,
        "description": "The Heavy Duty Wall Mount Heavy Bag Hanger Bracket is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 244,
        "name": "Acupressure Foot Massager Roller & Mat Set",
        "category": "Recovery",
        "price": 209.39,
        "image": "assets/images/products/244/main.jpg",
        "rating": 4.8,
        "reviews": 92,
        "description": "The Acupressure Foot Massager Roller & Mat Set is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 314,
        "name": "Pro Speed Jump Rope with Anti-Slip Handles",
        "category": "Accessories",
        "price": 40.31,
        "image": "assets/images/products/314/main.jpg",
        "rating": 4.7,
        "reviews": 92,
        "description": "The Pro Speed Jump Rope with Anti-Slip Handles is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 384,
        "name": "Tapered Fit Fleece Gym Joggers",
        "category": "Apparel",
        "price": 159.93,
        "image": "assets/images/products/384/main.jpg",
        "rating": 4.1,
        "reviews": 132,
        "description": "The Tapered Fit Fleece Gym Joggers is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 454,
        "name": "Smart Fitness Tracker Ring (Titanium Edition)",
        "category": "Fit Tech",
        "price": 697.78,
        "image": "assets/images/products/454/main.jpg",
        "rating": 4.6,
        "reviews": 64,
        "description": "The Smart Fitness Tracker Ring is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 524,
        "name": "Micellar Casein Protein Powder (Salted Caramel 2 lbs)",
        "category": "Supplements",
        "price": 42.02,
        "image": "assets/images/products/524/main.jpg",
        "rating": 4.9,
        "reviews": 246,
        "description": "The Micellar Casein Protein Powder is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 594,
        "name": "Rectangular Meditation Pillow Cushion",
        "category": "Yoga",
        "price": 92.69,
        "image": "assets/images/products/594/main.jpg",
        "rating": 5.0,
        "reviews": 468,
        "description": "The Rectangular Meditation Pillow Cushion is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 664,
        "name": "Interlocking Foam & Rubber Gym Mats (8-Pack)",
        "category": "Home Gym",
        "price": 409.12,
        "image": "assets/images/products/664/main.jpg",
        "rating": 4.0,
        "reviews": 424,
        "description": "The Interlocking Foam & Rubber Gym Mats is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 35,
        "name": "Heavy Duty Ab Slab Incline Bench",
        "category": "Strength",
        "price": 1111.27,
        "image": "assets/images/products/35/main.jpg",
        "rating": 4.8,
        "reviews": 414,
        "description": "The Heavy Duty Ab Slab Incline Bench is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 105,
        "name": "Compact Foldable Magnetic Rower",
        "category": "Cardio",
        "price": 1760.74,
        "image": "assets/images/products/105/main.jpg",
        "rating": 4.9,
        "reviews": 87,
        "description": "The Compact Foldable Magnetic Rower is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 175,
        "name": "Pro Leather Focus Pads Pair",
        "category": "Combat",
        "price": 96.46,
        "image": "assets/images/products/175/main.jpg",
        "rating": 4.2,
        "reviews": 78,
        "description": "The Pro Leather Focus Pads Pair is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 245,
        "name": "Air Compression Arm & Shoulder Recovery Sleeve",
        "category": "Recovery",
        "price": 1195.48,
        "image": "assets/images/products/245/main.jpg",
        "rating": 4.1,
        "reviews": 190,
        "description": "The Air Compression Arm & Shoulder Recovery Sleeve is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 315,
        "name": "Stainless Steel Shaker Cup with Wire Mixer Ball",
        "category": "Accessories",
        "price": 24.6,
        "image": "assets/images/products/315/main.jpg",
        "rating": 4.8,
        "reviews": 419,
        "description": "The Stainless Steel Shaker Cup with Wire Mixer Ball is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 385,
        "name": "Breathable Mesh Back Performance Tee",
        "category": "Apparel",
        "price": 136.82,
        "image": "assets/images/products/385/main.jpg",
        "rating": 4.4,
        "reviews": 346,
        "description": "The Breathable Mesh Back Performance Tee is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 455,
        "name": "Bluetooth Heart Rate Armband Monitor Sensor",
        "category": "Fit Tech",
        "price": 1251.72,
        "image": "assets/images/products/455/main.jpg",
        "rating": 4.9,
        "reviews": 128,
        "description": "The Bluetooth Heart Rate Armband Monitor Sensor is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 525,
        "name": "Advanced Pre-Workout Powder Formula (Blue Raspberry)",
        "category": "Supplements",
        "price": 62.73,
        "image": "assets/images/products/525/main.jpg",
        "rating": 4.3,
        "reviews": 420,
        "description": "The Advanced Pre-Workout Powder Formula is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 595,
        "name": "Back Release Roller Yoga Wheel (13-Inch)",
        "category": "Yoga",
        "price": 32.47,
        "image": "assets/images/products/595/main.jpg",
        "rating": 4.7,
        "reviews": 449,
        "description": "The Back Release Roller Yoga Wheel is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 665,
        "name": "Quick-Select Dumbbell Pair (10-55 lbs)",
        "category": "Home Gym",
        "price": 495.84,
        "image": "assets/images/products/665/main.jpg",
        "rating": 4.3,
        "reviews": 185,
        "description": "The Quick-Select Dumbbell Pair is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 36,
        "name": "Calibrated Powerlifting Steel Plate (25kg)",
        "category": "Strength",
        "price": 1006.64,
        "image": "assets/images/products/36/main.jpg",
        "rating": 4.9,
        "reviews": 109,
        "description": "The Calibrated Powerlifting Steel Plate is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 106,
        "name": "Motorized Treadmill with Bluetooth Speakers",
        "category": "Cardio",
        "price": 2443.97,
        "image": "assets/images/products/106/main.jpg",
        "rating": 4.6,
        "reviews": 311,
        "description": "The Motorized Treadmill with Bluetooth Speakers is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 176,
        "name": "Muay Thai Leather Shin Guards (Large)",
        "category": "Combat",
        "price": 97.04,
        "image": "assets/images/products/176/main.jpg",
        "rating": 4.4,
        "reviews": 364,
        "description": "The Muay Thai Leather Shin Guards is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 246,
        "name": "Deep Tissue Trigger Point Massage Stick Roller",
        "category": "Recovery",
        "price": 434.78,
        "image": "assets/images/products/246/main.jpg",
        "rating": 4.0,
        "reviews": 240,
        "description": "The Deep Tissue Trigger Point Massage Stick Roller is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 316,
        "name": "Padded Gym Lifting Straps with Neoprene Support",
        "category": "Accessories",
        "price": 49.39,
        "image": "assets/images/products/316/main.jpg",
        "rating": 4.3,
        "reviews": 371,
        "description": "The Padded Gym Lifting Straps with Neoprene Support is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 386,
        "name": "High-Support Cross-Back Sports Bra",
        "category": "Apparel",
        "price": 192.41,
        "image": "assets/images/products/386/main.jpg",
        "rating": 4.4,
        "reviews": 437,
        "description": "The High-Support Cross-Back Sports Bra is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 456,
        "name": "Wearable Electrostimulation EMS Abdominal Belt",
        "category": "Fit Tech",
        "price": 525.77,
        "image": "assets/images/products/456/main.jpg",
        "rating": 4.4,
        "reviews": 84,
        "description": "The Wearable Electrostimulation EMS Abdominal Belt is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 526,
        "name": "Micronized Creatine Monohydrate Capsules (120 Capsules)",
        "category": "Supplements",
        "price": 74.18,
        "image": "assets/images/products/526/main.jpg",
        "rating": 3.9,
        "reviews": 103,
        "description": "The Micronized Creatine Monohydrate Capsules is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 596,
        "name": "Sweat Absorbent Yoga Mat Towel Full Size",
        "category": "Yoga",
        "price": 54.05,
        "image": "assets/images/products/596/main.jpg",
        "rating": 4.5,
        "reviews": 162,
        "description": "The Sweat Absorbent Yoga Mat Towel Full Size is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 666,
        "name": "Foldable Adjustable FID Weight Bench",
        "category": "Home Gym",
        "price": 1700.59,
        "image": "assets/images/products/666/main.jpg",
        "rating": 5.0,
        "reviews": 131,
        "description": "The Foldable Adjustable FID Weight Bench is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 37,
        "name": "Steel Parallel Bars Dip Station",
        "category": "Strength",
        "price": 1315.03,
        "image": "assets/images/products/37/main.jpg",
        "rating": 4.3,
        "reviews": 133,
        "description": "The Steel Parallel Bars Dip Station is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 107,
        "name": "High-Capacity Air Resistance Bike",
        "category": "Cardio",
        "price": 1915.43,
        "image": "assets/images/products/107/main.jpg",
        "rating": 4.7,
        "reviews": 283,
        "description": "The High-Capacity Air Resistance Bike is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 177,
        "name": "Full Face Leather Sparring Headgear",
        "category": "Combat",
        "price": 31.42,
        "image": "assets/images/products/177/main.jpg",
        "rating": 3.9,
        "reviews": 154,
        "description": "The Full Face Leather Sparring Headgear is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 247,
        "name": "High-Density Smooth EVA Foam Roller (18-Inch)",
        "category": "Recovery",
        "price": 142.16,
        "image": "assets/images/products/247/main.jpg",
        "rating": 4.3,
        "reviews": 210,
        "description": "The High-Density Smooth EVA Foam Roller is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 317,
        "name": "Fabric Resistance Loop Bands Pack of 4",
        "category": "Accessories",
        "price": 64.95,
        "image": "assets/images/products/317/main.jpg",
        "rating": 4.7,
        "reviews": 426,
        "description": "The Fabric Resistance Loop Bands Pack of 4 is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 387,
        "name": "Barefoot Style Cross-Training Shoes",
        "category": "Apparel",
        "price": 104.37,
        "image": "assets/images/products/387/main.jpg",
        "rating": 4.6,
        "reviews": 105,
        "description": "The Barefoot Style Cross-Training Shoes is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 457,
        "name": "Wireless Open-Ear Bone Conduction Sport Headphones",
        "category": "Fit Tech",
        "price": 758.8,
        "image": "assets/images/products/457/main.jpg",
        "rating": 4.9,
        "reviews": 253,
        "description": "The Wireless Open-Ear Bone Conduction Sport Headphones is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 527,
        "name": "Essential Amino Acid EAA Energy Powder (Peach Mango)",
        "category": "Supplements",
        "price": 80.55,
        "image": "assets/images/products/527/main.jpg",
        "rating": 4.0,
        "reviews": 224,
        "description": "The Essential Amino Acid EAA Energy Powder is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 597,
        "name": "Premium Natural Rubber Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 50.68,
        "image": "assets/images/products/597/main.jpg",
        "rating": 4.6,
        "reviews": 475,
        "description": "The Premium Natural Rubber Yoga Mat is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 667,
        "name": "Heavy Duty Doorway Chin Up Pull Up Bar",
        "category": "Home Gym",
        "price": 1497.37,
        "image": "assets/images/products/667/main.jpg",
        "rating": 4.8,
        "reviews": 71,
        "description": "The Heavy Duty Doorway Chin Up Pull Up Bar is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 38,
        "name": "Rubber Coated Hex Dumbbell (50 lbs)",
        "category": "Strength",
        "price": 501.99,
        "image": "assets/images/products/38/main.jpg",
        "rating": 5.0,
        "reviews": 357,
        "description": "The Rubber Coated Hex Dumbbell is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 108,
        "name": "Desk Treadmill Under-Desk Walking Pad",
        "category": "Cardio",
        "price": 1448.56,
        "image": "assets/images/products/108/main.jpg",
        "rating": 4.0,
        "reviews": 466,
        "description": "The Desk Treadmill Under-Desk Walking Pad is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 178,
        "name": "Leather Speed Bag (Small 8x5 Inch)",
        "category": "Combat",
        "price": 194.78,
        "image": "assets/images/products/178/main.jpg",
        "rating": 4.3,
        "reviews": 288,
        "description": "The Leather Speed Bag is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 248,
        "name": "Percussive Massage Gun with Heated Massage Head",
        "category": "Recovery",
        "price": 780.57,
        "image": "assets/images/products/248/main.jpg",
        "rating": 4.9,
        "reviews": 47,
        "description": "The Percussive Massage Gun with Heated Massage Head is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 318,
        "name": "Tactical Molle Gym Backpack Bag (45L)",
        "category": "Accessories",
        "price": 58.06,
        "image": "assets/images/products/318/main.jpg",
        "rating": 4.2,
        "reviews": 439,
        "description": "The Tactical Molle Gym Backpack Bag is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 388,
        "name": "Relaxed Fit Heavy Weightlifting Graphic Tee",
        "category": "Apparel",
        "price": 109.74,
        "image": "assets/images/products/388/main.jpg",
        "rating": 4.0,
        "reviews": 335,
        "description": "The Relaxed Fit Heavy Weightlifting Graphic Tee is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 458,
        "name": "Smart Sensor Speedometer for Cycling",
        "category": "Fit Tech",
        "price": 241.32,
        "image": "assets/images/products/458/main.jpg",
        "rating": 4.3,
        "reviews": 313,
        "description": "The Smart Sensor Speedometer for Cycling is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 528,
        "name": "High-Potency Vitamin D3 + K2 Softgels (120 Softgels)",
        "category": "Supplements",
        "price": 19.59,
        "image": "assets/images/products/528/main.jpg",
        "rating": 3.8,
        "reviews": 182,
        "description": "The High-Potency Vitamin D3 + K2 Softgels is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 598,
        "name": "High Density Cork Yoga Block Single",
        "category": "Yoga",
        "price": 56.41,
        "image": "assets/images/products/598/main.jpg",
        "rating": 4.1,
        "reviews": 474,
        "description": "The High Density Cork Yoga Block Single is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 668,
        "name": "Professional Bodyweight Suspension Trainer Kit",
        "category": "Home Gym",
        "price": 1051.8,
        "image": "assets/images/products/668/main.jpg",
        "rating": 4.6,
        "reviews": 333,
        "description": "The Professional Bodyweight Suspension Trainer Kit is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 39,
        "name": "Ergonomic Handle Kettlebell (8kg)",
        "category": "Strength",
        "price": 1354.44,
        "image": "assets/images/products/39/main.jpg",
        "rating": 4.3,
        "reviews": 151,
        "description": "The Ergonomic Handle Kettlebell is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 109,
        "name": "Recumbent Bike with Magnetic Resistance and LCD",
        "category": "Cardio",
        "price": 925.74,
        "image": "assets/images/products/109/main.jpg",
        "rating": 4.1,
        "reviews": 351,
        "description": "The Recumbent Bike with Magnetic Resistance and LCD is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 179,
        "name": "Water-Filled Heavy Punching Bag (120 lbs)",
        "category": "Combat",
        "price": 177.14,
        "image": "assets/images/products/179/main.jpg",
        "rating": 4.4,
        "reviews": 52,
        "description": "The Water-Filled Heavy Punching Bag is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 249,
        "name": "Cold Therapy Ice Recovery Wrap for Knees & Ankles",
        "category": "Recovery",
        "price": 982.84,
        "image": "assets/images/products/249/main.jpg",
        "rating": 3.8,
        "reviews": 270,
        "description": "The Cold Therapy Ice Recovery Wrap for Knees & Ankles is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 319,
        "name": "Neoprene Elbow Sleeves 5mm Pair",
        "category": "Accessories",
        "price": 43.11,
        "image": "assets/images/products/319/main.jpg",
        "rating": 4.9,
        "reviews": 250,
        "description": "The Neoprene Elbow Sleeves 5mm Pair is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 389,
        "name": "Compression Long Sleeve Rashguard Shirt",
        "category": "Apparel",
        "price": 175.76,
        "image": "assets/images/products/389/main.jpg",
        "rating": 4.2,
        "reviews": 465,
        "description": "The Compression Long Sleeve Rashguard Shirt is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 459,
        "name": "Digital Hand Grip Dynamometer Tester (90kg / 200lbs)",
        "category": "Fit Tech",
        "price": 720.45,
        "image": "assets/images/products/459/main.jpg",
        "rating": 4.8,
        "reviews": 395,
        "description": "The Digital Hand Grip Dynamometer Tester is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 529,
        "name": "High Calorie Mass Gainer Powder (Chocolate Peanut Butter 6 lbs)",
        "category": "Supplements",
        "price": 78.52,
        "image": "assets/images/products/529/main.jpg",
        "rating": 3.9,
        "reviews": 69,
        "description": "The High Calorie Mass Gainer Powder is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 599,
        "name": "Yoga Stretching Strap with Loop Handles",
        "category": "Yoga",
        "price": 95.52,
        "image": "assets/images/products/599/main.jpg",
        "rating": 4.2,
        "reviews": 26,
        "description": "The Yoga Stretching Strap with Loop Handles is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 669,
        "name": "Power Tower Pull Up Dip Station with Padded Armrests",
        "category": "Home Gym",
        "price": 2540.59,
        "image": "assets/images/products/669/main.jpg",
        "rating": 4.2,
        "reviews": 71,
        "description": "The Power Tower Pull Up Dip Station with Padded Armrests is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 40,
        "name": "Commercial Leg Press Hack Squat Machine",
        "category": "Strength",
        "price": 540.22,
        "image": "assets/images/products/40/main.jpg",
        "rating": 4.5,
        "reviews": 142,
        "description": "The Commercial Leg Press Hack Squat Machine is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 110,
        "name": "Water Rower Machine with Real Wood Frame",
        "category": "Cardio",
        "price": 1556.87,
        "image": "assets/images/products/110/main.jpg",
        "rating": 4.1,
        "reviews": 250,
        "description": "The Water Rower Machine with Real Wood Frame is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 180,
        "name": "Hook & Loop Training Boxing Gloves (16 oz)",
        "category": "Combat",
        "price": 88.31,
        "image": "assets/images/products/180/main.jpg",
        "rating": 4.7,
        "reviews": 345,
        "description": "The Hook & Loop Training Boxing Gloves is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 250,
        "name": "Stainless Steel IASTM Muscle Scraping Tool",
        "category": "Recovery",
        "price": 1044.84,
        "image": "assets/images/products/250/main.jpg",
        "rating": 4.4,
        "reviews": 490,
        "description": "The Stainless Steel IASTM Muscle Scraping Tool is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 320,
        "name": "Pure Magnesium Carbonate Chalk Bowl Bag",
        "category": "Accessories",
        "price": 80.03,
        "image": "assets/images/products/320/main.jpg",
        "rating": 4.4,
        "reviews": 239,
        "description": "The Pure Magnesium Carbonate Chalk Bowl Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 390,
        "name": "High-Waisted Squat-Proof Workout Leggings",
        "category": "Apparel",
        "price": 47.88,
        "image": "assets/images/products/390/main.jpg",
        "rating": 4.2,
        "reviews": 312,
        "description": "The High-Waisted Squat-Proof Workout Leggings is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 460,
        "name": "GPS Smartwatch with Solar Charging Lens",
        "category": "Fit Tech",
        "price": 418.96,
        "image": "assets/images/products/460/main.jpg",
        "rating": 3.8,
        "reviews": 136,
        "description": "The GPS Smartwatch with Solar Charging Lens is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 530,
        "name": "Hydrolyzed Whey Protein Isolate (Cookies & Cream 5 lbs)",
        "category": "Supplements",
        "price": 50.4,
        "image": "assets/images/products/530/main.jpg",
        "rating": 4.5,
        "reviews": 233,
        "description": "The Hydrolyzed Whey Protein Isolate is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 600,
        "name": "Soft Velvet Meditation Bolster Cushion",
        "category": "Yoga",
        "price": 67.14,
        "image": "assets/images/products/600/main.jpg",
        "rating": 4.6,
        "reviews": 460,
        "description": "The Soft Velvet Meditation Bolster Cushion is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 670,
        "name": "High Density Rubber Gym Mat Roll (4ft x 10ft)",
        "category": "Home Gym",
        "price": 1309.48,
        "image": "assets/images/products/670/main.jpg",
        "rating": 3.9,
        "reviews": 178,
        "description": "The High Density Rubber Gym Mat Roll is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 41,
        "name": "Cerakote Coated Olympic Barbell (Red/Black)",
        "category": "Strength",
        "price": 152.94,
        "image": "assets/images/products/41/main.jpg",
        "rating": 4.6,
        "reviews": 142,
        "description": "The Cerakote Coated Olympic Barbell is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 111,
        "name": "Commercial Curved Manual Running Treadmill",
        "category": "Cardio",
        "price": 1000.04,
        "image": "assets/images/products/111/main.jpg",
        "rating": 4.1,
        "reviews": 188,
        "description": "The Commercial Curved Manual Running Treadmill is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 181,
        "name": "Heavy Duty Ceiling Mount Swivel Hanger",
        "category": "Combat",
        "price": 60.62,
        "image": "assets/images/products/181/main.jpg",
        "rating": 4.5,
        "reviews": 499,
        "description": "The Heavy Duty Ceiling Mount Swivel Hanger is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 251,
        "name": "Air Compression Calf & Foot Massager",
        "category": "Recovery",
        "price": 1353.94,
        "image": "assets/images/products/251/main.jpg",
        "rating": 4.2,
        "reviews": 100,
        "description": "The Air Compression Calf & Foot Massager is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 321,
        "name": "Lever Lock Leather Powerlifting Belt (10mm)",
        "category": "Accessories",
        "price": 82.11,
        "image": "assets/images/products/321/main.jpg",
        "rating": 4.0,
        "reviews": 153,
        "description": "The Lever Lock Leather Powerlifting Belt is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 391,
        "name": "Athletic Zip-Up Fleece Hoodie Jacket",
        "category": "Apparel",
        "price": 67.3,
        "image": "assets/images/products/391/main.jpg",
        "rating": 3.9,
        "reviews": 255,
        "description": "The Athletic Zip-Up Fleece Hoodie Jacket is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 461,
        "name": "Precision Heart Rate Monitor Chest Strap",
        "category": "Fit Tech",
        "price": 664.36,
        "image": "assets/images/products/461/main.jpg",
        "rating": 4.6,
        "reviews": 302,
        "description": "The Precision Heart Rate Monitor Chest Strap is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 531,
        "name": "High-Stim Pre-Workout Energy Powder (Green Apple)",
        "category": "Supplements",
        "price": 18.07,
        "image": "assets/images/products/531/main.jpg",
        "rating": 4.5,
        "reviews": 330,
        "description": "The High-Stim Pre-Workout Energy Powder is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 601,
        "name": "Ergonomic Yoga Wheel Stretcher Device",
        "category": "Yoga",
        "price": 45.79,
        "image": "assets/images/products/601/main.jpg",
        "rating": 5.0,
        "reviews": 447,
        "description": "The Ergonomic Yoga Wheel Stretcher Device is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 671,
        "name": "Adjustable Weight Dumbbells Set (5-52.5 lbs Pair)",
        "category": "Home Gym",
        "price": 287.03,
        "image": "assets/images/products/671/main.jpg",
        "rating": 4.3,
        "reviews": 256,
        "description": "The Adjustable Weight Dumbbells Set is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 42,
        "name": "Fractional Steel Change Plate Set (0.25kg - 5kg)",
        "category": "Strength",
        "price": 1296.47,
        "image": "assets/images/products/42/main.jpg",
        "rating": 3.9,
        "reviews": 146,
        "description": "The Fractional Steel Change Plate Set is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 112,
        "name": "Indoor Studio Cycle Bike with Silent Belt Drive",
        "category": "Cardio",
        "price": 622.33,
        "image": "assets/images/products/112/main.jpg",
        "rating": 4.3,
        "reviews": 103,
        "description": "The Indoor Studio Cycle Bike with Silent Belt Drive is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 182,
        "name": "Curved Thai Kick Pads (Pair)",
        "category": "Combat",
        "price": 179.15,
        "image": "assets/images/products/182/main.jpg",
        "rating": 4.4,
        "reviews": 39,
        "description": "The Curved Thai Kick Pads is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 252,
        "name": "Pure Epsom Salt Muscle Recovery Soak (10 lbs)",
        "category": "Recovery",
        "price": 448.77,
        "image": "assets/images/products/252/main.jpg",
        "rating": 4.6,
        "reviews": 305,
        "description": "The Pure Epsom Salt Muscle Recovery Soak is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 322,
        "name": "Heavy Duty Cable Attachment Tricep Rope",
        "category": "Accessories",
        "price": 53.25,
        "image": "assets/images/products/322/main.jpg",
        "rating": 4.2,
        "reviews": 77,
        "description": "The Heavy Duty Cable Attachment Tricep Rope is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 392,
        "name": "Lightweight 2-in-1 Running Shorts with Compression Liner",
        "category": "Apparel",
        "price": 41.94,
        "image": "assets/images/products/392/main.jpg",
        "rating": 4.1,
        "reviews": 221,
        "description": "The Lightweight 2-in-1 Running Shorts with Compression Liner is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 462,
        "name": "Smart Bluetooth Body Composition Analyzer Scale",
        "category": "Fit Tech",
        "price": 1479.9,
        "image": "assets/images/products/462/main.jpg",
        "rating": 4.4,
        "reviews": 171,
        "description": "The Smart Bluetooth Body Composition Analyzer Scale is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 532,
        "name": "Pure Micronized Creatine Powder (500g Tub)",
        "category": "Supplements",
        "price": 11.11,
        "image": "assets/images/products/532/main.jpg",
        "rating": 4.3,
        "reviews": 423,
        "description": "The Pure Micronized Creatine Powder is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 602,
        "name": "Canvas Yoga Mat Backpack Bag",
        "category": "Yoga",
        "price": 34.17,
        "image": "assets/images/products/602/main.jpg",
        "rating": 4.8,
        "reviews": 197,
        "description": "The Canvas Yoga Mat Backpack Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 672,
        "name": "Space-Saving Foldable Incline Decline Bench",
        "category": "Home Gym",
        "price": 1493.72,
        "image": "assets/images/products/672/main.jpg",
        "rating": 4.8,
        "reviews": 96,
        "description": "The Space-Saving Foldable Incline Decline Bench is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 43,
        "name": "Adjustable Speed Bench with Transport Wheels",
        "category": "Strength",
        "price": 753.85,
        "image": "assets/images/products/43/main.jpg",
        "rating": 4.4,
        "reviews": 395,
        "description": "The Adjustable Speed Bench with Transport Wheels is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 113,
        "name": "Heavy-Duty Elliptical Trainer with 20 Inch Stride",
        "category": "Cardio",
        "price": 1361.63,
        "image": "assets/images/products/113/main.jpg",
        "rating": 4.2,
        "reviews": 263,
        "description": "The Heavy-Duty Elliptical Trainer with 20 Inch Stride is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 183,
        "name": "Grappling Dummy for BJJ & MMA Training (70 lbs)",
        "category": "Combat",
        "price": 52.72,
        "image": "assets/images/products/183/main.jpg",
        "rating": 4.5,
        "reviews": 307,
        "description": "The Grappling Dummy for BJJ & MMA Training is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 253,
        "name": "Electric Cordless Heated Neck & Shoulder Massager",
        "category": "Recovery",
        "price": 1492.21,
        "image": "assets/images/products/253/main.jpg",
        "rating": 4.4,
        "reviews": 257,
        "description": "The Electric Cordless Heated Neck & Shoulder Massager is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 323,
        "name": "Speed Cable Jump Rope with Ergonomic Grips",
        "category": "Accessories",
        "price": 17.55,
        "image": "assets/images/products/323/main.jpg",
        "rating": 4.0,
        "reviews": 255,
        "description": "The Speed Cable Jump Rope with Ergonomic Grips is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 393,
        "name": "Performance Muscle Tank Top with Drop Armholes",
        "category": "Apparel",
        "price": 193.47,
        "image": "assets/images/products/393/main.jpg",
        "rating": 4.9,
        "reviews": 441,
        "description": "The Performance Muscle Tank Top with Drop Armholes is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 463,
        "name": "Wearable Pulse Oximeter Sleep & Workout Tracker",
        "category": "Fit Tech",
        "price": 1165.01,
        "image": "assets/images/products/463/main.jpg",
        "rating": 4.7,
        "reviews": 398,
        "description": "The Wearable Pulse Oximeter Sleep & Workout Tracker is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 533,
        "name": "BCAA 2:1:1 Intra-Workout Powder (Lemonade 30 Servings)",
        "category": "Supplements",
        "price": 91.1,
        "image": "assets/images/products/533/main.jpg",
        "rating": 4.9,
        "reviews": 149,
        "description": "The BCAA 2:1:1 Intra-Workout Powder is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 603,
        "name": "Non-Slip Travel Foldable Yoga Mat (1.5mm)",
        "category": "Yoga",
        "price": 86.72,
        "image": "assets/images/products/603/main.jpg",
        "rating": 4.7,
        "reviews": 482,
        "description": "The Non-Slip Travel Foldable Yoga Mat is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 673,
        "name": "Wall-Mounted Heavy Steel Pull-Up Bar",
        "category": "Home Gym",
        "price": 372.67,
        "image": "assets/images/products/673/main.jpg",
        "rating": 4.7,
        "reviews": 138,
        "description": "The Wall-Mounted Heavy Steel Pull-Up Bar is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 44,
        "name": "Cast Iron Kettlebell (28kg / 62lbs)",
        "category": "Strength",
        "price": 1187.7,
        "image": "assets/images/products/44/main.jpg",
        "rating": 4.8,
        "reviews": 122,
        "description": "The Cast Iron Kettlebell is built with an emphasis on athletic progression with clean structural design. Built for regular use without sacrificing performance."
    },
    {
        "id": 114,
        "name": "Foldable Electric Treadmill with Cushioning System",
        "category": "Cardio",
        "price": 779.14,
        "image": "assets/images/products/114/main.jpg",
        "rating": 4.3,
        "reviews": 488,
        "description": "The Foldable Electric Treadmill with Cushioning System is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 184,
        "name": "Gel Padded Boxing Hand Wraps Pair",
        "category": "Combat",
        "price": 64.32,
        "image": "assets/images/products/184/main.jpg",
        "rating": 4.8,
        "reviews": 83,
        "description": "The Gel Padded Boxing Hand Wraps Pair is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 254,
        "name": "Soft Density Foam Roller for Gentle Muscle Release",
        "category": "Recovery",
        "price": 1199.99,
        "image": "assets/images/products/254/main.jpg",
        "rating": 3.9,
        "reviews": 360,
        "description": "The Soft Density Foam Roller for Gentle Muscle Release is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 324,
        "name": "Insulated Stainless Steel Water Bottle (32oz)",
        "category": "Accessories",
        "price": 18.25,
        "image": "assets/images/products/324/main.jpg",
        "rating": 4.9,
        "reviews": 443,
        "description": "The Insulated Stainless Steel Water Bottle is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 394,
        "name": "Tapered Athletic Sweatpants with Zipper Pockets",
        "category": "Apparel",
        "price": 151.2,
        "image": "assets/images/products/394/main.jpg",
        "rating": 4.0,
        "reviews": 106,
        "description": "The Tapered Athletic Sweatpants with Zipper Pockets is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 464,
        "name": "Smart LED Counter Jump Rope",
        "category": "Fit Tech",
        "price": 1489.64,
        "image": "assets/images/products/464/main.jpg",
        "rating": 4.3,
        "reviews": 470,
        "description": "The Smart LED Counter Jump Rope is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 534,
        "name": "Daily Multivitamin for Men & Women (120 Tablets)",
        "category": "Supplements",
        "price": 44.27,
        "image": "assets/images/products/534/main.jpg",
        "rating": 4.0,
        "reviews": 179,
        "description": "The Daily Multivitamin for Men & Women is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 604,
        "name": "High Density EVA Foam Yoga Block Pair (4-Inch)",
        "category": "Yoga",
        "price": 18.96,
        "image": "assets/images/products/604/main.jpg",
        "rating": 4.7,
        "reviews": 260,
        "description": "The High Density EVA Foam Yoga Block Pair is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 674,
        "name": "Suspension Trainer System with Extension Strap",
        "category": "Home Gym",
        "price": 2506.29,
        "image": "assets/images/products/674/main.jpg",
        "rating": 4.2,
        "reviews": 347,
        "description": "The Suspension Trainer System with Extension Strap is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 45,
        "name": "Fixed Rubber Barbell Set (Straight Bar)",
        "category": "Strength",
        "price": 1005.52,
        "image": "assets/images/products/45/main.jpg",
        "rating": 4.2,
        "reviews": 235,
        "description": "The Fixed Rubber Barbell Set is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 115,
        "name": "Air Resistance Rower with Wireless Heart Rate Receiver",
        "category": "Cardio",
        "price": 1265.07,
        "image": "assets/images/products/115/main.jpg",
        "rating": 3.8,
        "reviews": 205,
        "description": "The Air Resistance Rower with Wireless Heart Rate Receiver is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 185,
        "name": "Leather Boxing Sparring Gloves (14 oz)",
        "category": "Combat",
        "price": 138.35,
        "image": "assets/images/products/185/main.jpg",
        "rating": 4.0,
        "reviews": 391,
        "description": "The Leather Boxing Sparring Gloves is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 255,
        "name": "Double Peanut Muscle Massage Ball for Spine",
        "category": "Recovery",
        "price": 704.75,
        "image": "assets/images/products/255/main.jpg",
        "rating": 4.1,
        "reviews": 198,
        "description": "The Double Peanut Muscle Massage Ball for Spine is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 325,
        "name": "Weightlifting Wrist Wraps Pair (18-Inch Heavy Flex)",
        "category": "Accessories",
        "price": 93.74,
        "image": "assets/images/products/325/main.jpg",
        "rating": 4.3,
        "reviews": 227,
        "description": "The Weightlifting Wrist Wraps Pair is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 395,
        "name": "Dry-Fit Compression Short Sleeve Rashguard",
        "category": "Apparel",
        "price": 106.69,
        "image": "assets/images/products/395/main.jpg",
        "rating": 4.9,
        "reviews": 279,
        "description": "The Dry-Fit Compression Short Sleeve Rashguard is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 465,
        "name": "Waterproof Fitness Tracker Wristband",
        "category": "Fit Tech",
        "price": 166.36,
        "image": "assets/images/products/465/main.jpg",
        "rating": 5.0,
        "reviews": 472,
        "description": "The Waterproof Fitness Tracker Wristband is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 535,
        "name": "Organic Vegan Plant Protein Powder (Chocolate Silk 2.5 lbs)",
        "category": "Supplements",
        "price": 23.13,
        "image": "assets/images/products/535/main.jpg",
        "rating": 4.0,
        "reviews": 166,
        "description": "The Organic Vegan Plant Protein Powder is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 605,
        "name": "Adjustable Cotton Yoga Belt Strap (8 Feet)",
        "category": "Yoga",
        "price": 93.65,
        "image": "assets/images/products/605/main.jpg",
        "rating": 4.0,
        "reviews": 258,
        "description": "The Adjustable Cotton Yoga Belt Strap is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 675,
        "name": "Multi-Station Power Tower Dip Pull-Up Station",
        "category": "Home Gym",
        "price": 1841.13,
        "image": "assets/images/products/675/main.jpg",
        "rating": 4.9,
        "reviews": 63,
        "description": "The Multi-Station Power Tower Dip Pull-Up Station is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 46,
        "name": "Heavy Duty Plate Storage Tree Tower",
        "category": "Strength",
        "price": 1107.16,
        "image": "assets/images/products/46/main.jpg",
        "rating": 4.6,
        "reviews": 355,
        "description": "The Heavy Duty Plate Storage Tree Tower is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 116,
        "name": "Heavy-Duty Fan Air Bike with Custom Workout Modes",
        "category": "Cardio",
        "price": 2589.65,
        "image": "assets/images/products/116/main.jpg",
        "rating": 4.9,
        "reviews": 239,
        "description": "The Heavy-Duty Fan Air Bike with Custom Workout Modes is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 186,
        "name": "Pro Muay Thai Belly & Rib Guard Protector",
        "category": "Combat",
        "price": 148.45,
        "image": "assets/images/products/186/main.jpg",
        "rating": 4.3,
        "reviews": 272,
        "description": "The Pro Muay Thai Belly & Rib Guard Protector is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 256,
        "name": "Portable Insulated Ice Bath Tub Container",
        "category": "Recovery",
        "price": 653.18,
        "image": "assets/images/products/256/main.jpg",
        "rating": 3.9,
        "reviews": 243,
        "description": "The Portable Insulated Ice Bath Tub Container is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 326,
        "name": "Fabric Booty Bands Set for Glute Workouts",
        "category": "Accessories",
        "price": 44.75,
        "image": "assets/images/products/326/main.jpg",
        "rating": 3.9,
        "reviews": 139,
        "description": "The Fabric Booty Bands Set for Glute Workouts is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 396,
        "name": "Seamless Ribbed Workout Leggings & Top Set",
        "category": "Apparel",
        "price": 190.42,
        "image": "assets/images/products/396/main.jpg",
        "rating": 4.4,
        "reviews": 148,
        "description": "The Seamless Ribbed Workout Leggings & Top Set is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 466,
        "name": "Wireless TENS EMS Muscle Massager Unit",
        "category": "Fit Tech",
        "price": 222.02,
        "image": "assets/images/products/466/main.jpg",
        "rating": 5.0,
        "reviews": 226,
        "description": "The Wireless TENS EMS Muscle Massager Unit is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 536,
        "name": "Nighttime Casein Protein Powder (Vanilla Cream 4 lbs)",
        "category": "Supplements",
        "price": 53.58,
        "image": "assets/images/products/536/main.jpg",
        "rating": 3.9,
        "reviews": 153,
        "description": "The Nighttime Casein Protein Powder is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 606,
        "name": "Buckwheat Meditation Zafu Pillow Cushion",
        "category": "Yoga",
        "price": 28.21,
        "image": "assets/images/products/606/main.jpg",
        "rating": 4.6,
        "reviews": 92,
        "description": "The Buckwheat Meditation Zafu Pillow Cushion is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 676,
        "name": "Heavy Duty Interlocking Gym Floor Tiles (16-Pack)",
        "category": "Home Gym",
        "price": 753.7,
        "image": "assets/images/products/676/main.jpg",
        "rating": 4.6,
        "reviews": 439,
        "description": "The Heavy Duty Interlocking Gym Floor Tiles is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 47,
        "name": "Multi-Grip Landmine Attachment for Barbells",
        "category": "Strength",
        "price": 633.8,
        "image": "assets/images/products/47/main.jpg",
        "rating": 4.2,
        "reviews": 466,
        "description": "The Multi-Grip Landmine Attachment for Barbells is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 117,
        "name": "Stair Stepper Machine with Handlebars",
        "category": "Cardio",
        "price": 814.38,
        "image": "assets/images/products/117/main.jpg",
        "rating": 4.3,
        "reviews": 39,
        "description": "The Stair Stepper Machine with Handlebars is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 187,
        "name": "Reflex Cobra Bag with Adjustable Height",
        "category": "Combat",
        "price": 104.94,
        "image": "assets/images/products/187/main.jpg",
        "rating": 4.0,
        "reviews": 122,
        "description": "The Reflex Cobra Bag with Adjustable Height is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 257,
        "name": "Pro Percussive Massage Gun with Metal Head Attachment",
        "category": "Recovery",
        "price": 419.59,
        "image": "assets/images/products/257/main.jpg",
        "rating": 4.9,
        "reviews": 376,
        "description": "The Pro Percussive Massage Gun with Metal Head Attachment is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 327,
        "name": "Gym Chalk Block Single Pack",
        "category": "Accessories",
        "price": 93.77,
        "image": "assets/images/products/327/main.jpg",
        "rating": 4.8,
        "reviews": 357,
        "description": "The Gym Chalk Block Single Pack is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 397,
        "name": "High-Impact Padded Gym Sports Bra",
        "category": "Apparel",
        "price": 86.76,
        "image": "assets/images/products/397/main.jpg",
        "rating": 3.9,
        "reviews": 278,
        "description": "The High-Impact Padded Gym Sports Bra is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 467,
        "name": "Bluetooth Sports Earphones with Sweat Resistance",
        "category": "Fit Tech",
        "price": 1260.49,
        "image": "assets/images/products/467/main.jpg",
        "rating": 4.7,
        "reviews": 177,
        "description": "The Bluetooth Sports Earphones with Sweat Resistance is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 537,
        "name": "Nitric Oxide Pre-Workout Powder (Tropical Punch)",
        "category": "Supplements",
        "price": 66.25,
        "image": "assets/images/products/537/main.jpg",
        "rating": 4.5,
        "reviews": 125,
        "description": "The Nitric Oxide Pre-Workout Powder is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 607,
        "name": "Spine Massager Yoga Wheel Roller",
        "category": "Yoga",
        "price": 88.7,
        "image": "assets/images/products/607/main.jpg",
        "rating": 4.9,
        "reviews": 72,
        "description": "The Spine Massager Yoga Wheel Roller is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 677,
        "name": "Quick Select Dial Dumbbells Set (5-70 lbs)",
        "category": "Home Gym",
        "price": 2734.22,
        "image": "assets/images/products/677/main.jpg",
        "rating": 4.8,
        "reviews": 194,
        "description": "The Quick Select Dial Dumbbells Set is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 48,
        "name": "Commercial Cable Crossover Functional Trainer",
        "category": "Strength",
        "price": 327.81,
        "image": "assets/images/products/48/main.jpg",
        "rating": 4.4,
        "reviews": 96,
        "description": "The Commercial Cable Crossover Functional Trainer is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 118,
        "name": "Magnetic Upright Exercise Bike with Tablet Stand",
        "category": "Cardio",
        "price": 2072.85,
        "image": "assets/images/products/118/main.jpg",
        "rating": 4.8,
        "reviews": 395,
        "description": "The Magnetic Upright Exercise Bike with Tablet Stand is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 188,
        "name": "Canvas Heavy Punching Bag (60 lbs)",
        "category": "Combat",
        "price": 73.34,
        "image": "assets/images/products/188/main.jpg",
        "rating": 4.7,
        "reviews": 237,
        "description": "The Canvas Heavy Punching Bag is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 258,
        "name": "Graduated Knee-High Compression Socks Pair",
        "category": "Recovery",
        "price": 182.28,
        "image": "assets/images/products/258/main.jpg",
        "rating": 3.9,
        "reviews": 246,
        "description": "The Graduated Knee-High Compression Socks Pair is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 328,
        "name": "Quick Release Lever Buckle Lifting Belt (13mm)",
        "category": "Accessories",
        "price": 22.38,
        "image": "assets/images/products/328/main.jpg",
        "rating": 4.1,
        "reviews": 449,
        "description": "The Quick Release Lever Buckle Lifting Belt is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 398,
        "name": "Heavy Duty Barefoot Lifting Shoes",
        "category": "Apparel",
        "price": 118.92,
        "image": "assets/images/products/398/main.jpg",
        "rating": 4.8,
        "reviews": 245,
        "description": "The Heavy Duty Barefoot Lifting Shoes is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 468,
        "name": "Smart GPS Cycling Computer Display",
        "category": "Fit Tech",
        "price": 664.99,
        "image": "assets/images/products/468/main.jpg",
        "rating": 4.3,
        "reviews": 142,
        "description": "The Smart GPS Cycling Computer Display is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 538,
        "name": "Creatine Monohydrate Powder (200 Mesh Ultra-Fine 500g)",
        "category": "Supplements",
        "price": 22.19,
        "image": "assets/images/products/538/main.jpg",
        "rating": 3.8,
        "reviews": 227,
        "description": "The Creatine Monohydrate Powder is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 608,
        "name": "Non-Slip Yoga Towel with Corner Pockets",
        "category": "Yoga",
        "price": 17.42,
        "image": "assets/images/products/608/main.jpg",
        "rating": 4.6,
        "reviews": 357,
        "description": "The Non-Slip Yoga Towel with Corner Pockets is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 678,
        "name": "Compact Foldable Flat Utility Bench",
        "category": "Home Gym",
        "price": 2838.39,
        "image": "assets/images/products/678/main.jpg",
        "rating": 3.9,
        "reviews": 498,
        "description": "The Compact Foldable Flat Utility Bench is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 49,
        "name": "Rubber Hex Dumbbell Pair (35 lbs)",
        "category": "Strength",
        "price": 453.89,
        "image": "assets/images/products/49/main.jpg",
        "rating": 4.1,
        "reviews": 497,
        "description": "The Rubber Hex Dumbbell Pair is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 119,
        "name": "Commercial Motorized Treadmill (4.0 HP Peak)",
        "category": "Cardio",
        "price": 2774.72,
        "image": "assets/images/products/119/main.jpg",
        "rating": 5.0,
        "reviews": 298,
        "description": "The Commercial Motorized Treadmill is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 189,
        "name": "Competition Shin & Instep Guards",
        "category": "Combat",
        "price": 71.76,
        "image": "assets/images/products/189/main.jpg",
        "rating": 3.8,
        "reviews": 396,
        "description": "The Competition Shin & Instep Guards is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 259,
        "name": "Vibrating Deep Tissue Massage Peanut Ball",
        "category": "Recovery",
        "price": 1121.25,
        "image": "assets/images/products/259/main.jpg",
        "rating": 4.8,
        "reviews": 309,
        "description": "The Vibrating Deep Tissue Massage Peanut Ball is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 329,
        "name": "Heavy Cotton Figure 8 Lifting Straps Pair",
        "category": "Accessories",
        "price": 84.8,
        "image": "assets/images/products/329/main.jpg",
        "rating": 4.7,
        "reviews": 265,
        "description": "The Heavy Cotton Figure 8 Lifting Straps Pair is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 399,
        "name": "Oversized Drop-Shoulder Heavy Cotton Tee",
        "category": "Apparel",
        "price": 152.31,
        "image": "assets/images/products/399/main.jpg",
        "rating": 4.7,
        "reviews": 212,
        "description": "The Oversized Drop-Shoulder Heavy Cotton Tee is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 469,
        "name": "Smart Fitness Ring with Temperature & Heart Rate Sensor",
        "category": "Fit Tech",
        "price": 551.93,
        "image": "assets/images/products/469/main.jpg",
        "rating": 4.1,
        "reviews": 473,
        "description": "The Smart Fitness Ring with Temperature & Heart Rate Sensor is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 539,
        "name": "EAA Hydration Recovery Powder (Watermelon Ice 30 Servings)",
        "category": "Supplements",
        "price": 44.19,
        "image": "assets/images/products/539/main.jpg",
        "rating": 4.8,
        "reviews": 250,
        "description": "The EAA Hydration Recovery Powder is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 609,
        "name": "Extra Thick Comfort Yoga Mat (10mm)",
        "category": "Yoga",
        "price": 45.67,
        "image": "assets/images/products/609/main.jpg",
        "rating": 4.2,
        "reviews": 383,
        "description": "The Extra Thick Comfort Yoga Mat is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 679,
        "name": "Doorway Multi-Grip Pull-Up Bar No-Screws Mount",
        "category": "Home Gym",
        "price": 1306.0,
        "image": "assets/images/products/679/main.jpg",
        "rating": 3.8,
        "reviews": 374,
        "description": "The Doorway Multi-Grip Pull-Up Bar No-Screws Mount is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 50,
        "name": "Calibrated Competition Steel Plate (15kg)",
        "category": "Strength",
        "price": 1221.63,
        "image": "assets/images/products/50/main.jpg",
        "rating": 4.8,
        "reviews": 75,
        "description": "The Calibrated Competition Steel Plate is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 120,
        "name": "Dual Resistance Air & Magnetic Rower",
        "category": "Cardio",
        "price": 1857.3,
        "image": "assets/images/products/120/main.jpg",
        "rating": 4.6,
        "reviews": 67,
        "description": "The Dual Resistance Air & Magnetic Rower is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 190,
        "name": "Leather Speed Bag with Dual Swivel",
        "category": "Combat",
        "price": 126.49,
        "image": "assets/images/products/190/main.jpg",
        "rating": 4.6,
        "reviews": 468,
        "description": "The Leather Speed Bag with Dual Swivel is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 260,
        "name": "Infrared Heating Pad with Jade & Tourmaline Stones",
        "category": "Recovery",
        "price": 1437.11,
        "image": "assets/images/products/260/main.jpg",
        "rating": 4.5,
        "reviews": 368,
        "description": "The Infrared Heating Pad with Jade & Tourmaline Stones is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 330,
        "name": "Compact Gym Sports Duffle Bag",
        "category": "Accessories",
        "price": 10.47,
        "image": "assets/images/products/330/main.jpg",
        "rating": 3.9,
        "reviews": 156,
        "description": "The Compact Gym Sports Duffle Bag is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 400,
        "name": "Lightweight Breathable Running Tank",
        "category": "Apparel",
        "price": 33.95,
        "image": "assets/images/products/400/main.jpg",
        "rating": 4.5,
        "reviews": 210,
        "description": "The Lightweight Breathable Running Tank is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 470,
        "name": "Multisport GPS Watch with Barometric Altimeter",
        "category": "Fit Tech",
        "price": 1223.74,
        "image": "assets/images/products/470/main.jpg",
        "rating": 4.3,
        "reviews": 417,
        "description": "The Multisport GPS Watch with Barometric Altimeter is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 540,
        "name": "Hydrolyzed Collagen Peptides Unflavored Powder (500g)",
        "category": "Supplements",
        "price": 83.39,
        "image": "assets/images/products/540/main.jpg",
        "rating": 4.8,
        "reviews": 329,
        "description": "The Hydrolyzed Collagen Peptides Unflavored Powder is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 610,
        "name": "Eco Friendly Cork Yoga Block Pair",
        "category": "Yoga",
        "price": 68.99,
        "image": "assets/images/products/610/main.jpg",
        "rating": 4.6,
        "reviews": 25,
        "description": "The Eco Friendly Cork Yoga Block Pair is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 680,
        "name": "Bodyweight Suspension Fitness Trainer Kit",
        "category": "Home Gym",
        "price": 1191.04,
        "image": "assets/images/products/680/main.jpg",
        "rating": 4.9,
        "reviews": 165,
        "description": "The Bodyweight Suspension Fitness Trainer Kit is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 51,
        "name": "Hard Chrome EZ Curl Barbell (47 Inch)",
        "category": "Strength",
        "price": 1498.96,
        "image": "assets/images/products/51/main.jpg",
        "rating": 4.8,
        "reviews": 72,
        "description": "The Hard Chrome EZ Curl Barbell is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 121,
        "name": "Smart Indoor Spin Bike with Magnetic Resistance",
        "category": "Cardio",
        "price": 2627.18,
        "image": "assets/images/products/121/main.jpg",
        "rating": 4.0,
        "reviews": 158,
        "description": "The Smart Indoor Spin Bike with Magnetic Resistance is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 191,
        "name": "Heavy Leather Angle Uppercut Punching Bag",
        "category": "Combat",
        "price": 119.25,
        "image": "assets/images/products/191/main.jpg",
        "rating": 4.2,
        "reviews": 307,
        "description": "The Heavy Leather Angle Uppercut Punching Bag is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 261,
        "name": "Compact High-Density Roller (12-Inch)",
        "category": "Recovery",
        "price": 562.72,
        "image": "assets/images/products/261/main.jpg",
        "rating": 4.6,
        "reviews": 409,
        "description": "The Compact High-Density Roller is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 331,
        "name": "Neoprene Padded Ankle Straps Pair for Cable Kickbacks",
        "category": "Accessories",
        "price": 59.39,
        "image": "assets/images/products/331/main.jpg",
        "rating": 4.7,
        "reviews": 295,
        "description": "The Neoprene Padded Ankle Straps Pair for Cable Kickbacks is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 401,
        "name": "Thermal Compression Long Sleeve Top",
        "category": "Apparel",
        "price": 92.61,
        "image": "assets/images/products/401/main.jpg",
        "rating": 4.3,
        "reviews": 306,
        "description": "The Thermal Compression Long Sleeve Top is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 471,
        "name": "Soft Fabric Heart Rate Chest Strap Sensor",
        "category": "Fit Tech",
        "price": 348.82,
        "image": "assets/images/products/471/main.jpg",
        "rating": 3.9,
        "reviews": 42,
        "description": "The Soft Fabric Heart Rate Chest Strap Sensor is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 541,
        "name": "Lean Mass Gainer Protein Powder (Vanilla Shake 5 lbs)",
        "category": "Supplements",
        "price": 38.86,
        "image": "assets/images/products/541/main.jpg",
        "rating": 4.9,
        "reviews": 127,
        "description": "The Lean Mass Gainer Protein Powder is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 611,
        "name": "Heavy Duty Stretching Strap for Flexibility",
        "category": "Yoga",
        "price": 17.01,
        "image": "assets/images/products/611/main.jpg",
        "rating": 4.5,
        "reviews": 290,
        "description": "The Heavy Duty Stretching Strap for Flexibility is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 681,
        "name": "Heavy Duty Power Tower Station for Home Gym",
        "category": "Home Gym",
        "price": 2673.59,
        "image": "assets/images/products/681/main.jpg",
        "rating": 3.8,
        "reviews": 342,
        "description": "The Heavy Duty Power Tower Station for Home Gym is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 52,
        "name": "Commercial Glute Ham Developer (GHD) Machine",
        "category": "Strength",
        "price": 639.3,
        "image": "assets/images/products/52/main.jpg",
        "rating": 4.4,
        "reviews": 467,
        "description": "The Commercial Glute Ham Developer Machine is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 122,
        "name": "Portable Walking Pad Treadmill for Home Office",
        "category": "Cardio",
        "price": 792.65,
        "image": "assets/images/products/122/main.jpg",
        "rating": 4.2,
        "reviews": 414,
        "description": "The Portable Walking Pad Treadmill for Home Office is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 192,
        "name": "MMA Open-Palm Sparring Gloves (6 oz)",
        "category": "Combat",
        "price": 188.25,
        "image": "assets/images/products/192/main.jpg",
        "rating": 4.8,
        "reviews": 382,
        "description": "The MMA Open-Palm Sparring Gloves is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 262,
        "name": "Targeted Plantar Fasciitis Foot Massage Roller",
        "category": "Recovery",
        "price": 124.6,
        "image": "assets/images/products/262/main.jpg",
        "rating": 4.1,
        "reviews": 184,
        "description": "The Targeted Plantar Fasciitis Foot Massage Roller is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 332,
        "name": "High Speed Bearing Jump Rope with Steel Wire",
        "category": "Accessories",
        "price": 79.86,
        "image": "assets/images/products/332/main.jpg",
        "rating": 4.1,
        "reviews": 87,
        "description": "The High Speed Bearing Jump Rope with Steel Wire is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 402,
        "name": "Stretch Woven Athletic Shorts (7-Inch)",
        "category": "Apparel",
        "price": 144.07,
        "image": "assets/images/products/402/main.jpg",
        "rating": 3.9,
        "reviews": 74,
        "description": "The Stretch Woven Athletic Shorts is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 472,
        "name": "Smart Body Fat Scale with 8 Electrode Sensors",
        "category": "Fit Tech",
        "price": 1024.43,
        "image": "assets/images/products/472/main.jpg",
        "rating": 4.8,
        "reviews": 150,
        "description": "The Smart Body Fat Scale with 8 Electrode Sensors is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 542,
        "name": "100% Whey Protein Isolate (Rich Chocolate 5 lbs)",
        "category": "Supplements",
        "price": 25.99,
        "image": "assets/images/products/542/main.jpg",
        "rating": 4.3,
        "reviews": 188,
        "description": "The 100% Whey Protein Isolate is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 612,
        "name": "Organic Cotton Yoga Bolster Pillow (Large)",
        "category": "Yoga",
        "price": 10.73,
        "image": "assets/images/products/612/main.jpg",
        "rating": 4.2,
        "reviews": 86,
        "description": "The Organic Cotton Yoga Bolster Pillow is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 682,
        "name": "Interlocking Rubber Gym Matting Tiles (24-Pack)",
        "category": "Home Gym",
        "price": 1026.29,
        "image": "assets/images/products/682/main.jpg",
        "rating": 4.3,
        "reviews": 306,
        "description": "The Interlocking Rubber Gym Matting Tiles is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 53,
        "name": "Heavy Duty Adjustable Squat Stands Pair",
        "category": "Strength",
        "price": 288.72,
        "image": "assets/images/products/53/main.jpg",
        "rating": 3.8,
        "reviews": 224,
        "description": "The Heavy Duty Adjustable Squat Stands Pair is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 123,
        "name": "Recumbent Exercise Bike with Quick-Adjust Seat",
        "category": "Cardio",
        "price": 2305.63,
        "image": "assets/images/products/123/main.jpg",
        "rating": 4.8,
        "reviews": 154,
        "description": "The Recumbent Exercise Bike with Quick-Adjust Seat is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 193,
        "name": "Elasticized Boxing Hand Wraps (180-Inch)",
        "category": "Combat",
        "price": 92.02,
        "image": "assets/images/products/193/main.jpg",
        "rating": 4.8,
        "reviews": 235,
        "description": "The Elasticized Boxing Hand Wraps is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 263,
        "name": "Air Compression Leg Recovery Boots System",
        "category": "Recovery",
        "price": 887.98,
        "image": "assets/images/products/263/main.jpg",
        "rating": 4.1,
        "reviews": 361,
        "description": "The Air Compression Leg Recovery Boots System is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 333,
        "name": "BPA-Free Shaker Bottle with Storage Compartments",
        "category": "Accessories",
        "price": 47.78,
        "image": "assets/images/products/333/main.jpg",
        "rating": 4.8,
        "reviews": 259,
        "description": "The BPA-Free Shaker Bottle with Storage Compartments is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 403,
        "name": "Fleece Athletic Hoodie with Kangaroo Pocket",
        "category": "Apparel",
        "price": 164.11,
        "image": "assets/images/products/403/main.jpg",
        "rating": 4.2,
        "reviews": 212,
        "description": "The Fleece Athletic Hoodie with Kangaroo Pocket is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 473,
        "name": "Pneumatic Compression Recovery Pants System",
        "category": "Fit Tech",
        "price": 686.5,
        "image": "assets/images/products/473/main.jpg",
        "rating": 4.4,
        "reviews": 411,
        "description": "The Pneumatic Compression Recovery Pants System is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 543,
        "name": "Stim-Free Pre-Workout Pump Formula (30 Servings)",
        "category": "Supplements",
        "price": 72.55,
        "image": "assets/images/products/543/main.jpg",
        "rating": 4.4,
        "reviews": 319,
        "description": "The Stim-Free Pre-Workout Pump Formula is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 613,
        "name": "Deep Back Stretcher Yoga Wheel (12-Inch)",
        "category": "Yoga",
        "price": 52.99,
        "image": "assets/images/products/613/main.jpg",
        "rating": 4.1,
        "reviews": 70,
        "description": "The Deep Back Stretcher Yoga Wheel is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 683,
        "name": "Adjustable Dumbbells Pair with Custom Rack (5-50 lbs)",
        "category": "Home Gym",
        "price": 445.62,
        "image": "assets/images/products/683/main.jpg",
        "rating": 4.3,
        "reviews": 239,
        "description": "The Adjustable Dumbbells Pair with Custom Rack is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 54,
        "name": "Cast Iron Kettlebell (14kg / 31lbs)",
        "category": "Strength",
        "price": 1188.44,
        "image": "assets/images/products/54/main.jpg",
        "rating": 4.1,
        "reviews": 381,
        "description": "The Cast Iron Kettlebell is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 124,
        "name": "Water Resistance Rower with Ergonomic Handle",
        "category": "Cardio",
        "price": 254.27,
        "image": "assets/images/products/124/main.jpg",
        "rating": 4.4,
        "reviews": 204,
        "description": "The Water Resistance Rower with Ergonomic Handle is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 194,
        "name": "Freestanding Punching Tower with Water Base",
        "category": "Combat",
        "price": 155.32,
        "image": "assets/images/products/194/main.jpg",
        "rating": 4.6,
        "reviews": 440,
        "description": "The Freestanding Punching Tower with Water Base is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 264,
        "name": "Deep Muscle Massage Stick Roller with Handles",
        "category": "Recovery",
        "price": 1278.55,
        "image": "assets/images/products/264/main.jpg",
        "rating": 4.2,
        "reviews": 309,
        "description": "The Deep Muscle Massage Stick Roller with Handles is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 334,
        "name": "Genuine Leather Workout Gloves with Wrist Wraps",
        "category": "Accessories",
        "price": 85.3,
        "image": "assets/images/products/334/main.jpg",
        "rating": 4.4,
        "reviews": 299,
        "description": "The Genuine Leather Workout Gloves with Wrist Wraps is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 404,
        "name": "Tapered Cargo Gym Joggers with Zip Pockets",
        "category": "Apparel",
        "price": 130.43,
        "image": "assets/images/products/404/main.jpg",
        "rating": 4.3,
        "reviews": 45,
        "description": "The Tapered Cargo Gym Joggers with Zip Pockets is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 474,
        "name": "Smart Bluetooth Fitness Wristband",
        "category": "Fit Tech",
        "price": 780.65,
        "image": "assets/images/products/474/main.jpg",
        "rating": 4.1,
        "reviews": 442,
        "description": "The Smart Bluetooth Fitness Wristband is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 544,
        "name": "Pure Micronized Creatine Monohydrate (250g)",
        "category": "Supplements",
        "price": 43.84,
        "image": "assets/images/products/544/main.jpg",
        "rating": 4.8,
        "reviews": 226,
        "description": "The Pure Micronized Creatine Monohydrate is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 614,
        "name": "Water Resistant Yoga Mat Bag Sleeve",
        "category": "Yoga",
        "price": 38.2,
        "image": "assets/images/products/614/main.jpg",
        "rating": 4.9,
        "reviews": 95,
        "description": "The Water Resistant Yoga Mat Bag Sleeve is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 684,
        "name": "Foldable Multi-Position Weight Bench",
        "category": "Home Gym",
        "price": 2677.03,
        "image": "assets/images/products/684/main.jpg",
        "rating": 4.4,
        "reviews": 347,
        "description": "The Foldable Multi-Position Weight Bench is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 55,
        "name": "Rubber Coated Hex Dumbbell (20 lbs)",
        "category": "Strength",
        "price": 325.35,
        "image": "assets/images/products/55/main.jpg",
        "rating": 4.1,
        "reviews": 54,
        "description": "The Rubber Coated Hex Dumbbell is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 125,
        "name": "Heavy Duty Elliptical Cross Trainer with Power Incline",
        "category": "Cardio",
        "price": 392.13,
        "image": "assets/images/products/125/main.jpg",
        "rating": 4.9,
        "reviews": 45,
        "description": "The Heavy Duty Elliptical Cross Trainer with Power Incline is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 195,
        "name": "Pro Boxing Training Gloves (12 oz)",
        "category": "Combat",
        "price": 197.97,
        "image": "assets/images/products/195/main.jpg",
        "rating": 4.8,
        "reviews": 358,
        "description": "The Pro Boxing Training Gloves is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 265,
        "name": "Cold Plunge Tub Protection Cover & Pump Kit",
        "category": "Recovery",
        "price": 1155.78,
        "image": "assets/images/products/265/main.jpg",
        "rating": 4.5,
        "reviews": 438,
        "description": "The Cold Plunge Tub Protection Cover & Pump Kit is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 335,
        "name": "Pull-Up Assistance Rubber Resistance Bands Set",
        "category": "Accessories",
        "price": 56.38,
        "image": "assets/images/products/335/main.jpg",
        "rating": 4.1,
        "reviews": 98,
        "description": "The Pull-Up Assistance Rubber Resistance Bands Set is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 405,
        "name": "High-Waisted Seamless Pocket Leggings",
        "category": "Apparel",
        "price": 48.98,
        "image": "assets/images/products/405/main.jpg",
        "rating": 4.2,
        "reviews": 267,
        "description": "The High-Waisted Seamless Pocket Leggings is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 475,
        "name": "Wearable EMS Muscle Toning Belt",
        "category": "Fit Tech",
        "price": 916.98,
        "image": "assets/images/products/475/main.jpg",
        "rating": 4.6,
        "reviews": 189,
        "description": "The Wearable EMS Muscle Toning Belt is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 545,
        "name": "BCAA Energy Intra-Workout Powder (Cherry Limeade)",
        "category": "Supplements",
        "price": 93.89,
        "image": "assets/images/products/545/main.jpg",
        "rating": 4.0,
        "reviews": 304,
        "description": "The BCAA Energy Intra-Workout Powder is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 615,
        "name": "Alignment Marker Non-Slip Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 67.74,
        "image": "assets/images/products/615/main.jpg",
        "rating": 4.6,
        "reviews": 60,
        "description": "The Alignment Marker Non-Slip Yoga Mat is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 685,
        "name": "Heavy Duty Ceiling Mount Pull-Up Bar",
        "category": "Home Gym",
        "price": 2389.36,
        "image": "assets/images/products/685/main.jpg",
        "rating": 4.2,
        "reviews": 303,
        "description": "The Heavy Duty Ceiling Mount Pull-Up Bar is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 56,
        "name": "Commercial Functional Trainer Dual Pulley",
        "category": "Strength",
        "price": 504.73,
        "image": "assets/images/products/56/main.jpg",
        "rating": 3.9,
        "reviews": 269,
        "description": "The Commercial Functional Trainer Dual Pulley is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 126,
        "name": "Curved Manual Treadmill with Rubber Slat Belt",
        "category": "Cardio",
        "price": 758.21,
        "image": "assets/images/products/126/main.jpg",
        "rating": 3.8,
        "reviews": 103,
        "description": "The Curved Manual Treadmill with Rubber Slat Belt is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 196,
        "name": "Curved Leather Target Punch Mitts Pair",
        "category": "Combat",
        "price": 193.84,
        "image": "assets/images/products/196/main.jpg",
        "rating": 4.0,
        "reviews": 327,
        "description": "The Curved Leather Target Punch Mitts Pair is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 266,
        "name": "Professional Heavy-Duty Percussive Massager",
        "category": "Recovery",
        "price": 1463.09,
        "image": "assets/images/products/266/main.jpg",
        "rating": 4.8,
        "reviews": 339,
        "description": "The Professional Heavy-Duty Percussive Massager is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 336,
        "name": "Professional Lever Powerlifting Belt (Custom Fit)",
        "category": "Accessories",
        "price": 10.14,
        "image": "assets/images/products/336/main.jpg",
        "rating": 4.2,
        "reviews": 317,
        "description": "The Professional Lever Powerlifting Belt is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 406,
        "name": "Dry-Fit Short Sleeve Performance Training Shirt",
        "category": "Apparel",
        "price": 131.1,
        "image": "assets/images/products/406/main.jpg",
        "rating": 4.4,
        "reviews": 192,
        "description": "The Dry-Fit Short Sleeve Performance Training Shirt is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 476,
        "name": "Open-Ear Bone Conduction Wireless Sport Headset",
        "category": "Fit Tech",
        "price": 1320.57,
        "image": "assets/images/products/476/main.jpg",
        "rating": 5.0,
        "reviews": 291,
        "description": "The Open-Ear Bone Conduction Wireless Sport Headset is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 546,
        "name": "High-Yield Fish Oil Omega-3 Softgels (180 Count)",
        "category": "Supplements",
        "price": 79.09,
        "image": "assets/images/products/546/main.jpg",
        "rating": 3.8,
        "reviews": 397,
        "description": "The High-Yield Fish Oil Omega-3 Softgels is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 616,
        "name": "High Density Foam Yoga Block Pair (3-Inch)",
        "category": "Yoga",
        "price": 68.5,
        "image": "assets/images/products/616/main.jpg",
        "rating": 4.3,
        "reviews": 394,
        "description": "The High Density Foam Yoga Block Pair is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 686,
        "name": "Commercial Suspension Trainer System",
        "category": "Home Gym",
        "price": 2755.5,
        "image": "assets/images/products/686/main.jpg",
        "rating": 4.4,
        "reviews": 223,
        "description": "The Commercial Suspension Trainer System is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 57,
        "name": "High-Tenacity Olympic Barbell Collar Clamp Pair",
        "category": "Strength",
        "price": 1443.13,
        "image": "assets/images/products/57/main.jpg",
        "rating": 3.9,
        "reviews": 120,
        "description": "The High-Tenacity Olympic Barbell Collar Clamp Pair is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 127,
        "name": "Pro Studio Spin Bike with Dual SPD Pedals",
        "category": "Cardio",
        "price": 1525.97,
        "image": "assets/images/products/127/main.jpg",
        "rating": 3.9,
        "reviews": 136,
        "description": "The Pro Studio Spin Bike with Dual SPD Pedals is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 197,
        "name": "Leather Headgear with Cheek & Chin Guard",
        "category": "Combat",
        "price": 177.98,
        "image": "assets/images/products/197/main.jpg",
        "rating": 4.3,
        "reviews": 294,
        "description": "The Leather Headgear with Cheek & Chin Guard is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 267,
        "name": "Spiky Trigger Point Massage Ball Set of 3",
        "category": "Recovery",
        "price": 1397.17,
        "image": "assets/images/products/267/main.jpg",
        "rating": 4.8,
        "reviews": 161,
        "description": "The Spiky Trigger Point Massage Ball Set of 3 is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 337,
        "name": "Heavy Duty Chalk Ball in Drawstring Bag",
        "category": "Accessories",
        "price": 69.79,
        "image": "assets/images/products/337/main.jpg",
        "rating": 3.9,
        "reviews": 209,
        "description": "The Heavy Duty Chalk Ball in Drawstring Bag is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 407,
        "name": "Low-Impact Strappy Yoga & Gym Sports Bra",
        "category": "Apparel",
        "price": 93.77,
        "image": "assets/images/products/407/main.jpg",
        "rating": 4.5,
        "reviews": 456,
        "description": "The Low-Impact Strappy Yoga & Gym Sports Bra is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 477,
        "name": "Smart Cadence & Speed Sensor Pair for Bikes",
        "category": "Fit Tech",
        "price": 485.73,
        "image": "assets/images/products/477/main.jpg",
        "rating": 3.9,
        "reviews": 327,
        "description": "The Smart Cadence & Speed Sensor Pair for Bikes is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 547,
        "name": "Plant Based Pea & Rice Protein Powder (Vanilla 2 lbs)",
        "category": "Supplements",
        "price": 28.87,
        "image": "assets/images/products/547/main.jpg",
        "rating": 4.8,
        "reviews": 450,
        "description": "The Plant Based Pea & Rice Protein Powder is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 617,
        "name": "Multi Grip Yoga Stretching Strap",
        "category": "Yoga",
        "price": 92.79,
        "image": "assets/images/products/617/main.jpg",
        "rating": 4.5,
        "reviews": 251,
        "description": "The Multi Grip Yoga Stretching Strap is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 687,
        "name": "Multi-Grip Power Tower Dip Pull-Up Station",
        "category": "Home Gym",
        "price": 272.98,
        "image": "assets/images/products/687/main.jpg",
        "rating": 4.5,
        "reviews": 40,
        "description": "The Multi-Grip Power Tower Dip Pull-Up Station is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 58,
        "name": "Calibrated Bumper Plate Pair (10 lbs)",
        "category": "Strength",
        "price": 148.54,
        "image": "assets/images/products/58/main.jpg",
        "rating": 4.8,
        "reviews": 231,
        "description": "The Calibrated Bumper Plate Pair is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 128,
        "name": "Compact Folding Motorized Treadmill",
        "category": "Cardio",
        "price": 917.48,
        "image": "assets/images/products/128/main.jpg",
        "rating": 4.2,
        "reviews": 335,
        "description": "The Compact Folding Motorized Treadmill is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 198,
        "name": "Muay Thai Strike Shield Target Pad",
        "category": "Combat",
        "price": 151.43,
        "image": "assets/images/products/198/main.jpg",
        "rating": 4.3,
        "reviews": 360,
        "description": "The Muay Thai Strike Shield Target Pad is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 268,
        "name": "Electric Heated Arm & Elbow Compression Wrap",
        "category": "Recovery",
        "price": 446.24,
        "image": "assets/images/products/268/main.jpg",
        "rating": 4.7,
        "reviews": 496,
        "description": "The Electric Heated Arm & Elbow Compression Wrap is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 338,
        "name": "Spacious Gym Travel Duffel Bag with Shoe Pocket",
        "category": "Accessories",
        "price": 58.97,
        "image": "assets/images/products/338/main.jpg",
        "rating": 4.7,
        "reviews": 284,
        "description": "The Spacious Gym Travel Duffel Bag with Shoe Pocket is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 408,
        "name": "Minimalist Weightlifting Barefoot Shoes",
        "category": "Apparel",
        "price": 83.87,
        "image": "assets/images/products/408/main.jpg",
        "rating": 4.8,
        "reviews": 297,
        "description": "The Minimalist Weightlifting Barefoot Shoes is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 478,
        "name": "Digital Grip Strength Tester Meter",
        "category": "Fit Tech",
        "price": 855.98,
        "image": "assets/images/products/478/main.jpg",
        "rating": 3.9,
        "reviews": 201,
        "description": "The Digital Grip Strength Tester Meter is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 548,
        "name": "Slow Release Casein Protein Powder (Chocolate 5 lbs)",
        "category": "Supplements",
        "price": 70.57,
        "image": "assets/images/products/548/main.jpg",
        "rating": 4.0,
        "reviews": 180,
        "description": "The Slow Release Casein Protein Powder is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 618,
        "name": "Round Velvet Meditation Cushion",
        "category": "Yoga",
        "price": 90.69,
        "image": "assets/images/products/618/main.jpg",
        "rating": 4.0,
        "reviews": 88,
        "description": "The Round Velvet Meditation Cushion is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 688,
        "name": "High Density Rubber Gym Flooring Mat (1/4 Inch)",
        "category": "Home Gym",
        "price": 2464.23,
        "image": "assets/images/products/688/main.jpg",
        "rating": 4.4,
        "reviews": 208,
        "description": "The High Density Rubber Gym Flooring Mat is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 59,
        "name": "Steel T-Bar Row Platform & Handle System",
        "category": "Strength",
        "price": 407.01,
        "image": "assets/images/products/59/main.jpg",
        "rating": 4.5,
        "reviews": 342,
        "description": "The Steel T-Bar Row Platform & Handle System is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 129,
        "name": "Commercial Grade Air Rower with Steel Chain",
        "category": "Cardio",
        "price": 2901.22,
        "image": "assets/images/products/129/main.jpg",
        "rating": 3.9,
        "reviews": 38,
        "description": "The Commercial Grade Air Rower with Steel Chain is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 199,
        "name": "Double-End Speed Bag Assembly",
        "category": "Combat",
        "price": 107.16,
        "image": "assets/images/products/199/main.jpg",
        "rating": 5.0,
        "reviews": 198,
        "description": "The Double-End Speed Bag Assembly is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 269,
        "name": "Magnesium Bath Flakes for Post-Workout Recovery",
        "category": "Recovery",
        "price": 58.85,
        "image": "assets/images/products/269/main.jpg",
        "rating": 4.8,
        "reviews": 314,
        "description": "The Magnesium Bath Flakes for Post-Workout Recovery is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 339,
        "name": "Neoprene Weightlifting Knee Sleeves 7mm Pair",
        "category": "Accessories",
        "price": 88.6,
        "image": "assets/images/products/339/main.jpg",
        "rating": 3.9,
        "reviews": 223,
        "description": "The Neoprene Weightlifting Knee Sleeves 7mm Pair is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 409,
        "name": "Breathable Mesh Muscle Cut Tank",
        "category": "Apparel",
        "price": 123.51,
        "image": "assets/images/products/409/main.jpg",
        "rating": 4.4,
        "reviews": 33,
        "description": "The Breathable Mesh Muscle Cut Tank is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 479,
        "name": "Advanced GPS Multisport Smartwatch",
        "category": "Fit Tech",
        "price": 512.16,
        "image": "assets/images/products/479/main.jpg",
        "rating": 4.3,
        "reviews": 101,
        "description": "The Advanced GPS Multisport Smartwatch is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 549,
        "name": "Pre-Workout Energy & Focus Powder (Sour Gummy)",
        "category": "Supplements",
        "price": 69.28,
        "image": "assets/images/products/549/main.jpg",
        "rating": 4.7,
        "reviews": 429,
        "description": "The Pre-Workout Energy & Focus Powder is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 619,
        "name": "Textured Spine Release Yoga Wheel",
        "category": "Yoga",
        "price": 96.69,
        "image": "assets/images/products/619/main.jpg",
        "rating": 4.2,
        "reviews": 96,
        "description": "The Textured Spine Release Yoga Wheel is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 689,
        "name": "Quick-Select Adjustable Dumbbells Pair (10-40 lbs)",
        "category": "Home Gym",
        "price": 480.38,
        "image": "assets/images/products/689/main.jpg",
        "rating": 4.6,
        "reviews": 161,
        "description": "The Quick-Select Adjustable Dumbbells Pair is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 60,
        "name": "Adjustable FID Bench (Flat Incline Decline)",
        "category": "Strength",
        "price": 1003.19,
        "image": "assets/images/products/60/main.jpg",
        "rating": 4.5,
        "reviews": 186,
        "description": "The Adjustable FID Bench is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 130,
        "name": "Heavy Duty Resistance Fan Bike",
        "category": "Cardio",
        "price": 2096.57,
        "image": "assets/images/products/130/main.jpg",
        "rating": 4.9,
        "reviews": 228,
        "description": "The Heavy Duty Resistance Fan Bike is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 200,
        "name": "Heavy Duty Steel Heavy Bag Wall Hanger",
        "category": "Combat",
        "price": 39.06,
        "image": "assets/images/products/200/main.jpg",
        "rating": 4.2,
        "reviews": 370,
        "description": "The Heavy Duty Steel Heavy Bag Wall Hanger is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 270,
        "name": "High-Density Grid Foam Roller (30-Inch)",
        "category": "Recovery",
        "price": 255.72,
        "image": "assets/images/products/270/main.jpg",
        "rating": 4.6,
        "reviews": 40,
        "description": "The High-Density Grid Foam Roller is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 340,
        "name": "Quick-Lock Nylon Lifting Belt for Cross Training",
        "category": "Accessories",
        "price": 77.26,
        "image": "assets/images/products/340/main.jpg",
        "rating": 4.2,
        "reviews": 59,
        "description": "The Quick-Lock Nylon Lifting Belt for Cross Training is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 410,
        "name": "Compression Tights Shorts (6-Inch)",
        "category": "Apparel",
        "price": 142.92,
        "image": "assets/images/products/410/main.jpg",
        "rating": 5.0,
        "reviews": 323,
        "description": "The Compression Tights Shorts is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 480,
        "name": "Bluetooth Heart Rate Monitor Strap",
        "category": "Fit Tech",
        "price": 316.62,
        "image": "assets/images/products/480/main.jpg",
        "rating": 4.4,
        "reviews": 148,
        "description": "The Bluetooth Heart Rate Monitor Strap is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 550,
        "name": "Micronized Creatine Monohydrate Powder (500g Unflavored) (v60)",
        "category": "Supplements",
        "price": 50.42,
        "image": "assets/images/products/550/main.jpg",
        "rating": 4.5,
        "reviews": 323,
        "description": "The Micronized Creatine Monohydrate Powder is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 620,
        "name": "Full Length Microfiber Yoga Towel",
        "category": "Yoga",
        "price": 68.02,
        "image": "assets/images/products/620/main.jpg",
        "rating": 4.1,
        "reviews": 332,
        "description": "The Full Length Microfiber Yoga Towel is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 690,
        "name": "Space-Saving Foldable Utility Weight Bench (v60)",
        "category": "Home Gym",
        "price": 1811.94,
        "image": "assets/images/products/690/main.jpg",
        "rating": 5.0,
        "reviews": 223,
        "description": "The Space-Saving Foldable Utility Weight Bench is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 61,
        "name": "Cast Iron Competition Kettlebell (10kg)",
        "category": "Strength",
        "price": 1021.1,
        "image": "assets/images/products/61/main.jpg",
        "rating": 4.2,
        "reviews": 160,
        "description": "The Cast Iron Competition Kettlebell is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 131,
        "name": "Under-Desk Walking Pad Treadmill with Armrests",
        "category": "Cardio",
        "price": 1857.87,
        "image": "assets/images/products/131/main.jpg",
        "rating": 4.8,
        "reviews": 149,
        "description": "The Under-Desk Walking Pad Treadmill with Armrests is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 201,
        "name": "Leather Boxing Training Gloves (16 oz)",
        "category": "Combat",
        "price": 134.69,
        "image": "assets/images/products/201/main.jpg",
        "rating": 4.9,
        "reviews": 274,
        "description": "The Leather Boxing Training Gloves is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 271,
        "name": "Stainless Steel Muscle Scraping Tool (Type 2)",
        "category": "Recovery",
        "price": 819.2,
        "image": "assets/images/products/271/main.jpg",
        "rating": 4.3,
        "reviews": 257,
        "description": "The Stainless Steel Muscle Scraping Tool is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 341,
        "name": "Heavy Duty Steel Dip Belt with Chain Assembly",
        "category": "Accessories",
        "price": 75.96,
        "image": "assets/images/products/341/main.jpg",
        "rating": 4.6,
        "reviews": 420,
        "description": "The Heavy Duty Steel Dip Belt with Chain Assembly is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 411,
        "name": "Technical Quarter-Zip Training Top",
        "category": "Apparel",
        "price": 177.62,
        "image": "assets/images/products/411/main.jpg",
        "rating": 4.6,
        "reviews": 330,
        "description": "The Technical Quarter-Zip Training Top is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 481,
        "name": "Smart Wi-Fi Body Fat Composition Scale",
        "category": "Fit Tech",
        "price": 1293.43,
        "image": "assets/images/products/481/main.jpg",
        "rating": 4.0,
        "reviews": 262,
        "description": "The Smart Wi-Fi Body Fat Composition Scale is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 551,
        "name": "EAA + BCAAs Amino Recovery Powder (Fruit Punch)",
        "category": "Supplements",
        "price": 55.6,
        "image": "assets/images/products/551/main.jpg",
        "rating": 4.9,
        "reviews": 379,
        "description": "The EAA + BCAAs Amino Recovery Powder is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 621,
        "name": "Natural Rubber Pro Yoga Mat (5mm)",
        "category": "Yoga",
        "price": 86.31,
        "image": "assets/images/products/621/main.jpg",
        "rating": 4.6,
        "reviews": 179,
        "description": "The Natural Rubber Pro Yoga Mat is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 691,
        "name": "Doorway Chin-Up Bar with Safety Lock",
        "category": "Home Gym",
        "price": 693.08,
        "image": "assets/images/products/691/main.jpg",
        "rating": 4.5,
        "reviews": 437,
        "description": "The Doorway Chin-Up Bar with Safety Lock is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 62,
        "name": "Rubber Hex Dumbbell Pair (45 lbs)",
        "category": "Strength",
        "price": 1023.95,
        "image": "assets/images/products/62/main.jpg",
        "rating": 4.2,
        "reviews": 186,
        "description": "The Rubber Hex Dumbbell Pair is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 132,
        "name": "Magnetic Elliptical Trainer with Heart Rate Sensors",
        "category": "Cardio",
        "price": 2362.95,
        "image": "assets/images/products/132/main.jpg",
        "rating": 4.8,
        "reviews": 332,
        "description": "The Magnetic Elliptical Trainer with Heart Rate Sensors is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 202,
        "name": "Gel Enforced Shin Guards for Martial Arts",
        "category": "Combat",
        "price": 36.97,
        "image": "assets/images/products/202/main.jpg",
        "rating": 4.6,
        "reviews": 496,
        "description": "The Gel Enforced Shin Guards for Martial Arts is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 272,
        "name": "Acupressure Back Stretcher & Lumbar Massage Board",
        "category": "Recovery",
        "price": 586.58,
        "image": "assets/images/products/272/main.jpg",
        "rating": 4.7,
        "reviews": 422,
        "description": "The Acupressure Back Stretcher & Lumbar Massage Board is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 342,
        "name": "Pro Aluminum Handle Speed Jump Rope",
        "category": "Accessories",
        "price": 13.99,
        "image": "assets/images/products/342/main.jpg",
        "rating": 4.5,
        "reviews": 441,
        "description": "The Pro Aluminum Handle Speed Jump Rope is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 412,
        "name": "Oversized Vintage Washed Gym Tee",
        "category": "Apparel",
        "price": 194.24,
        "image": "assets/images/products/412/main.jpg",
        "rating": 4.7,
        "reviews": 422,
        "description": "The Oversized Vintage Washed Gym Tee is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 482,
        "name": "Air Compression Leg Massager Boots Device",
        "category": "Fit Tech",
        "price": 648.38,
        "image": "assets/images/products/482/main.jpg",
        "rating": 4.3,
        "reviews": 296,
        "description": "The Air Compression Leg Massager Boots Device is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 552,
        "name": "Daily Athlete Multivitamin Tablets (90 Count)",
        "category": "Supplements",
        "price": 13.31,
        "image": "assets/images/products/552/main.jpg",
        "rating": 5.0,
        "reviews": 384,
        "description": "The Daily Athlete Multivitamin Tablets is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 622,
        "name": "Premium Cork Yoga Block Set",
        "category": "Yoga",
        "price": 64.62,
        "image": "assets/images/products/622/main.jpg",
        "rating": 4.0,
        "reviews": 225,
        "description": "The Premium Cork Yoga Block Set is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 692,
        "name": "Suspension Bodyweight Fitness Trainer Kit",
        "category": "Home Gym",
        "price": 278.98,
        "image": "assets/images/products/692/main.jpg",
        "rating": 4.6,
        "reviews": 315,
        "description": "The Suspension Bodyweight Fitness Trainer Kit is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 63,
        "name": "Cerakote Women's Olympic Barbell (15kg)",
        "category": "Strength",
        "price": 714.51,
        "image": "assets/images/products/63/main.jpg",
        "rating": 5.0,
        "reviews": 76,
        "description": "The Cerakote Women's Olympic Barbell is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 133,
        "name": "Wood Frame Hydro Rower Machine",
        "category": "Cardio",
        "price": 2391.38,
        "image": "assets/images/products/133/main.jpg",
        "rating": 4.2,
        "reviews": 244,
        "description": "The Wood Frame Hydro Rower Machine is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 203,
        "name": "Tear Drop Leather Punching Bag (80 lbs)",
        "category": "Combat",
        "price": 155.68,
        "image": "assets/images/products/203/main.jpg",
        "rating": 4.3,
        "reviews": 75,
        "description": "The Tear Drop Leather Punching Bag is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 273,
        "name": "Mini Percussive Massage Gun (USB-C Rechargeable)",
        "category": "Recovery",
        "price": 275.59,
        "image": "assets/images/products/273/main.jpg",
        "rating": 4.7,
        "reviews": 50,
        "description": "The Mini Percussive Massage Gun is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 343,
        "name": "Insulated Vacuum Gym Water Bottle (40oz)",
        "category": "Accessories",
        "price": 51.82,
        "image": "assets/images/products/343/main.jpg",
        "rating": 4.6,
        "reviews": 348,
        "description": "The Insulated Vacuum Gym Water Bottle is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 413,
        "name": "High-Waisted Compression Leggings (7/8 Length)",
        "category": "Apparel",
        "price": 33.99,
        "image": "assets/images/products/413/main.jpg",
        "rating": 4.4,
        "reviews": 293,
        "description": "The High-Waisted Compression Leggings is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 483,
        "name": "Smart Fitness Tracker Ring (Black Edition)",
        "category": "Fit Tech",
        "price": 402.14,
        "image": "assets/images/products/483/main.jpg",
        "rating": 4.0,
        "reviews": 356,
        "description": "The Smart Fitness Tracker Ring is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 553,
        "name": "High Calorie Mass Gainer Protein (Chocolate 10 lbs)",
        "category": "Supplements",
        "price": 79.21,
        "image": "assets/images/products/553/main.jpg",
        "rating": 4.6,
        "reviews": 206,
        "description": "The High Calorie Mass Gainer Protein is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 623,
        "name": "Cotton Yoga Stretching Strap (10 Feet)",
        "category": "Yoga",
        "price": 80.54,
        "image": "assets/images/products/623/main.jpg",
        "rating": 4.8,
        "reviews": 147,
        "description": "The Cotton Yoga Stretching Strap is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 693,
        "name": "Power Tower Dip Station Pull-Up Machine",
        "category": "Home Gym",
        "price": 2855.43,
        "image": "assets/images/products/693/main.jpg",
        "rating": 4.8,
        "reviews": 439,
        "description": "The Power Tower Dip Station Pull-Up Machine is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 64,
        "name": "Plate Loaded Seated Calf Raise Machine",
        "category": "Strength",
        "price": 359.07,
        "image": "assets/images/products/64/main.jpg",
        "rating": 4.1,
        "reviews": 203,
        "description": "The Plate Loaded Seated Calf Raise Machine is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 134,
        "name": "Upright Magnetic Fitness Bike",
        "category": "Cardio",
        "price": 1616.69,
        "image": "assets/images/products/134/main.jpg",
        "rating": 4.2,
        "reviews": 459,
        "description": "The Upright Magnetic Fitness Bike is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 204,
        "name": "Hand Wraps Cotton Boxing Bandages Pair",
        "category": "Combat",
        "price": 54.11,
        "image": "assets/images/products/204/main.jpg",
        "rating": 4.2,
        "reviews": 39,
        "description": "The Hand Wraps Cotton Boxing Bandages Pair is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 274,
        "name": "Cold Therapy Ankle & Foot Ice Gel Boot",
        "category": "Recovery",
        "price": 692.51,
        "image": "assets/images/products/274/main.jpg",
        "rating": 4.3,
        "reviews": 335,
        "description": "The Cold Therapy Ankle & Foot Ice Gel Boot is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 344,
        "name": "Heavy Cotton Padded Weightlifting Straps",
        "category": "Accessories",
        "price": 15.68,
        "image": "assets/images/products/344/main.jpg",
        "rating": 4.7,
        "reviews": 259,
        "description": "The Heavy Cotton Padded Weightlifting Straps is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 414,
        "name": "Lightweight Track Jacket with Mesh Lining",
        "category": "Apparel",
        "price": 168.79,
        "image": "assets/images/products/414/main.jpg",
        "rating": 4.1,
        "reviews": 318,
        "description": "The Lightweight Track Jacket with Mesh Lining is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 484,
        "name": "Wireless Heart Rate Armband Monitor",
        "category": "Fit Tech",
        "price": 1278.34,
        "image": "assets/images/products/484/main.jpg",
        "rating": 3.9,
        "reviews": 395,
        "description": "The Wireless Heart Rate Armband Monitor is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 554,
        "name": "Hydrolyzed Whey Isolate Powder (Vanilla 5 lbs)",
        "category": "Supplements",
        "price": 65.14,
        "image": "assets/images/products/554/main.jpg",
        "rating": 4.5,
        "reviews": 355,
        "description": "The Hydrolyzed Whey Isolate Powder is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 624,
        "name": "Rectangular Yoga Bolster Pillow",
        "category": "Yoga",
        "price": 20.15,
        "image": "assets/images/products/624/main.jpg",
        "rating": 4.4,
        "reviews": 329,
        "description": "The Rectangular Yoga Bolster Pillow is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 694,
        "name": "Interlocking High-Density Rubber Gym Tiles (8-Pack)",
        "category": "Home Gym",
        "price": 1065.35,
        "image": "assets/images/products/694/main.jpg",
        "rating": 4.4,
        "reviews": 71,
        "description": "The Interlocking High-Density Rubber Gym Tiles is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 65,
        "name": "Heavy Duty Power Rack Extension Conversion Kit",
        "category": "Strength",
        "price": 585.81,
        "image": "assets/images/products/65/main.jpg",
        "rating": 4.0,
        "reviews": 451,
        "description": "The Heavy Duty Power Rack Extension Conversion Kit is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 135,
        "name": "Motorized Treadmill with Shock Absorption Deck",
        "category": "Cardio",
        "price": 495.51,
        "image": "assets/images/products/135/main.jpg",
        "rating": 5.0,
        "reviews": 350,
        "description": "The Motorized Treadmill with Shock Absorption Deck is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 205,
        "name": "Pro Leather Focus Mitts for Trainer",
        "category": "Combat",
        "price": 164.33,
        "image": "assets/images/products/205/main.jpg",
        "rating": 4.2,
        "reviews": 216,
        "description": "The Pro Leather Focus Mitts for Trainer is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 275,
        "name": "Full Body Pneumatic Compression Massager",
        "category": "Recovery",
        "price": 446.09,
        "image": "assets/images/products/275/main.jpg",
        "rating": 4.7,
        "reviews": 83,
        "description": "The Full Body Pneumatic Compression Massager is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 345,
        "name": "Latex Free Fabric Resistance Loop Bands",
        "category": "Accessories",
        "price": 28.14,
        "image": "assets/images/products/345/main.jpg",
        "rating": 4.7,
        "reviews": 478,
        "description": "The Latex Free Fabric Resistance Loop Bands is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 415,
        "name": "Fleece Lined Athletic Training Hoodie",
        "category": "Apparel",
        "price": 28.31,
        "image": "assets/images/products/415/main.jpg",
        "rating": 4.2,
        "reviews": 102,
        "description": "The Fleece Lined Athletic Training Hoodie is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 485,
        "name": "Portable TENS EMS Electronic Pulse Massager",
        "category": "Fit Tech",
        "price": 439.27,
        "image": "assets/images/products/485/main.jpg",
        "rating": 4.6,
        "reviews": 333,
        "description": "The Portable TENS EMS Electronic Pulse Massager is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 555,
        "name": "Pre-Workout Nitric Oxide Booster (Unflavored Powder)",
        "category": "Supplements",
        "price": 96.91,
        "image": "assets/images/products/555/main.jpg",
        "rating": 4.3,
        "reviews": 30,
        "description": "The Pre-Workout Nitric Oxide Booster is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 625,
        "name": "Ergonomic Yoga Wheel Back Roller",
        "category": "Yoga",
        "price": 89.99,
        "image": "assets/images/products/625/main.jpg",
        "rating": 3.8,
        "reviews": 209,
        "description": "The Ergonomic Yoga Wheel Back Roller is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 695,
        "name": "Adjustable Dial Dumbbell Pair (5-52.5 lbs)",
        "category": "Home Gym",
        "price": 1884.66,
        "image": "assets/images/products/695/main.jpg",
        "rating": 3.8,
        "reviews": 269,
        "description": "The Adjustable Dial Dumbbell Pair is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 66,
        "name": "Solid Steel Farmers Walk Handles Pair",
        "category": "Strength",
        "price": 1476.59,
        "image": "assets/images/products/66/main.jpg",
        "rating": 4.8,
        "reviews": 295,
        "description": "The Solid Steel Farmers Walk Handles Pair is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 136,
        "name": "Smart Air Rower with Bluetooth Connectivity",
        "category": "Cardio",
        "price": 628.38,
        "image": "assets/images/products/136/main.jpg",
        "rating": 4.0,
        "reviews": 292,
        "description": "The Smart Air Rower with Bluetooth Connectivity is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 206,
        "name": "MMA Combat Sparring Gloves (5 oz)",
        "category": "Combat",
        "price": 67.73,
        "image": "assets/images/products/206/main.jpg",
        "rating": 4.3,
        "reviews": 374,
        "description": "The MMA Combat Sparring Gloves is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 276,
        "name": "Ergonomic Textured Foam Roller (14-Inch)",
        "category": "Recovery",
        "price": 210.79,
        "image": "assets/images/products/276/main.jpg",
        "rating": 4.6,
        "reviews": 328,
        "description": "The Ergonomic Textured Foam Roller is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 346,
        "name": "Liquid Gym Chalk Tube (100ml)",
        "category": "Accessories",
        "price": 94.0,
        "image": "assets/images/products/346/main.jpg",
        "rating": 4.4,
        "reviews": 442,
        "description": "The Liquid Gym Chalk Tube is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 416,
        "name": "Stretch Athletic Shorts with Built-In Liner",
        "category": "Apparel",
        "price": 60.68,
        "image": "assets/images/products/416/main.jpg",
        "rating": 4.4,
        "reviews": 338,
        "description": "The Stretch Athletic Shorts with Built-In Liner is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 486,
        "name": "Waterproof Sport Earbuds with Secure Fit Hooks",
        "category": "Fit Tech",
        "price": 322.84,
        "image": "assets/images/products/486/main.jpg",
        "rating": 4.7,
        "reviews": 395,
        "description": "The Waterproof Sport Earbuds with Secure Fit Hooks is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 556,
        "name": "Pure Creatine Monohydrate Powder (1000g Bulk)",
        "category": "Supplements",
        "price": 29.98,
        "image": "assets/images/products/556/main.jpg",
        "rating": 4.7,
        "reviews": 310,
        "description": "The Pure Creatine Monohydrate Powder is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 626,
        "name": "Canvas Yoga Mat Carrying Shoulder Bag",
        "category": "Yoga",
        "price": 44.82,
        "image": "assets/images/products/626/main.jpg",
        "rating": 4.8,
        "reviews": 240,
        "description": "The Canvas Yoga Mat Carrying Shoulder Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 696,
        "name": "Compact Foldable Incline Weight Bench (v66)",
        "category": "Home Gym",
        "price": 2770.11,
        "image": "assets/images/products/696/main.jpg",
        "rating": 4.0,
        "reviews": 91,
        "description": "The Compact Foldable Incline Weight Bench is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 67,
        "name": "Rubber Coated Hex Dumbbell (60 lbs)",
        "category": "Strength",
        "price": 1234.8,
        "image": "assets/images/products/67/main.jpg",
        "rating": 4.2,
        "reviews": 364,
        "description": "The Rubber Coated Hex Dumbbell is crafted for dependable progressive exercise goals with maximum control. An ideal solution for targeted training requirements."
    },
    {
        "id": 137,
        "name": "Commercial Indoor Spin Bike with Heavy Flywheel",
        "category": "Cardio",
        "price": 2462.96,
        "image": "assets/images/products/137/main.jpg",
        "rating": 4.4,
        "reviews": 272,
        "description": "The Commercial Indoor Spin Bike with Heavy Flywheel is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 207,
        "name": "Competition Style Boxing Headgear",
        "category": "Combat",
        "price": 55.64,
        "image": "assets/images/products/207/main.jpg",
        "rating": 4.5,
        "reviews": 220,
        "description": "The Competition Style Boxing Headgear is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 277,
        "name": "Deep Tissue Muscle Massage Ball (Solid Rubber)",
        "category": "Recovery",
        "price": 1017.34,
        "image": "assets/images/products/277/main.jpg",
        "rating": 3.9,
        "reviews": 227,
        "description": "The Deep Tissue Muscle Massage Ball is tailored for high-performance stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 347,
        "name": "Prong Buckle Leather Powerlifting Belt (10mm)",
        "category": "Accessories",
        "price": 13.3,
        "image": "assets/images/products/347/main.jpg",
        "rating": 4.6,
        "reviews": 171,
        "description": "The Prong Buckle Leather Powerlifting Belt is built to optimize comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 417,
        "name": "Seamless Long Sleeve Crop Top",
        "category": "Apparel",
        "price": 152.3,
        "image": "assets/images/products/417/main.jpg",
        "rating": 4.6,
        "reviews": 290,
        "description": "The Seamless Long Sleeve Crop Top is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 487,
        "name": "Smart Bike GPS Navigation Display",
        "category": "Fit Tech",
        "price": 352.89,
        "image": "assets/images/products/487/main.jpg",
        "rating": 4.9,
        "reviews": 180,
        "description": "The Smart Bike GPS Navigation Display is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 557,
        "name": "BCAA 2:1:1 Recovery Powder (Blue Raspberry 30 Servings)",
        "category": "Supplements",
        "price": 43.67,
        "image": "assets/images/products/557/main.jpg",
        "rating": 4.4,
        "reviews": 372,
        "description": "The BCAA 2:1:1 Recovery Powder is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 627,
        "name": "Eco TPE Non-Slip Yoga Mat (6mm)",
        "category": "Yoga",
        "price": 71.46,
        "image": "assets/images/products/627/main.jpg",
        "rating": 4.7,
        "reviews": 419,
        "description": "The Eco TPE Non-Slip Yoga Mat is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 697,
        "name": "Wall-Mounted Steel Pull-Up Bar System",
        "category": "Home Gym",
        "price": 696.89,
        "image": "assets/images/products/697/main.jpg",
        "rating": 4.8,
        "reviews": 469,
        "description": "The Wall-Mounted Steel Pull-Up Bar System is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 68,
        "name": "Cast Iron Kettlebell (18kg / 40lbs)",
        "category": "Strength",
        "price": 433.48,
        "image": "assets/images/products/68/main.jpg",
        "rating": 4.9,
        "reviews": 405,
        "description": "The Cast Iron Kettlebell is engineered specifically to enhance functional efficiency during training sessions. Provides essential utility for structured workout regimens."
    },
    {
        "id": 138,
        "name": "Stair Climber Stepper with Multi-Grip Handles",
        "category": "Cardio",
        "price": 2512.06,
        "image": "assets/images/products/138/main.jpg",
        "rating": 4.5,
        "reviews": 190,
        "description": "The Stair Climber Stepper with Multi-Grip Handles is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 208,
        "name": "Freestanding Reflex Boxing Punching Bag",
        "category": "Combat",
        "price": 184.75,
        "image": "assets/images/products/208/main.jpg",
        "rating": 4.0,
        "reviews": 261,
        "description": "The Freestanding Reflex Boxing Punching Bag is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 278,
        "name": "Electric Infrared Heating Waist & Back Belt",
        "category": "Recovery",
        "price": 346.41,
        "image": "assets/images/products/278/main.jpg",
        "rating": 4.9,
        "reviews": 417,
        "description": "The Electric Infrared Heating Waist & Back Belt is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 348,
        "name": "Elasticated Heavy Wrist Wraps Pair (20-Inch)",
        "category": "Accessories",
        "price": 87.92,
        "image": "assets/images/products/348/main.jpg",
        "rating": 4.2,
        "reviews": 88,
        "description": "The Elasticated Heavy Wrist Wraps Pair is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 418,
        "name": "Tapered Performance Gym Joggers",
        "category": "Apparel",
        "price": 81.88,
        "image": "assets/images/products/418/main.jpg",
        "rating": 4.6,
        "reviews": 294,
        "description": "The Tapered Performance Gym Joggers is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 488,
        "name": "Continuous Heart Rate & Activity Tracker Ring",
        "category": "Fit Tech",
        "price": 1408.88,
        "image": "assets/images/products/488/main.jpg",
        "rating": 5.0,
        "reviews": 85,
        "description": "The Continuous Heart Rate & Activity Tracker Ring is built to optimize progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 558,
        "name": "Superfood Greens & Berry Antioxidant Powder (300g)",
        "category": "Supplements",
        "price": 99.79,
        "image": "assets/images/products/558/main.jpg",
        "rating": 4.4,
        "reviews": 176,
        "description": "The Superfood Greens & Berry Antioxidant Powder is focused on providing reliable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 628,
        "name": "High Density EVA Foam Yoga Block",
        "category": "Yoga",
        "price": 62.86,
        "image": "assets/images/products/628/main.jpg",
        "rating": 3.8,
        "reviews": 135,
        "description": "The High Density EVA Foam Yoga Block is developed for seamless long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 698,
        "name": "Bodyweight Suspension Trainer Straps Set",
        "category": "Home Gym",
        "price": 261.36,
        "image": "assets/images/products/698/main.jpg",
        "rating": 4.5,
        "reviews": 494,
        "description": "The Bodyweight Suspension Trainer Straps Set is constructed for heavy-duty stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 69,
        "name": "Steel Weight Plate Set (300lb Olympic Set)",
        "category": "Strength",
        "price": 458.55,
        "image": "assets/images/products/69/main.jpg",
        "rating": 4.1,
        "reviews": 200,
        "description": "The Steel Weight Plate Set is optimized for daily comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 139,
        "name": "Foldable Space-Saving Magnetic Rower",
        "category": "Cardio",
        "price": 981.0,
        "image": "assets/images/products/139/main.jpg",
        "rating": 4.3,
        "reviews": 409,
        "description": "The Foldable Space-Saving Magnetic Rower is created to elevate ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 209,
        "name": "Heavy Leather Banana Bag (130 lbs / 6ft)",
        "category": "Combat",
        "price": 69.68,
        "image": "assets/images/products/209/main.jpg",
        "rating": 3.8,
        "reviews": 436,
        "description": "The Heavy Leather Banana Bag is formulated to deliver athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 279,
        "name": "Epsom Salt Recovery Bath Soak with Eucalyptus",
        "category": "Recovery",
        "price": 469.7,
        "image": "assets/images/products/279/main.jpg",
        "rating": 3.9,
        "reviews": 279,
        "description": "The Epsom Salt Recovery Bath Soak with Eucalyptus is built with an emphasis on consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 349,
        "name": "Compact Workout Gym Duffel Bag",
        "category": "Accessories",
        "price": 90.05,
        "image": "assets/images/products/349/main.jpg",
        "rating": 4.7,
        "reviews": 483,
        "description": "The Compact Workout Gym Duffel Bag is engineered specifically to enhance progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 419,
        "name": "Dry-Fit Sleeveless Training Hoodie",
        "category": "Apparel",
        "price": 192.42,
        "image": "assets/images/products/419/main.jpg",
        "rating": 4.4,
        "reviews": 297,
        "description": "The Dry-Fit Sleeveless Training Hoodie is crafted for dependable functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 489,
        "name": "GPS Smartwatch with AMOLED Display",
        "category": "Fit Tech",
        "price": 1058.66,
        "image": "assets/images/products/489/main.jpg",
        "rating": 4.6,
        "reviews": 228,
        "description": "The GPS Smartwatch with AMOLED Display is designed to support long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 559,
        "name": "Organic Plant Protein Powder (Salted Caramel 2 lbs)",
        "category": "Supplements",
        "price": 20.45,
        "image": "assets/images/products/559/main.jpg",
        "rating": 4.9,
        "reviews": 97,
        "description": "The Organic Plant Protein Powder is built to optimize ergonomic handling and dependable movement execution. Complements a wide variety of workout routines."
    },
    {
        "id": 629,
        "name": "Adjustable Metal Buckle Yoga Strap (8ft)",
        "category": "Yoga",
        "price": 95.38,
        "image": "assets/images/products/629/main.jpg",
        "rating": 4.3,
        "reviews": 171,
        "description": "The Adjustable Metal Buckle Yoga Strap is focused on providing reliable comfort, durability, and practical workout utility. Fits effortlessly into modern training setups."
    },
    {
        "id": 699,
        "name": "Heavy Duty Power Tower Station (1000lb Limit)",
        "category": "Home Gym",
        "price": 2570.15,
        "image": "assets/images/products/699/main.jpg",
        "rating": 4.8,
        "reviews": 62,
        "description": "The Heavy Duty Power Tower Station is focused on providing reliable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 70,
        "name": "Heavy Duty Commercial Power Rack Cage",
        "category": "Strength",
        "price": 969.65,
        "image": "assets/images/products/70/main.jpg",
        "rating": 4.1,
        "reviews": 275,
        "description": "The Heavy Duty Commercial Power Rack Cage is developed for seamless athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 140,
        "name": "Commercial Heavy-Duty Motorized Treadmill",
        "category": "Cardio",
        "price": 1908.93,
        "image": "assets/images/products/140/main.jpg",
        "rating": 4.3,
        "reviews": 39,
        "description": "The Commercial Heavy-Duty Motorized Treadmill is constructed for heavy-duty consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    },
    {
        "id": 210,
        "name": "Professional Lace-Up Boxing Gloves (14 oz)",
        "category": "Combat",
        "price": 143.58,
        "image": "assets/images/products/210/main.jpg",
        "rating": 4.0,
        "reviews": 251,
        "description": "The Professional Lace-Up Boxing Gloves is optimized for daily progressive exercise goals with maximum control. Complements a wide variety of workout routines."
    },
    {
        "id": 280,
        "name": "Pro Air Compression Leg & Thigh Recovery Boots",
        "category": "Recovery",
        "price": 237.32,
        "image": "assets/images/products/280/main.jpg",
        "rating": 4.4,
        "reviews": 142,
        "description": "The Pro Air Compression Leg & Thigh Recovery Boots is created to elevate functional efficiency during training sessions. An ideal solution for targeted training requirements."
    },
    {
        "id": 350,
        "name": "Heavy Duty Cable Attachment Handles Pair",
        "category": "Accessories",
        "price": 97.64,
        "image": "assets/images/products/350/main.jpg",
        "rating": 4.4,
        "reviews": 279,
        "description": "The Heavy Duty Cable Attachment Handles Pair is formulated to deliver long-lasting reliability in personal and commercial spaces. Provides essential utility for structured workout regimens."
    },
    {
        "id": 420,
        "name": "Heavy Duty Leather Powerlifting Shoes",
        "category": "Apparel",
        "price": 87.0,
        "image": "assets/images/products/420/main.jpg",
        "rating": 4.7,
        "reviews": 394,
        "description": "The Heavy Duty Leather Powerlifting Shoes is built with an emphasis on stability and safety throughout intense exercise. Built for regular use without sacrificing performance."
    },
    {
        "id": 490,
        "name": "Chest Strap Heart Rate Sensor Transmitter",
        "category": "Fit Tech",
        "price": 516.34,
        "image": "assets/images/products/490/main.jpg",
        "rating": 4.1,
        "reviews": 263,
        "description": "The Chest Strap Heart Rate Sensor Transmitter is engineered specifically to enhance comfort, durability, and practical workout utility. Delivers consistent quality for athletes at all levels."
    },
    {
        "id": 560,
        "name": "Micellar Casein Nighttime Protein (Chocolate Milk 4 lbs)",
        "category": "Supplements",
        "price": 40.88,
        "image": "assets/images/products/560/main.jpg",
        "rating": 4.7,
        "reviews": 291,
        "description": "The Micellar Casein Nighttime Protein is crafted for dependable ergonomic handling and dependable movement execution. Fits effortlessly into modern training setups."
    },
    {
        "id": 630,
        "name": "Organic Cotton Meditation Bolster Pillow (v70)",
        "category": "Yoga",
        "price": 73.16,
        "image": "assets/images/products/630/main.jpg",
        "rating": 3.9,
        "reviews": 299,
        "description": "The Organic Cotton Meditation Bolster Pillow is designed to support athletic progression with clean structural design. A valuable addition to any active fitness environment."
    },
    {
        "id": 700,
        "name": "Interlocking Rubber Gym Floor Mat Roll",
        "category": "Home Gym",
        "price": 2837.38,
        "image": "assets/images/products/700/main.jpg",
        "rating": 4.3,
        "reviews": 76,
        "description": "The Interlocking Rubber Gym Floor Mat Roll is tailored for high-performance consistent performance across daily fitness routines. Designed to meet high standards of daily athletic use."
    }
];
