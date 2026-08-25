with open('styles.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

open_braces = 0
errors = []
for i, line in enumerate(lines, 1):
    for char in line:
        if char == '{':
            open_braces += 1
        elif char == '}':
            open_braces -= 1
            if open_braces < 0:
                errors.append(f"Line {i}: Extra closing brace")
                open_braces = 0

print(f"Total lines: {len(lines)}")
print(f"Final open braces count: {open_braces}")
if errors:
    print("Errors:", errors)
