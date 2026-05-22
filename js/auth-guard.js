class AuthGuard {
    static isUserLoggedIn() {
        return localStorage.getItem('studio_user_logged_in') === 'true';
    }

    static loginUser() {
        localStorage.setItem('studio_user_logged_in', 'true');
    }

    static logoutUser() {
        localStorage.removeItem('studio_user_logged_in');
    }

    static redirectToUserAuth() {
        window.location.href = '/src/auth/user-auth.html';
    }

    static redirectToUserDashboard() {
        window.location.href = '/src/dashboard/user-dashboard.html';
    }

    static handleUserProfileAccess() {
        if (this.isUserLoggedIn()) {
            this.redirectToUserDashboard();
        } else {
            this.redirectToUserAuth();
        }
    }
}