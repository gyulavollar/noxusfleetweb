const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");

const translations = {
  hu: {
    rent1: "BÉRELHETŐ AUTÓK",
    forsale1: "ELADÓ AUTÓK",
    connection: "KAPCSOLAT",
    bookingTitle: "LEGKEDVELTEBB AUTÓINK",
    bookingSubtitle: "",
    welcomeTitle: "ÜDVÖZÖLJÜK A NOXUS FLEET VILÁGÁBAN",
    about_title: "RÓLUNK",
    about_text1: "A Noxus Fleet a prémium autóbérlés lendületét és minőségét hozza el számodra. Modelljeink azonnal elérhetők, de egyedi igények alapján is beszerezzük a számodra tökéletes autót. A Noxus Fleet azoknak szól, akik a vezetés élményét keresik – kompromisszumok nélkül.",
    about_text2: "",
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
    menuTitle: "MENÜ",
    menuTerms: "ÁSZF",
    menuFaq: "GYIK",
    openingHoursTitle: "NYITVATARTÁS",
    openingHoursWeekdays: "H-P: 8:00 - 22:00",
    openingHoursWeekend: "SZO-V: 8:00 - 20:00",
    contactTitle: "KAPCSOLAT",
    contactPhone: "+36 30 784 6975",
    contactEmail: "booking@noxusfleet.com",
    socialTitle: "KÖVESS MINKET",
    footerBottom: "© 2025 NOXUS FLEET. MINDEN JOG FENNTARTVA."
  },
  en: {
    rent1: "Rental Cars",
    forsale1: "Available Cars",
    connection: "Connection",
    bookingTitle: "Our Favourite Cars",
    bookingSubtitle: "",
    welcomeTitle: "Welcome to NOXUS FLEET",
    about_title: "About Us",
    about_text1: "Noxus Fleet brings you the energy and quality of premium car rentals. Our models are available instantly, and we also source the perfect car tailored to your individual needs. Noxus Fleet is for those who seek the true experience of driving – without compromise.",
    about_text2: "",
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
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Frissíti a nyelvgomb szövegét is
  document.querySelectorAll('.lang-button').forEach(btn => {
    btn.textContent = lang === 'hu' ? 'English' : 'Magyar';
  });
}

function setInitialVisibility() {
  const isMobile = window.innerWidth <= 768;

  if (hamburgerIcon) hamburgerIcon.style.display = isMobile ? 'block' : 'none';
  if (hamburgerMenu) hamburgerMenu.classList.remove('open');
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
  hamburgerX.addEventListener('click', hideMenu);
  hamburgerIcon.removeEventListener('click', showMenu);
}

function hideMenu() {
  hamburgerMenu.classList.remove('open');
  document.body.style.overflow = 'auto';
  hamburgerIcon.setAttribute('aria-expanded', 'false');
  hamburgerX.removeEventListener('click', hideMenu);
  hamburgerIcon.addEventListener('click', showMenu);
}

document.addEventListener('DOMContentLoaded', () => {
  updateTexts();
  setInitialVisibility();

  // Nyelvváltó gomb eseménykezelés
  document.querySelectorAll('.lang-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('userLanguage') || 'hu';
      const newLang = currentLang === 'hu' ? 'en' : 'hu';
      localStorage.setItem('userLanguage', newLang);
      updateTexts();
    });
  });

  // Dropdown menük
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

    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("keydown", e => {
      if (["Enter", " ", "Space"].includes(e.key)) {
        e.preventDefault();
        toggleDropdown(e);
      }
    });
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(drop => {
        drop.classList.remove("open");
        drop.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
      });
    }
  });
});

window.addEventListener('resize', setInitialVisibility);
