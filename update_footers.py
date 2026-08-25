import re, glob

standard_footer = """    <footer class="cfooter">
        <div class="cfooter-container">
            <!-- Col 1: Brand -->
            <div class="cfooter-col cfooter-brand-col">
                <a href="index.html" class="cfooter-logo-link">
                    <img src="logo.png?v=3" alt="FitVerse" class="cfooter-logo-img">
                    <span class="cfooter-logo-text">FitVerse</span>
                </a>
                <p class="cfooter-brand-desc">
                    Equip Your Journey with premium fitness gear engineered for peak performance and commercial durability.
                </p>
            </div>

            <!-- Col 2: Shop Gear -->
            <div class="cfooter-col">
                <h4 class="cfooter-heading">SHOP GEAR</h4>
                <ul class="cfooter-links">
                    <li><a href="shop.html">Strength</a></li>
                    <li><a href="shop.html">Cardio Equipment</a></li>
                    <li><a href="categories.html">Categories</a></li>
                    <li><a href="bundles.html">Bundles</a></li>
                </ul>
            </div>

            <!-- Col 3: Company -->
            <div class="cfooter-col">
                <h4 class="cfooter-heading">COMPANY</h4>
                <ul class="cfooter-links">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="reviews.html">Reviews</a></li>
                    <li><a href="careers.html">Careers</a></li>
                    <li><a href="javascript:void(0)" onclick="openPressModal()">Press</a></li>
                </ul>
            </div>

            <!-- Col 4: Customer Service -->
            <div class="cfooter-col">
                <h4 class="cfooter-heading">CUSTOMER SERVICE</h4>
                <ul class="cfooter-links">
                    <li><a href="javascript:void(0)" onclick="openHelpModal()">Help Center</a></li>
                    <li><a href="javascript:void(0)" onclick="openShippingModal()">Shipping Policy</a></li>
                    <li><a href="returns.html">Returns & Refunds</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </div>

            <!-- Col 5: Newsletter -->
            <div class="cfooter-col cfooter-newsletter-col">
                <h4 class="cfooter-heading">NEWSLETTER</h4>
                <p class="cfooter-newsletter-desc">Subscribe for VIP gear drops & discounts.</p>
                <form onsubmit="event.preventDefault(); if(window.auth) auth.showToast('Thank you for subscribing!', 'success');" class="cfooter-form">
                    <input type="email" placeholder="Enter your email" required class="cfooter-input">
                    <button type="submit" class="cfooter-btn" aria-label="Subscribe"><i class="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="cfooter-bottom">
            <p class="cfooter-copy">&copy; 2026 FitVerse Inc. All rights reserved.</p>
            <div class="cfooter-legal-links">
                <a href="privacy.html">Privacy Policy</a>
                <a href="terms.html">Terms of Service</a>
                <a href="returns.html">Returns and refunds</a>
            </div>
        </div>
    </footer>"""

target_files = [
    'about.html', 'bundles.html', 'careers.html', 'categories.html', 'contact.html',
    'index.html', 'privacy.html', 'product.html', 'programs.html', 'returns.html',
    'reviews.html', 'shop.html', 'terms.html'
]

for file in target_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if footer exists (commented or uncommented)
    if 'cfooter' in content:
        # Replace existing footer
        new_content = re.sub(r'<!--\s*<footer\s+class="cfooter".*?</footer>\s*-->', standard_footer, content, flags=re.DOTALL)
        if new_content == content:
            new_content = re.sub(r'<footer\s+class="cfooter".*?</footer>', standard_footer, content, flags=re.DOTALL)
        if new_content != content:
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated footer in {file}")
        else:
            print(f"Failed regex match in {file}")
    elif file == 'bundles.html':
        # Insert before </main> or before <!-- Cart Drawer --> or before scripts
        if '</main>' in content:
            new_content = content.replace('</main>', '</main>\n\n' + standard_footer)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Inserted footer in {file}")
        elif '<!-- Cart Drawer' in content:
            new_content = content.replace('<!-- Cart Drawer', standard_footer + '\n\n    <!-- Cart Drawer')
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Inserted footer in {file}")
        else:
            print(f"Could not find insertion point in {file}")
