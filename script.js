// ====== DOM ELEMENTS ======
const hamburgerIcon = document.querySelector("#hamburger-icon"),
      hamburgerMenu = document.querySelector("#hamburger-menu"),
      hamburgerX = document.querySelector("#hamburger-x"),
      menuToggle = document.querySelector('.menu-toggle'),
      mobileMenu = document.getElementById('mobileMenu'),
      body = document.body;

// ====== TRANSLATIONS ======
const translations = {
  hu: { /* Hungarian translations */ },
  en: { /* English translations */ }
};

// ====== LANGUAGE FUNCTIONS ======
function updateLanguageBlocks() {
  const lang = localStorage.getItem('userLanguage') || 'hu';
  document.querySelectorAll('[data-langblock]').forEach(block => {
    block.style.display = 'none';
  });
  document.querySelectorAll(`[data-langblock="${lang}"]`).forEach(block => {
    block.style.display = 'block';
  });
}

function updateTexts() {
  const lang = localStorage.getItem('userLanguage') || 'hu',
        exchangeRate = 410;

  // Update translatable elements
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    el.textContent = translations[lang]?.[key] || el.dataset.default || '';
  });

  // Update currency
  document.querySelectorAll('.card').forEach(card => {
    const weeklyEl = card.querySelector('[data-weekly-huf]'),
          monthlyEl = card.querySelector('[data-monthly-huf]');
    
    if (weeklyEl && monthlyEl) {
      const weeklyHUF = parseInt(weeklyEl.dataset.weeklyHuf),
            monthlyHUF = parseInt(monthlyEl.dataset.monthlyHuf);
      
      if (lang === 'en') {
        weeklyEl.textContent = `€${Math.round(weeklyHUF / exchangeRate)}`;
        monthlyEl.textContent = `€${Math.round(monthlyHUF / exchangeRate)}`;
      } else {
        weeklyEl.textContent = `${weeklyHUF.toLocaleString('hu-HU')} Ft`;
        monthlyEl.textContent = `${monthlyHUF.toLocaleString('hu-HU')} Ft`;
      }
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-button, #langSwitchDesktop, #langSwitchMobile').forEach(btn => {
    btn.textContent = lang === 'hu' ? 'English' : 'Magyar';
  });

  updateLanguageBlocks();
}

// ====== MENU FUNCTIONS ======
function setInitialVisibility() {
  const isMobile = window.innerWidth <= 768;
  hamburgerIcon.style.display = isMobile ? 'block' : 'none';
  hamburgerMenu.classList.remove('open');
  body.style.overflow = 'auto';
  
  if (isMobile) {
    hamburgerIcon.addEventListener('click', showMenu);
    hamburgerX.addEventListener('click', hideMenu);
  }
}

function showMenu() {
  hamburgerMenu.classList.add('open');
  body.style.overflow = 'hidden';
  hamburgerIcon.setAttribute('aria-expanded', 'true');
  hamburgerX.addEventListener('click', hideMenu);
}

function hideMenu() {
  hamburgerMenu.classList.remove('open');
  body.style.overflow = 'auto';
  hamburgerIcon.setAttribute('aria-expanded', 'false');
  hamburgerIcon.addEventListener('click', showMenu);
}

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  
  if (isOpen) {
    body.style.cssText = 'overflow: hidden; position: fixed; width: 100%;';
  } else {
    body.style.cssText = '';
    document.querySelectorAll('.mobile-menu .dropdown').forEach(d => d.classList.remove('open'));
  }
}

// ====== DROPDOWN FUNCTIONS ======
function setupDropdowns() {
  // Desktop dropdowns
  document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
    const parent = toggle.closest(".dropdown");
    
    const toggleDropdown = e => {
      const isOpen = parent.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      
      document.querySelectorAll(".dropdown.open").forEach(drop => {
        if (drop !== parent) {
          drop.classList.remove("open");
          drop.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
        }
      });
      
      e.stopPropagation();
    };
    
    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("keydown", e => ["Enter", " ", "Space"].includes(e.key) && toggleDropdown(e));
  });

  // Mobile dropdowns
  document.querySelectorAll('.mobile-menu .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.closest('.dropdown');
      dropdown.classList.toggle('open');
      
      if (dropdown.classList.contains('open')) {
        document.querySelectorAll('.mobile-menu .dropdown').forEach(d => {
          if (d !== dropdown) d.classList.remove('open');
        });
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown.open").forEach(drop => {
        drop.classList.remove("open");
        drop.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
      });
    }
  });
}

// ====== TESTIMONIAL SLIDER ======
function initTestimonialSlider() {
  let index = 0;
  const slides = document.querySelectorAll(".testimonial-slide");
  
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// ====== CARD FLIP ======
function setupCardFlip() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('flipped'));
  });
}

// ====== INITIALIZATION ======
document.addEventListener('DOMContentLoaded', () => {
  updateTexts();
  setInitialVisibility();
  setupDropdowns();
  initTestimonialSlider();
  setupCardFlip();
  
  // Language switch
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

window.addEventListener('resize', setInitialVisibility);
