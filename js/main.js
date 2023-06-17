const brgMenu = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mobile-navbar');

brgMenu.addEventListener('click', () => {
    mobMenu.classList.toggle('mobile-navbar--open');
});