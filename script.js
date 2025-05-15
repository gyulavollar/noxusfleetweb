const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");

function setInitialVisibility() {
    const isMobile = window.innerWidth <= 768;

    hamburgerIcon.style.display = isMobile ? 'block' : 'none';
    hamburgerMenu.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Eventek frissítése
    hamburgerIcon.removeEventListener('click', showMenu);
    hamburgerX.removeEventListener('click', hideMenu);

    if (isMobile) {
        hamburgerIcon.addEventListener('click', showMenu);
    }
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

window.addEventListener('resize', setInitialVisibility);
document.addEventListener('DOMContentLoaded', setInitialVisibility);
