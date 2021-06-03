//Rest Parameters ó Parámetros Rest
//La sintaxis de "Rest Parameter" permite a una función aceptar un número indefinido de argumentos como un array.

function f(a, b, ...args){
    // tu código y/o funcionalidad en la función
}

//El último parámetro de una función se puede prefijar o se le puede anteponer tres puntos "...", esto hará que todos
//los argumentos restantes (de allí lo de Rest parameters) se coloquen dentro de un array.
function sendCars(...allCarIds){
    allCarIds.forEach( id => console.log(id) );
}

//Al momento de iterar el array como en el siguiente ejemplo solo los Rest Parameters se tomarán
function sendDays(day, ...allDayIds) {
    allDayIds.forEach( id => console.log(id) );
}

//pero también se puede trabajar con los demás enviados. Solo el último parámetro puede ser un "Rest Parameter".
//El primer argumento es "a", el segundo es "b" y esos son usados de forma normal, el tercer argumento es "moreArgs"
//es un array que contendrá cuantos argumentos le pasemos no importando la cantidad, desde cero donde en este caso será
//un array vacío.
function anotherExample(a, b, ...moreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("more arguments", moreArgs);
}

//Se puede utilizar para minificar el uso de argumentos y luego utilizarlos en lo que necesitemos.
function sum(...numbers) {
    return console.log(numbers.reduce((a, b) => a + b));
}

//Se puede usar un parámetro Rest para agrupar dentro de un array a todos los argumentos después del primero.
//Luego cada uno de estos argumentos en el array puede ser multiplicado por el primer argumento y el arreglo es retornado.
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
       return multiplier * element;
    });
}

sendCars(100, 200, 600, 870);
//salida esperada: 100, 200, 600, 870

sendDays('Monday', 10, 20, 80);
//salida esperada: 10, 20, 80

anotherExample("one", "two", "three", "four", "five", "six", "seven");
//salida esperada:
/*  a one
    b two
    more arguments [ 'three', 'four', 'five', 'six', 'seven' ]
*/

sum(1, 2, 3, 4);
// salida esperada: 10

let arr = multiply(2, 1, 2, 3);
console.log(arr);
// salida esperada: [2, 4, 6]