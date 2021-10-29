const form = document.querySelector("form")

form.addEventListener("submit", function(ev){
    ev.preventDefault()
    //comprobar todos los campos; si todo ha ido bien enviar form
    if (checkForm())
        this.submit()
})

function checkForm() {
    let todoOK = true

    const nombre = document.querySelector("#conductor")
    if (!checkNombre(nombre.value.trim())) {
        todoOK = false
        //recuperar el label para errores del nombre
        
        //mostrar un mensaje de error en ese label
    }

    const dni = document.querySelector("#dni")
    if (!checkDNI(dni.value.trim())) todoOK = false
    
    const edad = document.querySelector("#edad")
    if (!checkEdad(edad.value)) todoOK = false
    
    const carne = document.querySelector("#carne")
    if (!checkCarne(carne.checked)) todoOK = false

    const tipos = document.querySelectorAll('input[name="tc"]')
    if (!checkTipo(tipos)) todoOK = false

    const tipoMulta = document.querySelector('#tipo')
    if (!checkTipoMulta(tipoMulta.value)) todoOK = false

    return todoOK
}

function checkNombre(nombre) {
    let expreg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ \-]*$/
    return (expreg.test(nombre))
}
function checkDNI(dni) {
    //8 dígitos y 1 letra
    let expreg = /^\d{8}[a-zA-Z]$/
    if (expreg.test(dni)) {
        //comprobar la letra
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let numerosDNI = dni.slice(0,8)
        let letraDNI = dni.slice(8,9)
        let posicion = numerosDNI % 23
        if (letraDNI.toUpperCase() == letras[posicion])
            return true
    }
    return false
}
function checkEdad(edad) {
    return (edad >= 15 && edad <= 150)
}
function checkCarne(carne) {
    return carne
}
function checkTipo(tipos) {
    let radioChecked = false
    tipos.forEach(element => {
        if (element.checked) {
            radioChecked = true
            return
        }
    })
    return radioChecked
}
function checkTipoMulta(tipoMulta) {
    return tipoMulta.length
}