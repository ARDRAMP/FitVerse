import re

with open('signup.html', 'r', encoding='utf-8') as f:
    signup_html = f.read()

# Fix the malformed script tag
signup_html = signup_html.replace('<script<script src="auth.js"></script>', '<script src="auth.js"></script>')

# Update JS to select by ID instead of type="password" (to handle toggled text mode)
new_js = """
                // Grab by explicit IDs
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm_password').value;
                
                if (password !== confirmPassword) {
                    auth.showToast("Passwords do not match.", "error");
                    return;
                }
"""

signup_html = re.sub(
    r'// Assuming there are two password fields.*?if \(password !== confirmPassword\) \{.*?return;\s*\}',
    new_js.strip(),
    signup_html,
    flags=re.DOTALL
)

with open('signup.html', 'w', encoding='utf-8') as f:
    f.write(signup_html)

print("Fixed signup HTML syntax error and password selection")
