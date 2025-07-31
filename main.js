/*======================= toggle icon navbar ===============================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*======================= Scrool section active link ===============================*/

let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*============================ sticky navbar ==============================*/

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    /*============================= remove toggle icon and navbar=============================*/

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*================================= SCOLL REVEAL =================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .education-box1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .education-box2', { origin: 'right' });

/*============================== TYPED JA ================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'Full Stack Developer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000,
    loop: true,
});