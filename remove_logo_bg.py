from PIL import Image

def remove_background(input_path, output_path, tolerance=15):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Get the background color from the top-left pixel
    bg_color = data[0]
    
    new_data = []
    for item in data:
        # Check if the pixel is within the tolerance of the background color
        if all(abs(item[i] - bg_color[i]) <= tolerance for i in range(3)):
            new_data.append((255, 255, 255, 0)) # Fully transparent
        else:
            # Maybe add some anti-aliasing logic or just keep the pixel
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

# Backup original
import shutil
shutil.copy('logo.png', 'logo_original_backup.png')

# Process
remove_background('logo.png', 'logo.png', tolerance=25)
print("Background removed and saved to logo.png")
