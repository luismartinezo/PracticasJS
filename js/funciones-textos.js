'use strict'

// Transformacion de textos
// 
var numero = 555;
var texto1 = "Bienvenido a las pruebas de JS";
var texto2 = "Practicas";

var dato = numero.toString(); // Lo convertimos a un string
	dato = texto1.toUpperCase(); // Cambiamos el texto a MAYUSCULA
	dato = texto2.toLowerCase(); // Cambiamos el texto a minuscula
// console.log(typeof dato); // Mostramos con typeof que es un string
console.log(dato);

// Calcular longitud
var nombre = "Luis Martinez"; //Aqui contamos los caracteres en el texto
	nombre = ["Hola","Hola"]; //Aqui contamos los elementos de un arreglo
 console.log(nombre.length);

 // Concatenar - Unir textos
 // 
 
 var todoTexto = texto1+" "+texto2; // Concatenamos con +
 	 todoTexto = texto1.concat(" - "+texto2); // Concatenamos con la funcion concat
 
 console.log(todoTexto);