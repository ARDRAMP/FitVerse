import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix category circles
content = content.replace("""<div class="cat-circle" style="background-image: url('logo.png?v=2');"></div>
                    <span class="cat-title">Strength</span>""", """<div class="cat-circle" style="background-image: url('images/strength.png');"></div>
                    <span class="cat-title">Strength</span>""")

content = content.replace("""<div class="cat-circle" style="background-image: url('logo.png?v=2');"></div>
                    <span class="cat-title">Cardio</span>""", """<div class="cat-circle" style="background-image: url('images/cardio.png');"></div>
                    <span class="cat-title">Cardio</span>""")

content = content.replace("""<div class="cat-circle" style="background-image: url('logo.png?v=2');"></div>
                    <span class="cat-title">Supplements</span>""", """<div class="cat-circle" style="background-image: url('images/supplements.png');"></div>
                    <span class="cat-title">Supplements</span>""")

# Fix promo boxes
content = content.replace("""<div class="promo-box" style="background-image: url('logo.png?v=2');">
                <div class="promo-content">
                    <h3>HEAVY LIFTING</h3>""", """<div class="promo-box" style="background-image: url('images/strength.png');">
                <div class="promo-content">
                    <h3>HEAVY LIFTING</h3>""")

content = content.replace("""<div class="promo-box" style="background-image: url('logo.png?v=2');">
                <div class="promo-content">
                    <h3>CARDIO KINGS</h3>""", """<div class="promo-box" style="background-image: url('images/cardio.png');">
                <div class="promo-content">
                    <h3>CARDIO KINGS</h3>""")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Restored original images for cards.")
