'use strict'

// Funciones
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones

// Defino la funcion y se le pasan parametros
	function calculadora(numero1, numero2) {
		
		
		var suma = numero1+numero2;
		document.write("LA SUMA DE LOS NUMERO "+numero1+" +  "+numero2+" = "+suma);
		return suma;
	}

	// INVOCA FUNCION
	//calculadora();
	console.log(calculadora);