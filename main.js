// ============================================
// GLAM SEOUL - Main JavaScript
// Interactive Features & Functionality
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== NAVIGATION ========== //
    
    // Header scroll effect
    const header = document.getElementById('header');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Add scrolled class to header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Show/hide scroll to top button
        toggleScrollTopButton();
    });
    
    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileToggle && navMenu.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + header.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ========== SCROLL TO TOP BUTTON ========== //
    
    const scrollTopBtn = document.getElementById('scrollToTop');
    
    function toggleScrollTopButton() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========== ANIMATED COUNTER ========== //
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let counterAnimated = false;
    
    function animateCounters() {
        if (counterAnimated) return;
        
        const statsSection = document.querySelector('.stats-grid');
        if (!statsSection) return;
        
        const statsSectionTop = statsSection.offsetTop;
        const statsSectionHeight = statsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        if (scrollPosition > statsSectionTop && window.scrollY < statsSectionTop + statsSectionHeight) {
            counterAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const suffix = stat.textContent.includes('+') ? '+' : 
                              stat.textContent.includes('%') ? '%' : '';
                let current = 0;
                const increment = target / 50; // 50 steps
                const duration = 2000; // 2 seconds
                const stepTime = duration / 50;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + suffix;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }
                }, stepTime);
            });
        }
    }
    
    window.addEventListener('scroll', animateCounters);
    
    // ========== SCROLL ANIMATIONS ========== //
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(`
        .business-card,
        .brand-card,
        .product-category,
        .network-card,
        .stat-item
    `);
    
    animateElements.forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Stagger animation for grid items */
        .business-grid .business-card:nth-child(1) { transition-delay: 0.1s; }
        .business-grid .business-card:nth-child(2) { transition-delay: 0.2s; }
        .business-grid .business-card:nth-child(3) { transition-delay: 0.3s; }
        .business-grid .business-card:nth-child(4) { transition-delay: 0.4s; }
        
        .brands-grid .brand-card:nth-child(1) { transition-delay: 0.1s; }
        .brands-grid .brand-card:nth-child(2) { transition-delay: 0.2s; }
        .brands-grid .brand-card:nth-child(3) { transition-delay: 0.3s; }
        
        .products-grid .product-category:nth-child(1) { transition-delay: 0.1s; }
        .products-grid .product-category:nth-child(2) { transition-delay: 0.15s; }
        .products-grid .product-category:nth-child(3) { transition-delay: 0.2s; }
        .products-grid .product-category:nth-child(4) { transition-delay: 0.25s; }
        .products-grid .product-category:nth-child(5) { transition-delay: 0.3s; }
        
        .stats-grid .stat-item:nth-child(1) { transition-delay: 0.1s; }
        .stats-grid .stat-item:nth-child(2) { transition-delay: 0.2s; }
        .stats-grid .stat-item:nth-child(3) { transition-delay: 0.3s; }
        .stats-grid .stat-item:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
    
    // ========== PARALLAX EFFECT ========== //
    
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            hero.style.backgroundPositionY = -(scrolled * parallaxSpeed) + 'px';
        });
    }
    
    // ========== EMAIL PROTECTION ========== //
    
    // Protect email from spam bots
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Email is already in href, this is just for additional protection
            // You can add more sophisticated protection if needed
        });
    });
    
    // ========== LAZY LOADING IMAGES ========== //
    
    // Note: Modern browsers support native lazy loading with loading="lazy" attribute
    // This is a fallback for older browsers
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ========== FORM VALIDATION (if forms are added later) ========== //
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
            console.log('Form submitted');
        });
    });
    
    // ========== PRODUCT CATEGORY INTERACTIONS ========== //
    
    const productCategories = document.querySelectorAll('.product-category');
    
    productCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Add click effect or navigation
            console.log('Product category clicked:', this.querySelector('h3').textContent);
            // You can add modal or navigation logic here
        });
    });
    
    // ========== PREVENT DEFAULT FOR PLACEHOLDER LINKS ========== //
    
    const placeholderLinks = document.querySelectorAll('a[href="#"]');
    placeholderLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add logic for placeholder links if needed
        });
    });
    
    // ========== LOADING ANIMATION ========== //
    
    // Add page loaded class after full load
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        animateCounters();
    });
    
    // ========== ACCESSIBILITY ========== //
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // ========== CONSOLE BRANDING ========== //
    
    console.log('%c🩵 GLAM SEOUL', 'font-size: 24px; font-weight: bold; color: #ff69b4;');
    console.log('%cK-Beauty Global Platform', 'font-size: 14px; color: #87ceeb;');
    console.log('%cFrom Seoul to the World', 'font-size: 12px; color: #999;');
    
    // ========== UTILITY FUNCTIONS ========== //
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Apply throttle to scroll events for better performance
    const throttledScroll = throttle(() => {
        updateActiveNavLink();
        toggleScrollTopButton();
    }, 100);
    
    window.addEventListener('scroll', throttledScroll);
    
    // ========== INITIALIZATION COMPLETE ========== //
    
    console.log('✓ Website initialized successfully');
    
});

// ========== SERVICE WORKER (for PWA - optional) ========== //

// Uncomment to enable PWA features
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('ServiceWorker registered'))
            .catch(err => console.log('ServiceWorker registration failed'));
    });
}
*/