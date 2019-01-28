'use strict'

/*
Utilizar un bucle , mostrar la suma y la media de los numeros introducidos
hasta que se introduzca un numero negativo y ahi mostrar el resultado
*/

var suma = 0;
var contador =0;

do{
	var numero = parseInt(prompt('Ingrese un numero hasta tener uno negativo', 0));
	if (isNaN(numero)) {
		numero = 0;
	}else if (numero>=0) {
		suma = suma + numero;
		contador++;

	}
	// console.log(suma);
	// console.log(contador);
}while(numero >=0)

alert("LA SUMA ES DE TODO LOS NUMEROS: " +suma);
alert("LA MEDIA DE TODOS LOS NUMEROS ES: "+(suma/contador));