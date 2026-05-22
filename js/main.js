const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const desktopMenuBtn = document.getElementById('desktopMenuBtn');
const sideDrawer = document.getElementById('sideDrawer');
const menuOverlay = document.getElementById('menuOverlay');
const drawerCollapseBtn = document.getElementById('drawerCollapseBtn');
const profileBtn = document.getElementById('profileBtn');

if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        AuthGuard.handleUserProfileAccess();
    });
}

const interactiveButtons = document.querySelectorAll('.interactive-btn');

const allSelectableItems = document.querySelectorAll(
    '.nav-link, .drawer-nav-item, .drawer-utility-item'
);

let drawerOpen = false;

/* =========================
   BUTTON ANIMATION ENGINE
========================= */
function animatePress(button) {
    if (!button) return;

    button.style.transform = 'scale(0.94)';

    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

/* click animation */
interactiveButtons.forEach(button => {
    button.addEventListener('click', () => {
        animatePress(button);
    });
});

/* =========================
   DRAWER CONTROLS
========================= */
function openDrawer() {
    if (!sideDrawer || !menuOverlay) return;

    sideDrawer.classList.add('open');
    menuOverlay.classList.add('show');
    drawerOpen = true;
}

function closeDrawer() {
    if (!sideDrawer || !menuOverlay) return;

    sideDrawer.classList.remove('open');
    menuOverlay.classList.remove('show');
    drawerOpen = false;
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openDrawer);
}

if (desktopMenuBtn) {
    desktopMenuBtn.addEventListener('click', openDrawer);
}

if (drawerCollapseBtn) {
    drawerCollapseBtn.addEventListener('click', closeDrawer);
}

if (menuOverlay) {
    menuOverlay.addEventListener('click', closeDrawer);
}

/* =========================
   SINGLE ACTIVE NAV SYSTEM
========================= */
function clearAllActiveStates() {
    allSelectableItems.forEach(item => {
        item.classList.remove('active');
    });
}

allSelectableItems.forEach(item => {
    item.addEventListener('click', () => {
        clearAllActiveStates();
        item.classList.add('active');
    });
});

/* =========================
   RESPONSIVE SAFETY RESET
========================= */
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && drawerOpen) {
        closeDrawer();
    }
});