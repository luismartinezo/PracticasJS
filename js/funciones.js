'use strict'

///////////////////////////////////////////////////////////////////
//////////////////// Funciones  //////////////////////////////////
/////////////////////////////////////////////////////////////////

// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
	// Los Parametros van alterar la logica de la funcion

// Defino la funcion y se le pasan parametros
// 	function calculadora(numero1, numero2) {
		
// // Conjunto de instrucciones a ejecutar

// 		console.log("Suma: "+ (numero1+numero2));
// 		console.log("Resta: "+ (numero1-numero2));
// 		console.log("Multiplicacion: "+ (numero1*numero2));
// 		console.log("Division: "+ (numero1/numero2));
// 		console.log("*************************************");
// 		// var suma = numero1+numero2;
// 		// document.write("LA SUMA DE LOS NUMERO "+numero1+" +  "+numero2+" = "+suma);
// 		// return suma;
// 		// return "Hola soy una calculadora";
// 	}

// 	// INVOCA FUNCION
// 	for (var i = 0; i < 10; i++) {

// 		console.log(i);
// 		calculadora(i,8);
		
// 	}
	// calculadora(5,5);
	// console.log(calculadora);

// /////////////////////////////////////////////////////////////////////////////////
// ////////////////////////// PARAMETROS OPCIONALES DE UNA FUNCION ////////////////
// ///////////////////////////////////////////////////////////////////////////////

// function calculadora(numero1, numero2, mostrar = false) {
		
// // Conjunto de instrucciones a ejecutar
// 		if (mostrar == false) {
// 		console.log("Suma: "+ (numero1+numero2));
// 		console.log("Resta: "+ (numero1-numero2));
// 		console.log("Multiplicacion: "+ (numero1*numero2));
// 		console.log("Division: "+ (numero1/numero2));
// 		console.log(mostrar);
// 		console.log("*************************************");	
// 		}else {
// 		document.write("Suma: "+ (numero1+numero2)+"<br>");
// 		document.write("Resta: "+ (numero1-numero2)+"<br>");
// 		document.write("Multiplicacion: "+ (numero1*numero2)+"<br>");
// 		document.write("Division: "+ (numero1/numero2)+"<br>");
// 		document.write(mostrar+"<br>");
// 		document.write("*************************************");
// 		}
		
// 		// var suma = numero1+numero2;
// 		// document.write("LA SUMA DE LOS NUMERO "+numero1+" +  "+numero2+" = "+suma);
// 		// return suma;
// 		// return "Hola soy una calculadora";
// 	}

// 	// INVOCA FUNCION

// 	calculadora(1,8);
// 	calculadora(1,8, true);

	// for (var i = 0; i < 10; i++) {

	// 	console.log(i);
	// 	calculadora(i,8);
		
	// }



/////////////////////////////////////////////////////////////////////////////////
////////////////////////// FUNCION DENTRO DE OTRA FUNCION ////////////////
///////////////////////////////////////////////////////////////////////////////

function porConsola(numero1, numero2) {
		console.log("Suma: "+ (numero1+numero2));
		console.log("Resta: "+ (numero1-numero2));
		console.log("Multiplicacion: "+ (numero1*numero2));
		console.log("Division: "+ (numero1/numero2));
		//console.log(mostrar);
		console.log("*************************************");	
}

function porPantalla(numero1, numero2) {
		document.write("<br>Suma: "+ (numero1+numero2)+"<br>");
		document.write("Resta: "+ (numero1-numero2)+"<br>");
		document.write("Multiplicacion: "+ (numero1*numero2)+"<br>");
		document.write("Division: "+ (numero1/numero2)+"<br>");
		//document.write(mostrar+"<br>");
		document.write("*************************************");
}
function calculadora(numero1, numero2, mostrar = false) {
		
// Conjunto de instrucciones a ejecutar
		if (mostrar == false) {
		porConsola(numero1,numero2);
		}else {
		porPantalla(numero1,numero2);
		}
		
		return true;
	}

	// INVOCA FUNCION

	calculadora(1,8);
	calculadora(1,8, true);
	calculadora(1,8, true);
	calculadora(10,8);