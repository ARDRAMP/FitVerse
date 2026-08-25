/* ==========================================================================
   Product Data (24 sample products)
   ========================================================================== */
var products = typeof shopProducts !== 'undefined' ? shopProducts : [];

/* ==========================================================================
   State Management
   ========================================================================== */
let cart = (JSON.parse(localStorage.getItem('fitverse_cart')) || []).map(item => ({ ...item, qty: Math.max(5, item.qty || 5) }));
let wishlist = new Set(JSON.parse(localStorage.getItem('fitverse_wishlist')) || []);
let currentFilter = 'All';
let currentSort = 'popular';
let displayLimit = 8;

/* ==========================================================================
   Global Footer Modals: Press, Help Center, Shipping Policy
   ========================================================================== */

window.openPressModal = function() {
    let modal = document.getElementById('press-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'press-modal';
        modal.className = 'custom-footer-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 2500; display: flex; justify-content: center; align-items: center; padding: 1.5rem;';
        modal.innerHTML = `
            <div style="background: #0f1622; border: 1px solid rgba(255,215,0,0.3); border-radius: 20px; width: 100%; max-width: 600px; max-height: 90vh; overflow-y: auto; padding: 2.5rem; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.8); color: #fff;">
                <button onclick="document.getElementById('press-modal').style.display='none'" style="position: absolute; right: 1.2rem; top: 1.2rem; background: none; border: none; color: #fff; font-size: 1.6rem; cursor: pointer;">&times;</button>
                <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.25); padding: 0.35rem 0.8rem; border-radius: 20px; color: #FFD700; font-size: 0.75rem; font-weight: bold; margin-bottom: 1rem;">
                    📰 MEDIA & PRESS KIT
                </div>
                <h2 style="font-size: 1.8rem; font-weight: 900; margin: 0 0 0.5rem; color: #fff; text-transform: uppercase;">FITVERSE PRESS & MEDIA</h2>
                <p style="color: #cbd5e1; font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.5rem;">
                    Official press releases, brand guidelines, high-res product imagery, and media inquiries for journalists & publications.
                </p>

                <div style="display: grid; gap: 1rem; margin-bottom: 1.8rem;">
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem;">
                        <h4 style="color: #FFD700; margin: 0 0 0.3rem; font-size: 0.95rem;">📢 Latest Press Release (Feb 2026)</h4>
                        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">"FitVerse Announces Expansion of Bangalore Biomechanical R&D Testing Facility to Support 50,000+ Global Athletes."</p>
                    </div>

                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem;">
                        <h4 style="color: #FFD700; margin: 0 0 0.3rem; font-size: 0.95rem;">📸 Official Brand Assets & Logo Kit</h4>
                        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0 0 0.8rem;">Download high-resolution SVG/PNG logos, product catalog renderings, and brand guidelines.</p>
                        <a href="logo.png" download class="btn" style="background: rgba(255,215,0,0.15); border: 1px solid #FFD700; color: #FFD700; padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.8rem; font-weight: bold; text-decoration: none; display: inline-block;">DOWNLOAD MEDIA KIT (ZIP)</a>
                    </div>
                </div>

                <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.2rem;">
                    <h4 style="color: #fff; font-size: 0.95rem; margin-bottom: 0.5rem;">Direct Press Contact</h4>
                    <p style="color: #cbd5e1; font-size: 0.85rem; margin: 0 0 0.3rem;">✉️ Press Inquiries: <a href="mailto:press@fitverse.com" style="color: #FFD700;">press@fitverse.com</a></p>
                    <p style="color: #cbd5e1; font-size: 0.85rem; margin: 0;">📞 Media Hotline: +91 (80) 4920-8800</p>
                </div>
            </div>
        `;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
};

window.openHelpModal = function() {
    let modal = document.getElementById('help-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'help-modal';
        modal.className = 'custom-footer-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 2500; display: flex; justify-content: center; align-items: center; padding: 1.5rem;';
        modal.innerHTML = `
            <div style="background: #0f1622; border: 1px solid rgba(255,215,0,0.3); border-radius: 20px; width: 100%; max-width: 650px; max-height: 90vh; overflow-y: auto; padding: 2.5rem; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.8); color: #fff;">
                <button onclick="document.getElementById('help-modal').style.display='none'" style="position: absolute; right: 1.2rem; top: 1.2rem; background: none; border: none; color: #fff; font-size: 1.6rem; cursor: pointer;">&times;</button>
                <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.25); padding: 0.35rem 0.8rem; border-radius: 20px; color: #FFD700; font-size: 0.75rem; font-weight: bold; margin-bottom: 1rem;">
                    🎧 ATHLETE SUPPORT & HELP CENTER
                </div>
                <h2 style="font-size: 1.8rem; font-weight: 900; margin: 0 0 1rem; color: #fff; text-transform: uppercase;">HOW CAN WE HELP YOU TODAY?</h2>

                <div style="margin-bottom: 1.5rem;">
                    <input type="text" placeholder="Search Help Articles (e.g. warranty, shipping, installation)..." style="width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; padding: 0.8rem 1.2rem; color: #fff; outline: none; font-size: 0.9rem;">
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.8rem;">
                    <details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 0.8rem 1.2rem; cursor: pointer;">
                        <summary style="color: #FFD700; font-weight: bold; font-size: 0.92rem;">How do I track my FitVerse shipment?</summary>
                        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.5; margin-top: 0.6rem;">Once your order dispatches, you will receive an SMS and email with a live tracking link. You can also contact support with your Order ID for real-time freight status.</p>
                    </details>

                    <details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 0.8rem 1.2rem; cursor: pointer;">
                        <summary style="color: #FFD700; font-weight: bold; font-size: 0.92rem;">What does the 10-Year Frame Warranty cover?</summary>
                        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.5; margin-top: 0.6rem;">Our 10-year warranty covers structural integrity, steel welds, and frame defects on all power racks, benches, and rigs. Wear items like cables and pads carry a 2-year warranty.</p>
                    </details>

                    <details style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 0.8rem 1.2rem; cursor: pointer;">
                        <summary style="color: #FFD700; font-weight: bold; font-size: 0.92rem;">Do you provide assembly services for heavy rigs?</summary>
                        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.5; margin-top: 0.6rem;">Yes! White-glove assembly is available in major metro cities. Our certified technician team will unpack, assemble, and bolt down your equipment suite safely.</p>
                    </details>
                </div>

                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <a href="contact.html" class="btn btn-gold glow-btn" style="flex: 1; text-align: center; font-weight: bold; font-size: 0.88rem; text-decoration: none; padding: 0.75rem;">CONTACT SUPPORT →</a>
                    <button onclick="if(window.auth) auth.showToast('Live support chat connected!', 'info'); else alert('Live chat connected!');" class="btn" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.75rem 1.2rem; border-radius: 8px; font-weight: bold; cursor: pointer;">💬 START LIVE CHAT</button>
                </div>
            </div>
        `;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
};

window.openShippingModal = function() {
    let modal = document.getElementById('shipping-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'shipping-modal';
        modal.className = 'custom-footer-modal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 2500; display: flex; justify-content: center; align-items: center; padding: 1.5rem;';
        modal.innerHTML = `
            <div style="background: #0f1622; border: 1px solid rgba(255,215,0,0.3); border-radius: 20px; width: 100%; max-width: 620px; max-height: 90vh; overflow-y: auto; padding: 2.5rem; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.8); color: #fff;">
                <button onclick="document.getElementById('shipping-modal').style.display='none'" style="position: absolute; right: 1.2rem; top: 1.2rem; background: none; border: none; color: #fff; font-size: 1.6rem; cursor: pointer;">&times;</button>
                <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,215,0,0.1); border: 1px solid rgba(255,215,0,0.25); padding: 0.35rem 0.8rem; border-radius: 20px; color: #FFD700; font-size: 0.75rem; font-weight: bold; margin-bottom: 1rem;">
                    🚚 EXPRESS FREIGHT & SHIPPING POLICY
                </div>
                <h2 style="font-size: 1.8rem; font-weight: 900; margin: 0 0 1rem; color: #fff; text-transform: uppercase;">DELIVERY & LOGISTICS</h2>

                <div style="display: grid; gap: 1rem; margin-bottom: 1.8rem;">
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem;">
                        <h4 style="color: #FFD700; margin: 0 0 0.4rem; font-size: 0.95rem;">⚡ Standard vs Heavy Freight Dispatch</h4>
                        <ul style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.6; margin: 0; padding-left: 1.2rem;">
                            <li><strong>Standard Gear (Accessories, Apparel, Dumbbells):</strong> Dispatched within 24 hours. Delivered in 3-5 business days across India.</li>
                            <li><strong>Heavy Freight (Power Racks, Platforms, Rig Suites):</strong> Crated and dispatched via air/road freight in 5-7 business days with appointment scheduling.</li>
                        </ul>
                    </div>

                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem;">
                        <h4 style="color: #FFD700; margin: 0 0 0.4rem; font-size: 0.95rem;">🎁 Free Shipping & Insurance</h4>
                        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.5; margin: 0;">
                            Enjoy <strong>Free Pan-India Delivery</strong> on all orders above ₹4,999. All shipments are 100% insured against transit damage.
                        </p>
                    </div>

                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.2rem;">
                        <h4 style="color: #FFD700; margin: 0 0 0.4rem; font-size: 0.95rem;">🌍 International Express Shipping</h4>
                        <p style="color: #cbd5e1; font-size: 0.85rem; line-height: 1.5; margin: 0;">
                            We ship strength gear worldwide to over 40 countries via DHL Express Freight with pre-paid customs duties.
                        </p>
                    </div>
                </div>

                <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.2rem;">
                    <a href="returns.html" class="btn btn-gold glow-btn" style="padding: 0.75rem 1.6rem; font-weight: bold; font-size: 0.88rem; text-decoration: none; display: inline-block;">
                        VIEW RETURNS & REFUND POLICY →
                    </a>
                </div>
            </div>
        `;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
};

/* ==========================================================================
   Bundle Modal & Details System (Global Scope)
   ========================================================================== */
window.bundleData = {
    'garage-strength': {
        id: 'garage-strength',
        title: 'Garage Strength Bundle',
        badge: 'HOME SANCTUARY',
        image: 'images/home_gym.png',
        originalPrice: 59999,
        price: 49999,
        savings: 10000,
        description: 'Everything you need to turn 100 sq.ft into a professional strength training facility with zero compromises.',
        items: [
            { name: '7ft Olympic Power Barbell (20kg)', spec: 'Hard Chrome Finish, 1500lb Capacity, 8 Needle Bearings' },
            { name: 'Heavy-Duty Steel Squat & Bench Rack', spec: '3x3" 11-Gauge Steel Tubing with J-Cups & Safety Spotter Arms' },
            { name: '100kg Virgin Rubber Bumper Plates Set', spec: '2x20kg, 2x15kg, 2x10kg, 2x5kg High-Density Rubber Pairs' },
            { name: 'Multi-Angle Adjustable Utility Bench', spec: '7 Back Positions, 3 Seat Angles, 450kg Commercial Rating' }
        ],
        warranty: 'Lifetime Frame & Barbell Warranty | 30-Day Risk-Free Trial | Free Pan-India Delivery'
    },
    'pro-performance': {
        id: 'pro-performance',
        title: 'Pro Performance Suite',
        badge: 'MOST POPULAR',
        image: 'images/strength.png',
        originalPrice: 149999,
        price: 124999,
        savings: 25000,
        description: 'Commercial-grade dual cable crossover system & calibrated steel setup for athletes & training studios.',
        items: [
            { name: 'Dual Cable Functional Trainer Rig', spec: 'Dual 100kg Precision Weight Stacks, 16 Height Settings, Multi-Grip Pullup Bar' },
            { name: '150kg Calibrated Steel Plate Set', spec: 'IPF Spec Thin-Disc Machine-Calibrated Competition Steel Plates' },
            { name: 'Commercial Rubber Hex Dumbbell Rack', spec: 'Pairs 5kg, 10kg, 15kg, 20kg, 25kg + Heavy Duty 3-Tier Rack' },
            { name: 'Air Resistance Fan Bike', spec: 'Isokinetic Dual-Belt Resistance, LCD Telemetry & Interval Console' }
        ],
        warranty: '5-Year Commercial Warranty | Free Doorstep Assembly Included'
    },
    'cardio-recovery': {
        id: 'cardio-recovery',
        title: 'Cardio & Recovery Loft',
        badge: 'ENDURANCE & RECOVERY',
        image: 'images/recovery.png',
        originalPrice: 49999,
        price: 39999,
        savings: 10000,
        description: 'The ultimate conditioning and active muscle recovery bundle for runners, cyclists, and endurance athletes.',
        items: [
            { name: 'Smart Magnetic Water Rower Machine', spec: '16 Dynamic Water Levels, Real-Time Bluetooth Ergometer Display' },
            { name: 'Deep-Tissue Percussion Massage Gun', spec: '6 Speed Attachments, Quiet Brushless 3200 RPM High Torque Motor' },
            { name: 'Pro Non-Slip TPE Yoga Mat & Blocks', spec: '6mm High Density Shock-Absorbing TPE + 2 Beveled Foam Blocks' },
            { name: '5-Piece Resistance Mobility Band Set', spec: '100% Natural Latex Loops (Extra Light to Extra Heavy Tensile)' }
        ],
        warranty: '2-Year Electronics & Motor Warranty | Free Tracked Express Delivery'
    },
    'mma-combat': {
        id: 'mma-combat',
        title: 'MMA & Combat Striking Rig',
        badge: 'COMBAT ELITE',
        image: 'images/combat.png',
        originalPrice: 39999,
        price: 29999,
        savings: 10000,
        description: 'Complete heavy bag, boxing mitts, and speed conditioning suite built for martial artists and combat conditioning.',
        items: [
            { name: '6ft Heavy Leather Punching Bag (45kg)', spec: 'Pre-filled High-Density Shredded Textile, 4-Way Heavy Duty Chain' },
            { name: '16oz Pro Sparring & Heavy Bag Gloves', spec: 'Multi-layer Shock Absorbing Foam, Hook & Loop Ergonomic Wrist Support' },
            { name: 'Curved Thai Target Kicking Pads (Pair)', spec: 'Reinforced Riveted Handles & Dual Adjustable Hook-and-Loop Arm Straps' },
            { name: '180" Elastic Hand Wraps & Speed Rope', spec: 'Breathable Cotton/Spandex Wraps + Adjustable Ball-Bearing Jump Rope' }
        ],
        warranty: '2-Year Leather & Stitching Guarantee | Free Ceiling Anchor Kit'
    },
    'zen-yoga': {
        id: 'zen-yoga',
        title: 'Zen Yoga & Pilates Sanctuary',
        badge: 'MIND & BODY',
        image: 'images/yoga.png',
        originalPrice: 24999,
        price: 19999,
        savings: 5000,
        description: 'Serene home studio package featuring eco-friendly cork mats, pilates ring, alignment blocks, and therapy straps.',
        items: [
            { name: 'Natural Organic Cork Yoga Mat (8mm)', spec: 'Sustainable Non-Slip Natural Tree Rubber Base, Antimicrobial Surface' },
            { name: 'Dual-Handle Pilates Resistance Ring', spec: '14" High-Tensile Fiberglass Core with Ergonomic Padded Foam Handles' },
            { name: 'High-Density EVA Foam Alignment Blocks', spec: 'Set of 2 Firm Beveled Edge Support Blocks for Deep Pose Alignment' },
            { name: 'TriggerPoint Foam Roller & Stretch Strap', spec: 'High-Density Grid Surface Roller + 8-Loop Woven Cotton Therapy Strap' }
        ],
        warranty: '1-Year Eco Guarantee | Includes Digital Guided Yoga Program'
    },
    'womens-fit-studio': {
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
    }
};

window.openBundleModal = function(bundleKey) {
    const bundle = window.bundleData[bundleKey];
    if (!bundle) return;

    let modal = document.getElementById('bundle-modal');
    if (!modal) {
        const modalDiv = document.createElement('div');
        modalDiv.id = 'bundle-modal';
        modalDiv.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 3000; justify-content: center; align-items: center; padding: 1.5rem;';
        modalDiv.innerHTML = `
            <div style="background: #0f1622; border: 1px solid rgba(255,215,0,0.3); border-radius: 20px; width: 100%; max-width: 650px; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
                <button onclick="window.closeBundleModal()" style="position: absolute; top: 1rem; right: 1.25rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 36px; height: 36px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">&times;</button>
                <div id="bundle-modal-header" style="height: 180px; background-size: cover; background-position: center; position: relative; border-radius: 20px 20px 0 0;">
                    <span id="bundle-modal-badge" style="position: absolute; bottom: 1rem; left: 1.5rem; background: #ffd700; color: #000; font-size: 0.75rem; font-weight: 900; padding: 0.3rem 0.8rem; border-radius: 12px; text-transform: uppercase;"></span>
                </div>
                <div style="padding: 2rem;">
                    <h2 id="bundle-modal-title" style="color: #fff; font-size: 1.8rem; margin-bottom: 0.5rem;"></h2>
                    <p id="bundle-modal-desc" style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;"></p>
                    <h4 style="color: #ffd700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem;">INCLUDED EQUIPMENT SPECIFICATIONS</h4>
                    <div id="bundle-modal-items" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.75rem;"></div>
                    <div style="background: rgba(255,215,0,0.05); border: 1px dashed rgba(255,215,0,0.3); padding: 1rem 1.25rem; border-radius: 12px; margin-bottom: 1.75rem;">
                        <div style="color: #cbd5e1; font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>🛡️</span> <span id="bundle-modal-warranty-text"></span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
                        <div>
                            <span style="color: #64748b; font-size: 0.85rem;">TOTAL PACKAGE VALUE: <span id="bundle-modal-orig-price" style="text-decoration: line-through;"></span></span>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <span id="bundle-modal-price" style="color: #ffd700; font-weight: 900; font-size: 1.7rem; font-family: var(--font-mono);"></span>
                                <span id="bundle-modal-savings" style="background: rgba(34,197,94,0.15); color: #4ade80; font-size: 0.75rem; font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 8px;"></span>
                            </div>
                        </div>
                        <button id="bundle-modal-add-btn" class="btn btn-gold glow-btn" style="padding: 0.9rem 1.8rem; font-weight: 800; font-size: 0.95rem;">ADD BUNDLE TO CART</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalDiv);
        modal = modalDiv;
    }

    document.getElementById('bundle-modal-header').style.backgroundImage = `url('${bundle.image}')`;
    document.getElementById('bundle-modal-badge').innerText = bundle.badge;
    document.getElementById('bundle-modal-title').innerText = bundle.title;
    document.getElementById('bundle-modal-desc').innerText = bundle.description;
    document.getElementById('bundle-modal-orig-price').innerText = `₹${bundle.originalPrice.toLocaleString('en-IN')}`;
    document.getElementById('bundle-modal-price').innerText = `₹${bundle.price.toLocaleString('en-IN')}`;
    document.getElementById('bundle-modal-savings').innerText = `SAVE ₹${bundle.savings.toLocaleString('en-IN')}`;
    document.getElementById('bundle-modal-warranty-text').innerText = bundle.warranty;

    const itemsContainer = document.getElementById('bundle-modal-items');
    itemsContainer.innerHTML = bundle.items.map(item => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 0.75rem 1rem; border-radius: 10px; display: flex; flex-direction: column; gap: 0.2rem;">
            <div style="color: #fff; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: #ffd700; font-weight: bold;">✓</span> ${item.name}
            </div>
            <div style="color: #64748b; font-size: 0.8rem; padding-left: 1.3rem;">${item.spec}</div>
        </div>
    `).join('');

    const addBtn = document.getElementById('bundle-modal-add-btn');
    addBtn.onclick = function() {
        if (typeof addToCart === 'function') {
            addToCart(9900 + Math.floor(Math.random()*100), bundle.title, bundle.price, bundle.image);
        } else {
            showToast(bundle.title + ' added to cart!', 'success');
        }
        window.closeBundleModal();
    };

    modal.style.display = 'flex';
};

window.closeBundleModal = function() {
    const modal = document.getElementById('bundle-modal');
    if (modal) modal.style.display = 'none';
};

/* ==========================================================================
   DOM Elements
   ========================================================================== */
const productGrid = document.getElementById('product-grid');
const filterChips = document.querySelectorAll('.chip');
const sortSelect = document.getElementById('sort-select');
const loadMoreBtn = document.getElementById('load-more-btn');
const categoryCards = document.querySelectorAll('.cat-card');

// Cart & Overlay Elements
const cartToggleBtns = document.querySelectorAll('.cart-toggle');
const cartOverlay = document.getElementById('cart-overlay');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountBadges = document.querySelectorAll('.cart-badge');
const cartCountTitle = document.getElementById('cart-count-title');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');

// Wishlist Overlay Elements
const wishlistToggleBtns = document.querySelectorAll('.wishlist-toggle');
const wishlistOverlay = document.getElementById('wishlist-overlay');
const wishlistCloseBtn = document.querySelector('.wishlist-close-btn');

// Search Elements
const searchToggleBtns = document.querySelectorAll('.search-toggle');
const searchOverlay = document.getElementById('search-overlay');
const searchCloseBtn = document.querySelector('.search-close-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

// Mobile Menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// Toast Container
const toastContainer = document.getElementById('toast-container');

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Hide loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('fade-out');
    }, 800);

    renderShop();
    updateCartUI();
    updateWishlistUI();
    initScrollReveal();
    initHeroCounters();
    initHeaderScroll();
    initHeroSlider();
});

