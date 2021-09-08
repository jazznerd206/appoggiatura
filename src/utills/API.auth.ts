export function login(level: string): String {
    localStorage.setItem('auth', level);
    return "User logged in";
}

export function logout(): String {
    localStorage.removeItem('auth');
    return "User logged out";
}

export function checkLoggedIn(): string {
    return localStorage.getItem('auth') || "0";
}