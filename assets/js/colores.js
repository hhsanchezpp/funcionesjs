
const cuadro_azul = document.getElementById("azulCaja")
const cuadro_rojo = document.getElementById("rojoCaja")
const cuadro_verde = document.getElementById("verdeCaja")
const cuadro_amarillo = document.getElementById("amarilloCaja")

const colorear = (elemento, color) => {
    elemento.style.backgroundColor = color
}
cuadro_azul.addEventListener("click", () => {
    colorear(cuadro_azul, "black")
})
cuadro_rojo.addEventListener("click", () => {
    colorear(cuadro_rojo, "black")
})
cuadro_verde.addEventListener("click", () => {
    colorear(cuadro_verde, "black")
})
cuadro_amarillo.addEventListener("click", () => {
    colorear(cuadro_amarillo, "black")
})


const color_original = "white"
const color_cambio = document.getElementById("cuadro")
const mensaje = document.getElementById("mensaje")
const verde = "green"
const rojo = "red"
const azul = "blue"

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color_cambio.style.backgroundColor = azul
        mensaje.textContent = 'Tecla presionada ' + event.key + ' cuadro es  "AZUL".'
    } else if (event.key === 's' || event.key === 'S') {
        color_cambio.style.backgroundColor = rojo
        mensaje.textContent = 'Tecla presionada ' + event.key + ' cuadro es "ROJO".'
    } else if (event.key === 'd' || event.key === 'D') {
        color_cambio.style.backgroundColor = verde
        mensaje.textContent = 'Tecla presionada ' + event.key + ' cuadro es "VERDE".'
    }else {
        color_cambio.style.backgroundColor = color_original
        mensaje.textContent = 'Presiona las teclas indicadas.'
    }
})

const marron_color = "maroon"
const azul_color = "blue"
const amarillo_color = "yellow"

const mensaje_color = document.getElementById("mensaje_div")
const cuadrado_coloreado = document.getElementById("cuadrado_div")

document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        cuadrado_coloreado.classList.add("style_cuadrado_div")
        cuadrado_coloreado.style.backgroundColor = amarillo_color
        mensaje_color.textContent = 'Tecla presionada ' + event.key + ' "AMARILLO" es el color.'
    } else if (event.key === 'w' || event.key === 'W') {
        cuadrado_coloreado.style.backgroundColor = azul_color
        mensaje_color.textContent = 'Tecla presionada ' + event.key + ' "AZUL" es el color.'
        cuadrado_coloreado.classList.add("style_cuadrado_div");
    } else if (event.key === 'e' || event.key === 'E') {
        cuadrado_coloreado.style.backgroundColor = marron_color
        mensaje_color.textContent = 'Tecla presionada ' + event.key + ' "CAFE" es el color.'
        cuadrado_coloreado.classList.add("style_cuadrado_div");
    }else {
        mensaje_color.textContent = 'Presiona las teclas indicadas'
        cuadrado_coloreado.classList.remove("style_cuadrado_div")
    }
})