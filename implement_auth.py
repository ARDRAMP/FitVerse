import os
import re

auth_js_content = """
// Mock Authentication System using LocalStorage

class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('fitverse_users')) || {};
        this.currentUser = JSON.parse(localStorage.getItem('fitverse_currentUser')) || null;
    }

    register(name, email, password) {
        if (this.users[email]) {
            this.showToast('Email is already registered.', 'error');
            return false;
        }
        if (password.length < 6) {
            this.showToast('Password must be at least 6 characters.', 'error');
            return false;
        }

        this.users[email] = { name, email, password };
        localStorage.setItem('fitverse_users', JSON.stringify(this.users));
        
        // Auto-login after registration
        this.login(email, password, false);
        return true;
    }

    login(email, password, showSuccess = true) {
        const user = this.users[email];
        if (!user || user.password !== password) {
            this.showToast('Invalid email or password.', 'error');
            return false;
        }

        this.currentUser = { name: user.name, email: user.email };
        localStorage.setItem('fitverse_currentUser', JSON.stringify(this.currentUser));
        
        if (showSuccess) {
            this.showToast('Successfully signed in!', 'success');
        }
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
        return true;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('fitverse_currentUser');
        this.showToast('Logged out successfully.', 'success');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    updateNav() {
        const signInBtns = document.querySelectorAll('.golds-signin-btn, .mobile-join');
        if (this.isLoggedIn()) {
            const firstName = this.currentUser.name.split(' ')[0];
            signInBtns.forEach(btn => {
                btn.innerHTML = `HI, ${firstName.toUpperCase()} <i class="fas fa-sign-out-alt" style="margin-left: 5px;"></i>`;
                btn.href = '#';
                btn.classList.add('logout-btn');
                
                // Remove old listeners to prevent duplicates if updateNav is called multiple times
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
                
                newBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.logout();
                });
            });
        }
    }

    showToast(message, type = 'success') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.style.position = 'fixed';
            container.style.bottom = '20px';
            container.style.right = '20px';
            container.style.zIndex = '9999';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.style.background = type === 'error' ? '#ef4444' : '#14b8a6';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '8px';
        toast.style.marginTop = '10px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        toast.style.fontFamily = 'var(--font-body), sans-serif';
        toast.style.transition = 'opacity 0.3s ease';
        toast.style.opacity = '0';
        toast.innerText = message;

        container.appendChild(toast);
        
        // Fade in
        setTimeout(() => toast.style.opacity = '1', 10);

        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

const auth = new Auth();

document.addEventListener('DOMContentLoaded', () => {
    auth.updateNav();
});
"""
with open('auth.js', 'w', encoding='utf-8') as f:
    f.write(auth_js_content)


# Function to inject auth.js into HTML files
def inject_auth(filename):
    if not os.path.exists(filename):
        return
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
    
    if '<script src="auth.js"></script>' not in html:
        html = html.replace('</body>', '    <script src="auth.js"></script>\n</body>')
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html)

html_files = ['index.html', 'shop.html', 'categories.html', 'programs.html', 'reviews.html']
for h in html_files:
    inject_auth(h)


# Update login.html script
with open('login.html', 'r', encoding='utf-8') as f:
    login_html = f.read()

# Make sure auth.js is included
if '<script src="auth.js"></script>' not in login_html:
    login_html = login_html.replace('</body>', '    <script src="auth.js"></script>\n</body>')

# Replace form submission logic
login_js_replacement = """
        // Form submission prevent default
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Authenticating...';
            btn.style.opacity = '0.8';

            setTimeout(() => {
                const success = auth.login(email, password);
                if (!success) {
                    btn.innerHTML = originalText;
                    btn.style.opacity = '1';
                }
            }, 800);
        });
"""
login_html = re.sub(
    r'// Form submission prevent default.*?}\);',
    login_js_replacement.strip(),
    login_html,
    flags=re.DOTALL
)

with open('login.html', 'w', encoding='utf-8') as f:
    f.write(login_html)


# Update signup.html script
with open('signup.html', 'r', encoding='utf-8') as f:
    signup_html = f.read()

if '<script src="auth.js"></script>' not in signup_html:
    signup_html = signup_html.replace('</body>', '    <script src="auth.js"></script>\n</body>')

# In signup.html we need to find the password and confirm password fields, and the name field
# Let's assume the form has id="signupForm" (or we grab by querySelector)
# Let's just override the script at the bottom of signup.html
signup_js_replacement = """
        // Form submission logic integrated with Auth
        const signupForm = document.querySelector('.login-form');
        if(signupForm) {
            signupForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Find inputs by placeholder or type since IDs might vary
                const nameInput = document.querySelector('input[placeholder="Full Name"]') || document.querySelector('input[type="text"]');
                const emailInput = document.querySelector('input[type="email"]');
                
                // Assuming there are two password fields
                const passInputs = document.querySelectorAll('input[type="password"]');
                const password = passInputs[0] ? passInputs[0].value : '';
                const confirmPassword = passInputs[1] ? passInputs[1].value : '';
                
                if (password !== confirmPassword) {
                    auth.showToast("Passwords do not match.", "error");
                    return;
                }
                
                const btn = e.target.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Creating...';
                btn.style.opacity = '0.8';

                setTimeout(() => {
                    const success = auth.register(nameInput.value, emailInput.value, password);
                    if (!success) {
                        btn.innerHTML = originalText;
                        btn.style.opacity = '1';
                    }
                }, 800);
            });
        }
"""
signup_html = re.sub(
    r'// Form submission prevent default.*?(?=<script)',
    signup_js_replacement.strip() + '\n    </script>\n    <script',
    signup_html,
    flags=re.DOTALL
)
# If the regex didn't match (maybe it's different), let's just append it before </body> if we didn't replace it.
if 'signupForm.addEventListener' not in signup_html:
    signup_html = signup_html.replace('</body>', f'<script>\n{signup_js_replacement}\n</script>\n</body>')

with open('signup.html', 'w', encoding='utf-8') as f:
    f.write(signup_html)

print("Implemented authentication flow logic")
