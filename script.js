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
    about_text1: "A NOXUS FLEET a vezetés élményét emeli új szintre – sportos és prémium kategóriás autók széles választékát kínáljuk mindazoknak, akik nem érik be az átlagossal. Legyen szó bérlésről vagy vásárlásról, nálunk mindenki megtalálja a stílusához illő modellt. Kínálatunk folyamatosan frissül, megbízható partnereinken keresztül jutunk hozzá a legjobb járművekhez. Így biztosítjuk, hogy ügyfeleink mindig kifogástalan autóba ülhetnek be. A NOXUS FLEET-nél a minőség, rugalmasság és vezetési élmény találkozik.",
    about_text2: "",
    menuTitle: "MENÜ",
    menuTerms: "ÁSZF",
    menuFaq: "GYIK",
    openingHoursTitle: "NYITVATARTÁS",
    openingHoursWeekdays: "H-P: 8:00 - 22:00",
    openingHoursWeekend: "SZO-V: 8:00 - 20:00",
    contactTitle: "KAPCSOLAT",
    contactPhone: "📞 +36 30 784 6975",
    contactEmail: "📧 booking@noxusfleet.com",
    socialTitle: "KÖVESS MINKET",
    footerBottom: "© 2025 NOXUS FLEET. MINDEN JOG FENNTARTVA.",
    test1: "Hazalátogatáshoz béreltem egy BMW X6-ot. Tökéletes választás volt.",
    test2: "Gyors ügyintézés, tiszta autó, korrekt feltételek. Csak ajánlani tudom.",
    test3: "Két hónapra béreltem autót. Minden zökkenőmentesen zajlott.",
    test4: "A BMW 440i nagyon jó választás volt. Igazi prémium élmény.",
    test5: "Átlátható árak, nincsenek rejtett költségek. Ez ritka manapság.",
    test6: "Régóta kerestem ilyen rugalmas szolgáltatót. Itt végre megtaláltam.",
    test7: "Béreltem egy BMW 430i Cabrio-t egy hétre – kiváló állapot, nagy élmény.",
    test8: "A bérlés gyors volt, az autó makulátlan. Teljesen elégedett vagyok.",
    test9: "A BMW X5 kényelmes és jól felszerelt volt. A csapat is profi.",
    test10: "Próbáltam a BMW M4-et – nagy élmény volt, simán ment vele minden.",
    prod:"Gyártási év:",
    fuel:"Üzemanyag:",
    performance:"Teljesítmény:",
    drive:"Hajtás:",
    shift:"Sebességváltó:",
    diesel:"Dízel",
    gas:"Benzin",
    elec:"Elektromos",
    four:"Négykerék",
    front:"Elsőkerék",
    rear:"Hátsókerék",
    weekly:"Heti ár:",
    monthly:"Havi ár:",
    hp:"LE",
    bookingos:"Foglalási Opciók",
    auto:"Automata",
    contus:"Üzenjen nekünk!",
    details:"RÉSZLETEK",
    rentslogen:"Prémium élmény, kulcsrakészen – válogasson exkluzív bérautóink közül!",
    rentnotice:"A weboldalon feltüntetett árak tájékoztató jellegűek, azok előzetes értesítés nélkül változhatnak. A kaució összege gépjárműtípusonként eltérő lehet. Bővebb információért és egyedi ajánlatért kérjük, lépjen velünk kapcsolatba elérhetőségeink egyikén!",
    sellslogen:"Válogatott prémium autók – minőség, amely hosszú távon is értéket képvisel.",
    sellnotice:"Az oldalon feltüntetett árak irányárak, amelyek az aktuális piaci viszonyok függvényében változhatnak. Amennyiben autóink valamelyike felkeltette érdeklődését, kérjük, lépjen kapcsolatba velünk az elérhetőségeink egyikén — személyre szabott ajánlattal és részletes tájékoztatással állunk rendelkezésére.",
    contactus:"Lépjen velünk kapcsolatba",
    contacttext:"Ha bármilyen kérdése van az autóbérléssel kapcsolatban, töltse ki az alábbi űrlapot vagy hívjon minket!",
    writeus:"Írjon nekünk",
    place:"Az autók átadási helye:",
    name:"Név",
    phone:"Telefonszám",
    email:"Email cím",
    text:"Üzenet",
    send:"Üzenet elküldése"
  },
  en: {
    rent1: "FOR RENT",
    forsale1: "FOR SALE",
    connection: "CONTACT",
    bookingTitle: "OUR FAVOURITE CARS",
    bookingSubtitle: "",
    welcomeTitle: "WELCOME TO THE WORLD OF NOXUS FLEET",
    about_title: "ABOUT US",
    about_text1: "NOXUS FLEET takes the driving experience to the next level – offering a wide selection of sporty and premium-class vehicles for those who won't settle for average. Whether you're looking to rent or buy, you'll find the model that matches your style.Our inventory is constantly updated through trusted partners, ensuring access to top-condition vehicles at all times. This way, our clients can always get behind the wheel of a flawless car. At NOXUS FLEET, quality, flexibility, and driving pleasure come together.",
    about_text2: "",
    menuTitle: "MENU",
    menuTerms: "TERMS & CONDITIONS",
    menuFaq: "FAQ",
    openingHoursTitle: "OPENING HOURS",
    openingHoursWeekdays: "M-F: 8:00 - 22:00",
    openingHoursWeekend: "SAT-SUN: 8:00 - 20:00",
    contactTitle: "CONTACT",
    contactPhone: "📞 +36 30 784 6975",
    contactEmail: "📧 booking@noxusfleet.com",
    socialTitle: "FOLLOW US",
    footerBottom: "© 2025 NOXUS FLEET. ALL RIGHTS RESERVED.",
    test1: "I rented a BMW X6 for a home visit. It was a perfect choice.",
    test2: "Fast administration, clean car, fair conditions. I can only recommend them.",
    test3: "I rented a car for two months. Everything went smoothly.",
    test4: "The BMW 440i was a great choice. A truly premium experience.",
    test5: "Transparent prices, no hidden fees. That's rare these days.",
    test6: "I've been looking for such a flexible service for a long time. Finally found it here.",
    test7: "I rented a BMW 430i Cabrio for a week – excellent condition, great experience.",
    test8: "The rental process was quick, the car spotless. I'm completely satisfied.",
    test9: "The BMW X5 was comfortable and well-equipped. The team was professional too.",
    test10: "I tried the BMW M4 – it was an amazing experience, everything went smoothly.",
    prod:"Production:",
    fuel:"Fuel:",
    performance:"Performance:",
    drive:"Drive:",
    shift:"Transmission:",
    diesel:"Diesel",
    gas:"Petrol",
    elec:"Electric",
    four:"All-Wheel",
    front:"Front-Wheel",
    rear:"Rear-Wheel",
    weekly:"Weekly price:",
    monthly:"Monthly price:",
    hp:"HP",
    bookingos:"Booking Options",
    auto:"Automatic",
    contus:"Contact us!",
    details:"VIEW DETAILS",
    rentslogen:"A Premium Experience, Delivered Turnkey – Discover Our Exclusive Fleet",
    rentnotice:"All prices listed on our website are indicative and subject to change without prior notice. Security deposit amounts may vary depending on the vehicle category. For comprehensive details or a bespoke offer, we invite you to contact us via any of our available channels.",
    sellslogen:"Curated Premium Vehicles – Excellence That Endures",
    sellnotice:"The prices presented serve as guide rates and may adjust in accordance with market conditions. Should one of our vehicles catch your eye, please reach out — we will be pleased to provide a personalized proposal along with full information tailored to your needs.",
    contactus: "Contact Us",
    contacttext: "If you have any questions regarding car rental, please fill out the form below or give us a call!",
    writeus: "Write to Us",
    place: "Vehicle Handover Location:",
    name: "Name",
    phone: "Phone Number",
    email: "Email Address",
    text: "Message",
    send:"Send Message"
  }
};

