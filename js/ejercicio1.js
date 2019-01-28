'use strict'

// Programa que pida dos numeros y que nos diga cual es el mayor, el menor y sin son iguales
// PLUS : Si no son un numero o son menores o iguales a cero nos vuelva a pedir
var num1 = parseInt(prompt('Ingrese el primer numero', 0));
var num2 = parseInt(prompt('Ingrese el segundo numero', 0));

while(num1 <= 0 || num2<=0 || isNaN(num1) isNaN(num2)){
	num1 = parseInt(prompt('Ingrese el primer numero', 0));
    num2 = parseInt(prompt('Ingrese el segundo numero', 0));

}

if (num1 == num2) {
	alert("Los numeros son iguales");

}else if (num1 > num2) {
	alert("El numero "+num1+" es mayor al "+num2);
	alert("El numero "+num2+" es menor al  "+num1);
}else if (num2 > num1) {
	alert("El numero "+num2+" es mayor al "+num1);
	alert("El numero "+num1+" es menor al  "+num2);
}else{
	alert("Ingrese numeros correctos");
}