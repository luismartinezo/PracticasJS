'use trict'

// FUNCIONES ANONIMAS - Funciones sin nombre´

// var pelicula = function(nombre) {

// 	return "La pelicula es: "+nombre;
// }

// Callback - funcion que se ejecuta dentro de otra
// pasamos por parametros una funcion a otra funcion global
function sumame(numero1,numero2, sumaYmuestra, sumaPorDos) {

	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5, 7, function (dato) {
	console.log("La suma es: ", dato);
},
function (dato) {
	console.log("La suma por dos es: ", (dato*2));
}
	);

// console.log(sumame(4,5));

//////////////////////////////////////////////////////////////////////////
////////////////////// FUNCION FLECHA ///////////////////////////////////
//////////////////////////////////////////////////////////////////////// 
// es una forma de definir funciones de callback de una manera mas limpia y clara
// se sustituye la palabra function por la flecha, parametro y luego la flecha
function sumame(numero1,numero2, sumaYmuestra, sumaPorDos) {

	var sumar = numero1 + numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5, 7, dato => {
	console.log("La suma es: ", dato);
},
dato => {
	console.log("La suma por dos es: ", (dato*2));
}
	);