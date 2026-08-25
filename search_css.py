with open('styles.css', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if 'icon-btn' in line or 'nav-actions' in line or 'mobile-menu-toggle' in line:
            print(f"Line {i}: {line.strip()}")
