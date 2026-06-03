/*===============================
    NAVBAR HAMBURGUER LOGIC
    I've copy-paste from my
    Kiwiland Todo app project
    Some day it will be finished
    it hahahaha
  ================================ */
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // proof that toggle and menu are loaded to avoid errors
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarToggle.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');

            const isActive = navbarToggle.getAttribute.contains('aria-controls');
            navbarToggle.setAttribute('aria-controls', !isActive);
        });
    }
});