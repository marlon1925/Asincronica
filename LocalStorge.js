// "use strict";


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((respuesta)=>console.log(respuesta))


// const obtenerData = async (nombrePokemon) => {
//     try {
//         const peticion = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//         const response = await peticion.json()
//         console.log(response?.sprites.front_default ?? "img.demon.png");
//     } catch(error){
//         console.log(error)
//     }
// }
// obtenerData('pikachu')



// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(response => response.json())
// .then(data => {
//     let usuario ={
//         name:data.name,
//         username:data.username,
//         email:data.email
//     }
//     console.log(usuario)
//         //guardarLocalStorage(usuario)
// })
    
// const guardarLocalStorage = (data)=>{
//     localStorage.setItem('user',JSON.stringify(data))
// }


// const obtenerLocaStorage = () =>{
//     const respuesta = localStorage.getItem("user") ? JSON.parse
//     (localStorage.getItem("user")) : "No hay data"
//     console.log(respuesta)
// }

// obtenerLocaStorage();

// const eliminarLocalStorage = () =>{
//     !localStorage.key('user') ? console.log("No hay clave") :
//     localStorage.removeItem("user")
// }

// eliminarLocalStorage();

import {login} from "./module.js";

login()