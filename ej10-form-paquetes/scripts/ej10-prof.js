document.addEventListener("DOMContentLoaded",main)
const form = document.querySelector("#formEnvios")
const anyadir = document.querySelector("#anyadir")
const pedido=document.querySelector("#refPedido")
const peso=document.querySelector("#peso")

function main(){
    
    form.action = "todoOK.html" //forma rápida
    //form.setAttribute("action","todoOK.html") //forma alternativa
    form.addEventListener("submit",function(ev){
        ev.preventDefault()
        if(checkForm()){
            this.submit()
        }
    })

    anyadir.addEventListener("click",function(){
        if (checkForm()) {
            addToTable(pedido.value.trim() , peso.value.trim())
        }
    })

}

function checkForm(){
    let todoOK=true
    const pedidoError=document.querySelector("#refPedidoError")
    const pedidoPeso=document.querySelector("#pesoError")
    if(!checkPedido(pedido.value.trim())){
        todoOK=false
        pedidoError.textContent="La referencia tiene el formato A1234"
        pedido.classList.add("campoIncorrecto")
    }else{
        pedido.classList.remove("campoIncorrecto")
        pedidoError.textContent=""
    }
    if(!checkPeso(peso.value.trim())){
        todoOK=false
        pedidoPeso.textContent="El peso tiene el formato 1.1 o 11.1"
        peso.classList.add("campoIncorrecto")
    }else{
        peso.classList.remove("campoIncorrecto")
        pedidoPeso.textContent=""
    }
    return todoOK
}

function checkPedido(pedido){
    let expReg = /^[a-zA-ZñÑ]\d{4}$/
    return (expReg.test(pedido))
}

function checkPeso(peso){
    let expReg1 = /^\d{1,2}.\d$/    //desde 0.0 hasta 99.9
    let expReg2 = /^0+.0$/          //solamente 0.0 y 00.0
    return (expReg1.test(peso) && !expReg2.test(peso))
}

function addToTable(pedido, peso) {
    let tbody = document.querySelector("#tablaEnvios>tbody")
    let newRow = tbody.insertRow()
    let cell1 = newRow.insertCell()
    let cell2 = newRow.insertCell()
    let cell3 = newRow.insertCell()
    cell1.textContent = pedido.toUpperCase()
    cell2.textContent = peso
    let deleteRowButton = document.createElement("button")
    deleteRowButton.textContent = "X"
    deleteRowButton.addEventListener("click",()=>{
        newRow.remove()
    })
    cell3.append(deleteRowButton)
}