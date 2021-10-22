const tablero = document.querySelector("#tablero")

const ANCHURA_TABLERO = 800
const ALTURA_TABLERO = 500
const ANCHURA_BOLA = 30
const ALTURA_BOLA = 30

let bolas = []

function addBola(){
    //crear la visualización de la bola en HTML
    let nuevoDivBola = document.createElement("DIV")
    nuevoDivBola.classList.add("bola")

    //definir las propiedades internas de posición y velocidad inicial de la bola
    let x = Math.random() * (ANCHURA_TABLERO - ANCHURA_BOLA)
    let y = Math.random() * (ALTURA_TABLERO - ALTURA_BOLA)
    let vx = Math.random()*4 - 2
    let vy = Math.random()*4 - 2

    //definir las propiedades de estilo del DIV bola
    nuevoDivBola.style.width = ANCHURA_BOLA + "px"
    nuevoDivBola.style.height = ALTURA_BOLA + "px"
    nuevoDivBola.style.top = y + "px"
    nuevoDivBola.style.left = x + "px"
    tablero.append(nuevoDivBola)

    //crear la bola en la lógica de mi aplicación
    let nuevaBola = new bola(nuevoDivBola,x,y,vx,vy)
    bolas.push(nuevaBola)
}

function moverBolas() {
    let bolaActual = bolas[0]
    bolaActual.posX += bolaActual.velX
    bolaActual.posY += bolaActual.velY
    bolaActual.bola.style.left = bolaActual.posX + "px"
    bolaActual.bola.style.top = bolaActual.posY + "px"
}

function main() {
    tablero.style.width = ANCHURA_TABLERO + "px"
    tablero.style.height = ALTURA_TABLERO + "px"
    addBola()
    addBola()
    addBola()
    let agitador = setInterval(moverBolas,25)
}

main()




/*

let nuevoTop
let nuevoLeft
let velX = Math.random()*4 - 2
let velY = Math.random()*4 - 2

function addBola(){
    //crear un nuevo DIV para la bola
    let nuevaBola = document.createElement("DIV")
    //propiedades de aspecto y posición
    nuevaBola.classList.add("bola")
    nuevaBola.style.width = ANCHURA_BOLA + "px"
    nuevaBola.style.height = ALTURA_BOLA + "px"
    //nueva posición de la bola
    nuevoTop = Math.random() * (ALTURA_TABLERO - ALTURA_BOLA)
    nuevoLeft = Math.random() * (ANCHURA_TABLERO - ANCHURA_BOLA)
    nuevaBola.style.top = nuevoTop + "px"
    nuevaBola.style.left = nuevoLeft + "px"
    //hacer que sea hijo del tablero
    tablero.append(nuevaBola)
    //devolver la bola creada
    return nuevaBola
}

//hacer que la bola se mueva hacia abajo
function bajarBola(){
    nuevoTop += velY
    nuevoLeft += velX
    bola.style.top = nuevoTop + "px"
    bola.style.left = nuevoLeft + "px"
    //comprobar si la bola ha llegado abajo o arriba
    if (nuevoTop > ALTURA_TABLERO - ALTURA_BOLA || nuevoTop < 0) {
        velY *= -1
    }
    if (nuevoLeft > ANCHURA_TABLERO - ANCHURA_BOLA || nuevoLeft < 0) {
        velX *= -1
    }
}


let bola = addBola()
let intervalMueveBola = setInterval(bajarBola, 20)
*/