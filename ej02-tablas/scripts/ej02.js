function getListado(){
    let sitios = [
                    {nombre: "Universidad de Murcia",
                     web: "https://www.um.es"},
                    {nombre: "Instituto José Planes",
                     web: "http://www.iesjoseplanes.es"},
                    {nombre: "Universidad Católica San Antonio",
                     web: "https://www.ucam.edu"}
                 ]
    return sitios
}
function dibujarTabla(arrayElementos) {
    //por cada elemento del array insertar una fila
    cuerpo.innerHTML = ""

    for (let i=0; i<arrayElementos.length; i++) {
        let nuevaFila = cuerpo.insertRow() //etiqueta TR
        let nuevaCelda1 = nuevaFila.insertCell() //etiqueta TD
        let nuevaCelda2 = nuevaFila.insertCell()
        let nuevaCelda3 = nuevaFila.insertCell()
        nuevaCelda1.textContent = arrayElementos[i].nombre

        // nuevaCelda3.innerHTML = "<input type='button' value='X'>"
        // nuevaCelda3.querySelector("input").addEventListener()

        let botonBorrar = document.createElement("button")
        botonBorrar.textContent = "X"
        nuevaCelda3.append(botonBorrar)
        botonBorrar.addEventListener("click",function(ev){
            this.parentElement.parentElement.remove()
        })
        

    
        //con textContent se muestra el string pero no se analiza ni se
        // interpreta si es código HTML o no
        //nuevaCelda2.textContent = '<a href="#">' + arrayElementos[i].web + "</a>"
        
        //con innerHTML el string se intenta interpretar como HTML y 
        // automaticamente crea los nodos (etiquetas HTML) necesarios
        nuevaCelda2.innerHTML = '<a href="'+arrayElementos[i].web+'">' + arrayElementos[i].web + "</a>"
    }
}

const cuerpo = document.querySelector("#tablaListado>tbody")
const inputBuscar = document.querySelector("input.form-control")
const botonBuscar = document.querySelector("#botonBuscar")

inputBuscar.focus()

dibujarTabla(getListado())

botonBuscar.addEventListener("click",function(){
    dibujarTabla(
        getListado().filter(
            sitio => sitio.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase())
        )
    )
})

inputBuscar.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        dibujarTabla(
            getListado().filter(
                sitio => sitio.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase())
            )
        )
    }
})






