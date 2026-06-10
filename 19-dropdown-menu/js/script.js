const principalBtn = document.getElementById('dropdown-trigger');
const panelPrincipal = document.getElementById('dropdown-menu');
const settingsBtn = document.getElementById('submenu-trigger');
const submenuSettings = document.getElementById('settings-submenu');
const dropdown= document.getElementById('profile-dropdown');

const principalItems = Array.from(panelPrincipal.querySelectorAll(':scope > .dropdown-item, :scope > .dropdown-item-wrapper > .dropdown-item'));
const submenuItems = Array.from(submenuSettings.querySelectorAll('.dropdown-item'));

// Helpers
const openPrincipalMenu = () => {
    panelPrincipal.classList.add('is-open');
    principalBtn.setAttribute('aria-expanded', 'true');
};

const closePrincipalMenu = ({ focusTrigger = false } = {}) => {
    panelPrincipal.classList.remove('is-open');
    principalBtn.setAttribute('aria-expanded', 'false');
    closeSubmenu();
    if (focusTrigger) principalBtn.focus();
};

const openSubmenu = () => {
    submenuSettings.classList.add('is-open');
    settingsBtn.setAttribute('aria-expanded', 'true');
};

const closeSubmenu = ({ focusTrigger = false } = {}) => {
    submenuSettings.classList.remove('is-open');
    settingsBtn.setAttribute('aria-expanded', 'false');
    if (focusTrigger) settingsBtn.focus();
};

const isSubmenuOpen = () => submenuSettings.classList.contains('is-open');

const isPrincipalOpen = () => panelPrincipal.classList.contains('is-open');

// ===== Menu principal toggle =====
const toggleMenuPrincipal = () => {
    if (isPrincipalOpen()) {
        closePrincipalMenu();
    } else {
        openPrincipalMenu();
        principalItems[0].focus();
    }
};

principalBtn.addEventListener('click', toggleMenuPrincipal);

// ===== Submenu toggle =====
const toggleSubmenu = () => {
    if (isSubmenuOpen()) {
        closeSubmenu();
    } else {
        openSubmenu();
        submenuItems[0].focus();
    }
};

settingsBtn.addEventListener('click', toggleSubmenu);

// ===== Outside click handler =====
const handleOutsideClick = (event) => {
    if (!dropdown.contains(event.target) && isPrincipalOpen()) {
        closePrincipalMenu();
    }
};

document.addEventListener('click', handleOutsideClick);

// ===== Keyboard Navigation =====

// Move focus in cyclic manner
const focusByOffset = (items, currentIndex, offset) => {
    const total = items.length;
    const nextIndex = (currentIndex + offset + total) % total;
    items[nextIndex].focus();
};

const handleKeydown = (event) => {
    const target = event.target;
    const inSubmenu = submenuSettings.contains(target);
    const items = inSubmenu ? submenuItems : principalItems;
    const currentIndex = items.indexOf(target);

    switch (event.key) {
        case 'ArrowDown':
            event.preventDefault();
            if (currentIndex !== -1) focusByOffset(items, currentIndex, 1);
            break;
        
        case 'ArrowUp':
            event.preventDefault();
            if (currentIndex !== -1) focusByOffset(items, currentIndex, -1);
            break;
        
        case 'ArrowRight':
            event.preventDefault();
            openSubmenu();
            submenuItems[0].focus();
            break;
        
        case 'ArrowLeft':
            if (inSubmenu) {
                event.preventDefault();
                closeSubmenu({ focusTrigger: true });
            }
            break;

        case 'Escape':
            event.preventDefault();
            if (inSubmenu) {
                closeSubmenu({ focusTrigger: true });
            } else if (isPrincipalOpen()) {
                closePrincipalMenu({ focusTrigger: true });
            }
            break;

        case 'Home':
            event.preventDefault();
            items[0].focus();
            break;

        case 'End':
            event.preventDefault();
            items[items.length - 1].focus();
            break;
        
        case 'Tab':
            event.preventDefault();
            closePrincipalMenu();
            break;
    }
};

dropdown.addEventListener('keydown', handleKeydown);

// ===== Items actions =====
const handleItemClick = (event) => {
    const item = event.currentTarget;

    if (item === settingsBtn) return;

    console.log('Executed Action:', item.textContent.trim());

    closePrincipalMenu({ focusTrigger: true });
};

[...principalItems, ...submenuItems].forEach((item) => {
    item.addEventListener('click', handleItemClick);
});