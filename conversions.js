//Diferentes formas de castear o convertir un valor de un tipo a otro:

//Convertir a String
let number = 1;
number.toString();

//Convertir string a entero
Number.parseInt('88');
//si el string comienza en número será convertido, de lo contrario devolverá NaN
Number.parseInt('AZ88'); //NaN

//Convertir string a numero
Number.parseFloat('88.77');