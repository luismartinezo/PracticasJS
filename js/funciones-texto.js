'use strict'

// Transformacion de texto 
var numero = 555;
var texto1 = "Bienvenido al curso de JS curso";
var texto2 = "con Luis Martinez";

 //var busqueda = texto1.lastIndexOf("JS");
// var busqueda = texto1.search("curso");
//var busqueda = texto1.match("curso");

// muestra un arreglo con los resultados encontrados
//var busqueda = texto1.match(/curso/g); // la g significa global en caso que halle varios resultados
var busqueda = texto1.substr(14,7);
console.log(busqueda);
