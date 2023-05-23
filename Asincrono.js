'use strict'

//Codigo Asincrono realizar varias cosas

function solicitar(tipo) {
    console.log(`¡Hola, ya regresé con el ${tipo}!`)
}

console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name = 'Ralph'
const data = setTimeout(()=>solicitar("Marcador-azul"),5000)
console.log("Continuar escribiendo en la pizarra")
