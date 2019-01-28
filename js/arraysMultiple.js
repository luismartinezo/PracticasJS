'use strict'

// ARREGLO MULTIDIMENSIONAL
var categorias = ["Accion","Terror","Comedia"];
var peliculas = ["La verdad duele","La vida es bella","Spiderman","Tor", "Gran Torino"];

var cine = [categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][0]);
var elemento = "";
// do{
// 	elemento = prompt("Introduce una pelicula");
// 	peliculas.push(elemento); //AGREGA ELEMENTO AL ARREGLO
// }while(elemento != "ACABAR");
//peliculas.pop();//EL METODO pop BORRA EL ULTIMO ELEMENTO DE UN ARREGLO
//peliculas.push("Batman");
//console.log(peliculas);

// var peliculas_string = peliculas.join();

// var cadena = "texto1, texto2, texto3";
// var cadena_array = cadena.split(",");
//console.log(cadena_array);

///////////////////////////////////////////////////////////////
//////////////////// ORDENAR ARREGLOS /////////////////////////
//////////////////////////////////////////////////////////////
//peliculas.sort(); // ORDENA EL ARREGLO ALFABETICAMENTE
peliculas.reverse(); // DAMOS LA VUELTA AL ARREGLO
console.log(peliculas);

