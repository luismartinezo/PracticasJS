'use strict'


// 1. pida 6 numeros por pantalla y los meta en un arreglo
// 2. Mostrar el arreglo entero (todos sus elementos) en el cuerpo de la pagina y la consola
// 3. Ordenarlos y mostrarlo
// 4. Invertir su orden y mostrarlo
// 5. Mostrar cuantos elementos tiene el arreglo
// 6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice(se valorara el uso de funciones)

function mostrarArreglo(elementos, textoCustom = "") {
	document.write("<h1>Los numeros Introducidos son: "+textoCustom+"</h1>");
	document.write("<ul>");
	elementos.forEach((elemento, index) =>{
		document.write("<li>"+elemento+"</li>");
	} );
	document.write("</ul>");
}
//////////////////////////////
/// Pedir los 6 numeros /////
///////////////////////////// 
//var numeros = new Array(6);
var numeros = []; //Array vacio

for (var i = 0; i <= 5; i++) {
	//numeros[i] = parseInt(prompt("Introduce un numero",0));
	//Tambien se puede hacer con push
	numeros.push(parseInt(prompt("Introduce un numero",0)));
}
///////////////////////////////////////////////////////
// Mostrar el cuerpo de la pagina con una funcion/////
///////////////////////////////////////////////////// 
		mostrarArreglo(numeros);

// Mostrar en consola
		console.log(numeros);
///////////////////////////////////////////////////////////////////////////////
////////////////////////// Ordenar y Mostrar /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
///////////////////////// Ordena Alfabeticamente ///////////////////////////
	//numeros.sort();
////////////////////////////////////////////////////////////////////////////	
/////////////////////////Ordenar de manera nuemerica //////////////////////
//////////////////////////////////////////////////////////////////////////
	numeros.sort(function (a, b) {
		return a-b
	});
	mostrarArreglo(numeros, 'ordenado');
///////////////////////////////////////////////////////////////////
////////////////////// invertir Arreglo //////////////////////////
/////////////////////////////////////////////////////////////////
	numeros.reverse();
	mostrarArreglo(numeros, 'Revertido');

	// Cuantos elementos tiene un arreglo
	document.write("<h1>El arreglo tiene: "+numeros.length+" elementos</h1>");
	
/////////////////////////////////////////////////////////////////	
///////////////Busqueda dentro del arreglo agregado//////////////
////////////////////////////////////////////////////////////////	

	var buscar = parseInt(prompt("<h2>Bucar un numero</h2>",0));
	 
	var posicion = numeros.findIndex(numero => numero == buscar);

	 if (posicion && posicion != -1) {

	document.write("<hr><h1>ENCONTRADO</h1>");
	document.write("<h1> Posicion de la busqueda: "+posicion+"</h1>");
}else{
	document.write("<hr><h1>NO ENCONTRADO</h1>");
	}
