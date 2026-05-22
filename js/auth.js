function checkLandscape() {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const isLandscape = window.innerHeight < window.innerWidth && window.innerHeight < 550;

    if (isTouchDevice && isLandscape) {
        document.body.classList.add("mobile-landscape");
    } else {
        document.body.classList.remove("mobile-landscape");
    }
}

window.addEventListener("resize", checkLandscape);
window.addEventListener("DOMContentLoaded", checkLandscape);
