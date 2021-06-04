//Destructuración
//Es una expresión que permite desempaquetar valores a partir de un array o propiedades de objetos en distintas variables.
let carIds = [1, 3, 5];
let [car1, car2, car3] = carIds;

console.log(car1, car2, car3);
// salida esperada: 1, 3, 5

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// salida esperada: 10
console.log(b);
// salida esperada: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// salida esperada: Array [30, 40, 50]

//La destructuración coloca en el lado izquierdo de la asignación para definir qué valores desempaquetar de la variable origen:
const x = [1, 2, 3, 4, 5];
//Acá asignamos a las variables "y" y "z" los primeros valores en orden de la variable "x" que es un array.
const [y, z] = x;

console.log(y);
// salida esperada: 1
console.log(z);
// salida esperada: 2

//Se puede asignar el resto de un arreglo a una variable tipo Rest.
const [ab, ...ba] = [1, 2, 3, 4];

console.log(ab);
// salida esperada: 1
console.log(ba);
// salida esperada: [2, 3, 4]

//En OBJETOS:
const user = {
    id:     42,
    its_ok: true
};

//Asignamos las propiedades a variables
const {id, its_ok} = user;

console.log(id);
// salida esperada: 42
console.log(its_ok);
// salida esperada: true

//Con REST
let {ar, br, ...restr} = {a: 10, b: 20, c: 30, d: 40, e: 50};

console.log(a);
// salida esperada: 10
console.log(b);
// salida esperada: 20
console.log(restr);
// salida esperada: {c: 30, d: 40, e: 50}