//recuperar los elementos HTML relevantes
const btnEmpezar = document.querySelector("#btnEmpezar")
const tablero = document.querySelector("#tablero")
const bola = document.querySelector("#bola")

const tiempo = document.querySelector("#tiempo")
const puntos = document.querySelector("#puntos")
const velocidad = document.querySelector("#velocidad")

const ANCHURA_TABLERO = 600
const ALTURA_TABLERO = 400
const ANCHURA_BOLA = 30
const ALTURA_BOLA = 30
const MS_CAMBIO_BOLA = 1000

let enPartida = false
let agitador //intervalo para mover bola automáticamente
let cuentaAtras //intervalo para controlar la duración de la partida

//redefinir dimensiones de tablero y bola
tablero.style.width = ANCHURA_TABLERO + "px"
tablero.style.height = ALTURA_TABLERO + "px"
bola.style.width = ANCHURA_BOLA + "px"
bola.style.height = ALTURA_BOLA + "px"

//definir la funcion que mueva la bola a una nueva posición aleatoria
function moverBola() {
    let nuevoTop = Math.random() * (ALTURA_TABLERO - ALTURA_BOLA)
    let nuevoLeft = Math.random() * (ANCHURA_TABLERO - ANCHURA_BOLA)
    bola.style.top = nuevoTop + "px"
    bola.style.left = nuevoLeft + "px"
}

function decrementarTiempo() {
    if (parseInt(tiempo.textContent) > 0 ) {
        tiempo.textContent--
    } else {
        //tiempo = 0, acabar partida
        enPartida = false
        clearInterval(agitador)
        clearInterval(cuentaAtras)
    }
}

//establecer que la bola sea clicable
bola.addEventListener("click", function(){
    if (enPartida) {
        puntos.textContent++
        //mover la bola para que el jugador no pueda hacer muchos clics
        moverBola()
        //resetear el interval para que se ajuste a partir del clic
        clearInterval(agitador)
        agitador = setInterval(moverBola, MS_CAMBIO_BOLA)
    }
})

//definir el comportamiento del botón btnEmpezar
btnEmpezar.addEventListener("click", function(){
    //definir los parámetros de la partida (puntos, velocidad, tiempo)
    tiempo.textContent = 10
    puntos.textContent = 0
    velocidad.textContent = 1

    //establecer un interval para la duración de la partida
    clearInterval(cuentaAtras)
    cuentaAtras = setInterval(decrementarTiempo, 1000)

    //establecer un interval para que la bola se mueva sola
    clearInterval(agitador)
    agitador = setInterval(moverBola, MS_CAMBIO_BOLA)

    enPartida = true
})




