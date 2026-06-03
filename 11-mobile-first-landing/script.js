/*
====================================
Mobile First Landing Page
Be careful, Ferris is watching you!
====================================
*/
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navbarToggle");
    const menu = document.getElementById("navbarMenu");

    // Helper function to close menu
    const closeMenu = () => {
        toggle.classList.remove("is-active");
        menu.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
    };

    // Helper function to open menu
    const openMenu = () => {
        toggle.classList.add("is-active");
        menu.classList.add("is-active");
        toggle.setAttribute("aria-expanded", "true");
    }
    
    if (toggle && menu) {
        toggle.addEventListener("click", (e) => {
            // Prevent click from bubbling up to document
            e.stopPropagation(); 
    
            const isOpen = menu.classList.contains("is-active");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // Close if click in link (Smooth scroll)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                // Prevent default behavior and smoothly scroll to the target section
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                closeMenu();
            }
        });
    });

    document.addEventListener("click", (e) => {
        const isClickInside = menu.contains(e.target) || toggle.contains(e.target);
        if (!isClickInside && menu.classList.contains("is-active")) {
            closeMenu();
        }
    });
});
