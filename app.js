
/*let bienvenido = "Bienvenido"

let salir = "salir"
let montoActual = 150
const carritoDeCompras = []
let totalAPagar = 0.00

let despedirse = "Gracias por su compra :)"
//let nombreP = prompt("Escriba su nombre")
//let apellidoP = prompt("Escriba su apellido")
*/

let montoDisp = 100
let juegosCont = document.createElement("div")
let cont = document.querySelector("h2")
const saludosHTML = document.querySelector("h2").textContent =``
const formulario = document.querySelector("form")
const escribirNombre = document.querySelector("#Nombre")
const numeroDeTarjeta = document.querySelector("#NumeroTarjeta")
let graciasPorComprar = document.createElement("h4")
const comprarJuego = document.querySelector("#NombreJuego")

const juegos = ["Cyberpunk 2077", "Bloodborne", "Minecraft", "The Witcher 3"]
const juegosPrecio = [19.99, 9.99, 14.99, 29.99]

formulario.addEventListener("submit", usuarioNombreTarjeta)

function usuarioNombreTarjeta(usser){

usser.preventDefault()
cont.innerHTML=`<h2>Nombre: ${escribirNombre.value}, 
Num de tarjeta: ${numeroDeTarjeta.value}</h2>`
document.body.appendChild(cont)


juegosCont.innerHTML= `<h2>Escriba el nombre del juego que desea</h2>
<p>juego 1: ${juegos[0]} precio: ${juegosPrecio[0]} USD$</p>
juego 2: ${juegos[1]} precio: ${juegosPrecio[1]} USD$</p>
juego 3: ${juegos[2]} precio: ${juegosPrecio[2]} USD$</p>
juego 4: ${juegos[3]} precio: ${juegosPrecio[3]} USD$</p>

<h2>Monto actual: ${montoDisp} USD$</h2>
`
document.body.appendChild(juegosCont)

formulario.addEventListener("submit", comprarJueguitos)

}

function comprarJueguitos(usserJuegos){

    usserJuegos.preventDefault()
    graciasPorComprar.innerHTML= `<h2>Gracias por elegirnos ${escribirNombre.value} :)
    tu compra: ${comprarJuego.value}</h2>`
    document.body.appendChild(graciasPorComprar)

}



