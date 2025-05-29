document.addEventListener('DOMContentLoaded', function() {
    // Elemek kiválasztása
    const hamburgerIcon = document.querySelector("#hamburger-icon");
    const hamburgerMenu = document.querySelector("#hamburger-menu");
    const hamburgerX = document.querySelector("#hamburger-x");
    const body = document.body;
    const html = document.documentElement;

    // Menü állapot kezelése
    let isMenuOpen = false;

    // Menü megnyitása/bezárása
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Menü állapot beállítása
        hamburgerMenu.classList.toggle('open', isMenuOpen);
        body.classList.toggle('menu-open', isMenuOpen);
        html.style.overflow = isMenuOpen ? 'hidden' : '';
        
        // Ikonok váltása
        hamburgerIcon.style.display = isMenuOpen ? 'none' : 'block';
        hamburgerX.style.display = isMenuOpen ? 'block' : 'none';
        
        // ARIA attribútumok frissítése
        const activeButton = isMenuOpen ? hamburgerX : hamburgerIcon;
        activeButton.setAttribute('aria-expanded', isMenuOpen);
        activeButton.setAttribute('aria-label', isMenuOpen ? 'Menü bezárása' : 'Menü megnyitása');
        
        // Fókusz átadása a látható gombnak
        activeButton.focus();
    }

    // Eseménykezelők
    hamburgerIcon.addEventListener('click', toggleMenu);
    hamburgerX.addEventListener('click', toggleMenu);

    // Dropdown menük kezelése
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    
    dropdownToggles.forEach(toggle => {
        const parent = toggle.closest(".dropdown");
        
        toggle.addEventListener("click", function(e) {
            e.preventDefault();
            const isOpen = parent.classList.toggle("open");
            toggle.setAttribute("aria-expanded", isOpen);
            
            // Zárja a többi dropdownot
            document.querySelectorAll(".dropdown").forEach(drop => {
                if (drop !== parent) {
                    drop.classList.remove("open");
                    const toggleBtn = drop.querySelector(".dropdown-toggle");
                    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
                }
            });
        });
    });

    // Kattintás a menüön kívül
    document.addEventListener("click", function(e) {
        // Ha a menü nyitva van és a fejlécen kívülre kattintanak
        if (isMenuOpen && !e.target.closest("header")) {
            toggleMenu();
        }
        
        // Dropdown bezárása, ha a dropdownon kívülre kattintanak
        if (!e.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(drop => {
                drop.classList.remove("open");
                const toggleBtn = drop.querySelector(".dropdown-toggle");
                if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
            });
        }
    });

    // ESC billentyűre bezárás
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (isMenuOpen) {
                toggleMenu();
            }
            
            // Dropdownok bezárása ESC-re
            document.querySelectorAll(".dropdown.open").forEach(drop => {
                drop.classList.remove("open");
                const toggleBtn = drop.querySelector(".dropdown-toggle");
                if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
            });
        }
    });

    // Reszponzivitás kezelése
    function handleResponsive() {
        if (window.innerWidth > 768) {
            // Desktop nézet - menü bezárása
            if (isMenuOpen) {
                toggleMenu();
            }
            hamburgerIcon.style.display = 'none';
            hamburgerX.style.display = 'none';
        } else {
            // Mobile nézet - hamburger ikon megjelenítése
            hamburgerIcon.style.display = 'block';
            hamburgerX.style.display = 'none';
        }
        
        // Dropdownok bezárása képméret változásnál
        document.querySelectorAll(".dropdown").forEach(drop => {
            drop.classList.remove("open");
            const toggleBtn = drop.querySelector(".dropdown-toggle");
            if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
        });
    }

    // Eseményfigyelők
    window.addEventListener('resize', handleResponsive);
    handleResponsive(); // Kezdeti állapot beállítása
});
