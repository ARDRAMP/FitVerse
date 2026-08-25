import json

with open('products.js', encoding='utf-8') as f:
    content = f.read()

json_str = content[content.find('['):content.rfind(']')+1]
data = json.loads(json_str)

for p in data[:20]:
    print(f"ID {p['id']}: {p['name']} [{p['category']}]")
