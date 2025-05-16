const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");

function setInitialVisibility() {
    const isMobile = window.innerWidth <= 768;

    hamburgerIcon.style.display = isMobile ? 'block' : 'none';
    hamburgerMenu.classList.remove('open');
    document.body.style.overflow = 'auto';

    hamburgerIcon.removeEventListener('click', showMenu);
    hamburgerX.removeEventListener('click', hideMenu);

    if (isMobile) {
        hamburgerIcon.addEventListener('click', showMenu);
    }
}

function showMenu() {
    hamburgerMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburgerIcon.removeEventListener('click', showMenu);
    hamburgerX.addEventListener('click', hideMenu);
}

function hideMenu() {
    hamburgerMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
    hamburgerIcon.addEventListener('click', showMenu);
    hamburgerX.removeEventListener('click', hideMenu);
}

window.addEventListener('resize', setInitialVisibility);
document.addEventListener('DOMContentLoaded', () => {
    setInitialVisibility();

    // Dropdown menük működtetése
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            const parent = toggle.closest(".dropdown");

            // Bezár minden más nyitott dropdown-t
            document.querySelectorAll(".dropdown.open").forEach(drop => {
                if (drop !== parent) {
                    drop.classList.remove("open");
                }
            });

            parent.classList.toggle("open");

            // Mobilon ne záródjon be rögtön, ha kattintunk a menüre
            e.stopPropagation();
        });
    });

    // Menün kívülre kattintásra bezár minden dropdown-t
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.open").forEach(drop => {
                drop.classList.remove("open");
            });
        }
    });
});
