let lastScroll = 0;
const navbar = document.querySelector('.navbar-scroll-hide');

navbar.classList.add('navbar-visible');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
    }

    lastScroll = currentScroll;
});
