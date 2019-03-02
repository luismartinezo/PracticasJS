'use strict'

// JSON - JavaScript Object Notation

var pelicula = {
	titulo: 'Spiderman',
	year: 2019,
	pais: 'USA'	
};

// tambien podemos crear un arreglo con varios json
var peliculas = [
	{titulo: "El vengador", year: 2015, pais: 'Alemania'},
	pelicula
];

var caja_peliculas = document.querySelector("#peliculas");
var index;
for (index in peliculas) {

	var p = document.createElement("p");
	p.append(peliculas[index].titulo+" - "+ peliculas[index].year);
	caja_peliculas.append(p);

}

// Podemos reemplazar alguna de las propiedades
pelicula.titulo = "Superman";

// console.log(pelicula.titulo); Solo una de la propiedad
console.log(peliculas);
// console.log(pelicula);