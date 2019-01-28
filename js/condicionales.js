<<<<<<< HEAD
'use strict'
=======
'use strict'

// Condicional IF

// Si A es igual a B entonces haga algo

// var edad = 30;
// var edad2 = 12;

// if (edad > edad2) {

// 	alert("Edad"+edad+" es mayor que "+edad2);
// }else{
// 	alert("Edad"+edad2+" es mayor que "+edad);
// }

var edad = 34;
var nombre = "Luis Cabrera ";

if (edad >= 18) {

	if (edad <= 33) {
		alert("Todavia eres Millenial");
	}else if(edad>=70){
		alert("Eres anciano");
	}else{
		alert("Ya no eres Millenial");
	}

	alert("Eres "+nombre+" y tiene "+edad+ " años, es mayor de edad");
}else{
	alert("Eres "+nombre+" y tiene "+edad+ " años, es mayor de edad");
}

/* Operadores Logicos AND && OR Negacion !*/

var year = 2019;
// NEGACION
if (year != 2016) {
	alert("El año no es 2016, realmente es: "+year);

} else {}

// AND
if (year >= 2000 && year <= 2020) {
	alert("Estamos en la era actual");
} else {
	alert("Estamos en la era postModerna")
}

// OR

if (year == 2009 || year == 2019 ) {
	alert("El año acaba en 9 ");
} else {}
>>>>>>> 38c3d4146ec811cf07f40b2ed166970f19d6cc18
