document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const stickyCta = document.getElementById('sticky-cta');

    function toggleMenu() {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        mobileMenuToggle.textContent = isExpanded ? '☰' : '✕';
    }

    mobileMenuToggle.addEventListener('click', toggleMenu);

    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.textContent = '☰';
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !mobileMenuToggle.contains(e.target)) {
            toggleMenu();
        }
    });

    // Sticky CTA Button
    function handleScroll() {
        requestAnimationFrame(() => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const heroHeight = document.querySelector('.hero').offsetHeight;
            
            if (scrollPosition > heroHeight / 2) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }

    // Initial check for scroll position
    setTimeout(() => {
        handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
});