// Warte, bis das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    
    const animateIcons = document.querySelectorAll(".animate-icon");

    animateIcons.forEach(icon => {
        icon.addEventListener("click", function() {

            this.querySelector("i").style.transition = "transform 0.2s ease";
            this.querySelector("i").style.transform = "scale(1.1)";
            
            setTimeout(() => {
                this.querySelector("i").style.transition = "";
                this.querySelector("i").style.transform = "";
            }, 100);
        });
    });
});