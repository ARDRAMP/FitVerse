import re

for filename in ['login.html', 'signup.html']:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove login-visual div block
    # It starts with <div class="login-visual"> and ends with </div> before <div class="login-form-container">
    # Use regex with DOTALL to remove it
    new_content = re.sub(r'<div class="login-visual">.*?</div>\s*</div>', '', content, flags=re.DOTALL)
    
    # Actually wait, the regex above will aggressively match up to the last </div> before something else.
    # A safer way: just replace it if we know the exact lines, or use a non-greedy match up to login-form-container
    new_content = re.sub(r'<div class="login-visual">.*?(?=<div class="login-form-container">)', '', content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("Updated HTML files.")
