const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");

function setInitialVisibility() {
    const isMobile = window.innerWidth <= 768;

    if (hamburgerIcon) {
        hamburgerIcon.style.display = isMobile ? 'block' : 'none';
    }

    if (hamburgerMenu) {
        hamburgerMenu.classList.remove('open');
    }

    document.body.style.overflow = 'auto';

    if (hamburgerIcon && hamburgerX) {
        hamburgerIcon.removeEventListener('click', showMenu);
        hamburgerX.removeEventListener('click', hideMenu);

        if (isMobile) {
            hamburgerIcon.addEventListener('click', showMenu);
        }
    }
}

function showMenu() {
    hamburgerMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
    hamburgerIcon.setAttribute('aria-expanded', 'true');
    hamburgerIcon.removeEventListener('click', showMenu);
    hamburgerX.addEventListener('click', hideMenu);
}

function hideMenu() {
    hamburgerMenu.classList.remove('open');
    document.body.style.overflow = 'auto';
    hamburgerIcon.setAttribute('aria-expanded', 'false');
    hamburgerIcon.addEventListener('click', showMenu);
    hamburgerX.removeEventListener('click', hideMenu);
}

window.addEventListener('resize', setInitialVisibility);
document.addEventListener('DOMContentLoaded', () => {
    setInitialVisibility();

    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        const parent = toggle.closest(".dropdown");

        function toggleDropdown(e) {
            const isOpen = parent.classList.contains("open");

            // Zárja az összes többi dropdown-t
            document.querySelectorAll(".dropdown.open").forEach(drop => {
                if (drop !== parent) {
                    drop.classList.remove("open");
                    drop.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
                }
            });

            parent.classList.toggle("open");
            toggle.setAttribute("aria-expanded", String(!isOpen));

            e.stopPropagation();
        }

        // Egérkattintás
        toggle.addEventListener("click", toggleDropdown);

        // Billentyűzettel is működjön
        toggle.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " " || e.code === "Space") {
                e.preventDefault();
                toggleDropdown(e);
            }
        });
    });

    // Klikk a menün kívül -> zárja az összes dropdown-t
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.open").forEach(drop => {
                drop.classList.remove("open");
                drop.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
            });
        }
    });
});
