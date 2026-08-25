import re

with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_minimal = """.minimal-input {
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
}"""

new_minimal = """.minimal-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 0;
    color: white;
    font-family: var(--font-body);
    font-size: 1rem;
    padding: 1rem 1rem 1rem 3.5rem;
    transition: all 0.3s ease;
    outline: none;
    box-sizing: border-box;
    box-shadow: none;
}"""

css = css.replace(old_minimal, new_minimal)

old_placeholder = """.minimal-input::placeholder {
    color: rgba(20, 36, 3, 0.4);
    font-weight: 500;
}"""

new_placeholder = """.minimal-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 500;
}"""

css = css.replace(old_placeholder, new_placeholder)

old_focus = """.minimal-input:focus {
    border-color: var(--teal-600);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 0 20px rgba(255, 107, 0, 0.15), inset 0 2px 4px rgba(0,0,0,0.05);
    transform: translateY(-2px);
}"""

new_focus = """.minimal-input:focus {
    border-bottom-color: var(--teal-600);
    background: transparent;
    box-shadow: none;
    transform: none;
}"""

css = css.replace(old_focus, new_focus)

old_icon = """.minimal-icon {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(20, 36, 3, 0.4);
    font-size: 1.2rem;
    transition: color 0.4s ease;
    z-index: 10;
}"""

new_icon = """.minimal-icon {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.4);
    font-size: 1.2rem;
    transition: color 0.4s ease;
    z-index: 10;
}"""

css = css.replace(old_icon, new_icon)

# Also fix login-options
css = css.replace("""color: var(--text-dark);""", """color: var(--ice-white);""")

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated input styles.")
