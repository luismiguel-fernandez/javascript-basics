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

const selectEmpresas1 = document.querySelector("#empresa1")
const selectEmpresas2 = document.querySelector("#empresa2")

for (let empresa of empresas) {
    let nuevoOption = document.createElement("OPTION")
    nuevoOption.textContent = empresa.name
    nuevoOption.value = empresa.code
    selectEmpresas1.append(nuevoOption)
}

selectEmpresas1.addEventListener("change",function(){
    //El usuario ha elegido empresa en el primer SELECT
    console.log(this.value)
    // poblar el segundo SELECT
    for (let empresa of empresas) {
        let nuevoOption = document.createElement("OPTION")
        nuevoOption.textContent = empresa.name
        nuevoOption.value = empresa.code
        selectEmpresas2.append(nuevoOption)
    }
    // habilitar el segundo SELECT
    selectEmpresas2.disabled = false
})