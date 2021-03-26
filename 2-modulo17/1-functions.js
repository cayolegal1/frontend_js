// let  userName = "franco"

// function showMessage() {
//   let message = "Hola a todos";  // variable scope local
//   console.log(message)
// }

// showMessage()
// console.log(message)

// // Scope Global
// let userName = "franco"

// function showMessage() {
//   // Scope Local
//   let message = 'Hola me llamo ' + userName
//   console.log(message)
// }

// showMessage()
// console.log(userName)

// let userName = "franco"

// function showMessage() {
//   userName = "Mauro"; 
//   console.log(userName)
// }

// console.log(userName)
// showMessage()

// Parametros

// function showMessage(name, text) {
//   console.log(name + ': ' + text)
// }

// // showMessage('Fran', 'Hola!')

// showMessage('Fran')

// Valores predeterminado

// function showMessage(name = 'Fran', text = 'Hola') {
//   console.log(name + text)
//   // console.log(name + ': ' + text)
// }

// showMessage(2, 2)

// Devolviendo un valor

// function sum(a, b) {
//   return a + b
// }

// // console.log(sum(1,5))
// const suma = sum(2,2)
// console.log(suma)

// function checkAge(age) {
//   if (age > 18) {
//     return true
//   } else {
//     return false
//   }
// }

// let age = 20

// if (checkAge(age)) {
//   console.log('Eres mayor de edad')
// } else {
//   console.log('Eres menor de edad')
// }

// function myUser(name, age) {
//   return {
//     newName: name,
//     newAge: age
//   }
// }

// const me = myUser("Franco", 31)

// console.log(me)

// Funciones Flecha

// let sum = (a, b) => a + b

//  console.log(sum(1,2))

/*************************************
*
*             Ejercicios
*
**************************************/

// console.log(`
//   1. Reescriba la función utilizando Arrow Function y en el cuerpo re escribir el if por '?' o '||'
//   2. Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
//          Por ejemplo min(2, 5) retorna 2
//   3. Escriba una función doble(a,b) la cual devuelva a duplicado por b.
//          Por ejemplo doble(3, 2) retorna 6
//   4. Escribir las dos funciones del punto 2 y 3 usando funcion flecha.
// `)

// // 1.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return console.log('No eres mayor de edad todavia');
//   }
// }

//1
// let edad = (age) => {
//     return (age > 18) ? true : console.log('Sos menor')}
//     console.log (edad(10))


//2
// let a = 2
// let b = 5 

// function mayor (a, b) {
//     if (a > b){
//     return console.log (a)
// } else { 
//     return console.log (b)
// }}

// mayor (11, 10)


//3
// let a = 5
// let b = 6
// function multiplicacion (a, b) {
//     let mul = a * b
//     return console.log(mul)
// }

// multiplicacion (5, 6)

//4

//4.3
// let multi = (a, b) => a * b

// console.log(multi(7, 7))

//4.2


// let mayor_numero = (a, b) => {
//     return (a > b) ? console.log(a) : console.log(b)
// }

// console.log(mayor_numero(40, 50))

