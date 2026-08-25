import re

# 1. Update auth.js
with open('auth.js', 'r', encoding='utf-8') as f:
    auth_js = f.read()

# Update register method signature and storage
auth_js = auth_js.replace("register(name, email, password) {", "register(name, email, phone, password) {")
auth_js = auth_js.replace("this.users[email] = { name, email, password };", "this.users[email] = { name, email, phone, password };")
auth_js = auth_js.replace("this.login(email, password, false);", "this.login(email, password, false);")

# Update login method to include phone in currentUser
auth_js = auth_js.replace("this.currentUser = { name: user.name, email: user.email };", "this.currentUser = { name: user.name, email: user.email, phone: user.phone || 'Not provided' };")

with open('auth.js', 'w', encoding='utf-8') as f:
    f.write(auth_js)


# 2. Update signup.html
with open('signup.html', 'r', encoding='utf-8') as f:
    signup_html = f.read()

# Grab phone input
if 'const emailInput =' in signup_html and 'const phoneInput =' not in signup_html:
    signup_html = signup_html.replace(
        "const emailInput = document.querySelector('input[type=\"email\"]');",
        "const emailInput = document.querySelector('input[type=\"email\"]');\n                const phoneInput = document.getElementById('phone') || {value: ''};"
    )

# Pass phone to auth.register
signup_html = signup_html.replace(
    "auth.register(nameInput.value, emailInput.value, password)",
    "auth.register(nameInput.value, emailInput.value, phoneInput.value, password)"
)

with open('signup.html', 'w', encoding='utf-8') as f:
    f.write(signup_html)


# 3. Update profile.html
with open('profile.html', 'r', encoding='utf-8') as f:
    profile_html = f.read()

new_profile_content = """
    <!-- Profile Dashboard -->
    <section style="padding: 4rem 2rem; background-color: var(--navy-black); min-height: 50vh; display: flex; justify-content: center; align-items: flex-start;">
        <div class="container" style="max-width: 1000px; width: 100%;">
            
            <div id="profile-container" style="display: none;">
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                    
                    <!-- Account Details Card -->
                    <div class="profile-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2.5rem; text-align: center;">
                        <h3 style="color: var(--gold-500); margin-bottom: 2rem; font-family: var(--font-heading); font-size: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">Account Details</h3>
                        
                        <div style="width: 80px; height: 80px; background: var(--teal-600); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: #000; margin: 0 auto 1.5rem; font-weight: bold;" id="profile-initial">
                            U
                        </div>
                        
                        <h2 id="profile-name" style="color: #fff; font-size: 2rem; margin-bottom: 0.5rem; font-family: var(--font-heading);">User Name</h2>
                        <p id="profile-email" style="color: var(--ice-200); font-size: 1.1rem; margin-bottom: 0.5rem; font-family: var(--font-mono);">user@example.com</p>
                        <p id="profile-phone" style="color: var(--ice-200); font-size: 1.1rem; margin-bottom: 2rem; font-family: var(--font-mono);">+91 0000000000</p>
                        
                        <div style="display: flex; gap: 1rem; justify-content: center;">
                            <button class="btn premium-btn" style="background: transparent; border: 1px solid var(--gold-500); color: var(--gold-500); padding: 0.5rem 1rem; font-size: 0.9rem;">
                                Edit Profile
                            </button>
                            <button id="logout-btn" class="btn premium-btn" style="background: #ef4444; border-color: #ef4444; color: #fff; padding: 0.5rem 1rem; font-size: 0.9rem;">
                                <i class="fas fa-sign-out-alt"></i> Sign Out
                            </button>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 2rem;">
                        <!-- Shipping Address Card -->
                        <div class="profile-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem;">
                                <h3 style="color: var(--gold-500); font-family: var(--font-heading); font-size: 1.5rem; margin: 0;">Shipping Address</h3>
                                <button style="background: none; border: none; color: var(--teal-600); cursor: pointer; font-size: 1.1rem;"><i class="fas fa-edit"></i></button>
                            </div>
                            <p style="color: var(--ice-200); font-size: 1.1rem; line-height: 1.6; font-family: var(--font-body);">
                                No default shipping address saved.<br>
                                <span style="font-size: 0.9rem; opacity: 0.7;">Add an address for faster checkout.</span>
                            </p>
                        </div>

                        <!-- Order History Card -->
                        <div class="profile-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2.5rem; flex: 1;">
                            <h3 style="color: var(--gold-500); font-family: var(--font-heading); font-size: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem; margin-bottom: 1.5rem; margin-top: 0;">Order History</h3>
                            <div style="text-align: center; padding: 2rem 0;">
                                <i class="fas fa-box-open" style="font-size: 3rem; color: rgba(255,255,255,0.1); margin-bottom: 1rem;"></i>
                                <p style="color: var(--ice-200); font-size: 1.1rem; font-family: var(--font-body);">You haven't placed any orders yet.</p>
                                <a href="shop.html" class="btn premium-btn" style="margin-top: 1rem; display: inline-block;">Start Shopping</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="unauthorized-container" style="text-align: center; display: none;">
                <h2 style="color: #fff; margin-bottom: 2rem;">Please Sign In</h2>
                <a href="login.html" class="btn premium-btn">Go to Login</a>
            </div>

        </div>
    </section>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // Check auth using the global auth object loaded from auth.js
            setTimeout(() => {
                const profileContainer = document.getElementById('profile-container');
                const unauthorizedContainer = document.getElementById('unauthorized-container');
                
                if (auth && auth.isLoggedIn()) {
                    profileContainer.style.display = 'block';
                    
                    const user = auth.currentUser;
                    document.getElementById('profile-name').innerText = user.name;
                    document.getElementById('profile-email').innerText = user.email;
                    document.getElementById('profile-phone').innerText = user.phone || 'Phone not provided';
                    
                    // Set initial
                    const initial = user.name.charAt(0).toUpperCase();
                    document.getElementById('profile-initial').innerText = initial;
                    
                    // Handle logout
                    document.getElementById('logout-btn').addEventListener('click', () => {
                        auth.logout();
                    });
                } else {
                    unauthorizedContainer.style.display = 'block';
                }
            }, 100); // slight delay to ensure auth.js is parsed
        });
    </script>
"""

# Replace existing Profile Dashboard section
profile_html = re.sub(
    r'<!-- Profile Dashboard -->.*?</script>',
    new_profile_content.strip(),
    profile_html,
    flags=re.DOTALL
)

with open('profile.html', 'w', encoding='utf-8') as f:
    f.write(profile_html)

print("Updated profile fields")
