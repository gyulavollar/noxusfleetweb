const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");

if (window.innerWidth <= 768) {
        hamburgerIcon.style.display = 'block';
    }

function showMenu() {
    hamburgerMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
    hamburgerIcon.removeEventListener('click', showMenu);
    hamburgerX.addEventListener('click', hideMenu);
}

function hideMenu() {
    hamburgerMenu.style.display = 'none';
    document.body.style.overflow = 'auto';
    hamburgerIcon.addEventListener('click', showMenu);
    hamburgerX.removeEventListener('click', hideMenu);

}
hamburgerIcon.addEventListener('click', showMenu);

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburgerMenu.style.display = 'none';
        hamburgerIcon.style.display = 'none';
        document.body.style.overflow = 'auto';
        hamburgerIcon.removeEventListener('click', showMenu);
        hamburgerX.removeEventListener('click', hideMenu);
    } else {
        hamburgerIcon.style.display = 'block';
        hamburgerIcon.addEventListener('click', showMenu);
    }
});