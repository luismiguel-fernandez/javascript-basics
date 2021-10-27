document.addEventListener("DOMContentLoaded",main)

/* 1 LISTENER EN EL CONTENEDOR PADRE DE LOS BOTONES */
function main() {
    const divByte = document.querySelector("#byte")
    divByte.addEventListener("click",function(ev){
        if (ev.target.nodeName.toLowerCase() == "BUTTON") {
            ev.target.textContent = (++ev.target.textContent) % 2
            updateDecimal()
        }
    })
}

/* 1 LISTENER POR CADA BOTÓN
function main() {
    let todosLosBotones = document.querySelectorAll("#byte>button")
    todosLosBotones.forEach(element => {
        console.log(element)
        element.addEventListener("click",function(ev){
            this.textContent = (++this.textContent) % 2
            updateDecimal()
        })
    })
}*/



function updateDecimal() {
    let todosLosBotones = document.querySelectorAll("#byte>button")
    let decimal = 0
    todosLosBotones.forEach(element => {
        if (element.textContent > 0) {
            decimal += Math.pow(2,element.id)
        }
        document.querySelector("#decimal").value = decimal
    })
}