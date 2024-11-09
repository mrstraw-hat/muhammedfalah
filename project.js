// Initialize particles.js with more complex configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#64ffda', '#63f7ff', '#5ca8ff'] // Multiple colors
        },
        shape: {
            type: ['circle', 'triangle', 'polygon'], // Multiple shapes
            polygon: {
                nb_sides: 6
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#64ffda',
            opacity: 0.2,
            width: 1,
            triangles: {
                enable: true,
                opacity: 0.1
            }
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: ['repulse', 'bubble']
            },
            onclick: {
                enable: true,
                mode: ['push', 'remove']
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            bubble: {
                distance: 200,
                size: 6,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Enhanced Project Cards 3D Effect
function handleCardMove(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;
    
    // Add parallax effect to card elements
    const elements = card.querySelectorAll('.project-header, .project-content');
    elements.forEach((element, index) => {
        const depth = index * 5;
        element.style.transform = `translateZ(${depth}px)`;
    });

    card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(10px)
        scale3d(1.05, 1.05, 1.05)
    `;

    // Enhanced dynamic shadow effect
    const intensity = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) / 100;
    const shadowX = (x - centerX) / 5;
    const shadowY = (y - centerY) / 5;
    card.style.boxShadow = `
        ${shadowX}px ${shadowY}px 20px rgba(100, 255, 218, ${0.2 + intensity * 0.1}),
        0 0 30px rgba(100, 255, 218, ${0.1 + intensity * 0.05}),
        inset 0 0 15px rgba(100, 255, 218, ${0.1 + intensity * 0.05})
    `;

    // Add glowing border effect
    card.style.borderColor = `rgba(100, 255, 218, ${0.5 + intensity * 0.2})`;
}

// Enhanced Filter functionality with animations
function filterProjects(filterValue) {
    const projectCards = document.querySelectorAll('.project-card');
    const delay = 50; // Delay between each card animation

    projectCards.forEach((card, index) => {
        card.style.transition = 'all 0.4s ease-in-out';
        
        setTimeout(() => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'scale(1) translateY(0)';
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        }, index * delay);
    });
}

// Enhanced Intersection Observer with advanced animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.transform = 'translateY(0) scale(1)';
                entry.target.style.opacity = '1';
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

// Project stack tags with enhanced hover effects
function createTagRipple(e, tag) {
    const colors = ['#64ffda', '#63f7ff', '#5ca8ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    
    const size = Math.max(tag.offsetWidth, tag.offsetHeight);
    ripple.style.width = ripple.style.height = `${size}px`;
    
    const rect = tag.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;
    ripple.style.backgroundColor = randomColor;
    
    tag.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

// Initialize all event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Project cards initialization
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', handleCardMove);
        card.addEventListener('mouseleave', handleCardLeave);
        observer.observe(card);
    });

    // Filter buttons initialization
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.getAttribute('data-filter'));
        });
    });

    // Project stack tags initialization
    document.querySelectorAll('.project-stack span').forEach(tag => {
        tag.addEventListener('mouseover', (e) => createTagRipple(e, tag));
    });

    // Initialize with "all" filter
    const allFilter = document.querySelector('.filter-btn[data-filter="all"]');
    if (allFilter) {
        allFilter.click();
    }
});