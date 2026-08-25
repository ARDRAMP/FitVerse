import os
import re

# Read categories.html to use as a base template
with open('categories.html', 'r', encoding='utf-8') as f:
    template_html = f.read()

# ==========================================
# Generate Programs Page
# ==========================================
programs_html = template_html.replace('FitVerse | Explore Categories', 'FitVerse | Training Programs')
programs_html = programs_html.replace('categories-page-wrapper', 'programs-page-wrapper')
programs_html = programs_html.replace('EXPLORE GEAR BY CATEGORY', 'TRAINING PROGRAMS')
programs_html = programs_html.replace('Find the perfect equipment tailored to your discipline.', 'Elite programming for every discipline.')

# Replace the categories grid with programs grid
programs_content = """
        <section class="cat-grid-section" style="background-color: #0a0a0a; padding-bottom: 5rem;">
            <div class="cat-grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));">
                <!-- Program 1 -->
                <a href="#" class="cat-card" style="aspect-ratio: 16/9;">
                    <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="cat-card-overlay"></div>
                    <div class="cat-card-content" style="align-items: flex-start; text-align: left;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Strength Mastery</h2>
                        <p style="color: #ccc; margin-bottom: 1rem; font-family: var(--font-body);">12-Week Powerlifting Cycle</p>
                        <span class="cat-card-link">View Program &rarr;</span>
                    </div>
                </a>
                
                <!-- Program 2 -->
                <a href="#" class="cat-card" style="aspect-ratio: 16/9;">
                    <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="cat-card-overlay"></div>
                    <div class="cat-card-content" style="align-items: flex-start; text-align: left;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Hypertrophy Elite</h2>
                        <p style="color: #ccc; margin-bottom: 1rem; font-family: var(--font-body);">8-Week Bodybuilding Focus</p>
                        <span class="cat-card-link">View Program &rarr;</span>
                    </div>
                </a>

                <!-- Program 3 -->
                <a href="#" class="cat-card" style="aspect-ratio: 16/9;">
                    <div class="cat-card-bg" style="background-image: url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80');"></div>
                    <div class="cat-card-overlay"></div>
                    <div class="cat-card-content" style="align-items: flex-start; text-align: left;">
                        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem;">Cardio Foundations</h2>
                        <p style="color: #ccc; margin-bottom: 1rem; font-family: var(--font-body);">6-Week Endurance Builder</p>
                        <span class="cat-card-link">View Program &rarr;</span>
                    </div>
                </a>
            </div>
        </section>
"""

# We need to replace the entire <section class="cat-grid-section">...</section>
programs_html = re.sub(
    r'<section class="cat-grid-section">.*?</section>', 
    programs_content, 
    programs_html, 
    flags=re.DOTALL
)

# Update nav links to point to this page
programs_html = programs_html.replace('href="#programs"', 'href="programs.html"')

with open('programs.html', 'w', encoding='utf-8') as f:
    f.write(programs_html)


# ==========================================
# Generate Reviews Page
# ==========================================
reviews_html = template_html.replace('FitVerse | Explore Categories', 'FitVerse | Reviews')
reviews_html = reviews_html.replace('categories-page-wrapper', 'reviews-page-wrapper')
reviews_html = reviews_html.replace('EXPLORE GEAR BY CATEGORY', 'ATHLETE REVIEWS')
reviews_html = reviews_html.replace('Find the perfect equipment tailored to your discipline.', 'See what the community is saying about our premium gear.')

reviews_content = """
        <section class="reviews-section" style="background-color: #0a0a0a; padding: 5rem 5%;">
            <div class="reviews-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1280px; margin: 0 auto;">
                <!-- Review 1 -->
                <div class="review-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 12px;">
                    <div style="color: #e8b923; margin-bottom: 1rem; font-size: 1.2rem;">★★★★★</div>
                    <p style="color: #e0e0e0; font-family: var(--font-body); font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; font-style: italic;">"The Pro Series Power Rack is hands down the best investment I've made for my home gym. The build quality is commercial grade."</p>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #333; background-image: url('https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80'); background-size: cover;"></div>
                        <div>
                            <h4 style="color: #fff; margin: 0; font-size: 1rem;">Marcus T.</h4>
                            <span style="color: #888; font-size: 0.85rem; font-family: var(--font-body);">Verified Buyer</span>
                        </div>
                    </div>
                </div>

                <!-- Review 2 -->
                <div class="review-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 12px;">
                    <div style="color: #e8b923; margin-bottom: 1rem; font-size: 1.2rem;">★★★★★</div>
                    <p style="color: #e0e0e0; font-family: var(--font-body); font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; font-style: italic;">"I've trained in elite facilities worldwide, and FitVerse gear holds up against the best. The barbell knurling is absolutely perfect."</p>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #333; background-image: url('https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80'); background-size: cover;"></div>
                        <div>
                            <h4 style="color: #fff; margin: 0; font-size: 1rem;">Sarah J.</h4>
                            <span style="color: #888; font-size: 0.85rem; font-family: var(--font-body);">Pro Athlete</span>
                        </div>
                    </div>
                </div>

                <!-- Review 3 -->
                <div class="review-card" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 2.5rem; border-radius: 12px;">
                    <div style="color: #e8b923; margin-bottom: 1rem; font-size: 1.2rem;">★★★★★</div>
                    <p style="color: #e0e0e0; font-family: var(--font-body); font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; font-style: italic;">"The customer service is just as premium as the equipment. Shipping was fast, packaging was secure, and assembly was surprisingly easy."</p>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #333; background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'); background-size: cover;"></div>
                        <div>
                            <h4 style="color: #fff; margin: 0; font-size: 1rem;">David L.</h4>
                            <span style="color: #888; font-size: 0.85rem; font-family: var(--font-body);">Verified Buyer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
"""

reviews_html = re.sub(
    r'<section class="cat-grid-section">.*?</section>', 
    reviews_content, 
    reviews_html, 
    flags=re.DOTALL
)

# Update nav links to point to this page
reviews_html = reviews_html.replace('href="#reviews"', 'href="reviews.html"')
reviews_html = reviews_html.replace('href="#programs"', 'href="programs.html"')

with open('reviews.html', 'w', encoding='utf-8') as f:
    f.write(reviews_html)

# Also update the navigation links in index.html, shop.html, categories.html, programs.html, and login.html/signup.html
files_to_update = ['index.html', 'shop.html', 'categories.html', 'programs.html', 'login.html', 'signup.html']
for filename in files_to_update:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace('href="#programs"', 'href="programs.html"')
        content = content.replace('href="#reviews"', 'href="reviews.html"')
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)

print("Created programs.html and reviews.html, and updated navigation links globally.")
