const hamburguerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');
const mobileOverlay = document.getElementById('mobileOverlay');

function closeMenu() {
    sidebar.classList.remove('is-open');
    mobileOverlay.classList.remove('is-visible');
    hamburguerBtn.setAttribute('aria-expanded', 'false');
}

function openMenu() {
    sidebar.classList.add('is-open');
    mobileOverlay.classList.add('is-visible');
    hamburguerBtn.setAttribute('aria-expanded', 'true');
}

function toggleMenu() {
    const isOpen = sidebar.classList.contains('is-open');

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }

    if (hamburguerBtn && sidebar && mobileOverlay) {
        hamburguerBtn.setAttribute('aria-expanded', 'false');

        hamburguerBtn.setAttribute('click', toggleMenu);
        mobileOverlay.setAttribute('click', closeMenu);

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });
    }
}

// Listeners for menu events
hamburguerBtn.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);