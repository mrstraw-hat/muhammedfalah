// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    requestAnimationFrame(() => {
        document.querySelectorAll('.nav-pill').forEach(pill => {
            pill.classList.add('animate');
        });
    });
    // Glitch Text Effect Enhancement
    function enhanceGlitch() {
        const glitchText = document.querySelector('.glitch');
        if (!glitchText) return;
        
        setInterval(() => {
            const randomOffset = Math.random() * 10 - 5;
            const randomColor = Math.random() > 0.5 ? '#00F5FF' : '#9D4EDD';
            
            glitchText.style.transform = `translate(${randomOffset}px, ${randomOffset}px)`;
            glitchText.style.textShadow = `2px 2px ${randomColor}`;
            
            setTimeout(() => {
                glitchText.style.transform = 'translate(0, 0)';
                glitchText.style.textShadow = '';
            }, 50);
        }, 3000);
    }

    // Cyber Dots Animation
    function animateCyberDots() {
        const dots = document.querySelector('.cyber-dots');
        if (!dots) return;
        
        let angle = 0;
        setInterval(() => {
            angle = (angle + 1) % 360;
            dots.style.transform = `rotate(${angle}deg)`;
        }, 50);
    }

    // Enhanced Button Effects
    function enhanceButtons() {
        const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                button.style.setProperty('--x', `${x}px`);
                button.style.setProperty('--y', `${y}px`);
            });
        });
    }

    // Nav Pills Enhancement
    function enhanceNavPills() {
        const pills = document.querySelectorAll('.nav-pill');
        
        pills.forEach(pill => {
            // Add hover effect without creating additional elements
            pill.addEventListener('mouseenter', () => {
                pill.style.transform = 'scale(1.05)';
                pill.style.boxShadow = '0 0 15px rgba(157, 78, 221, 0.5)';
            });
            
            pill.addEventListener('mouseleave', () => {
                pill.style.transform = 'scale(1)';
                pill.style.boxShadow = 'none';
            });
        });
    }

    // Navigation Function
    window.navigateTo = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            // Remove active class from all pills
            document.querySelectorAll('.nav-pill').forEach(pill => {
                pill.classList.remove('active');
            });

            // Add active class to clicked pill
            event.currentTarget.classList.add('active');

            // Smooth scroll to section
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Cyber Circle Enhanced Animation
    function enhanceCyberCircle() {
        const circle = document.querySelector('.cyber-circle');
        if (!circle) return;
        
        let scale = 1;
        let increasing = true;

        setInterval(() => {
            if(increasing) {
                scale += 0.01;
                if(scale >= 1.2) increasing = false;
            } else {
                scale -= 0.01;
                if(scale <= 1) increasing = true;
            }
            
            circle.style.transform = `rotate(${Date.now() / 50}deg) scale(${scale})`;
        }, 50);
    }

    // Typing Effect for Description
    function typingEffect() {
        const description = document.querySelector('.hero-description');
        if (!description) return;
        
        const text = description.textContent;
        description.textContent = '';
        let i = 0;

        function type() {
            if(i < text.length) {
                description.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }

        type();
    }

    // 3D Parallax Effect
    function initParallax() {
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;
        
        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const deltaX = (clientX - centerX) / 50;
            const deltaY = (clientY - centerY) / 50;

            heroContent.style.transform = 
                `translate3d(${deltaX}px, ${deltaY}px, 0)`;
        });
    }
    setTimeout(() => {
        document.querySelectorAll('.nav-pill').forEach(pill => {
            pill.classList.add('animate');
        });
    }, 100);

    // Initialize all effects
    enhanceGlitch();
    animateCyberDots();
    enhanceButtons();
    enhanceNavPills();
    enhanceCyberCircle();
    typingEffect();
    initParallax();
});