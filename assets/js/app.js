// Navbar scroll effect
window.addEventListener('scroll', function () {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .step-card, .pricing-card').forEach(el => {
    observer.observe(el);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Add stagger animation delay to cards
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.step-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    [name, email, subject, message].forEach(field => field.classList.remove('is-invalid'));

    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
    }

    if (!subject.value.trim()) {
        subject.classList.add('is-invalid');
        isValid = false;
    }

    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
    }

    if (isValid) {
        formSuccess.classList.remove('d-none');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.add('d-none'), 5000);
    }
});