/*let titulo = document.querySelector("h1")

titulo.innerHTML = "<h1>Coderhouse Games</h1>"
document.body.appendChild(titulo)

const mensajesUser = [despedirse, nombreP, apellidoP]


const saludosHTML = document.querySelector("h2").textContent =``


class Juegos
{
     constructor  (nombreJuego, precioJuego)
      {
           this.nombreJuego = nombreJuego
           this.precioJuego = precioJuego
     }
    }

const juegoN1 = new Juegos("Cyberpunk 2077", 24.99)
const juegoN2 = new Juegos("Assasins Creed Valhala", 29.99)
const juegoN3 = new Juegos("God Of War 4", 9.99)
const juegoN4 = new Juegos("Bloodborne", 9.99)
const juegoN5 = new Juegos("Metro Exodus", 14.99)    

const juegoN6 = new Juegos("Dead By Daylight", 29.99)
const juegoN7 = new Juegos("Left 4 Dead 2", 4.99)
const juegoN8 = new Juegos("Resident Evil 4", 9.99)
const juegoN9 = new Juegos("Amnesia The Dark Descent", 7.99)
const juegoN10 = new Juegos("Silent Hill P.T", 59.99)

const juegosCategoria1 = [juegoN1, juegoN2, juegoN3, juegoN4, juegoN5, juegoN6, juegoN7, juegoN8, juegoN9, juegoN10]

function tomarCompra(){

    carritoDeCompras.forEach((nombres) => {

        alert(`Total: ${totalAPagar} USD$

    Juegos: ${nombres.nombreJuego} 
    
    Precio: ${nombres.precioJuego} USD$`)

   
       })

   
    
}


function seleccionarJuegos(){

    game = prompt(`

    Cant en carrito: ${carritoDeCompras.length}
    Precio de todo: ${totalAPagar} USD
    
    Escriba el nombre del producto que desea:
    Categoria 1(Aventura/Mundo Abierto):
    1.${juegosCategoria1[0].nombreJuego} (${juegosCategoria1[0].precioJuego} USD$)
    2.${juegosCategoria1[1].nombreJuego} (${juegosCategoria1[1].precioJuego} USD$)
    3.${juegosCategoria1[2].nombreJuego} (${juegosCategoria1[2].precioJuego} USD$)
    4.${juegosCategoria1[3].nombreJuego} (${juegosCategoria1[3].precioJuego} USD$)
    5.${juegosCategoria1[4].nombreJuego} (${juegosCategoria1[4].precioJuego} USD$)
    
    Categoria 2(Terror/Supervivencia):
    6.${juegosCategoria1[5].nombreJuego} (${juegosCategoria1[5].precioJuego} USD$)
    7.${juegosCategoria1[6].nombreJuego} (${juegosCategoria1[6].precioJuego} USD$)
    8.${juegosCategoria1[7].nombreJuego} (${juegosCategoria1[7].precioJuego} USD$)
    9.${juegosCategoria1[8].nombreJuego} (${juegosCategoria1[8].precioJuego} USD$)
    10.${juegosCategoria1[9].nombreJuego} (${juegosCategoria1[9].precioJuego} USD$)
    
    MONTO DISPONIBLE ${montoActual} USD$
    Escriba salir si desea terminar su compra`)
    

    switch (game) {
        case "1":
            alert(`eleccion: "${juegosCategoria1[0].nombreJuego}"
             precio :  ${juegosCategoria1[0].precioJuego} USD$`)
            break;
         case"2":
            alert(`eleccion: ${juegosCategoria1[1].nombreJuego}
             precio :  ${juegosCategoria1[1].precioJuego}USD$`)
            break;
         case "3":
            alert(`eleccion: "${juegosCategoria1[2].nombreJuego}"
             precio :  ${juegosCategoria1[2].precioJuego} USD$`)
            break;
         case "4":
            alert(`eleccion: "${juegosCategoria1[3].nombreJuego}"
             precio :  ${juegosCategoria1[3].precioJuego} USD$`)
            break;
         case "5":
            alert(`eleccion: "${juegosCategoria1[4].nombreJuego}"
             precio :  ${juegosCategoria1[4].precioJuego} USD$`)
             break;
         case "6":
             alert(`eleccion: "${juegosCategoria1[5].nombreJuego}"
             precio :  ${juegosCategoria1[5].precioJuego} USD$`)
             break;
         case "7":
            alert(`eleccion: "${juegosCategoria1[6].nombreJuego}"
             precio :  ${juegosCategoria1[6].precioJuego} USD$`)
             break;
          case "8":
            alert(`eleccion: "${juegosCategoria1[7].nombreJuego}"
             precio :  ${juegosCategoria1[7].precioJuego} USD$`)
             break;
          case "9":
            alert(`eleccion: "${juegosCategoria1[8].nombreJuego}"
              precio :  ${juegosCategoria1[8].precioJuego} USD$`)
             break;
            case "10":
            alert(`eleccion: "${juegosCategoria1[9].nombreJuego}"
             precio :  ${juegosCategoria1[9].precioJuego} USD$`)
             break;
            case"salir":
            tomarCompra()
            break
        default:
            alert("No tenemos ese juego actualmente en el catalogo, recargue la pagina e intente nuevanmente")
            break;

    }

}


while(nombreP !== 'salir' || apellidoP !== 'salir'){

    
    let bienvenida = 'bienvenido' + " " + nombreP + " " + apellidoP
    

let tarjeta = prompt("Ingrese una tarjeta de 8 digitos.")

while (tarjeta <= 9999999 || tarjeta >= 99999999) {

    tarjeta = prompt("Por favor, ingrese una tarjeta valida.")

}

alert(`${bienvenida}, su tarjeta fue tomada con exito.`)

tomarCompra()

seleccionarJuegos()


while(game !== salir && game >= 1 && game <= 10){

    if (game >= 1 && game <= 10){
        
    comprarJuegos(game)

    }


seleccionarJuegos()

if(montoActual < 1){

    alert("Usted ha superado el limite de compra con su monton actual, recargue la pagina e intente nuevamente.")
    carritoDeCompras.pop()
    break

    }


}

function comprarJuegos(index){

    index -= 1
    carritoDeCompras.push(juegosCategoria1[index])
    montoActual -= juegosCategoria1[index].precioJuego
    totalAPagar += juegosCategoria1[index].precioJuego

}

let cont = document.createElement("div")
cont.innerHTML=`<h2>${despedirse} ${nombreP} ${apellidoP }</h2>`
document.body.appendChild(cont)

for(juegosS of carritoDeCompras){

    let juegosContenedor = document.createElement("div")
    juegosContenedor.innerHTML=`<p>Juego: ${juegosS.nombreJuego}</p>
    <p>Precio: ${juegosS.precioJuego} USD$</p>`
    document.body.appendChild(juegosContenedor)

}

break
}
if(nombreP === salir || apellidoP === salir){
    
}*/

    








