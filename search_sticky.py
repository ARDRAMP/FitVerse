with open('styles.css', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if 'sticky' in line or 'filter' in line or 'shop' in line:
            if 'filter' in line or 'sticky' in line:
                print(f"Line {i}: {line.strip()}")
