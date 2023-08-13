function lockOrientation() {
    if (window.orientation !== 0) {
        if (window.orientation === 90) {
            // Wenn das Gerät im Querformat ist
            document.documentElement.style.transform = 'rotate(-90deg)';
        } else if (window.orientation === -90) {
            // Wenn das Gerät im umgekehrten Querformat ist
            document.documentElement.style.transform = 'rotate(90deg)';
        }
    } else {
        // Wenn das Gerät im Hochformat ist oder keine Orientierung verriegelt werden soll
        document.documentElement.style.transform = '';
    }
}

// Initiale Ausrichtung festlegen
lockOrientation();

// Orientierungswechsel-Ereignis überwachen
window.addEventListener('orientationchange', lockOrientation);