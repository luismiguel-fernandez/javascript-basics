document.addEventListener("DOMContentLoaded",main)
const añadir=document.querySelector("#anyadir")
function main(){
    const form = document.querySelector("#formEnvios")
    form.action = "todoOK.html" //forma rápida
    //form.setAttribute("action","todoOK.html") //forma alternativa
    form.addEventListener("submit",function(ev){
        ev.preventDefault()
        if(checkForm()){
            this.submit()
        }
    })
}

function checkForm(){
let todoOK=true
const pedido=document.querySelector("#refPedido")
const peso=document.querySelector("#peso")
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
    let expReg = /^\d{1,2}.\d$/
    return (expReg.test(peso))
}
añadir.addEventListener("click",function(){
    
})
