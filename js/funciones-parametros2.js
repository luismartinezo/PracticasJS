'use strict'



/////////////////////////////////////////////////////////////////////////////////
////////////////////////// PARAMETROS DE REST Y SPREAD ////////////////
///////////////////////////////////////////////////////////////////////////////

// El resto de las frutas que no pasamos individuamente
// se guarda dentro de un arreglo pasandole los tres puntos al parametro resto_de_frutas
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
		console.log("Fruta 1: ", fruta1);
		console.log("Fruta 2: ", fruta2);
		console.log(resto_de_frutas);
	}

	// INVOCA FUNCION
	listadoFrutas("Naranja","Manzada","Melon","Pera","Mandarina","Piña");
	
	// Tambien podemos hacerlo de esta manera que es lo mismo solo que agregamos un arreglo
	var frutas = ["Naranja","Manzada"];
	listadoFrutas(...frutas,"Melon","Pera","Mandarina","Piña");
	