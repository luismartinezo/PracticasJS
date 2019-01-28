'use strict'

// Mostrar todos los numeros impares que hay entre dos numeros introducidos

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el primer numero', 0));

while(numero1 < numero2){
	numero1++;

	// si el resto de dividir un numero entero es diferente a cero entonces es impar
	if (numero1%2 != 0) {
		console.log("El numero "+numero1+ " es impar");
	}else{
		console.log("El numero "+numero1+ " es par");
	}
}