'use strict'

// Calculadora: pida los numeros por pantalla
// - Si mete los numeros mal vuelve a perdirlos
// - En el cuerpo de la pagina , en una alerta y por la consola el resultado de 
// sumar, restar, multiplicar y dividir esas dos cifras

var numero1 = parseInt(prompt('Ingresa el primer numero', 0));
var numero2 = parseInt(prompt('Ingresa el segundo numero', 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
	var numero1 = parseInt(prompt('Ingresa el primer numero', 0));
	var numero2 = parseInt(prompt('Ingresa el segundo numero', 0));
}

var resultado = "La suma es :"+(numero1+numero2)+" <br>"+
				"La resta es :"+(numero1-numero2)+" <br>"+
				"La division es :"+(numero1/numero2)+" <br>"+
				"La multiplicacion es :"+(numero1*numero2)+" <br>";

var resultado2 = "La suma es :"+(numero1+numero2)+" \n"+
				"La resta es :"+(numero1-numero2)+" \n"+
				"La division es :"+(numero1/numero2)+" \n"+
				"La multiplicacion es :"+(numero1*numero2)+" \n";

alert(resultado2);
document.write(resultado);
console.log(resultado2);