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

document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      const parent = toggle.closest(".dropdown");

      // Először bezárjuk az összes többi menüt
      document.querySelectorAll(".dropdown.open").forEach(drop => {
        if (drop !== parent) {
          drop.classList.remove("open");
        }
      });

      // Majd váltjuk a kattintottat
      parent.classList.toggle("open");
    });
  });

  // Ha a felhasználó bárhová kattint a menün kívül: zárja be a menüt
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(drop => {
        drop.classList.remove("open");
      });
    }
  });
});

