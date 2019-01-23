'use strict'

// Prueba con Let y Var

// Prueba con var
var numero = 40;
console.log(numero); // valor 40

if (true) {
	var numero = 50;
	console.log(numero); // valor 50
}

console.log(numero); // valor 50


// Prueba con Let

var texto = "Curso JS";
console.log(texto); // valor JS

if (true) {
	let texto ="Curso Laravel"; // valor laravel
	console.log(texto);
}

console.log(texto);// valor JS