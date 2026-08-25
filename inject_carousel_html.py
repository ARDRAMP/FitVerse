import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

carousel_html = """        <!-- Cinematic Hero Section -->
        <section class="cinematic-hero">
            <div class="hero-carousel">
                <!-- Slide 1: Legacy -->
                <div class="hero-slide active" style="background: linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(26,42,27,0.4) 60%, transparent 100%), url('images/hero_slide_legacy.png') center/cover no-repeat;">
                    <div class="hero-content">
                        <span class="eyebrow-label">PRO SERIES COLLECTION &mdash; AUG 2026</span>
                        <h1 class="headline-bold">
                            BUILD YOUR <span class="word-accent">Legacy</span><br>
                            WITH PREMIUM GEAR
                        </h1>
                        <a href="#shop" class="btn btn-gold glow-btn">EXPLORE COLLECTION</a>
                    </div>
                </div>

                <!-- Slide 2: Power -->
                <div class="hero-slide" style="background: linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(26,42,27,0.4) 60%, transparent 100%), url('images/hero_slide_power.png') center/cover no-repeat;">
                    <div class="hero-content">
                        <span class="eyebrow-label">STRENGTH SERIES &mdash; LIMITED DROP</span>
                        <h1 class="headline-bold">
                            ENGINEERED FOR<br>
                            <span class="word-accent">Power</span>
                        </h1>
                        <a href="#shop" class="btn btn-gold glow-btn">SHOP STRENGTH</a>
                    </div>
                </div>

                <!-- Slide 3: Precision -->
                <div class="hero-slide" style="background: linear-gradient(90deg, rgba(10,10,10,0.9) 0%, rgba(26,42,27,0.4) 60%, transparent 100%), url('images/hero_slide_precision.png') center/cover no-repeat;">
                    <div class="hero-content">
                        <span class="eyebrow-label">SMART CARDIO &mdash; NOW LIVE</span>
                        <h1 class="headline-bold">
                            MOVE WITH<br>
                            <span class="word-accent">Precision</span>
                        </h1>
                        <a href="#shop" class="btn btn-gold glow-btn">DISCOVER CARDIO</a>
                    </div>
                </div>
                
                <!-- Carousel Controls -->
                <button class="carousel-arrow left-arrow" aria-label="Previous slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button class="carousel-arrow right-arrow" aria-label="Next slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                
                <div class="carousel-indicators">
                    <div class="indicator active" data-index="0"></div>
                    <div class="indicator" data-index="1"></div>
                    <div class="indicator" data-index="2"></div>
                </div>
            </div>
        </section>"""

# Replace the existing cinematic-hero section
content = re.sub(
    r'<!-- Cinematic Hero Section -->\s*<section class="cinematic-hero">.*?</section>',
    carousel_html,
    content,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected carousel HTML into index.html")
