export function checkWindow(param) {
    if (typeof window !== 'undefined') {
        return window.param;
    }
}

export function getWindowHost() {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
}