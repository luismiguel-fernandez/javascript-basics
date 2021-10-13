//referencias a elementos del HTML
const inputText = document.querySelector("#txtAdd")
const addButton = document.querySelector("#btnAdd")
const myList = document.querySelector("#mylist")
const myCart = document.querySelector("#mycart")

const btnSelAll = document.querySelector("#btnSelAll")
const btnSelNot = document.querySelector("#btnSelNot")
const btnInvSel = document.querySelector("#btnInvSel")

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
