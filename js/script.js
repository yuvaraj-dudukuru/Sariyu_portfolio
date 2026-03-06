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
    const themeToggle = document.getElementById('theme-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    /**
     * Theme Toggle logic
     */
    function initTheme() {
        if (!themeToggle) return;

        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon';
        }
    }

    /**
     * Scroll Reveal Animations
     */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.section-heading, .about-grid, .skills-category, .project-card, .timeline-item, .contact-wrapper');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => {
            el.classList.add('reveal-hidden');
            observer.observe(el);
        });
    }

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
     * GitHub API Integration
     */
    async function initGitHubData() {
        const username = 'yuvaraj-dudukuru';
        const projectCards = document.querySelectorAll('.project-card');

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
            if (!response.ok) throw new Error('GitHub API failed');

            const repos = await response.ok ? await response.json() : [];

            // Map real stars/forks to cards if applicable
            projectCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const matchedRepo = repos.find(repo => repo.name.toLowerCase().includes(title.replace(/\s/g, '-')));

                if (matchedRepo) {
                    const stats = document.createElement('div');
                    stats.className = 'project-stats';
                    stats.innerHTML = `
                        <span><i class="bx bx-star"></i> ${matchedRepo.stargazers_count}</span>
                        <span><i class="bx bx-git-repo-forked"></i> ${matchedRepo.forks_count}</span>
                    `;
                    card.querySelector('.project-content').appendChild(stats);
                }
            });
        } catch (error) {
            console.warn('GitHub data fetch skipped:', error.message);
        }
    }

    /**
     * Initialize all modules
     */
    function init() {
        initTheme();
        initMobileMenu();
        initStickyHeader();
        initActiveNav();
        initSmoothScroll();
        initSkillAnimation();
        initLazyLoad();
        initProjectFilter();
        initContactForm();
        initScrollReveal();
        initGitHubData();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
