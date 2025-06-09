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
    test1: "I rented a BMW X6 for a home visit. It was a perfect choice.",
    test2: "Fast administration, clean car, fair conditions. I can only recommend them.",
    test3: "I rented a car for two months for work in the countryside. Everything went smoothly.",
    test4: "The BMW 440i was a great choice. A truly premium experience.",
    test5: "Transparent prices, no hidden fees. That’s rare these days.",
    test6: "I’ve been looking for such a flexible service for a long time. Finally found it here.",
    test7: "I rented a BMW 430i Cabrio for a week – excellent condition, great experience.",
    test8: "The rental process was quick, the car spotless. I'm completely satisfied.",
    test9: "The BMW X5 was comfortable and well-equipped. The team was professional too.",
    test10: "I tried the BMW M4 – it was an amazing experience, everything went smoothly."

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
