document.addEventListener("DOMContentLoaded",main)

function main() {
    const botones = document.querySelectorAll("button")
    const decimal = document.querySelector("input")

    botones.forEach(element => {
       element.addEventListener("click", function(){
            this.textContent = (++this.textContent) % 2
            //this.textContent = (this.textContent == 0 ? 1 : 0)
            /*
            if (this.textContent == 0) this.textContent = 1
            else this.textContent = 0
            */
            //recalcular decimal
            let resultado = 0
            for (let i=0; i<botones.length; i++) {
                let exp = botones.length - i - 1
                resultado += botones[i].textContent * Math.pow(2,exp)
            }
            decimal.value = resultado
       })
       
    })

    /*
    function(a){}
    a=>{}
    */
}