// Global Checkout Button Handler
document.addEventListener('click', (e) => {
    const btn = e.target.closest('#checkout-btn, .checkout-btn, .btn-checkout');
    if (btn) {
        if (btn.id === 'place-order-btn' || btn.type === 'submit') return;
        if (!window.location.href.includes('checkout.html')) {
            e.preventDefault();
            window.location.href = 'checkout.html';
        }
    }
});

/* ==========================================================================
   Shop Rendering & Logic
   ========================================================================== */
function renderShop() {
    if (!productGrid) return;

    let filtered = products;

    if (currentFilter !== 'All') {
        filtered = products.filter(p => p.category === currentFilter);
    }

    // Sorting
    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rated') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else {
        // Popular - sort by review count
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    const itemsToShow = filtered.slice(0, displayLimit);

    productGrid.innerHTML = itemsToShow.map(p => {
        const isWishlisted = typeof wishlist !== 'undefined' && wishlist.has(p.id) ? 'active' : '';
        const localImgSrc = p.image || `assets/images/products/${p.id}/main.jpg`;
        const fallbackSrc = `assets/images/products/${p.id}/1.jpg`;

        return `
            <a href="product.html?id=${p.id}" class="ec-product-card" data-id="${p.id}">
                <div class="product-badge">SALE</div>
                <button class="wishlist-btn ${isWishlisted}" aria-label="Add to Wishlist" onclick="event.preventDefault(); event.stopPropagation(); toggleWishlist(${p.id}, this)">
                    ${isWishlisted ? '❤️' : '♡'}
                </button>
                <div class="card-image-wrapper">
                    <img src="${localImgSrc}" alt="${p.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSrc}';">
                </div>
                <div class="card-info">
                    <span class="ec-product-brand">${p.category.toUpperCase()}</span>
                    <h3 class="ec-product-title" title="${p.name}">${p.name}</h3>
                    <div class="ec-product-rating">
                        <span style="color: #ffd700;">★</span> ${p.rating} <span style="color: #64748b; font-size: 0.78rem;">(${p.reviews})</span>
                    </div>
                    <div class="ec-product-price-row">
                        <span class="ec-product-price">₹${p.price.toFixed(2)}</span>
                    </div>
                    <button class="ec-add-to-cart-btn" onclick="event.preventDefault(); event.stopPropagation(); typeof addToCart !== 'undefined' ? addToCart(${p.id}) : null;">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>ADD TO CART</span>
                    </button>
                </div>
            </a>
        `;
    }).join('');

    if (loadMoreBtn) {
        if (displayLimit >= filtered.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

// Event Listeners for Filters/Sort
filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
        filterChips.forEach(c => c.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        displayLimit = 8; // Reset limit on filter change
        renderShop();
    });
});

