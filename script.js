document.addEventListener('DOMContentLoaded', () => {

    // --- HAMBURGER MENU ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // --- TYPED.JS ---
    if (document.querySelector('.typed-text')) {
        new Typed('.typed-text', {
            strings: [
                'Shyam Tripathi',
                'Web Developer',
                'Problem Solver',
                'Creative Thinker'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        });
    }

    // --- TABS ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            // Deactivate all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Activate clicked
            btn.classList.add('active');
            const el = document.getElementById(target);
            if (el) el.classList.add('active');
        });
    });

    // --- INTERSECTION OBSERVER FOR ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-left, .animate-right, .animate-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });

    animatedElements.forEach(el => observer.observe(el));

    // --- CONTACT FORM ---
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.textContent;
            btn.textContent = 'Message Sent!';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});
