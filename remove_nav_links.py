import re
import glob

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove TIMETABLE and JOIN NOW links
    content = re.sub(r'<a href="#timetable" class="nav-white-link">TIMETABLE</a>\s*', '', content)
    content = re.sub(r'<a href="login\.html" class="btn btn-primary join-btn golds-join-btn">JOIN NOW</a>\s*', '', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed TIMETABLE and JOIN NOW from all HTML files.")
