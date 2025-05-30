const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");
const translations = {
  hu: {
    about_title: "Rólunk",
    about_text1: "Az AutoPlaza célja...",
    about_text2: "Csapatunk minden nap..."
  },
  en: {
    about_title: "About Us",
    about_text1: "AutoPlaza aims...",
    about_text2: "Our team works..."
  }
};

function updateTexts() {
  const lang = localStorage.getItem('userLanguage') || 'hu';
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[lang][key];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateTexts();

  document.querySelectorAll('.lang-button').forEach(btn => {
    btn.addEventListener('click', function () {
      const currentLang = localStorage.getItem('userLanguage') || 'hu';
      const newLang = currentLang === 'hu' ? 'en' : 'hu';
      localStorage.setItem('userLanguage', newLang);
      updateTexts();
      document.querySelectorAll('.lang-button').forEach(b => {
        b.textContent = newLang === 'hu' ? 'English' : 'Magyar';
      });
    });
  });
});


// Oldal betöltésekor
document.addEventListener('DOMContentLoaded', updateTexts);

// Ha van nyelvváltó gomb, frissítsd az eseménykezelőt
const langSwitch = document.getElementById('langSwitchDesktop');

if (langSwitch) {
  langSwitch.addEventListener('click', function() {
    const currentLang = localStorage.getItem('userLanguage') || 'hu';
    const newLang = currentLang === 'hu' ? 'en' : 'hu';
    localStorage.setItem('userLanguage', newLang);
    updateTexts();
    this.textContent = newLang === 'hu' ? 'English' : 'Magyar';
  });
}

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
