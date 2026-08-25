import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# JavaScript logic for the carousel
carousel_script = """
    <!-- Carousel Logic -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.hero-slide');
            const indicators = document.querySelectorAll('.indicator');
            const leftArrow = document.querySelector('.left-arrow');
            const rightArrow = document.querySelector('.right-arrow');
            let currentSlide = 0;
            let slideInterval;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    slide.classList.remove('active');
                    indicators[i].classList.remove('active');
                    if (i === index) {
                        slide.classList.add('active');
                        indicators[i].classList.add('active');
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            }

            function resetInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 6000);
            }

            rightArrow.addEventListener('click', () => {
                nextSlide();
                resetInterval();
            });

            leftArrow.addEventListener('click', () => {
                prevSlide();
                resetInterval();
            });

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    showSlide(currentSlide);
                    resetInterval();
                });
            });

            // Start auto-rotation
            slideInterval = setInterval(nextSlide, 6000);
        });
    </script>
</body>
"""

# Replace </body> with the script + </body>
content = content.replace("</body>", carousel_script)

# Also bump the cache for styles.css?v=68 -> 69
content = re.sub(r'styles.css\?v=\d+', 'styles.css?v=70', content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected carousel JS into index.html")
