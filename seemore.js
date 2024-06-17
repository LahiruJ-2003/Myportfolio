ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .h1-title',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-info, .services-list, .work-list, .btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-col-1 img, .contact-left', { origin: 'left' });
ScrollReveal().reveal('.p1, .p2, .contact-right', { origin: 'right' });

// typewriter
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
});  