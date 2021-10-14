//referencias a elementos del HTML
const inputText = document.querySelector("#txtAdd")
const addButton = document.querySelector("#btnAdd")
const myList = document.querySelector("#mylist")
const myCart = document.querySelector("#mycart")

const btnSelAll = document.querySelector("#btnSelAll")
const btnSelNot = document.querySelector("#btnSelNot")
const btnInvSel = document.querySelector("#btnInvSel")
const btnMovSel = document.querySelector("#btnMovSel")
const btnDelSel = document.querySelector("#btnDelSel")
const btnEmpCar = document.querySelector("#btnEmpCar")

//función que añade a la lista lo escrito en el INPUT
function addToList(){
    //recuperar lo escrito por el usuario
    let itemText = inputText.value.trim()
    //comprobar si es válido
    if (itemText.length > 0) {
        //insertar en la lista (un hijo LI = list item)
        let newLI = document.createElement("LI")
        newLI.textContent = itemText
        myList.append(newLI)
        //vaciar el INPUT y darle el foco
        inputText.value = ""
        inputText.focus()
        //hacer clicable al LI
        /* ANULADO PORQUE LO RESOLVEMOS CON DELEGACIÓN DE EVENTOS
        newLI.addEventListener("click", function(){
            this.classList.toggle("seleccionado")
        })*/
    }
}

//programar el comportamiento de la tecla INTRO dentro del INPUT
inputText.addEventListener("keyup",function(e){
    if (e.key == "Enter") {
        addToList()
    }
})
//programar el comportamiento del botón ADD-TO-SHOPPING-LIST
addButton.addEventListener("click", addToList )

//programar el comportamiento del botón "btnSelAll"
btnSelAll.addEventListener("click", function() {
    Array.from(myList.children).forEach(element => {
        element.classList.add("seleccionado")
    })
})

//programar el comportamiento del botón "btnSelNot"
btnSelNot.addEventListener("click", function() {
    Array.from(myList.children).forEach(element => {
        element.classList.remove("seleccionado")
    })
})

//programar el comportamiento del botón "btnInvSel"
btnInvSel.addEventListener("click", function() {
    Array.from(myList.children).forEach(element => {
        element.classList.toggle("seleccionado")
    })
})

//programar el comportamiento del botón "btnMovSel"
btnMovSel.addEventListener("click", function() {
    Array.from(myList.children).forEach(element => {
        if (element.classList.contains("seleccionado")) {
            myCart.append(element)
            element.classList.remove("seleccionado")
        }
    })
})

//programar el comportamiento del botón "btnDelSel"
btnDelSel.addEventListener("click", function() {
   let seleccionados = myList.querySelectorAll("li.seleccionado")
   seleccionados.forEach(element => element.remove())
})

//programar el comportamiento del botón "btnEmpCar"
btnEmpCar.addEventListener("click", function() {
    myCart.innerHTML = ""
})

//programar UL#mylist para que capture el click sobre los LI
myList.addEventListener("click", function(ev){
    if (ev.target.nodeName == "LI")
        ev.target.classList.toggle("seleccionado")
})


/*
//Recorrer este array de ejemplo y hacer algo con cada elemento
seleccionados = ["Miguel", "Luismi", "Pepe"]
//solucion1
seleccionados.forEach(element => element.remove())
//solucion2
seleccionados.forEach(function(element) {
    element.remove()
})
//solucion3
for (let i=1; i<seleccionados.length; i++) {
    seleccionados[i].remove()
}
*/