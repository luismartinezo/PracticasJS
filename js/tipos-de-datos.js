'use strict'

// Operadores
var numero1 = 6;
var numero2 = 12;
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplica = numero1 * numero2;
var divide = numero1 / numero2;

alert("El resultado de la suma es: "+suma);
alert("El resultado de la resta es: "+resta);
alert("El resultado de la multiplicacion es: "+multiplica);
alert("El resultado de la divicion es: "+divide);

// Tipos de datos basicos
// 

var numero_entero =44;
var cadena_texto = "Hola";
var verdadero_o_falso = false;

var numero_falso = "55";

// Aqui lo lee como un string
// console.log(numero_falso+7);

// Aca lo parseamo para convertirlo en un entero y se muma el otro numero
console.log(parseInt(numero_falso)+7);

// Aca lo convertimos en un string y se concatenan
console.log(String(numero_falso)+7);

// Aca miramos el tipo de dato que tiene la variable
console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);