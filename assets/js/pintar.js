function pintar(elemento, color = "") {
    elemento.style.color = color
}
const objeto_a_pintar = document.getElementById("elemento_a_pintar")
objeto_a_pintar.addEventListener("click", () => { pintar(objeto_a_pintar, "red")})