import re

# 1. Update auth.js
with open('auth.js', 'r', encoding='utf-8') as f:
    auth_js = f.read()

# Change redirect on login/register to profile.html
auth_js = auth_js.replace("window.location.href = 'index.html';", "window.location.href = 'profile.html';")

# Change updateNav to link to profile.html instead of logging out
new_nav_logic = """
            signInBtns.forEach(btn => {
                btn.innerHTML = `HI, ${firstName.toUpperCase()} <i class="fas fa-user-circle" style="margin-left: 5px;"></i>`;
                btn.href = 'profile.html';
                btn.classList.add('profile-btn');
                
                // If it was a logout button before, we don't want it to log out anymore.
                // We just let the href='profile.html' do its job.
            });
"""
auth_js = re.sub(
    r'signInBtns\.forEach\(btn => \{.*?\}\);',
    new_nav_logic.strip(),
    auth_js,
    flags=re.DOTALL
)

with open('auth.js', 'w', encoding='utf-8') as f:
    f.write(auth_js)


# 2. Create profile.html based on shop.html template
with open('shop.html', 'r', encoding='utf-8') as f:
    shop_html = f.read()

# Extract header and footer
header_match = re.search(r'(<!DOCTYPE html>.*?</header>)', shop_html, re.DOTALL)
footer_match = re.search(r'(<footer class="footer">.*</html>)', shop_html, re.DOTALL)

if header_match and footer_match:
    header = header_match.group(1)
    footer = footer_match.group(1)
    
    # Create the profile page content
    profile_content = """
    <!-- Profile Hero Section -->
    <section class="page-hero" style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url('images/hero1.png') center/cover; padding: 120px 0 60px; text-align: center;">
        <div class="container">
            <h1 style="color: var(--gold-500); font-family: var(--font-display); font-size: 3.5rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 2px;">My Account</h1>
            <p style="color: var(--ice-200); font-size: 1.2rem;">Manage your profile and preferences.</p>
        </div>
    </section>

    <!-- Profile Dashboard -->
    <section style="padding: 4rem 2rem; background-color: var(--navy-black); min-height: 50vh; display: flex; justify-content: center; align-items: flex-start;">
        <div class="container" style="max-width: 800px; width: 100%;">
            
            <div class="profile-card" id="profile-container" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 3rem; text-align: center; display: none;">
                <div style="width: 100px; height: 100px; background: var(--teal-600); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: #000; margin: 0 auto 2rem; font-weight: bold;" id="profile-initial">
                    U
                </div>
                
                <h2 id="profile-name" style="color: #fff; font-size: 2.5rem; margin-bottom: 0.5rem; font-family: var(--font-heading);">User Name</h2>
                <p id="profile-email" style="color: var(--ice-200); font-size: 1.2rem; margin-bottom: 3rem; font-family: var(--font-mono);">user@example.com</p>
                
                <div style="display: flex; gap: 1rem; justify-content: center;">
                    <button class="btn premium-btn" style="background: transparent; border: 1px solid var(--gold-500); color: var(--gold-500);">
                        Edit Profile
                    </button>
                    <button id="logout-btn" class="btn premium-btn" style="background: #ef4444; border-color: #ef4444; color: #fff;">
                        <i class="fas fa-sign-out-alt"></i> Sign Out
                    </button>
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
    
    # Make sure footer has auth.js injected
    if '<script src="auth.js"></script>' not in footer:
        footer = footer.replace('</body>', '    <script src="auth.js"></script>\n</body>')
    
    # Fix the active nav link in header (remove active from shop, add to nothing or profile if it exists)
    header = header.replace('class="nav-link active"', 'class="nav-link"')
    
    # Update title
    header = re.sub(r'<title>.*?</title>', '<title>FitVerse | My Profile</title>', header)
    
    full_html = header + profile_content + footer
    
    with open('profile.html', 'w', encoding='utf-8') as f:
        f.write(full_html)
        print("Created profile.html")

print("Done creating profile and updating auth logic.")