if (sortSelect) {
    if(sortSelect) sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderShop();
    });
}

if (loadMoreBtn) {
    if(loadMoreBtn) loadMoreBtn.addEventListener('click', () => {
        displayLimit += 8;
        renderShop();
    });
}

// Category cards link to shop
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const cat = card.dataset.cat;

        // Find corresponding chip (some map names differently like 'Team Sports' -> 'Team')
        let chipFilter = cat;
        if (cat === 'Team Sports') chipFilter = 'Team Sports'; // Keeping exact match in our data model

        filterChips.forEach(c => {
            if (c.dataset.filter === chipFilter || (c.dataset.filter === 'Team' && cat === 'Team Sports')) {
                c.click();
            }
        });

        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
});

/* ==========================================================================
   Cart Logic
   ========================================================================== */
function addToCart(productId, quantity = 5) {
    const product = (typeof shopProducts !== 'undefined' ? shopProducts.find(p => p.id === productId) : null) || products.find(p => p.id === productId);
    if (!product) return;

    const addAmount = typeof quantity === 'number' && quantity >= 5 ? quantity : 5;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += addAmount;
    } else {
        cart.push({ ...product, qty: addAmount });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} (x${addAmount}) added to cart`);

    // Animate cart badge
    cartCountBadges.forEach(b => {
        b.style.transform = 'translate(25%, -25%) scale(1.3)';
        setTimeout(() => b.style.transform = 'translate(25%, -25%) scale(1)', 200);
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        if (delta < 0 && item.qty <= 5) {
            removeFromCart(productId);
        } else {
            item.qty += delta;
            if (item.qty < 5) item.qty = 5;
            saveCart();
            updateCartUI();
        }
    }
}

/* ==========================================================================
   Universal Cart, Wishlist & Search Overlay System
   ========================================================================== */

function ensureGlobalOverlays() {
    // 1. Ensure Cart Overlay
    if (!document.getElementById('cart-overlay')) {
        const cartEl = document.createElement('div');
        cartEl.id = 'cart-overlay';
        cartEl.className = 'overlay cart-overlay-bg';
        cartEl.innerHTML = `
            <div class="cart-drawer" style="background: #0f1622; color: #fff;">
                <div class="cart-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 1.5rem;">
                    <h2 style="color: #fff; margin: 0; font-size: 1.3rem;">Your Cart (<span id="cart-count-title">0</span>)</h2>
                    <button class="close-btn cart-close-btn" aria-label="Close Cart" style="background: none; border: none; color: #fff; font-size: 1.8rem; cursor: pointer;">&times;</button>
                </div>
                <div id="cart-items" class="cart-items" style="flex: 1; overflow-y: auto; padding: 1.5rem;">
                    <p style="color: rgba(255,255,255,0.5); text-align: center; margin-top: 2rem;">Your cart is empty.</p>
                </div>
                <div class="cart-footer" style="border-top: 1px solid rgba(255,255,255,0.1); padding: 1.5rem;">
                    <div class="cart-subtotal" style="display: flex; justify-content: space-between; color: #fff; font-size: 1.2rem; font-weight: bold; margin-bottom: 1rem;">
                        <span>Subtotal:</span>
                        <span id="cart-total-price" style="color: #ffd700;">₹0.00</span>
                    </div>
                    <a href="checkout.html" class="btn btn-primary" style="width: 100%; text-align: center; display: block; background: #ffd700; color: #000; font-weight: 800; padding: 0.8rem; border-radius: 8px; text-decoration: none;">Proceed to Checkout</a>
                </div>
            </div>
        `;
        document.body.appendChild(cartEl);
    }

    // 2. Ensure Wishlist Overlay
    if (!document.getElementById('wishlist-overlay')) {
        const wishEl = document.createElement('div');
        wishEl.id = 'wishlist-overlay';
        wishEl.className = 'overlay wishlist-overlay-bg';
        wishEl.innerHTML = `
            <div class="cart-drawer" style="background: #0f1622; color: #fff;">
                <div class="cart-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding: 1.5rem;">
                    <h2 style="color: #fff; margin: 0; font-size: 1.3rem;">Your Wishlist (<span id="wishlist-count-title">0</span>)</h2>
                    <button class="close-btn wishlist-close-btn" aria-label="Close Wishlist" style="background: none; border: none; color: #fff; font-size: 1.8rem; cursor: pointer;">&times;</button>
                </div>
                <div id="wishlist-items" class="cart-items" style="flex: 1; overflow-y: auto; padding: 1.5rem;">
                    <p style="color: rgba(255,255,255,0.5); text-align: center; margin-top: 2rem;">Your wishlist is currently empty.</p>
                </div>
                <div class="cart-footer" style="border-top: 1px solid rgba(255,255,255,0.1); padding: 1.5rem;">
                    <a href="shop.html" class="btn btn-primary" style="width: 100%; text-align: center; display: block; background: #ffd700; color: #000; font-weight: 800; padding: 0.8rem; border-radius: 8px; text-decoration: none;">Continue Shopping</a>
                </div>
            </div>
        `;
        document.body.appendChild(wishEl);
    }

    // 3. Ensure Search Modal
    if (!document.getElementById('search-modal')) {
        const searchEl = document.createElement('div');
        searchEl.id = 'search-modal';
        searchEl.style.display = 'none';
        searchEl.innerHTML = `
            <div>
                <div class="search-bar-inner">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" id="search-input-modal" placeholder="Search gear, categories, bundles..." autocomplete="off">
                    <button id="search-submit" class="search-submit-btn">Search</button>
                    <button class="close-search-btn" aria-label="Close search">&times;</button>
                </div>
                <div class="search-quick-tags">
                    <span>Popular:</span>
                    <a href="shop.html?category=Strength">Strength</a>
                    <a href="shop.html?category=Cardio">Cardio</a>
                    <a href="shop.html?category=Combat">Combat</a>
                    <a href="shop.html?category=Home Gym">Home Gym</a>
                    <a href="bundles.html">Bundles</a>
                </div>
            </div>
        `;
        document.body.appendChild(searchEl);
    }
}

// Global open / close drawer handlers
window.openCart = function () {
    ensureGlobalOverlays();
    const cartEl = document.getElementById('cart-overlay');
    if (cartEl) {
        cartEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    updateCartUI();
};

window.closeCart = function () {
    const cartEl = document.getElementById('cart-overlay');
    if (cartEl) {
        cartEl.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.openWishlist = function () {
    ensureGlobalOverlays();
    const wishEl = document.getElementById('wishlist-overlay');
    if (wishEl) {
        wishEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    updateWishlistUI();
};

window.closeWishlist = function () {
    const wishEl = document.getElementById('wishlist-overlay');
    if (wishEl) {
        wishEl.classList.remove('active');
        document.body.style.overflow = '';
    }
};

window.openSearch = function () {
    ensureGlobalOverlays();
    const modal = document.getElementById('search-modal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        const input = document.getElementById('search-input-modal') || modal.querySelector('input');
        if (input) setTimeout(() => input.focus(), 60);
    }
};

window.closeSearch = function () {
    const modal = document.getElementById('search-modal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
    }
};

window.toggleMobileMenu = function (e) {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('open');
        menu.classList.toggle('active');
    }
};

// Global Delegated Click Listener for ALL Header & Drawer Actions
document.addEventListener('click', (e) => {
    // 1. Cart Toggle Click
    if (e.target.closest('.cart-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        window.openCart();
        return;
    }

    // 2. Wishlist Toggle Click
    if (e.target.closest('.wishlist-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        window.openWishlist();
        return;
    }

    // 3. Search Toggle Click
    if (e.target.closest('.search-toggle')) {
        e.preventDefault();
        e.stopPropagation();
        window.openSearch();
        return;
    }

    // 4. Cart Close Click
    if (e.target.closest('.cart-close-btn')) {
        e.preventDefault();
        window.closeCart();
        return;
    }

    // 5. Wishlist Close Click
    if (e.target.closest('.wishlist-close-btn')) {
        e.preventDefault();
        window.closeWishlist();
        return;
    }

    // 6. Search Close Click
    if (e.target.closest('.search-close-btn') || e.target.closest('.close-search-btn')) {
        e.preventDefault();
        window.closeSearch();
        return;
    }

    // 7. Search Submit Click
    if (e.target.id === 'search-submit' || e.target.closest('#search-submit')) {
        const inp = document.getElementById('search-input-modal') || document.getElementById('search-input');
        if (inp && inp.value.trim()) {
            window.location.href = `shop.html?search=${encodeURIComponent(inp.value.trim())}`;
        }
        return;
    }

    // 8. Click outside drawer / backdrop click
    const cartEl = document.getElementById('cart-overlay');
    if (e.target === cartEl) { window.closeCart(); return; }

    const wishEl = document.getElementById('wishlist-overlay');
    if (e.target === wishEl) { window.closeWishlist(); return; }

    const searchEl = document.getElementById('search-modal') || document.getElementById('search-overlay');
    if (e.target === searchEl) { window.closeSearch(); return; }
});

// Search input keyup listener (Enter to search)
document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && (e.target.id === 'search-input-modal' || e.target.id === 'search-input')) {
        if (e.target.value.trim()) {
            window.location.href = `shop.html?search=${encodeURIComponent(e.target.value.trim())}`;
        }
    }
});

// Keyboard shortcuts (Escape to close, CMD/CTRL+K to search)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.closeCart();
        window.closeWishlist();
        window.closeSearch();
        const menu = document.querySelector('.mobile-menu');
        if (menu) {
            menu.classList.remove('open');
            menu.classList.remove('active');
        }
    }

    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        window.openSearch();
    }
});

function saveCart() {
    localStorage.setItem('fitverse_cart', JSON.stringify(cart));
}

window.updateCartUI = function () {
    cart.forEach(item => {
        if (!item.qty || item.qty < 5) item.qty = 5;
    });
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 5), 0);
    const totalPrice = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.qty || 5)), 0);

    document.querySelectorAll('.cart-badge').forEach(badge => {
        badge.textContent = totalItems;
        if (totalItems > 0) {
            badge.classList.add('has-items');
            badge.style.display = 'flex';
        } else {
            badge.classList.remove('has-items');
            badge.style.display = 'none';
        }
    });

    const cartCountTitle = document.getElementById('cart-count-title');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartItemsContainer = document.getElementById('cart-items');

    if (cartCountTitle) cartCountTitle.textContent = totalItems;
    if (cartTotalPrice) cartTotalPrice.textContent = `₹${totalPrice.toFixed(2)}`;

    if (cart.length === 0) {
        if (cartItemsContainer) cartItemsContainer.innerHTML = '<div class="cart-empty-msg" style="color: #94a3b8; text-align: center; margin-top: 2rem;">Your cart is empty. Let\'s equip your journey.</div>';
    } else {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1rem; margin-bottom: 1rem; display: flex; gap: 1rem; align-items: center;">
                    <div class="ci-img" style="width: 70px; height: 70px; border-radius: 10px; overflow: hidden; background: #060911; border: 1px solid rgba(255,255,255,0.12); flex-shrink: 0;">
                        <img src="${item.image || 'assets/images/products/' + item.id + '/main.jpg'}" alt="${item.name}" style="width:100%; height:100%; object-fit:contain; padding: 4px;" onerror="this.onerror=null; this.src='assets/images/products/' + item.id + '/1.jpg';">
                    </div>
                    <div class="ci-details" style="flex:1;">
                        <div class="ci-name" style="color: #ffffff !important; font-weight: 700; font-size: 0.92rem; line-height: 1.3; margin-bottom: 0.3rem;">${item.name}</div>
                        <div class="ci-price" style="color: #FFD700 !important; font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem;">₹${item.price.toFixed(2)}</div>
                        <div class="ci-controls" style="display: flex; align-items: center; gap: 0.6rem; color: #ffffff;">
                            <button class="icon-btn qty-btn" onclick="updateQty(${item.id}, -1)" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; border-radius: 6px; width: 26px; height: 26px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-weight: bold;">-</button>
                            <span style="color: #ffffff; font-weight: bold; font-size: 0.9rem;">${item.qty || 1}</span>
                            <button class="icon-btn qty-btn" onclick="updateQty(${item.id}, 1)" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.25); color: #ffffff; border-radius: 6px; width: 26px; height: 26px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; font-weight: bold;">+</button>
                            <button class="ci-remove" onclick="removeFromCart(${item.id})" style="color: #ef4444 !important; background: none; border: none; text-decoration: underline; cursor: pointer; font-size: 0.82rem; margin-left: 0.5rem; font-weight: 600;">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
};

window.toggleWishlist = function (id, btnElement) {
    if (wishlist.has(id)) {
        wishlist.delete(id);
        if (btnElement) {
            btnElement.classList.remove('active');
            btnElement.textContent = '🤍';
        }
        showToast('Removed from wishlist');
    } else {
        wishlist.add(id);
        if (btnElement) {
            btnElement.classList.add('active');
            btnElement.textContent = '❤️';
        }
        showToast('Added to wishlist');
    }
    updateWishlistUI();
};

window.wishlistToCart = function (id) {
    if (typeof addToCart !== 'undefined') {
        addToCart(id);
        wishlist.delete(id);
        updateWishlistUI();
    }
};

window.updateWishlistUI = function () {
    localStorage.setItem('fitverse_wishlist', JSON.stringify(Array.from(wishlist)));
    
    // Update badge counts
    document.querySelectorAll('.wishlist-badge').forEach(badge => {
        badge.textContent = wishlist.size;
        if (wishlist.size > 0) {
            badge.classList.add('has-items');
            badge.style.display = 'flex';
        } else {
            badge.classList.remove('has-items');
            badge.style.display = 'none';
        }
    });

    const wishlistItemsContainer = document.getElementById('wishlist-items');
    const wishlistCountTitle = document.getElementById('wishlist-count-title');
    
    if (wishlistCountTitle) wishlistCountTitle.textContent = wishlist.size;
    
    if (wishlist.size === 0) {
        if (wishlistItemsContainer) {
            wishlistItemsContainer.innerHTML = '<p style="color: rgba(255,255,255,0.5); text-align: center; margin-top: 2rem;">Your wishlist is currently empty.</p>';
        }
    } else {
        if (wishlistItemsContainer) {
            const rawList = (typeof shopProducts !== 'undefined') ? shopProducts : (typeof products !== 'undefined' ? products : []);
            const itemsHTML = Array.from(wishlist).map(id => {
                const product = rawList.find(p => p.id === id);
                if (!product) return '';
                const imgSrc = product.image || `assets/images/products/${product.id}/main.jpg`;
                return `
                    <div class="cart-item" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1rem; margin-bottom: 1rem; display: flex; gap: 1rem; align-items: center;">
                        <div class="ci-img" style="width: 70px; height: 70px; border-radius: 10px; overflow: hidden; background: #060911; border: 1px solid rgba(255,255,255,0.12); flex-shrink: 0;">
                            <img src="${imgSrc}" alt="${product.name}" style="width:100%; height:100%; object-fit:contain; padding: 4px;" onerror="this.onerror=null; this.src='assets/images/products/${product.id}/1.jpg';">
                        </div>
                        <div class="ci-details" style="flex:1;">
                            <div class="ci-name" style="color: #ffffff; font-weight: 700; font-size: 0.92rem; line-height: 1.3; margin-bottom: 0.3rem;">${product.name}</div>
                            <div class="ci-price" style="color: #ffd700; font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 1rem; margin-bottom: 0.5rem;">₹${product.price.toFixed(2)}</div>
                            <div class="ci-controls" style="display: flex; gap: 0.6rem; align-items: center;">
                                <button class="btn btn-primary" style="padding: 0.35rem 0.75rem; font-size: 0.75rem; border-radius: 6px; background: #ffd700; color: #000; font-weight: 800; border: none; cursor: pointer;" onclick="wishlistToCart(${product.id})">Add to Cart</button>
                                <button class="ci-remove" style="background: none; border: none; color: #ef4444; font-size: 0.75rem; cursor: pointer; text-decoration: underline;" onclick="toggleWishlist(${product.id})">Remove</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            wishlistItemsContainer.innerHTML = itemsHTML;
        }
    }

    // Sync wishlist buttons on active product cards
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const onClickAttr = btn.getAttribute('onclick');
        if (onClickAttr) {
            const match = onClickAttr.match(/toggleWishlist\((\d+)/);
            if (match) {
                const id = parseInt(match[1]);
                if (wishlist.has(id)) {
                    btn.classList.add('active');
                    btn.textContent = '❤️';
                } else {
                    btn.classList.remove('active');
                    btn.textContent = '🤍';
                }
            }
        }
    });
};

