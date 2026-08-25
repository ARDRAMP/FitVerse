import re
import glob

# Update CSS
with open('styles.css', 'r', encoding='utf-8') as f:
    css = f.read()

new_row = """.brand-logos-row {
      display: flex;
      overflow: hidden;
      white-space: nowrap;
      width: 100%;
      max-width: 100%;
      padding: 1rem 0;
  }
  
  .brand-track {
      display: inline-flex;
      align-items: center;
      gap: 4rem;
      animation: marquee 20s linear infinite;
  }
  
  .brand-track:hover {
      animation-play-state: paused;
  }
  
  @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
  }"""

css = re.sub(r'\.brand-logos-row\s*\{[^}]+\}', new_row, css)

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(css)

# Update HTML
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

brand_content = """<div class="brand-track">
                <div class="text-brand-logo" style="font-family: 'Arial Black', sans-serif; letter-spacing: 3px;">ROGUE</div>
                <div class="text-brand-logo" style="font-weight: 300; letter-spacing: 5px;">ELEIKO</div>
                <div class="text-brand-logo" style="font-family: 'Arial Black', sans-serif; font-style: italic;">CONCEPT2</div>
                <div class="text-brand-logo" style="font-weight: 900; font-family: 'Arial Black', sans-serif; letter-spacing: 1px;">BOWFLEX</div>
                <div class="text-brand-logo" style="font-weight: 700; letter-spacing: 2px;">TECHNOGYM</div>
                <div class="text-brand-logo" style="font-weight: 400; letter-spacing: -1px;">LIFE FITNESS</div>
                <div class="text-brand-logo" style="font-family: 'Arial Black', sans-serif; letter-spacing: 1px;">TITAN</div>
                
                <!-- Duplicate for seamless scroll -->
                <div class="text-brand-logo" style="font-family: 'Arial Black', sans-serif; letter-spacing: 3px;">ROGUE</div>
                <div class="text-brand-logo" style="font-weight: 300; letter-spacing: 5px;">ELEIKO</div>
                <div class="text-brand-logo" style="font-family: 'Arial Black', sans-serif; font-style: italic;">CONCEPT2</div>
                <div class="text-brand-logo" style="font-weight: 900; font-family: 'Arial Black', sans-serif; letter-spacing: 1px;">BOWFLEX</div>
                <div class="text-brand-logo" style="font-weight: 700; letter-spacing: 2px;">TECHNOGYM</div>
                <div class="text-brand-logo" style="font-weight: 400; letter-spacing: -1px;">LIFE FITNESS</div>
                <div class="text-brand-logo" style="font-family: 'Arial Black', sans-serif; letter-spacing: 1px;">TITAN</div>
            </div>"""

html = re.sub(r'<div class="brand-logos-row">.*?</div>\s*</section>', f'<div class="brand-logos-row">\n{brand_content}\n            </div>\n        </section>', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = re.sub(r'styles\.css\?v=\d+', 'styles.css?v=49', content)
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Added marquee animation.")
