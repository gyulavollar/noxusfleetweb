const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");
const translations = {
  hu: {
    rent1: "Bérelhető autók",
    rent2: "Napi bérlés",
    rent3: "Havi bérlés",
    forsale1:"Eladó autók",
    forsale2:"Készleten",
    forsale3:"Rendelhető",
    connection:"Kapcsolat",
    bookingTitle: "Foglald le legkedveltebb kocsijainkat",
    bookingSubtitle: "Prémium autók, amiket ügyfeleink a legjobban kedvelnek",
    welcomeTitle: "Üdvözlünk a NOXUS FLEET-nél",
    about_title: "Rólunk",
    about_text1: "Az AutoPlaza célja...",
    about_text2: "Csapatunk minden nap...",
    testimons1: "Nagyon elégedett vagyok a szolgáltatással! Gyors és megbízható.",
    testimons2: "A csapat segítőkész és profi. Csak ajánlani tudom!",
    testimons3: "Kiváló élmény volt! Minden a megbeszéltek szerint zajlott.",
    testimons4: "Először próbáltam, de biztosan nem utoljára.",
    testimons5: "Minden szempontból elégedett vagyok, köszönöm!",
    testimons6: "A minőség felülmúlta az elvárásaimat.",
    testimons7: "Gyors válaszidő és kiváló ügyfélszolgálat.",
    testimons8: "Már többször rendeltem, mindig elégedett voltam.",
    testimons9: "Remek ár-érték arány! Megérte.",
    testimons10: "Ha lehetne, 6 csillagot adnék! :)"

  },
  en: {
    rent1: "Rental Cars",
    rent2: "Daily Rental",
    rent3: "Monthly Rental",
    forsale1: "Cars for Sale",
    forsale2: "In Stock",
    forsale3: "Available to Order",
    connection:"Connection",
    bookingTitle: "Book Our Most Popular Cars",
    bookingSubtitle: "Premium cars most loved by our customers",
    welcomeTitle: "Welcome to NOXUS FLEET",
    about_title: "About Us",
    about_text1: "AutoPlaza aims...",
    about_text2: "Our team works...",
    testimons1: "I'm very satisfied with the service! Fast and reliable.",
    testimons2: "The team is helpful and professional. I highly recommend them!",
    testimons3: "Great experience! Everything went as agreed.",
    testimons4: "Tried it for the first time, but definitely not the last.",
    testimons5: "Completely satisfied in every aspect, thank you!",
    testimons6: "The quality exceeded my expectations.",
    testimons7: "Quick response time and excellent customer service.",
    testimons8: "I've ordered multiple times and was always satisfied.",
    testimons9: "Great value for money! Totally worth it.",
    testimons10: "If I could, I’d give it 6 stars! :)"
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
