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
    welcomeTitle: "Noxus Fleet – Prémium autók. Maximális élmény. Kompromisszumok nélkül.",
    about_title: "Rólunk",
    about_text1:"A Noxus Fleet a prémium autóbérlés eleganciáját és dinamizmusát ötvözi. Flottánkban a legnevesebb márkák – BMW, Mercedes, Ferrari – képviselik a stílust és a teljesítményt, legyen szó napi élményről vagy hosszú távú bérlésről. Exkluzív eladó autóink azonnal elérhetők, de egyedi igények alapján is gondoskodunk a tökéletes modellről, közvetlen szalonkapcsolatainkon keresztül, versenyképes áron. A Noxus Fleet azoknak szól, akik nem érik be kevesebbel, mint a legjobbal.",
    about_text2:"",
    testimons1: "Nagyon elégedett vagyok az autóbérlés gyorsaságával és egyszerűségével!",
    testimons2: "A bérlési folyamat gördülékeny volt, az autó tökéletes állapotban érkezett.",
    testimons3: "Barátságos ügyfélszolgálat, segítőkész munkatársak. Csak ajánlani tudom!",
    testimons4: "Az autó kényelmes és tiszta volt, minden elvárásomat kielégítette.",
    testimons5: "Rugalmas feltételek és korrekt árak, örömmel bérelek itt újra.",
    testimons6: "Gyors válaszidő és egyszerű foglalási rendszer, remek élmény volt.",
    testimons7: "Az autó műszakilag kifogástalan volt, biztonságban éreztem magam vele.",
    testimons8: "A bérlés során minden kérdésemre részletes választ kaptam, nagyon segítőkészek voltak.",
    testimons9: "Kényelmes átvétel és leadás, gördülékeny ügyintézés.",
    testimons10: "Minden zökkenőmentesen zajlott, az autóbérlés teljesen problémamentes volt.",
    menuTitle: "Menü",
    menuTerms: "ÁSZF",
    menuFaq: "GYIK",
    openingHoursTitle: "Nyitvatartás",
    openingHoursWeekdays: "H-P: 8:00 - 22:00",
    openingHoursWeekend: "Szo-V: 8:00 - 20:00",
    contactTitle: "Kapcsolat",
    contactPhone: "+36 30 784 6975",
    contactEmail: "booking@noxusfleet.com",
    socialTitle: "Kövess minket",
    footerBottom: "© 2025 Noxus Fleet. Minden jog fenntartva."
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
    about_text1:"Noxus Fleet blends the elegance and dynamism of premium car rental. Our fleet features renowned brands such as BMW, Mercedes, and Ferrari – delivering style and performance for both daily experiences and long-term rentals. Our exclusive cars for sale are readily available, and we also fulfill custom requests through direct dealership connections, all at competitive prices. Noxus Fleet is for those who settle for nothing less than the best.",
    about_text2:"",
    testimons1: "I’m very satisfied with the speed and simplicity of the car rental!",
    testimons2: "The rental process was smooth, and the car arrived in perfect condition.",
    testimons3: "Friendly customer service and helpful staff. Highly recommend!",
    testimons4: "The car was comfortable and clean, meeting all my expectations.",
    testimons5: "Flexible terms and fair prices, I’m happy to rent here again.",
    testimons6: "Fast response time and easy booking system, it was a great experience.",
    testimons7: "The car was technically flawless, I felt safe driving it.",
    testimons8: "I got detailed answers to all my questions during the rental, very helpful staff.",
    testimons9: "Convenient pick-up and drop-off, hassle-free administration.",
    testimons10: "Everything went smoothly, the car rental was completely trouble-free.",
    menuTitle: "Menu",
    menuTerms: "Terms & Conditions",
    menuFaq: "FAQ",
    openingHoursTitle: "Opening Hours",
    openingHoursWeekdays: "Mon-Fri: 8:00 AM - 10:00 PM",
    openingHoursWeekend: "Sat-Sun: 8:00 AM - 8:00 PM",
    contactTitle: "Contact",
    contactPhone: "+36 30 784 6975",
    contactEmail: "booking@noxusfleet.com",
    socialTitle: "Follow us",
    footerBottom: "© 2025 Noxus Fleet. All rights reserved."
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
