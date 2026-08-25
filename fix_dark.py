with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Change body background
css = css.replace('.login-body.centered-minimalist {\n    background-color: var(--ice-100);', '.login-body.centered-minimalist {\n    background-color: var(--navy-black);')

# Change dark texts to light
css = css.replace('.centered-minimalist .login-options {\n    color: var(--navy-700);', '.centered-minimalist .login-options {\n    color: var(--ice-200);')
css = css.replace('.centered-minimalist .login-footer {\n    color: var(--navy-700);', '.centered-minimalist .login-footer {\n    color: var(--ice-200);')
css = css.replace('.centered-minimalist .brand-wordmark {\n    color: var(--navy-black);', '.centered-minimalist .brand-wordmark {\n    color: var(--ice-white);')

# The checkbox border was dark
css = css.replace('.centered-minimalist .custom-checkbox span {\n    border-color: rgba(20, 36, 3, 0.3);', '.centered-minimalist .custom-checkbox span {\n    border-color: rgba(255, 255, 255, 0.3);')

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated CSS to dark theme")
