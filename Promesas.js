"use strict";


const conexionBDD = (datosConexion) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexion ok") : reject("Conexion error")
        },3000)
    })
}

console.log("Usurio inicia sesión")

conexionBDD(true)
    .then((respuesta)=> console.log(respuesta))
    .catch((error) => console.log(error))
console.log("Usuario lista sus ventas")




const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

obtenerProductos
    .then((respuesta) =>console.log(respuesta))
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
