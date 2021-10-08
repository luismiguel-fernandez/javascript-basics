//datos versión fácil
//let empresas = ["Google","Facebook","Apple","Everis","Twitter","Microsoft"]

//datos versión menos fácil
let empresas = [
    {name: "Google", code: "goo"},
    {name: "Facebook", code: "fac"},
    {name: "Apple", code: "app"},
    {name: "Everis", code: "eve"},
    {name: "Twitter", code: "twi"},
    {name: "Microsoft", code: "mic"}
]

const inputNombre = document.querySelector("input.form-control")
const selectEmpresas1 = document.querySelector("#empresa1")
const selectEmpresas2 = document.querySelector("#empresa2")
const formu = document.querySelector("form")
const cuerpo = document.querySelector("#tablaDatos tbody")

for (let empresa of empresas) {
    let nuevoOption = document.createElement("OPTION")
    nuevoOption.textContent = empresa.name
    nuevoOption.value = empresa.code
    selectEmpresas1.append(nuevoOption)
}

selectEmpresas1.addEventListener("change",function(){
    // vaciar el segundo SELECT
    selectEmpresas2.innerHTML = "<option value='nada'>(Elige empresa)</option>"
    //detectar si realmente hay una empresa elegida
    if (selectEmpresas1.value == "nada") {
        selectEmpresas2.disabled = true
    } else {
        // poblar el segundo SELECT
        for (let empresa of empresas) {
            if ( empresa.code != selectEmpresas1.value ) {
                let nuevoOption = document.createElement("OPTION")
                nuevoOption.textContent = empresa.name
                nuevoOption.value = empresa.code
                selectEmpresas2.append(nuevoOption)
            }
        }
        // habilitar el segundo SELECT
        selectEmpresas2.disabled = false
    }
})

formu.addEventListener("submit",function(ev){
    ev.preventDefault()
    //establecer una bandera para no enviar el form si hay errores
    let hayErrores = false
    //limpiar errores de un intento anterior de ENVIAR
    inputNombre.classList.remove("error")
    selectEmpresas1.classList.remove("error")
    selectEmpresas2.classList.remove("error")
    //comprobar el INPUT
    let nombre = inputNombre.value.trim()
    if (nombre.length == 0) {
        //mostrar error por pantalla
        inputNombre.classList.add("error")
        hayErrores = true
    }
    //comprobar los SELECT
    if (selectEmpresas1.value == "nada") {
        selectEmpresas1.classList.add("error")
        hayErrores = true
    }
    if (selectEmpresas2.value == "nada") {
        //mostrar error por pantalla
        selectEmpresas2.classList.add("error")
        hayErrores = true
    }
    //si todo va bien, hacer lo que tengamos que hacer con esos datos
    // (en este caso, añadirlos a la tabla de abajo)
    // (en otros casos, tal vez, saltar a otro HTML o PHP)
    if (!hayErrores) {
        //enviar el formulario
        //this.submit()
        //en este caso, añadir a la tabla
        let nuevaFila = cuerpo.insertRow()
        let nuevaCelda1 = nuevaFila.insertCell()
        let nuevaCelda2 = nuevaFila.insertCell()
        let nuevaCelda3 = nuevaFila.insertCell()
        let nuevaCelda4 = nuevaFila.insertCell()
        let nuevaCelda5 = nuevaFila.insertCell()
        nuevaCelda1.textContent = inputNombre.value.trim()
        nuevaCelda2.textContent = selectEmpresas1.children[selectEmpresas1.selectedIndex].textContent
        nuevaCelda3.textContent = selectEmpresas2.children[selectEmpresas2.selectedIndex].textContent
        nuevaCelda4.textContent = "Fecha y hora"
        let nuevoBoton = document.createElement("button")
        nuevoBoton.textContent = "X"
        nuevoBoton.onclick = function() {
            this.parentElement.parentElement.remove()
        }
        nuevaCelda5.append(nuevoBoton)
    }
})















