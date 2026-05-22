//  Responsive Screen Logic  //

function checkLandscape() {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isLandscape = window.innerHeight < window.innerWidth && window.innerHeight < 550;

    if (isTouchDevice && isLandscape) {
        document.body.classList.add("mobile-landscape");
        const footers = document.querySelectorAll('.social-footer');
        footers.forEach(footer => {
            footer.style.marginTop = '';
            footer.style.marginBottom = '';
        });
    } else {
        document.body.classList.remove("mobile-landscape");
        
        const isMobileView = window.innerWidth <= 768;
        const isPortrait = window.innerHeight > window.innerWidth;
        
        if (!isLandscape && isTouchDevice && isMobileView && isPortrait) {
            const visibleHeight = window.innerHeight;

 // 1. LOGIN SCREEN MAINTAIN LOGIC //
            const loginScreen = document.getElementById('login-screen');
            if (loginScreen) {
                const loginFooter = loginScreen.querySelector('.social-footer');
                if (loginFooter) {
                    const topBar = loginScreen.querySelector('.top-bar');
                    const header = loginScreen.querySelector('.header-section');
                    const form = loginScreen.querySelector('.form-container');
                    const submitSection = loginScreen.querySelector('.submit-section');
                    const forgotContainer = loginScreen.querySelector('.forgot-container');
                    
                    let usedH = 0;
                    if (topBar) usedH += topBar.offsetHeight;
                    if (header) usedH += header.offsetHeight;
                    if (form) usedH += form.offsetHeight;
                    if (submitSection) usedH += submitSection.offsetHeight;
                    if (forgotContainer) usedH += forgotContainer.offsetHeight;
                    
                    let remain = visibleHeight - usedH - 110;
                    loginFooter.style.marginTop = remain > 0 ? remain + 'px' : '40px';
                    loginFooter.style.marginBottom = '50px'; 
                }
            }

// 2. SIGNUP SCREEN MAINTAIN LOGIC //
            const signupScreen = document.getElementById('signup-screen');
            if (signupScreen) {
                const signupFooter = signupScreen.querySelector('.social-footer');
                if (signupFooter) {
                    const topBar = signupScreen.querySelector('.top-bar');
                    const header = signupScreen.querySelector('.header-section');
                    const form = signupScreen.querySelector('.form-container');
                    const submitSection = signupScreen.querySelector('.submit-section');
                    
                    let usedH = 0;
                    if (topBar) usedH += topBar.offsetHeight;
                    if (header) usedH += header.offsetHeight;
                    if (form) usedH += form.offsetHeight;
                    if (submitSection) usedH += submitSection.offsetHeight;
                    
                    let remain = visibleHeight - usedH - 110;
                    signupFooter.style.marginTop = remain > 0 ? remain + 'px' : '40px';
                    signupFooter.style.marginBottom = '30px';
                }
            }

        } else {
            const footers = document.querySelectorAll('.social-footer');
            footers.forEach(footer => {
                footer.style.marginTop = '';
                footer.style.marginBottom = '';
            });
        }
    }
}

window.addEventListener("resize", checkLandscape);
window.addEventListener("DOMContentLoaded", checkLandscape);


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
