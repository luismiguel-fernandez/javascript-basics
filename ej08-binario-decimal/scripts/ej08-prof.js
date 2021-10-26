document.addEventListener("DOMContentLoaded",main)

function main() {
    let todosLosBotones = document.querySelectorAll("#byte>button")
    todosLosBotones.forEach(element => {
        console.log(element)
        element.addEventListener("click",function(ev){
            this.textContent = (++this.textContent) % 2
            updateDecimal()
        })
    })
}

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