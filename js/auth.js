//  Responsive Screen Logic  //

function checkLandscape() {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isLandscape = window.innerHeight < window.innerWidth && window.innerHeight < 550;

    const isDesktopModeOnMobile =
        isTouchDevice &&
        window.innerWidth > 768;

    if (isDesktopModeOnMobile) {
        document.body.classList.add("mobile-desktop");
    } else {
        document.body.classList.remove("mobile-desktop");
    }

    if (isTouchDevice && isLandscape) {
        document.body.classList.add("mobile-landscape");
    } else {
        document.body.classList.remove("mobile-landscape");
    }
}

window.addEventListener("resize", checkLandscape);
window.addEventListener("DOMContentLoaded", checkLandscape);

document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.getElementById("authContainer");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");
    const backToLogin = document.getElementById("backToLogin");

    if (switchToSignup) {
        switchToSignup.addEventListener("click", () => {
            authContainer.classList.add("signup-active");
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener("click", () => {
            authContainer.classList.remove("signup-active");
        });
    }

    if (backToLogin) {
        backToLogin.addEventListener("click", () => {
            authContainer.classList.remove("signup-active");
        });
    }
});

// --- Auth Page Switching Animation --- //

document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.getElementById("authContainer");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");
    const backToLogin = document.getElementById("backToLogin");

    if (switchToSignup && authContainer) {
        switchToSignup.addEventListener("click", () => {
            authContainer.classList.add("signup-active");
            if (typeof checkLandscape === "function") checkLandscape();
        });
    }

    if (switchToLogin && authContainer) {
        switchToLogin.addEventListener("click", () => {
            authContainer.classList.remove("signup-active");
            if (typeof checkLandscape === "function") checkLandscape();
        });
    }

    if (backToLogin && authContainer) {
        backToLogin.addEventListener("click", () => {
            authContainer.classList.remove("signup-active");
            if (typeof checkLandscape === "function") checkLandscape();
        });
    }
});
