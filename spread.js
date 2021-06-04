//Spread Syntax o Sintaxis extendida, permite a un elemento iterable (array o cadena) ser expandido a variables.

function sum(x, y, z){
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// salida esperada: 6

//En Fechas:
let dateFields = [1983, 6, 2];
let d = new Date(...dateFields);

console.log(d);
// salida esperada: 1983-07-02T05:00:00.000Z

//Expandir Arrays, sin spread syntax para crear un nuevo arreglo usando un arreglo existente como parte de él, se debe usar
//código imperativo con una combinación de "push, splice, concat, etc.", pero con Spread Syntax se vuelve mas pŕactico:

let parts = ['shoulders', 'knees'];
let moreParts = ['head', ...parts, 'and', 'toes'];

console.log(moreParts);
// salida esperada: ["head","shoulders","knees","and","toes"]
