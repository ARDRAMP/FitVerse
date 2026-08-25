with open('styles.css', 'rb') as f:
    content = f.read()

# The file likely has null bytes at the end now due to the UTF-16 append.
# Let's remove any null bytes and fix the string.
# We will just strip out the corrupted append.

content = content.replace(b'\x00', b'')

# The corrupted part is:
# .\x00b\x00r\x00a\x00n\x00d\x00-\x00l\x00o\x00g\x00o\x00 \x00{\x00 \x00m\x00i\x00x\x00-\x00b\x00l\x00e\x00n\x00d\x00-\x00m\x00o\x00d\x00e\x00:\x00 \x00s\x00c\x00r\x00e\x00e\x00n\x00;\x00 \x00}\x00
# Since we stripped null bytes, it will look like .brand-logo { mix-blend-mode: screen; } but we can just use string replace after decoding.

try:
    text = content.decode('utf-8')
except Exception as e:
    # If it fails, let's decode with errors ignore
    text = content.decode('utf-8', errors='ignore')

# Remove the corrupted appended text
text = text.replace('.brand-logo { mix-blend-mode: screen; }', '')
# Add it back properly at the end
text = text.strip() + '\n\n.brand-logo { mix-blend-mode: screen; }\n'

with open('styles.css', 'wb') as f:
    f.write(text.encode('utf-8'))

print("Fixed styles.css encoding!")