// === Update Language Blocks Visibility ===
function updateLanguageBlocks() {
  const lang = localStorage.getItem('userLanguage') || 'hu';
  document.querySelectorAll('[data-langblock]').forEach(block => {
    // Minden nyelvi blokkot elrejtünk először
    block.style.display = 'none';
    
    // Csak az aktuális nyelvű blokkot jelenítjük meg
    if (block.getAttribute('data-langblock') === lang) {
      block.style.display = 'block';
    }
  });
}

// === Update Text Based on Selected Language ===
function updateTexts() {
  const lang = localStorage.getItem('userLanguage') || 'hu';

  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else if (el.dataset.default) {
      el.textContent = el.dataset.default;
    }
  });

  // Update language blocks
  updateLanguageBlocks();

  // === Currency Conversion ===
  const exchangeRate = 410;
  document.querySelectorAll('.card').forEach(card => {
    const weeklyPriceEl = card.querySelector('[data-weekly-huf]');
    const monthlyPriceEl = card.querySelector('[data-monthly-huf]');

    if (!weeklyPriceEl || !monthlyPriceEl) return;

    const weeklyHUF = parseInt(weeklyPriceEl.dataset.weeklyHuf);
    const monthlyHUF = parseInt(monthlyPriceEl.dataset.monthlyHuf);

    if (lang === 'en') {
      const weeklyEUR = Math.round(weeklyHUF / exchangeRate);
      const monthlyEUR = Math.round(monthlyHUF / exchangeRate);
      weeklyPriceEl.textContent = `€${weeklyEUR}`;
      monthlyPriceEl.textContent = `€${monthlyEUR}`;
    } else {
      weeklyPriceEl.textContent = weeklyHUF.toLocaleString('hu-HU') + ' Ft';
      monthlyPriceEl.textContent = monthlyHUF.toLocaleString('hu-HU') + ' Ft';
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
  updateLanguageBlocks();
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