window.showToast = function(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconHtml = '<span style="color: #ffd700; font-size: 1.15rem; font-weight: 900;">✓</span>';
    if (type === 'error') {
        iconHtml = '<span style="color: #ef4444; font-size: 1.15rem; font-weight: 900;">✕</span>';
    } else if (type === 'info') {
        iconHtml = '<span style="color: #38bdf8; font-size: 1.15rem; font-weight: 900;">ℹ</span>';
    }

    toast.innerHTML = `${iconHtml}<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(15px) scale(0.95)';
        toast.style.transition = 'all 0.3s ease-out';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
};

function showToast(message, type = 'success') {
    window.showToast(message, type);
}

/* ==========================================================================
   Newsletter Form
   ========================================================================== */
const newsletterForm = document.getElementById('newsletter-form');
const newsletterSuccess = document.getElementById('newsletter-success');
const emailInput = document.getElementById('email-input');

if (newsletterForm) newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value) {
        newsletterForm.style.display = 'none';
        newsletterSuccess.style.display = 'block';
    }
});

/* ==========================================================================
   Scroll Effects & Animations
   ========================================================================== */
function initHeaderScroll() {
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        if (backToTopBtn) {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible', 'revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Fallback: If intersection observer fails, make sure they are visible after a delay
    setTimeout(() => {
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('visible', 'revealed');
        });
    }, 300);
}

function initHeroCounters() {
    const stats = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    // We only want to animate once the hero is visible, but since it's the hero, it's visible on load
    const animate = () => {
        if (hasAnimated) return;
        hasAnimated = true;

        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // 2 seconds
            const steps = 50;
            const stepValue = target / steps;
            let current = 0;

            const updateCounter = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                    stat.textContent = target.toLocaleString();
                    clearInterval(updateCounter);
                } else {
                    stat.textContent = Math.floor(current).toLocaleString();
                }
            }, duration / steps);
        });
    };

    // Trigger animation shortly after load to sync with loader disappearing
    setTimeout(animate, 500);
}

/* ==========================================================================
   Hero Slider Logic
   ========================================================================== */
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot, .slider-bar');
    const counterEl = document.getElementById('hero-cur-num');
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    function goToSlide(index) {
        if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
        if (dots && dots[currentSlide]) dots[currentSlide].classList.remove('active');
        currentSlide = index;
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots && dots[currentSlide]) dots[currentSlide].classList.add('active');
        if (counterEl) {
            counterEl.textContent = String(currentSlide + 1).padStart(2, '0');
        }
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    // Attach to window so it can be called from HTML buttons
    window.goToSlide = function (index) {
        stopSlider();
        goToSlide(index);
        startSlider();
    };

    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            stopSlider();
            goToSlide((currentSlide > 0) ? currentSlide - 1 : slides.length - 1);
            startSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            stopSlider();
            nextSlide();
            startSlider();
        });
    }

    startSlider();
}

document.addEventListener('DOMContentLoaded', () => {
    // Search Modal Logic
    const searchToggle = document.querySelector('.search-toggle');
    const searchModal = document.getElementById('search-modal');
    const searchClose = document.querySelector('.close-search-btn');

    if (searchToggle && searchModal) {
        searchToggle.addEventListener('click', () => {
            searchModal.style.display = 'flex';
            const inputModal = document.getElementById('search-input-modal');
            if (inputModal) inputModal.focus();
        });
        if (searchClose) {
            searchClose.addEventListener('click', () => {
                searchModal.style.display = 'none';
            });
        }
        // Allow pressing Enter to search
        const inputModal = document.getElementById('search-input-modal');
        if (inputModal) {
            inputModal.addEventListener('keyup', (e) => {
                if(e.key === 'Enter') {
                    window.location.href = 'shop.html?search=' + e.target.value;
                }
            });
        }
    }
});

/* ==========================================================================
   Bundle Modal & Details System
   ========================================================================== */
const bundleData = {
    'garage-strength': {
        id: 'garage-strength',
        title: 'Garage Strength Bundle',
        badge: 'HOME SANCTUARY',
        image: 'images/home_gym.png',
        originalPrice: 59999,
        price: 49999,
        savings: 10000,
        description: 'Everything you need to turn 100 sq.ft into a professional strength training facility with zero compromises.',
        items: [
            { name: '7ft Olympic Power Barbell (20kg)', spec: 'Hard Chrome Finish, 1500lb Capacity, 8 Needle Bearings' },
            { name: 'Heavy-Duty Steel Squat & Bench Rack', spec: '3x3" 11-Gauge Steel Tubing with J-Cups & Safety Spotter Arms' },
            { name: '100kg Virgin Rubber Bumper Plates Set', spec: '2x20kg, 2x15kg, 2x10kg, 2x5kg High-Density Rubber Pairs' },
            { name: 'Multi-Angle Adjustable Utility Bench', spec: '7 Back Positions, 3 Seat Angles, 450kg Commercial Rating' }
        ],
        warranty: 'Lifetime Frame & Barbell Warranty | 30-Day Risk-Free Trial | Free Pan-India Delivery'
    },
    'pro-performance': {
        id: 'pro-performance',
        title: 'Pro Performance Suite',
        badge: 'MOST POPULAR',
        image: 'images/strength.png',
        originalPrice: 149999,
        price: 124999,
        savings: 25000,
        description: 'Commercial-grade dual cable crossover system & calibrated steel setup for athletes & training studios.',
        items: [
            { name: 'Dual Cable Functional Trainer Rig', spec: 'Dual 100kg Precision Weight Stacks, 16 Height Settings, Multi-Grip Pullup Bar' },
            { name: '150kg Calibrated Steel Plate Set', spec: 'IPF Spec Thin-Disc Machine-Calibrated Competition Steel Plates' },
            { name: 'Commercial Rubber Hex Dumbbell Rack', spec: 'Pairs 5kg, 10kg, 15kg, 20kg, 25kg + Heavy Duty 3-Tier Rack' },
            { name: 'Air Resistance Fan Bike', spec: 'Isokinetic Dual-Belt Resistance, LCD Telemetry & Interval Console' }
        ],
        warranty: '5-Year Commercial Warranty | Free Doorstep Assembly Included'
    },
    'cardio-recovery': {
        id: 'cardio-recovery',
        title: 'Cardio & Recovery Loft',
        badge: 'ENDURANCE & RECOVERY',
        image: 'images/recovery.png',
        originalPrice: 49999,
        price: 39999,
        savings: 10000,
        description: 'The ultimate conditioning and active muscle recovery bundle for runners, cyclists, and endurance athletes.',
        items: [
            { name: 'Smart Magnetic Water Rower Machine', spec: '16 Dynamic Water Levels, Real-Time Bluetooth Ergometer Display' },
            { name: 'Deep-Tissue Percussion Massage Gun', spec: '6 Speed Attachments, Quiet Brushless 3200 RPM High Torque Motor' },
            { name: 'Pro Non-Slip TPE Yoga Mat & Blocks', spec: '6mm High Density Shock-Absorbing TPE + 2 Beveled Foam Blocks' },
            { name: '5-Piece Resistance Mobility Band Set', spec: '100% Natural Latex Loops (Extra Light to Extra Heavy Tensile)' }
        ],
        warranty: '2-Year Electronics & Motor Warranty | Free Tracked Express Delivery'
    },
    'mma-combat': {
        id: 'mma-combat',
        title: 'MMA & Combat Striking Rig',
        badge: 'COMBAT ELITE',
        image: 'images/combat.png',
        originalPrice: 39999,
        price: 29999,
        savings: 10000,
        description: 'Complete heavy bag, boxing mitts, and speed conditioning suite built for martial artists and combat conditioning.',
        items: [
            { name: '6ft Heavy Leather Punching Bag (45kg)', spec: 'Pre-filled High-Density Shredded Textile, 4-Way Heavy Duty Chain' },
            { name: '16oz Pro Sparring & Heavy Bag Gloves', spec: 'Multi-layer Shock Absorbing Foam, Hook & Loop Ergonomic Wrist Support' },
            { name: 'Curved Thai Target Kicking Pads (Pair)', spec: 'Reinforced Riveted Handles & Dual Adjustable Hook-and-Loop Arm Straps' },
            { name: '180" Elastic Hand Wraps & Speed Rope', spec: 'Breathable Cotton/Spandex Wraps + Adjustable Ball-Bearing Jump Rope' }
        ],
        warranty: '2-Year Leather & Stitching Guarantee | Free Ceiling Anchor Kit'
    },
    'zen-yoga': {
        id: 'zen-yoga',
        title: 'Zen Yoga & Pilates Sanctuary',
        badge: 'MIND & BODY',
        image: 'images/yoga.png',
        originalPrice: 24999,
        price: 19999,
        savings: 5000,
        description: 'Serene home studio package featuring eco-friendly cork mats, pilates ring, alignment blocks, and therapy straps.',
        items: [
            { name: 'Natural Organic Cork Yoga Mat (8mm)', spec: 'Sustainable Non-Slip Natural Tree Rubber Base, Antimicrobial Surface' },
            { name: 'Dual-Handle Pilates Resistance Ring', spec: '14" High-Tensile Fiberglass Core with Ergonomic Padded Foam Handles' },
            { name: 'High-Density EVA Foam Alignment Blocks', spec: 'Set of 2 Firm Beveled Edge Support Blocks for Deep Pose Alignment' },
            { name: 'TriggerPoint Foam Roller & Stretch Strap', spec: 'High-Density Grid Surface Roller + 8-Loop Woven Cotton Therapy Strap' }
        ],
        warranty: '1-Year Eco Guarantee | Includes Digital Guided Yoga Program'
    }
};

function openBundleModal(bundleKey) {
    const bundle = bundleData[bundleKey];
    if (!bundle) return;

    let modal = document.getElementById('bundle-modal');
    if (!modal) {
        // Inject modal if not present on page
        const modalDiv = document.createElement('div');
        modalDiv.id = 'bundle-modal';
        modalDiv.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); backdrop-filter: blur(8px); z-index: 3000; justify-content: center; align-items: center; padding: 1.5rem;';
        modalDiv.innerHTML = `
            <div style="background: #0f1622; border: 1px solid rgba(255,215,0,0.3); border-radius: 20px; width: 100%; max-width: 650px; max-height: 90vh; overflow-y: auto; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
                <button onclick="closeBundleModal()" style="position: absolute; top: 1rem; right: 1.25rem; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.2); color: #fff; width: 36px; height: 36px; border-radius: 50%; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">&times;</button>
                <div id="bundle-modal-header" style="height: 180px; background-size: cover; background-position: center; position: relative; border-radius: 20px 20px 0 0;">
                    <span id="bundle-modal-badge" style="position: absolute; bottom: 1rem; left: 1.5rem; background: #ffd700; color: #000; font-size: 0.75rem; font-weight: 900; padding: 0.3rem 0.8rem; border-radius: 12px; text-transform: uppercase;"></span>
                </div>
                <div style="padding: 2rem;">
                    <h2 id="bundle-modal-title" style="color: #fff; font-size: 1.8rem; margin-bottom: 0.5rem;"></h2>
                    <p id="bundle-modal-desc" style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem;"></p>
                    <h4 style="color: #ffd700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem;">INCLUDED EQUIPMENT SPECIFICATIONS</h4>
                    <div id="bundle-modal-items" style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.75rem;"></div>
                    <div style="background: rgba(255,215,0,0.05); border: 1px dashed rgba(255,215,0,0.3); padding: 1rem 1.25rem; border-radius: 12px; margin-bottom: 1.75rem;">
                        <div style="color: #cbd5e1; font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
                            <span>🛡️</span> <span id="bundle-modal-warranty-text"></span>
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
                        <div>
                            <span style="color: #64748b; font-size: 0.85rem;">TOTAL PACKAGE VALUE: <span id="bundle-modal-orig-price" style="text-decoration: line-through;"></span></span>
                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                <span id="bundle-modal-price" style="color: #ffd700; font-weight: 900; font-size: 1.7rem; font-family: var(--font-mono);"></span>
                                <span id="bundle-modal-savings" style="background: rgba(34,197,94,0.15); color: #4ade80; font-size: 0.75rem; font-weight: bold; padding: 0.2rem 0.6rem; border-radius: 8px;"></span>
                            </div>
                        </div>
                        <button id="bundle-modal-add-btn" class="btn btn-gold glow-btn" style="padding: 0.9rem 1.8rem; font-weight: 800; font-size: 0.95rem;">ADD BUNDLE TO CART</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modalDiv);
        modal = modalDiv;
    }

    // Populate modal fields
    document.getElementById('bundle-modal-header').style.backgroundImage = `url('${bundle.image}')`;
    document.getElementById('bundle-modal-badge').innerText = bundle.badge;
    document.getElementById('bundle-modal-title').innerText = bundle.title;
    document.getElementById('bundle-modal-desc').innerText = bundle.description;
    document.getElementById('bundle-modal-orig-price').innerText = `₹${bundle.originalPrice.toLocaleString('en-IN')}`;
    document.getElementById('bundle-modal-price').innerText = `₹${bundle.price.toLocaleString('en-IN')}`;
    document.getElementById('bundle-modal-savings').innerText = `SAVE ₹${bundle.savings.toLocaleString('en-IN')}`;
    document.getElementById('bundle-modal-warranty-text').innerText = bundle.warranty;

    // Items list
    const itemsContainer = document.getElementById('bundle-modal-items');
    itemsContainer.innerHTML = bundle.items.map(item => `
        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); padding: 0.75rem 1rem; border-radius: 10px; display: flex; flex-direction: column; gap: 0.2rem;">
            <div style="color: #fff; font-weight: 600; font-size: 0.95rem; display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: #ffd700; font-weight: bold;">✓</span> ${item.name}
            </div>
            <div style="color: #64748b; font-size: 0.8rem; padding-left: 1.3rem;">${item.spec}</div>
        </div>
    `).join('');

    // Add to cart button handler
    const addBtn = document.getElementById('bundle-modal-add-btn');
    addBtn.onclick = function() {
        addToCart(9900 + Math.floor(Math.random()*100), bundle.title, bundle.price, bundle.image);
        closeBundleModal();
    };

    modal.style.display = 'flex';
}

function closeBundleModal() {
    const modal = document.getElementById('bundle-modal');
    if (modal) modal.style.display = 'none';
}

window.openBundleModal = openBundleModal;
window.closeBundleModal = closeBundleModal;

