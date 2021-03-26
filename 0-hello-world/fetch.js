/*
* Fetch, Async, Await
*
*/

// let promise = fetch(url, options = {})
// let promise = fetch("https://jsonplaceholder.typicode.com/todos", { method: "GET" }) // GET 


// Obtener todos los posts - GET
// Javascript Object Notation
// fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((json) => console.log(json));

// Crear un post - POST
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Mi titulo',
//     body: 'Estoy aprendiendo como hacer fetch',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Actualizando un dato - PUT
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// Eliminando un recurso - DELETE
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then((response) => response.json())
// .then(json => console.log(json));

// Usando async await

// Obtener todos los posts
// fetch('')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const url = "https://jsonpder.typicode.com/posts";

// const getPosts = async () => {
//   try {
//     const response = await fetch(url)
//     const posts = await response.json()
//     console.log(posts)
//   } catch(err) {
//     console.log(err)
//     console.log("Hubo un error intentando acceder al backend")
//   }
// }

// getPosts()


/*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. Hacer un get al siguiente endpoint https://jsonplaceholder.typicode.com/users
//   2. Guardar ese arreglo en una variable
//   3. Loopear sobre ese arreglo y mostrar el email de cada usuario por consola
//   4. Obtener los usuarios que tengan id que sea mayor a 5
//   5. Obtener el usuario con el numero de telefono que sea igual a 024-648-3804
// `)

// //1 Hacer un get al siguiente endpoint https://jsonplaceholder.typicode.com/users
let link = "https://jsonplaceholder.typicode.com/users"

fetch(link)
.then((response) => response.json() )
.then((data) =>{ 

  // //2  Guardar ese arreglo en una variable
  const resultado = data 

  // //3 Loopear sobre ese arreglo y mostrar el email de cada usuario por consola
  // resultado.forEach(resultado => { 
  //   console.log(resultado.email)
  // });

  // //4 (de las 2 formas devuelve lo mismo) Obtener los usuarios que tengan id que sea mayor a 5
  // let filtro = resultado.filter(function(item){
  //   return item.id > 5 
  // })
  // console.log (filtro)

  // let filtro = resultado.filter(function(resultado){
  //   return resultado.id > 5 
  // })
  // console.log (filtro)

  // //5 (de las 2 formas devuelve lo mismo) Obtener el usuario con el numero de telefono que sea igual a 024-648-3804

//   let encontrar = resultado.find(function(item){
//     return item.phone === "024-648-3804"
//   })
//   console.log(encontrar)

//   let encontrar = resultado.find(function(resultado){
//     return resultado.phone === "024-648-3804"
//   })
//   console.log(encontrar)


})

