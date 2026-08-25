import re

with open('profile.html', 'r', encoding='utf-8') as f:
    profile_html = f.read()

new_profile_content = """
    <!-- Premium Profile Dashboard -->
    <section style="padding: 4rem 2rem; background-color: var(--navy-black); min-height: 60vh; display: flex; justify-content: center; align-items: flex-start; position: relative; overflow: hidden;">
        
        <!-- Decorative Background Elements -->
        <div style="position: absolute; top: -100px; left: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(20,184,166,0.1) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
        <div style="position: absolute; bottom: -100px; right: -100px; width: 500px; height: 500px; background: radial-gradient(circle, rgba(232,185,35,0.05) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

        <div class="container" style="max-width: 1100px; width: 100%; position: relative; z-index: 1;">
            
            <div id="profile-container" style="display: none; animation: loginFadeInUp 0.8s ease forwards;">
                
                <!-- Top Main Profile Header -->
                <div class="profile-header-card" style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px; padding: 3rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
                    
                    <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
                        <!-- Avatar -->
                        <div style="position: relative;">
                            <div style="width: 120px; height: 120px; background: linear-gradient(135deg, var(--gold-500), #b8860b); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3.5rem; color: #000; font-weight: bold; box-shadow: 0 10px 25px rgba(232, 185, 35, 0.3);" id="profile-initial">
                                U
                            </div>
                            <button style="position: absolute; bottom: 0; right: 0; background: var(--teal-600); border: none; width: 35px; height: 35px; border-radius: 50%; color: #000; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                                <i class="fas fa-camera"></i>
                            </button>
                        </div>
                        
                        <!-- User Info -->
                        <div>
                            <h2 id="profile-name" style="color: #fff; font-size: 2.5rem; margin-bottom: 0.5rem; font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 1px;">User Name</h2>
                            
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--ice-200); font-family: var(--font-mono); font-size: 1.1rem;">
                                    <i class="fas fa-envelope" style="color: var(--teal-500); width: 20px;"></i>
                                    <span id="profile-email">user@example.com</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.75rem; color: var(--ice-200); font-family: var(--font-mono); font-size: 1.1rem;">
                                    <i class="fas fa-phone-alt" style="color: var(--gold-500); width: 20px;"></i>
                                    <span id="profile-phone">+91 0000000000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div style="display: flex; flex-direction: column; gap: 1rem; min-width: 200px;">
                        <button class="btn" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 0.8rem 1.5rem; font-size: 1rem; transition: all 0.3s ease; border-radius: 8px;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'">
                            <i class="fas fa-user-edit" style="margin-right: 8px;"></i> Edit Profile
                        </button>
                        <button id="logout-btn" class="btn premium-btn" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.5); color: #ef4444; padding: 0.8rem 1.5rem; font-size: 1rem; border-radius: 8px; transition: all 0.3s ease;" onmouseover="this.style.background='rgba(239, 68, 68, 0.2)'; this.style.borderColor='#ef4444';" onmouseout="this.style.background='rgba(239, 68, 68, 0.1)'; this.style.borderColor='rgba(239, 68, 68, 0.5)';">
                            <i class="fas fa-sign-out-alt" style="margin-right: 8px;"></i> Sign Out
                        </button>
                    </div>
                </div>

                <!-- Bottom Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
                    
                    <!-- Shipping Address Card -->
                    <div style="background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 2.5rem; transition: transform 0.3s ease, background 0.3s ease;" onmouseover="this.style.background='rgba(255,255,255,0.03)'; this.style.transform='translateY(-5px)'" onmouseout="this.style.background='rgba(255,255,255,0.015)'; this.style.transform='translateY(0)'">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(20, 184, 166, 0.1); display: flex; align-items: center; justify-content: center; color: var(--teal-500); font-size: 1.2rem;">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <h3 style="color: var(--gold-500); font-family: var(--font-heading); font-size: 1.5rem; margin: 0; letter-spacing: 1px;">Shipping Address</h3>
                            </div>
                            <button style="background: none; border: none; color: var(--teal-500); cursor: pointer; font-size: 1.1rem; padding: 0.5rem; border-radius: 4px; transition: background 0.3s;" onmouseover="this.style.background='rgba(20, 184, 166, 0.1)'" onmouseout="this.style.background='none'"><i class="fas fa-edit"></i></button>
                        </div>
                        <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 1.5rem; text-align: center; border: 1px dashed rgba(255,255,255,0.1);">
                            <p style="color: var(--ice-200); font-size: 1.1rem; line-height: 1.6; font-family: var(--font-body); margin: 0;">
                                No default shipping address saved.<br>
                                <span style="font-size: 0.9rem; opacity: 0.6; display: block; margin-top: 0.5rem;">Add an address for a seamless checkout experience.</span>
                            </p>
                            <button class="btn" style="background: var(--teal-600); color: #000; border: none; padding: 0.6rem 1.2rem; font-weight: 600; border-radius: 4px; margin-top: 1rem; font-size: 0.9rem;">
                                + Add Address
                            </button>
                        </div>
                    </div>

                    <!-- Order History Card -->
                    <div style="background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 2.5rem; transition: transform 0.3s ease, background 0.3s ease;" onmouseover="this.style.background='rgba(255,255,255,0.03)'; this.style.transform='translateY(-5px)'" onmouseout="this.style.background='rgba(255,255,255,0.015)'; this.style.transform='translateY(0)'">
                        <div style="display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 1.5rem; margin-bottom: 1.5rem;">
                            <div style="width: 40px; height: 40px; border-radius: 8px; background: rgba(232, 185, 35, 0.1); display: flex; align-items: center; justify-content: center; color: var(--gold-500); font-size: 1.2rem;">
                                <i class="fas fa-box-open"></i>
                            </div>
                            <h3 style="color: var(--gold-500); font-family: var(--font-heading); font-size: 1.5rem; margin: 0; letter-spacing: 1px;">Order History</h3>
                        </div>
                        <div style="text-align: center; padding: 1.5rem 0;">
                            <div style="width: 80px; height: 80px; background: rgba(255,255,255,0.02); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
                                <i class="fas fa-shopping-bag" style="font-size: 2.5rem; color: rgba(255,255,255,0.1);"></i>
                            </div>
                            <p style="color: var(--ice-200); font-size: 1.1rem; font-family: var(--font-body); margin-bottom: 1.5rem;">You haven't placed any orders yet.</p>
                            <a href="shop.html" class="btn premium-btn" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.8rem 2rem; border-radius: 30px;">
                                Start Shopping <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <div id="unauthorized-container" style="text-align: center; display: none; padding: 5rem 0;">
                <div style="font-size: 4rem; color: rgba(255,255,255,0.1); margin-bottom: 1rem;"><i class="fas fa-lock"></i></div>
                <h2 style="color: #fff; margin-bottom: 1rem; font-family: var(--font-heading); font-size: 2.5rem;">Restricted Access</h2>
                <p style="color: var(--ice-200); margin-bottom: 2rem; font-size: 1.1rem;">Please sign in to view your account details.</p>
                <a href="login.html" class="btn premium-btn" style="padding: 1rem 3rem; font-size: 1.1rem; border-radius: 30px;">Go to Login</a>
            </div>

        </div>
    </section>
"""

# Replace existing Profile Dashboard section
profile_html = re.sub(
    r'<!-- Profile Dashboard -->.*?(?=<script)',
    new_profile_content.strip() + '\n\n    ',
    profile_html,
    flags=re.DOTALL
)

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(profile_html)

print("Redesigned profile layout")
