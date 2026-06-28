// ================= MENU TOGGLE =================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ================= ACTIVE NAV LINK =================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            document.querySelector('header nav a[href*=' + id + ']')
                .classList.add('active');
        }
    });

    // Remove mobile menu on scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ================= TYPING EFFECT =================

const typed = new Typed('.multiple-text', {
    strings: [
        'Web Developer',
        'Frontend Developer',
        'Programmer',
        'B.Tech Student'
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// ================= SMOOTH BUTTON EFFECT =================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-4px)';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// ================= FOOTER YEAR AUTO UPDATE =================

const footerText = document.querySelector('.footer-text p');

if (footerText) {
    footerText.innerHTML =
        `© ${new Date().getFullYear()} Anshuman | All Rights Reserved`;
}