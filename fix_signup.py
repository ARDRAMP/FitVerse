import re

# Update signup.html to add Confirm Password field
with open('signup.html', 'r', encoding='utf-8') as f:
    signup_html = f.read()

confirm_password_html = """
                    <div class="minimal-input-group">
                        <i class="fas fa-lock minimal-icon"></i>
                        <input type="password" id="password" class="minimal-input" required placeholder="Create Password">
                        <button type="button" class="password-toggle" aria-label="Toggle password visibility">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>

                    <div class="minimal-input-group">
                        <i class="fas fa-lock minimal-icon"></i>
                        <input type="password" id="confirm_password" class="minimal-input" required placeholder="Confirm Password">
                        <button type="button" class="password-toggle confirm-toggle" aria-label="Toggle confirm password visibility">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
"""

# Replace the single password field block with two fields
signup_html = re.sub(
    r'<div class="minimal-input-group">\s*<i class="fas fa-lock minimal-icon"></i>\s*<input type="password" id="password" class="minimal-input" required placeholder="Create Password">\s*<button type="button" class="password-toggle" aria-label="Toggle password visibility">\s*<i class="fas fa-eye"></i>\s*</button>\s*</div>',
    confirm_password_html.strip(),
    signup_html
)

# Update JS to handle two password toggles
js_toggle_update = """
        // Password toggle functionality
        document.querySelectorAll('.password-toggle').forEach(btn => {
            btn.addEventListener('click', function() {
                const input = this.previousElementSibling;
                const icon = this.querySelector('i');
                
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            });
        });
"""

signup_html = re.sub(
    r'// Password toggle functionality.*?}\);',
    js_toggle_update.strip(),
    signup_html,
    flags=re.DOTALL
)

with open('signup.html', 'w', encoding='utf-8') as f:
    f.write(signup_html)

print("Fixed signup validation and added confirm password")
