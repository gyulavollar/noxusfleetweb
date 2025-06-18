// ====================== DOM ELEMENT REFERENCES ======================
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerX = document.querySelector("#hamburger-x");
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.body;

// ====================== TRANSLATION SYSTEM ======================
const translations = {
  hu: {
    // Hungarian translations (unchanged from your original)
    rent1: "BÉRELHETŐ AUTÓK",
    forsale1: "ELADÓ AUTÓK",
    // ... rest of Hungarian translations ...
  },
  en: {
    // English translations (unchanged from your original)
    rent1: "FOR RENT",
    forsale1: "FOR SALE",
    // ... rest of English translations ...
  }
};

// ====================== LANGUAGE MANAGEMENT ======================

/**
 * Updates visibility of language-specific blocks
 */
function updateLanguageBlocks() {
  const lang = localStorage.getItem('userLanguage') || 'hu';
  
  // Hide all language blocks
  document.querySelectorAll('[data-langblock]').forEach(block => {
    block.style.display = 'none';
  });
  
  // Show only blocks for current language
  const activeBlocks = document.querySelectorAll(`[data-langblock="${lang}"]`);
  activeBlocks.forEach(block => {
    block.style.display = 'block';
  });
}

/**
 * Updates all text elements based on selected language
 */
function updateTexts() {
  const lang = localStorage.getItem('userLanguage') || 'hu';

  // Update all translatable elements
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    } else if (el.dataset.default) {
      el.textContent = el.dataset.default;
    }
  });

  updateLanguageBlocks();

  // Currency conversion for cards
  const exchangeRate = 410;
  document.querySelectorAll('.card').forEach(card => {
    const weeklyPriceEl = card.querySelector('[data-weekly-huf]');
    const monthlyPriceEl = card.querySelector('[data-monthly-huf]');

    if (weeklyPriceEl && monthlyPriceEl) {
      const weeklyHUF = parseInt(weeklyPriceEl.dataset.weeklyHuf);
      const monthlyHUF = parseInt(monthlyPriceEl.dataset.monthlyHuf);

      if (lang === 'en') {
        weeklyPriceEl.textContent = `€${Math.round(weeklyHUF / exchangeRate)}`;
        monthlyPriceEl.textContent = `€${Math.round(monthlyHUF / exchangeRate)}`;
      } else {
        weeklyPriceEl.textContent = weeklyHUF.toLocaleString('hu-HU') + ' Ft';
        monthlyPriceEl.textContent = monthlyHUF.toLocaleString('hu-HU') + ' Ft';
      }

      // Fix for card flip language transition
      if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => card.classList.add('flipped'), 10);
      }
    }
  });

  // Update language switch button text
  document.querySelectorAll('.lang-button, #langSwitchDesktop, #langSwitchMobile').forEach(btn => {
    btn.textContent = lang === 'hu' ? 'English' : 'Magyar';
  });
}

// ====================== MENU SYSTEM ======================

/**
 * Sets initial menu visibility based on screen size
 */
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

/**
 * Shows mobile menu
 */
function showMenu() {
  hamburgerMenu.classList.add('open');
  body.style.overflow = 'hidden';
  hamburgerIcon.setAttribute('aria-expanded', 'true');
  hamburgerX.addEventListener('click', hideMenu);
  hamburgerIcon.removeEventListener('click', showMenu);
}

/**
 * Hides mobile menu
 */
function hideMenu() {
  hamburgerMenu.classList.remove('open');
  body.style.overflow = 'auto';
  hamburgerIcon.setAttribute('aria-expanded', 'false');
  hamburgerX.removeEventListener('click', hideMenu);
  hamburgerIcon.addEventListener('click', showMenu);
}

/**
 * Toggles mobile menu
 */
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

// ====================== DROPDOWN MENUS ======================

/**
 * Handles desktop dropdown menu behavior
 */
function setupDesktopDropdowns() {
  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
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

  // Close dropdowns when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(drop => {
        drop.classList.remove("open");
        drop.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
      });
    }
  });
}

/**
 * Handles mobile dropdown menu behavior
 */
function setupMobileDropdowns() {
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

  // Close mobile dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.mobile-menu .dropdown')) {
      document.querySelectorAll('.mobile-menu .dropdown').forEach(dropdown => {
        dropdown.classList.remove('open');
      });
    }
  });
}

// ====================== TESTIMONIAL SLIDER ======================

/**
 * Initializes testimonial slider
 */
function initTestimonialSlider() {
  let index = 0;
  const slides = document.querySelectorAll(".testimonial-slide");

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
  
  setInterval(showNextSlide, 4000);
}

// ====================== CARD FLIP ANIMATION ======================

/**
 * Sets up card flip animations
 */
function setupCardFlip() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
}

// ====================== INITIALIZATION ======================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all systems
  updateTexts();
  updateLanguageBlocks();
  setInitialVisibility();
  setupDesktopDropdowns();
  setupMobileDropdowns();
  initTestimonialSlider();
  setupCardFlip();

  // Language switch event listeners
  document.querySelectorAll('.lang-button, #langSwitchDesktop, #langSwitchMobile').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentLang = localStorage.getItem('userLanguage') || 'hu';
      const newLang = currentLang === 'hu' ? 'en' : 'hu';
      localStorage.setItem('userLanguage', newLang);
      updateTexts();
    });
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', toggleMenu);
});

// Handle window resize
window.addEventListener('resize', setInitialVisibility);
