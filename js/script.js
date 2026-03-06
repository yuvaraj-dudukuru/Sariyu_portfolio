/**
 * Sariyu Portfolio - Main JavaScript
 * Modular, accessible, and performant
 */

(function () {
    'use strict';

    // DOM Elements
    const menuToggle = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    /**
     * Mobile menu toggle
     */
    function initMobileMenu() {
        if (!menuToggle || !navbar) return;

        menuToggle.addEventListener('click', () => {
            const isActive = navbar.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('bx-menu', !isActive);
                icon.classList.toggle('bx-x', isActive);
            }
            menuToggle.setAttribute('aria-expanded', isActive);
        });

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('bx-menu');
                    icon.classList.remove('bx-x');
                }
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navbar.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('bx-menu');
                    icon.classList.remove('bx-x');
                }
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    /**
     * Sticky header on scroll
     */
    function initStickyHeader() {
        if (!header) return;

        const handleScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
    }

    /**
     * Active nav link based on scroll position
     */
    function initActiveNav() {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    /**
     * Animate skill bars when in view
     */
    function initSkillAnimation() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const level = bar.getAttribute('data-level') || 0;
                    bar.style.setProperty('--level', `${level}%`);
                    bar.classList.add('animated');
                }
            });
        }, { threshold: 0.3 });

        skillBars.forEach(bar => observer.observe(bar));
    }

    /**
     * Lazy load images (native loading="lazy" handles most cases)
     * Add intersection observer for older browsers if needed
     */
    function initLazyLoad() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        if ('loading' in HTMLImageElement.prototype) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => observer.observe(img));
    }

    /**
     * Project filtering
     */
    function initProjectFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (!filterBtns.length || !projectCards.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    const tech = card.getAttribute('data-tech') || '';
                    const show = filter === 'all' || tech.includes(filter);
                    card.style.display = show ? '' : 'none';
                });
            });
        });
    }

    /**
     * Contact form handling (basic - no backend)
     */
    function initContactForm() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Placeholder - integrate with Formspree, Netlify Forms, or custom backend
            alert('Thank you for your message! This form is ready for backend integration.');
        });
    }

    /**
     * Initialize all modules
     */
    function init() {
        initMobileMenu();
        initStickyHeader();
        initActiveNav();
        initSmoothScroll();
        initSkillAnimation();
        initLazyLoad();
        initProjectFilter();
        initContactForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
