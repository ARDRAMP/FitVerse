with open('styles.css', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if 'promo' in line:
            print(f"Line {i}: {line.strip()}")
