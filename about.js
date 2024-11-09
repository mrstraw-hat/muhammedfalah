// Core initialization and utilities
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.achievement-card');
    const aboutText = document.querySelector('.about-text');
    let isScrolling = false;
    let scrollTimeout;

    // Enhanced mouse movement parallax with depth
    document.addEventListener('mousemove', (e) => {
        if (isScrolling) return;

        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Enhanced parallax for cards with depth effect
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenterX = rect.left + rect.width / 2;
            const cardCenterY = rect.top + rect.height / 2;
            
            const depthFactor = 1 + (index * 0.2);
            const angleX = (cardCenterY - clientY) / (30 / depthFactor);
            const angleY = (clientX - cardCenterX) / (30 / depthFactor);
            const translateZ = 20 + (index * 5);
            
            requestAnimationFrame(() => {
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${angleX}deg) 
                    rotateY(${angleY}deg) 
                    translateZ(${translateZ}px)
                    scale(${1 + (index * 0.02)})
                `;
            });
        });
        
        // Update background gradient position
        updateBackgroundGradient(clientX, clientY);
        
        // Enhanced about-text parallax with rotation
        const moveX = (clientX - centerX) / 40;
        const moveY = (clientY - centerY) / 40;
        const rotateZ = ((clientX - centerX) / window.innerWidth) * 2;
        
        requestAnimationFrame(() => {
            aboutText.style.transform = `
                translate(${moveX}px, ${moveY}px) 
                rotateZ(${rotateZ}deg)
                scale(${1 + Math.abs(moveX) / 1000})
            `;
        });
    });

    // Scroll handling
    document.addEventListener('scroll', () => {
        isScrolling = true;
        cards.forEach(card => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isScrolling = false;
        }, 150);
    });
});

// Interactive Background Gradient
function updateBackgroundGradient(mouseX, mouseY) {
    const body = document.body;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const xPercent = (mouseX / width) * 100;
    const yPercent = (mouseY / height) * 100;
    
    const gradient = `
        radial-gradient(
            circle at ${xPercent}% ${yPercent}%,
            rgba(79, 248, 210, 0.15),
            rgba(54, 204, 241, 0.15),
            rgba(41, 121, 255, 0.15),
            transparent 70%
        ),
        linear-gradient(
            ${45 + (xPercent / 5)}deg,
            rgba(41, 121, 255, 0.1),
            rgba(101, 31, 255, 0.1)
        )
    `;
    
    body.style.backgroundImage = gradient;
}

// Animated Background Shapes
function createBackgroundShapes() {
    const container = document.createElement('div');
    container.className = 'background-shapes';
    document.body.appendChild(container);

    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['#4ff8d2', '#36ccf1', '#2979ff', '#651fff'];

    for (let i = 0; i < 15; i++) {
        const shape = document.createElement('div');
        shape.className = `bg-shape ${shapes[i % shapes.length]}`;
        shape.style.cssText = `
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: floatShape ${5 + Math.random() * 10}s linear infinite;
            animation-delay: -${Math.random() * 10}s;
            opacity: ${0.1 + Math.random() * 0.2};
            background-color: ${colors[i % colors.length]};
            transform: scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg);
        `;
        container.appendChild(shape);
    }
}

// Enhanced particle system with 3D movement
function createParticleSystem() {
    const container = document.querySelector('.particles-container');
    const particleColors = ['#4ff8d2', '#36ccf1', '#2979ff', '#651fff'];
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 6 + 2;
        const xPos = Math.random() * window.innerWidth;
        const xOffset = (Math.random() - 0.5) * 200;
        const zOffset = Math.random() * 100;
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${xPos}px;
            bottom: -20px;
            background: ${color};
            box-shadow: 0 0 ${size * 2}px ${color};
            transform: translateZ(${zOffset}px);
        `;
        
        container.appendChild(particle);
        
        const duration = 3 + Math.random() * 2;
        particle.style.animation = `
            floatParticle ${duration}s linear,
            glowPulse ${duration / 2}s ease-in-out infinite alternate
        `;
        
        particle.addEventListener('animationend', () => particle.remove());
    }
    
    setInterval(createParticle, 150);
}

// Enhanced scroll animations with 3D transformations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.transform = 'translateZ(0) rotateX(0) scale(1)';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.2 });
    
    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach((card, index) => {
        card.style.transform = `
            translateZ(-100px) 
            rotateX(20deg) 
            scale(0.8)
        `;
        card.style.opacity = '0';
        card.style.transition = `
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s,
            opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s
        `;
        observer.observe(card);
    });
}

// Enhanced 3D tilt effect with depth
function init3DTiltEffect() {
    const cards = document.querySelectorAll('.achievement-card');
    
    cards.forEach((card, index) => {
        let isHovered = false;
        let rafId = null;
        
        const depth = 50 + (index * 10);
        
        card.addEventListener('mouseenter', () => {
            isHovered = true;
            card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mousemove', e => {
            if (!isHovered) return;
            
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            const rotateX = (mouseY / (rect.height / 2)) * 15;
            const rotateY = (mouseX / (rect.width / 2)) * 15;
            
            if (rafId) cancelAnimationFrame(rafId);
            
            rafId = requestAnimationFrame(() => {
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${-rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateZ(${depth}px)
                    scale(1.05)
                `;
            });
        });
        
        card.addEventListener('mouseleave', () => {
            isHovered = false;
            if (rafId) cancelAnimationFrame(rafId);
            card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
        });
    });
}

// Add these enhanced CSS animations
const enhancedStyles = `
    @keyframes floatParticle {
        0% {
            transform: translateY(0) translateX(0) translateZ(var(--z-offset, 0));
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(var(--x-offset, 0)) translateZ(var(--z-offset, 0));
            opacity: 0;
        }
    }

    @keyframes glowPulse {
        0% {
            filter: brightness(1);
        }
        100% {
            filter: brightness(1.5);
        }
    }

    @keyframes floatShape {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        33% {
            transform: translate(100px, 100px) rotate(120deg);
        }
        66% {
            transform: translate(-50px, 200px) rotate(240deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }

    body {
        background-color: #0a0a0a;
        transition: background-image 0.3s ease;
    }

    .background-shapes {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    }

    .bg-shape {
        position: absolute;
        width: 50px;
        height: 50px;
        filter: blur(2px);
    }

    .bg-shape.circle {
        border-radius: 50%;
    }

    .bg-shape.square {
        border-radius: 4px;
    }

    .bg-shape.triangle {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .achievement-card {
        transform-style: preserve-3d;
        backface-visibility: hidden;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .achievement-card.glow-up {
        box-shadow: 0 0 30px rgba(79, 248, 210, 0.6);
    }

    .particle {
        position: fixed;
        pointer-events: none;
        border-radius: 50%;
        transform-style: preserve-3d;
    }
`;

// Add the enhanced styles
const styleSheet = document.createElement('style');
styleSheet.textContent = enhancedStyles;
document.head.appendChild(styleSheet);

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    createParticleSystem();
    initScrollAnimations();
    init3DTiltEffect();
    createBackgroundShapes();
    
    // Add staggered entrance animations
    document.querySelectorAll('.achievement-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('active');
        }, index * 200);
    });
});