//codigo sicronico
function solicitar(tipo) {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡Hola, ya regresé con el ${tipo}!`
}
console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name1 = 'Ralph'
const respuestaEstudiante = solicitar("Marcador-azul")
console.log(respuestaEstudiante)
console.log("Continuar escribiendo en la pizarra");