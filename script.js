const carre = document.querySelector("header i")
console.log(carre)
const liste = document.querySelector(".partenaires-photo")
const icon = document.querySelector(".partenaires-photo i")
console.log(icon)
carre.addEventListener("click", () => {
    liste.classList.add("active")
})
icon.addEventListener("click", () => {
    liste.classList.remove("active")    
})

// Fonction pour détecter si un élément est visible à l'écran
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction qui vérifie tous les éléments avec la classe 'fade-in'
function checkFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('fade-in-visible');
        }
    });
}

// Écouteur d'événements sur le défilement pour déclencher l'animation
window.addEventListener('scroll', checkFadeIn);

// Pour s'assurer que l'animation s'exécute également lors du chargement de la page
window.addEventListener('load', checkFadeIn);



