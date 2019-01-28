'use strict'

//Bucle WHILE - ESTRUCTURA DE CONTROL QUE SE PEPITE VARIAS VECES

var year = 2019;

while(year != 1991){
	console.log("Estamos en el año :"+year);

	// Condicional que corta cuando es igual al año 2000
	if (year == 2000) {
		break;
	}
	//++year // Ingremento
	year-- // decremento
}

// DO WHILW
var years = 20;
do{ // hace algo
	alert("solo cuando sea diferente a 20 ");
	year = 20;
}while(year != 20) // y luego la condicion