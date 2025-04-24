document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuToggle.addEventListener('click', () => {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        
        // Toggle menu icon
        mobileMenuToggle.textContent = isExpanded ? '☰' : '✕';
    });

    // Close mobile menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.textContent = '☰';
        });
    });

    // Sticky CTA Button
    const stickyCta = document.getElementById('sticky-cta');
    
    // Show/hide sticky CTA based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;

        if (scrollPosition > heroHeight / 2) {
            stickyCta.classList.add('visible');
        } else {
            stickyCta.classList.remove('visible');
        }
    });
});