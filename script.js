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