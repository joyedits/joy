/* Formspree Contact Form */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    contactMessage.textContent = 'Sending...';
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            contactMessage.textContent = 'Message sent successfully ✅';
            contactForm.reset();
            setTimeout(() => { contactMessage.textContent = ''; }, 5000);
        } else {
            contactMessage.textContent = 'Message not sent (service error) ❌';
        }
    } catch (error) {
        contactMessage.textContent = 'Message not sent (network error) ❌';
    }
});

/* Scroll Up */
const scrollUp = () => {
    const scrollUpBtn = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll') : scrollUpBtn.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__list a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

/* GSAP Animations */
gsap.from('.perfil__img', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.perfil__data', { opacity: 0, x: -50, duration: 1, delay: 0.7 });
gsap.from('.info__data', { opacity: 0, x: 50, duration: 1, delay: 0.9 });
gsap.from('.about__description', { opacity: 0, y: 30, duration: 1, delay: 1.1 });
gsap.from('.skills__items', { opacity: 0, scale: 0.8, duration: 1, delay: 1.3, stagger: 0.2 });

/* ScrollTrigger for Projects */
gsap.utils.toArray('.projects__card').forEach(card => {
    gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reset'
        }
    });
});

/* ScrollTrigger for Services */
gsap.utils.toArray('.services__card').forEach(card => {
    gsap.from(card, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reset'
        }
    });
});

/* ScrollReveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

sr.reveal('.contact__form', { origin: 'bottom' });
sr.reveal('.footer__container', { delay: 600 });
