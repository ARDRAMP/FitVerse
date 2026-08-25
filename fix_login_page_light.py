import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

target = '''/* ==========================================================================
   CENTERED MINIMALIST LOGIN PAGE STYLES
   ========================================================================== */

.login-body.centered-minimalist {
    background-color: var(--navy-black); /* Solid deep background */'''

replacement = '''/* ==========================================================================
   CENTERED MINIMALIST LOGIN PAGE STYLES
   ========================================================================== */

.login-body.centered-minimalist {
    background-color: var(--ice-100); /* Light background */'''

css = css.replace(target, replacement)

# Add overrides for links and text in light mode
css += '''
/* Light Theme Overrides for Centered Minimalist */
.centered-minimalist .login-options {
    color: var(--navy-700);
}
.centered-minimalist .custom-checkbox span {
    border-color: rgba(20, 36, 3, 0.3);
}
.centered-minimalist .custom-checkbox input:checked + span {
    background-color: var(--teal-600);
    border-color: var(--teal-600);
}
.centered-minimalist .login-footer {
    color: var(--navy-700);
}
.centered-minimalist .signup-link {
    color: var(--teal-600);
}
.centered-minimalist .forgot-password {
    color: var(--teal-600);
}
.centered-minimalist .brand-wordmark {
    color: var(--navy-black);
}
'''

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated CSS to light page background")
