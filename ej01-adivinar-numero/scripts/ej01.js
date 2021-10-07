//console.log("funciona")

let secreto = Math.floor(Math.random()*100)+1
console.log(secreto)

let contador = 0
const inputNumero = document.querySelector("#inputNumero")
const botonComprobar = document.querySelector("#botonComprobar")
const pIntentos = document.querySelector("#pIntentos")
const pMensajes = document.querySelector("#pMensajes")

//Hacer que el cursor aparezca automáticamente en el INPUT texto
inputNumero.focus()

inputNumero.addEventListener(
    "keyup",
    function(objInfoEvento) {
        //which & keyCode deprecated - usar key en su lugar
        //console.log("Tecla pulsada (which): " + objInfoEvento.which)
        if (objInfoEvento.key == "Enter") {
            //El usuario ha pulsado Enter
            comprobarNumero()
        }
    }
)

function comprobarNumero(asdfsa,asda,sad,asd) {

    if (inputNumero.value.trim().length > 0 && !isNaN(inputNumero.value)) {
        pIntentos.textContent += inputNumero.value + " "
        contador++

        //comprobar si he acertado, si he quedado corto o me he pasado
        if (inputNumero.value == secreto) {
            //ganar partida

        } else if (inputNumero.value < secreto) {
            //te quedas corto

        } else {
            //te pasas

        }
        
        inputNumero.value = ""
        if (contador == 6) {
            //terminar partida
            inputNumero.disabled = true
            botonComprobar.disabled = true
            //hacer aparecer un nuevo botón de "Volver a jugar"
            const botonReset = document.createElement("input")
            botonReset.type = "button"
            botonReset.value = "Volver a jugar"
            botonReset.onclick = function(){
                secreto = Math.floor(Math.random()*100)+1
                console.log(secreto)
                contador = 0
                pIntentos.textContent = "Números ya intentados: "
                inputNumero.disabled = false
                botonComprobar.disabled = false
                //equivalentes
                document.body.removeChild(this)
                this.remove()
            }
            document.body.append(botonReset)

        }
        return 0
    }
}

botonComprobar.addEventListener(
    "click",
    comprobarNumero
)

function terminarPartida() {

}

let cosa = 1
if(!isNaN(cosa)) {
    //manipular numero
}