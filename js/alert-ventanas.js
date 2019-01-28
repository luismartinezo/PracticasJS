'use strict'

// Alertas

// alert("Esta es una alerta !!");
// alert("Este es mi texto");

// Confirmacion
//confirn("Esta es una alerta !!");

// Para saber el resultado de lo que se seleccione, la metemos en una variable
// var resul = confirm("Esta seguro de continuar? ");
// console.log(resul);

// Ingreso de datos
// Tiene un valor de 18 por defecto y lo metemos dentro de una variable para
// capturar su resultado
// var resultado = prompt('Que edad tienes?', 18);
// console.log(typeof resultado); // Es ingresado como un string

// Parciamos el resultado para capturar como un entero
var resultado = parseInt(prompt('Que edad tienes?', 18));
console.log(resultado);
console.log(typeof resultado); // Nos dice que es un number
