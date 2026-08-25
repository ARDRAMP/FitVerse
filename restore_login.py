import re

def restore_design(filename, is_login=True):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove centered-minimalist class from body
    content = content.replace('<body class="login-body centered-minimalist">', '<body class="login-body">')

    # Reconstruct the original layout structure
    layout_match = re.search(r'<div class="login-layout">.*?<div class="login-form-container">', content, re.DOTALL)
    
    if layout_match:
        original_visual = '''<div class="login-layout">
        
        <div class="login-visual">
            <div class="login-visual-overlay"></div>
            <a href="index.html" class="login-back-link">
                <i class="fas fa-arrow-left"></i> Back to Home
            </a>
            <div class="login-visual-content">
                <div class="login-quote">"Push harder than yesterday if you want a different tomorrow."</div>
                <div class="login-quote-author">FitVerse Ethos</div>
            </div>
        </div>

        <div class="login-form-container">'''
        content = content[:layout_match.start()] + original_visual + content[layout_match.end():]

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

restore_design('login.html', True)
restore_design('signup.html', False)
print("Restored original design")
