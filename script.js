// === MENU TOGGLE ELEMENTS ===
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

// === TRANSLATIONS ===
const translations = {
  hu: {
    rent1: "BÉRELHETŐ AUTÓK",
    forsale1: "ELADÓ AUTÓK",
    connection: "KAPCSOLAT",
    bookingTitle: "LEGKEDVELTEBB AUTÓINK",
    bookingSubtitle: "",
    welcomeTitle: "ÜDVÖZÖLJÜK A NOXUS FLEET VILÁGÁBAN",
    about_title: "RÓLUNK",
    about_text1: "A Noxus Fleet a prémium autóbérlés lendületét és minőségét hozza el számodra...",
    about_text2: "",
    testimons1: "Nagyon elégedett vagyok az autóbérlés gyorsaságával és egyszerűségével!",
    testimons2: "A bérlési folyamat gördülékeny volt, az autó tökéletes állapotban érkezett.",
    testimons3: "Barátságos ügyfélszolgálat, segítőkész munkatársak. Csak ajánlani tudom!",
    testimons4: "Az autó kényelmes és tiszta volt, minden elvárásomat kielégítette.",
    testimons5: "Rugalmas feltételek és korrekt árak, örömmel bérelek itt újra.",
    testimons6: "Gyors válaszidő és egyszerű foglalási rendszer, remek élmény volt.",
    testimons7: "Az autó műszakilag kifogástalan volt, biztonságban éreztem magam vele.",
    testimons8: "A bérlés során minden kérdésemre részletes választ kaptam.",
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
    footerBottom: "© 2025 NOXUS FLEET. MINDEN JOG FENNTARTVA.",
    test1: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test2: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test3: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test4: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test5: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test6: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test7: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test8: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test9: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test10: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt."
  },
  en: {
    rent1: "Rental Cars",
    forsale1: "Available Cars",
    connection: "Connection",
    bookingTitle: "Our Favourite Cars",
    bookingSubtitle: "",
    welcomeTitle: "Welcome to NOXUS FLEET",
    about_title: "About Us",
    about_text1: "Noxus Fleet brings you the energy and quality of premium car rentals...",
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
    footerBottom: "© 2025 Noxus Fleet. All rights reserved.",
    test1: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test2: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test3: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test4: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test5: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test6: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test7: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test8: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test9: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test10: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt."
  }
};

// === Update Text Based on Selected Language ===
function updateTexts() {
  const lang = localStorage.getItem('userLanguage') || 'hu';

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update button text
  const langButtons = document.querySelectorAll('.lang-button, #langSwitchDesktop, #langSwitchMobile');
  langButtons.forEach(btn => {
    btn.textContent = lang === 'hu' ? 'English' : 'Magyar';
  });
}

// === Set Menu Visibility Based on Screen Size ===
function setInitialVisibility() {
  const isMobile = window.innerWidth <= 768;

  if (hamburgerIcon) hamburgerIcon.style.display = isMobile ? 'block' : 'none';
  if (hamburgerMenu) hamburgerMenu.classList.remove('open');
  body.style.overflow = 'auto';

  if (hamburgerIcon && hamburgerX) {
    hamburgerIcon.removeEventListener('click', showMenu);
    hamburgerX.removeEventListener('click', hideMenu);
    if (isMobile) hamburgerIcon.addEventListener('click', showMenu);
  }
}

// === Show Mobile Menu ===
function showMenu() {
  hamburgerMenu.classList.add('open');
  body.style.overflow = 'hidden';
  hamburgerIcon.setAttribute('aria-expanded', 'true');
  hamburgerX.addEventListener('click', hideMenu);
  hamburgerIcon.removeEventListener('click', showMenu);
}

// === Hide Mobile Menu ===
function hideMenu() {
  hamburgerMenu.classList.remove('open');
  body.style.overflow = 'auto';
  hamburgerIcon.setAttribute('aria-expanded', 'false');
  hamburgerX.removeEventListener('click', hideMenu);
  hamburgerIcon.addEventListener('click', showMenu);
}

// === Main Logic on Page Load ===
document.addEventListener('DOMContentLoaded', () => {
  updateTexts();
  setInitialVisibility();

  // Unified language switch logic
  const langButtons = document.querySelectorAll('.lang-button, #langSwitchDesktop, #langSwitchMobile');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      let currentLang = localStorage.getItem('userLanguage') || 'hu';
      let newLang = currentLang === 'hu' ? 'en' : 'hu';
      localStorage.setItem('userLanguage', newLang);
      updateTexts();
    });
  });

  // Desktop Dropdown Menus
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach(toggle => {
    const parent = toggle.closest(".dropdown");

    function toggleDropdown(e) {
      const isOpen = parent.classList.contains("open");

      // Close other open dropdowns
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

// === Adjust Visibility on Resize ===
window.addEventListener('resize', setInitialVisibility);

// === Toggle Mobile Menu ===
function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

  if (isOpen) {
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.width = '100%';
  } else {
    body.style.overflow = '';
    body.style.position = '';
    body.style.width = '';

    document.querySelectorAll('.mobile-menu .dropdown').forEach(dropdown => {
      dropdown.classList.remove('open');
    });
  }
}
menuToggle.addEventListener('click', toggleMenu);

// === Mobile Dropdown Menu Behavior ===
document.querySelectorAll('.mobile-menu .dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    const dropdown = this.closest('.dropdown');
    dropdown.classList.toggle('open');

    if (dropdown.classList.contains('open')) {
      document.querySelectorAll('.mobile-menu .dropdown').forEach(other => {
        if (other !== dropdown) other.classList.remove('open');
      });
    }
  });
});

document.addEventListener('click', function(e) {
  if (!e.target.closest('.mobile-menu .dropdown')) {
    document.querySelectorAll('.mobile-menu .dropdown').forEach(dropdown => {
      dropdown.classList.remove('open');
    });
  }
});

// === Testimonial Slider ===
let index = 0;
const slides = document.querySelectorAll(".testimonial-slide");

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
setInterval(showNextSlide, 4000);

// === Card Flip Animation ===
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
