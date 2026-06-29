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

// Language card interactions
const languageCards = document.querySelectorAll('.language-card');
languageCards.forEach(card => {
    card.addEventListener('click', function () {
        languageCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        const lang = this.getAttribute('data-lang');
        const selector = document.getElementById('languageSelector');
        selector.value = lang;
        selector.dispatchEvent(new Event('change'));
    });
});

// Language selector change
document.getElementById('languageSelector').addEventListener('change', function () {
    const selectedLang = this.value;
    languageCards.forEach(card => {
        if (card.getAttribute('data-lang') === selectedLang) {
            languageCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        }
    });
    const next = new URL(window.location.href);
    next.searchParams.set('lang', selectedLang);
    window.location.href = next.toString();
});

// Set default active language
const activeLang = 'en';
const activeCard = document.querySelector(`.language-card[data-lang="${activeLang}"]`);
if (activeCard) activeCard.classList.add('active');

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