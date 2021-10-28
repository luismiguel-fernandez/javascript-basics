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
    if (!checkNombre(nombre.value.trim())) todoOK = false

    const dni = document.querySelector("#dni")
    if (!checkDNI(dni.value.trim())) todoOK = false

    /*if (!checkEdad()) todoOK = false
    return todoOK*/
}

function checkNombre(nombre) {
    let expreg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ][a-zA-ZñÑáéíóúÁÉÍÓÚ \-]*$/

    if (expreg.test(nombre)) {
        console.log("nombre válido")
        return true
    } else {
        console.log("nombre no válido")
        return false
    }


    //return (nombre.length > 0 && isNaN(nombre)) //isNotANumber
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