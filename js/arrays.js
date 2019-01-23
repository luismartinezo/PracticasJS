'use strict'

// Busquedas

// Buscar y comparar por numeros si se cumple condicion dentro del arreglo
var precios = [10, 20, 30, 80, 12];

var busqueda = precios.some(precio => precio > 79);

console.log(busqueda);