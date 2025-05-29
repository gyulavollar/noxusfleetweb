document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const header = document.querySelector('header');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('open');
      
      // Toggle menu state
      mobileMenu.classList.toggle('open');
      menuToggle.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'auto' : 'hidden';
      
      // Update ARIA attributes
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // Dropdown functionality for mobile and desktop
  const dropdownToggles = document.querySelectorAll('.dropdown > button, .dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      const dropdown = this.closest('.dropdown');
      const isOpen = dropdown.classList.contains('open');
      
      // Close all other dropdowns first
      document.querySelectorAll('.dropdown.open').forEach(openDropdown => {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove('open');
          openDropdown.querySelector('button').setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('open');
      this.setAttribute('aria-expanded', String(!isOpen));
      
      // Prevent event from bubbling to document click handler
      e.stopPropagation();
    });
    
    // Keyboard accessibility
    toggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown.open').forEach(dropdown => {
      dropdown.classList.remove('open');
      dropdown.querySelector('button').setAttribute('aria-expanded', 'false');
    });
  });

  // Handle window resize
  function handleResize() {
    // Close mobile menu if switching to desktop view
    if (window.innerWidth > 768 && mobileMenu) {
      mobileMenu.classList.remove('open');
      menuToggle?.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  }
  
  window.addEventListener('resize', handleResize);
});
