document.addEventListener('DOMContentLoaded', () => {
    // Create animated background
    const background = document.getElementById('background');
    
    // Enhanced click effects
    document.addEventListener('click', (e) => {
        const target = e.target;
        
        // Create click bubble
        const bubble = document.createElement('div');
        bubble.className = 'click-bubble';
        bubble.style.left = `${e.pageX}px`;
        bubble.style.top = `${e.pageY}px`;
        bubble.style.width = '20px';
        bubble.style.height = '20px';
        document.body.appendChild(bubble);
        setTimeout(() => bubble.remove(), 600);

        // Create floating heart with random rotation
        const heart = document.createElement('div');
        heart.className = 'click-heart';
        heart.textContent = '💗';
        heart.style.left = `${e.pageX}px`;
        heart.style.top = `${e.pageY}px`;
        heart.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);

        // Create sparkle effect
        const sparkle = document.createElement('div');
        sparkle.className = 'click-sparkle';
        sparkle.style.left = `${e.pageX - 10}px`;
        sparkle.style.top = `${e.pageY - 10}px`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);

        // Add extra effects for specific elements
        if (target.classList.contains('hero-text') || 
            target.classList.contains('section-title')) {
            // Create multiple sparkles for titles
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    const extraSparkle = document.createElement('div');
                    extraSparkle.className = 'click-sparkle';
                    extraSparkle.style.left = `${e.pageX - 10 + (Math.random() * 40 - 20)}px`;
                    extraSparkle.style.top = `${e.pageY - 10 + (Math.random() * 40 - 20)}px`;
                    document.body.appendChild(extraSparkle);
                    setTimeout(() => extraSparkle.remove(), 800);
                }, i * 100);
            }
        }

        // Special effect for profile image
        if (target.closest('.profile-image')) {
            const hearts = ['💗', '💕', '💖', '💓', '💝'];
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const extraHeart = document.createElement('div');
                    extraHeart.className = 'click-heart';
                    extraHeart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    extraHeart.style.left = `${e.pageX + (Math.random() * 60 - 30)}px`;
                    extraHeart.style.top = `${e.pageY + (Math.random() * 60 - 30)}px`;
                    extraHeart.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
                    document.body.appendChild(extraHeart);
                    setTimeout(() => extraHeart.remove(), 1000);
                }, i * 100);
            }
        }

        // Special effect for content boxes
        if (target.closest('.content-box')) {
            for (let i = 0; i < 4; i++) {
                setTimeout(() => {
                    const extraSparkle = document.createElement('div');
                    extraSparkle.className = 'click-sparkle';
                    const rect = target.closest('.content-box').getBoundingClientRect();
                    extraSparkle.style.left = `${rect.left + Math.random() * rect.width}px`;
                    extraSparkle.style.top = `${rect.top + Math.random() * rect.height}px`;
                    document.body.appendChild(extraSparkle);
                    setTimeout(() => extraSparkle.remove(), 800);
                }, i * 150);
            }
        }
    });

    // Add floating bubbles with pastel colors
    const pastelColors = [
        'rgba(255, 182, 255, 0.2)',
        'rgba(182, 255, 255, 0.2)',
        'rgba(255, 218, 255, 0.2)',
        'rgba(218, 255, 255, 0.2)'
    ];
    
    for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble-bg';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        bubble.style.width = `${Math.random() * 100 + 50}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.background = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        bubble.style.setProperty('--duration', `${Math.random() * 4 + 4}s`);
        bubble.style.animationDelay = `${Math.random() * 2}s`;
        background.appendChild(bubble);
    }

    // Add kawaii bubbles with enhanced effects
    for (let i = 0; i < 12; i++) {
        const kawaiiBubble = document.createElement('div');
        kawaiiBubble.className = 'kawaii-bubble';
        kawaiiBubble.style.left = `${Math.random() * 100}%`;
        kawaiiBubble.style.top = `${Math.random() * 100}%`;
        kawaiiBubble.style.background = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        kawaiiBubble.style.animationDelay = `${Math.random() * 4}s`;
        kawaiiBubble.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
        background.appendChild(kawaiiBubble);
    }

    // Add cute decorative elements
    const addCuteElements = () => {
        // Add floating hearts with different styles and colors
        const heartTypes = ['♡', '♥', '❤', '💗', '💕'];
        const heartColors = [
            'rgba(255, 182, 255, 0.3)',
            'rgba(182, 255, 255, 0.3)',
            'rgba(255, 218, 255, 0.3)',
            'rgba(218, 255, 255, 0.3)'
        ];
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'cute-heart';
            heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
            heart.style.animationDelay = `${Math.random() * 3}s`;
            heart.style.fontSize = `${0.8 + Math.random() * 0.4}rem`;
            heart.style.filter = 'blur(0.5px)';
            background.appendChild(heart);
        }

        // Add section dividers
        document.querySelectorAll('section').forEach(section => {
            if (section.nextElementSibling) {
                const divider = document.createElement('div');
                divider.className = 'section-divider scroll-fade-in';
                section.after(divider);
            }
        });
    };

    addCuteElements();

    // Add sparkle effect to profile image with enhanced interaction
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        let sparkleTimeout;
        
        profileImage.addEventListener('mousemove', (e) => {
            const rect = profileImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            profileImage.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
            profileImage.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);

            // Add temporary sparkle at cursor position
            clearTimeout(sparkleTimeout);
            const sparkle = document.createElement('div');
            sparkle.className = 'cursor-sparkle';
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            profileImage.appendChild(sparkle);

            sparkleTimeout = setTimeout(() => sparkle.remove(), 1000);
        });
    }

    // Initialize scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after animation
                scrollObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    document.querySelectorAll('.scroll-fade-up, .scroll-fade-in, .scroll-scale').forEach(element => {
        scrollObserver.observe(element);
    });

    // Handle Discord username copy
    const discordLink = document.querySelector('.discord-copy');
    if (discordLink) {
        discordLink.addEventListener('click', (e) => {
            e.preventDefault();
            const username = 'xo_bubble_ox';
            navigator.clipboard.writeText(username).then(() => {
                // Optional: Show a small tooltip or notification that username was copied
                const originalText = discordLink.innerHTML;
                discordLink.innerHTML = '<i class="fab fa-discord text-2xl"></i> <span class="copy-tooltip">Copied!</span>';
                setTimeout(() => {
                    discordLink.innerHTML = originalText;
                }, 2000);
            });
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Content box hover effects
    document.querySelectorAll('.content-box').forEach(box => {
        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            box.style.setProperty('--mouse-x', `${x}px`);
            box.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Navigation scroll effect
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const scrolled = currentScroll > 50;

        nav.style.backdropFilter = scrolled ? 'blur(15px)' : 'blur(5px)';
        nav.style.borderBottom = scrolled 
            ? '1px solid rgba(255, 255, 255, 0.2)' 
            : '1px solid rgba(255, 255, 255, 0.1)';
        nav.style.transform = currentScroll < lastScroll || currentScroll < 50 
            ? 'translateY(0)' 
            : 'translateY(-100%)';

        lastScroll = currentScroll;
    });

    // Subtle parallax effect for background elements
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        document.querySelectorAll('.bubble-bg').forEach(bubble => {
            const speed = parseFloat(bubble.style.width) / 200;
            const x = mouseX * speed * 20;
            const y = mouseY * speed * 20;
            bubble.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}); 