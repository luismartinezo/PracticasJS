'use strict'

// tabla de multiplicar de un numero introducido

var numero = parseInt(prompt('De que numeo quieres la tabla de multiplicar', 1));
document.write("<h3>Tabla de Multiplicar del numero "+numero+"<h3>");
for (var i = 1; i <= 10; i++) {

	document.write(i+" x "+numero+" = "+(i*numero)+"<br>");
}

// Todas las tablas de multiplicar
document.write("<hr><br>TODAS LAS TABLAS DE MULTIPLICAR HASTA EL "+i);
for (var c = 1; c <= 10; c++) {
document.write("<h3>Tabla de Multiplicar del numero "+c+"<h3>");
for (var i = 1; i <= 10; i++) {
	document.write(i+" x "+c+" = "+(i*c)+"<br>");
	}
}
