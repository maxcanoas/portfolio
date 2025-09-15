document.addEventListener('DOMContentLoaded', function() {
    // Particles animation
    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Fade in animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Smooth scroll for links
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Mouse move effect for cards
    function cardMouseEffect() {
        const cards = document.querySelectorAll('.project-card, .contact-link');
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                if (card.classList.contains('project-card')) {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
                } else {
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) scale(1.05)`;
                }
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
            });
        });
    }

    // Typing effect for title
    function typeWriter() {
        const title = document.querySelector('.hero h1');
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const timer = setInterval(() => {
            title.textContent += text.charAt(i);
            i++;
            if (i > text.length) {
                clearInterval(timer);
            }
        }, 100);
    }

    // Parallax effect for background
    function setupParallax() {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            const bgAnimation = document.querySelector('.bg-animation');
            if (bgAnimation) {
                bgAnimation.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }

    // Initialize everything
    window.scrollTo(0, 0);
    
    createParticles();
    animateOnScroll();
    smoothScroll();
    cardMouseEffect();
    setupParallax();
    setTimeout(typeWriter, 500);

    // Garante scroll no topo ao carregar/recarregar
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });
});