import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

target = '''/* Premium Glassmorphic Card */
.centered-minimalist .login-glass-card {
    background: rgba(20, 36, 3, 0.45); /* var(--navy-black) transparent */
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: 32px;
    padding: 3rem;
    position: relative;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), inset 0 2px 20px rgba(255,255,255,0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Dynamic Edge Lighting */
.centered-minimalist .login-glass-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 34px;
    background: linear-gradient(135deg, var(--teal-600), transparent 40%, transparent 60%, var(--orange-600));
    background-size: 200% 200%;
    z-index: -1;
    animation: edgeGlowFlow 6s linear infinite;
    opacity: 0.6;
}

@keyframes edgeGlowFlow {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
}

/* Card Header Enhancements */
.login-header h2 {
    font-size: 2.2rem;
    background: var(--grad-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2.5rem;
    letter-spacing: 2px;
    text-align: center;
}

/* Ultra-Sleek Inputs */
.minimal-input-group {
    position: relative;
    width: 100%;
    margin-bottom: 1.5rem;
}

.minimal-input {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    color: var(--ice-white);
    font-family: var(--font-body);
    font-size: 1rem;
    padding: 1.2rem 1rem 1.2rem 3.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    box-sizing: border-box;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

.minimal-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-weight: 400;
}

.minimal-input:focus {
    border-color: var(--teal-600);
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0 0 20px rgba(255, 107, 0, 0.2), inset 0 2px 4px rgba(0,0,0,0.2);
    transform: translateY(-2px);
}

.minimal-icon {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
    transition: color 0.4s ease;
    z-index: 10;
}

.minimal-input:focus ~ .minimal-icon {
    color: var(--teal-600);
}'''

replacement = '''/* Premium Light Glassmorphic Card */
.centered-minimalist .login-glass-card {
    background: rgba(255, 255, 255, 0.85); /* Light glass */
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: 32px;
    padding: 3rem;
    position: relative;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.2), inset 0 2px 20px rgba(255,255,255,0.8);
    border: 1px solid rgba(255, 255, 255, 1);
}

/* Dynamic Edge Lighting */
.centered-minimalist .login-glass-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 34px;
    background: linear-gradient(135deg, var(--teal-600), transparent 40%, transparent 60%, var(--orange-600));
    background-size: 200% 200%;
    z-index: -1;
    animation: edgeGlowFlow 6s linear infinite;
    opacity: 0.8;
}

@keyframes edgeGlowFlow {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
}

/* Card Header Enhancements */
.login-header h2 {
    font-size: 2.2rem;
    background: var(--grad-text);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2.5rem;
    letter-spacing: 2px;
    text-align: center;
}

/* Ultra-Sleek Inputs */
.minimal-input-group {
    position: relative;
    width: 100%;
    margin-bottom: 1.5rem;
}

.minimal-input {
    width: 100%;
    background: rgba(20, 36, 3, 0.04);
    border: 1px solid rgba(20, 36, 3, 0.1);
    border-radius: 16px;
    color: var(--navy-black);
    font-family: var(--font-body);
    font-size: 1rem;
    padding: 1.2rem 1rem 1.2rem 3.5rem;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    box-sizing: border-box;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
}

.minimal-input::placeholder {
    color: rgba(20, 36, 3, 0.4);
    font-weight: 500;
}

.minimal-input:focus {
    border-color: var(--teal-600);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 20px rgba(255, 107, 0, 0.15), inset 0 2px 4px rgba(0,0,0,0.05);
    transform: translateY(-2px);
}

.minimal-icon {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(20, 36, 3, 0.4);
    font-size: 1.2rem;
    transition: color 0.4s ease;
    z-index: 10;
}

.minimal-input:focus ~ .minimal-icon {
    color: var(--teal-600);
}'''

css = css.replace(target, replacement)
with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated CSS to light theme")
