'use strict'

// Transformacion de texto 
var numero = 555;
var texto1 = "Bienvenido al curso de JS curso";
var texto2 = "con Luis Martinez";

//var busqueda = texto1.IndexOf("JS");  Este nos muestra el indice siguiente en el que esta la palabra
 //var busqueda = texto1.lastIndexOf("JS");  Este nos muestra el indice de la proxima palabra
// var busqueda = texto1.search("curso"); Lo mismo que indexOf
//var busqueda = texto1.match("curso"); Devuelve arreglo con las palabra y sus indices

// muestra un arreglo con los resultados encontrados
//var busqueda = texto1.match(/curso/g); // la g significa global en caso que halle varios resultados, las / / es expresion regular
// var busqueda = texto1.substr(14,7); // Cuenta las letras hasta donde se quiere mostrar
 // var busqueda = texto1.charAt(2); // Busca una sola letra en el indice que se encuentre
// var busqueda = texto1.startsWith("B"); // Busca por lo que incia una palabra, si la encuentra true sino false
// var busqueda = texto1.endsWith("curso");// Busca por lo que incia una palabra, si la encuentra true sino false
// var busqueda = texto1.includes("curso");// Busca una palabra exacta, si la encuentra true sino false-es case sencity
// console.log(busqueda);



// FUNCIONES DE REEMPLAZO
var numero = 555;
var texto1 = "Curso de JS";
var texto2 = "con Luis Martinez";
// var busqueda = texto1.replace("Curso", "Practicas"); // Para reemplzar texto
 // busqueda = texto1.slice(start: int, end: int); // Para cortar un texto 
 // var busqueda = texto1.slice(1,7);
 // var busqueda = texto1.split(separator: string, limit: int);
 //var busqueda = texto1.split(" "); // Si dejamos las comillas cerradas separa cada lecha, pero las separamos
 // separa el texto por palabras y las mete dentro de un arreglo
 var busqueda = texto1.trim(); // Nos quita los espacios del texto por delante y por dentras
 console.log(busqueda);