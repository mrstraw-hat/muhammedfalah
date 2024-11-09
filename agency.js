// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Particles.js only if the container exists
    

    // Enhanced Tilt Effect with Error Handling
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            
            // Update blur effect position
            const mouseX = ((x / rect.width) * 100);
            const mouseY = ((y / rect.height) * 100);
            card.style.setProperty('--mouse-x', `${mouseX}%`);
            card.style.setProperty('--mouse-y', `${mouseY}%`);
        };

        const handleMouseLeave = () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            card.style.transition = 'transform 0.5s ease';
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Improved Counter Animation
    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = target / steps;
        const stepTime = duration / steps;

        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = Math.round(target);
                clearInterval(counter);
            } else {
                element.textContent = Math.round(current);
            }
        }, stepTime);
    }

    // Enhanced Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.target) return;

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Handle counter animations
                if (entry.target.classList.contains('stat-card')) {
                    const numberElement = entry.target.querySelector('.stat-number');
                    if (numberElement && numberElement.dataset.target) {
                        const targetValue = parseInt(numberElement.dataset.target);
                        animateCounter(numberElement, targetValue);
                    }
                }

                // Handle section title animations
                if (entry.target.classList.contains('section-title')) {
                    entry.target.style.animation = 'titleFloat 3s ease-in-out infinite';
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll, .stat-card, .section-title');
    elementsToObserve.forEach(element => {
        if (element) {
            intersectionObserver.observe(element);
        }
    });

    // Glitch Text Effect
    const glitchTexts = document.querySelectorAll('.glitch-text');
    glitchTexts.forEach(text => {
        if (!text) return;
        
        const content = text.dataset.text;
        if (!content) return;

        text.setAttribute('data-text', content);
    });
});