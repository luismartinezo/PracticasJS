// Uso estricto es para tener los ultimos estandares de ECMASCRIPT, por ejemplo si no colocamos var a una variable
'use strict'

// DOM - Document Object Model
	
// Llamando esta funcion en el DOM ponemos cambiar el color de fondo
function cambioColor(color) {
	caja.style.background = color;
}

// Conseguir elementos con un ID concreto

	
// Con innerHtml capturamos lo que tiene dento del id micaja
	//var caja = document.getElementById("micaja").innerHTML;

// Capturamos el id en una variable caja
	//var caja = document.getElementById("micaja");

// QuerySelector es otra manera de capturar el id o si es una clase tambien es con .micaja
	var caja = document.querySelector("#micaja");
		
// Podemos agregar algo dentro del html
	caja.innerHTML = "TEXTO DESDE JS";
// Agregar algun estilo
	 caja.style.background = "blue";
	 caja.style.padding = "20px";
	 caja.style.color = "white";
// Añadimos clases
	caja.className = "Miclase";

// Conseguir elementos por su etiqueta
	var todosLosDivs = document.getElementsByTagName('div');

	//var contenidoEnTexto = todosLosDivs[2];
	//contenidoEnTexto.innerHTML = "OTRO TEXTO PARA EL ELEMENTO EN POSICION 2";
	//console.log(contenidoEnTexto);
// todosLosDivs.forEach( valor, indece) => {
	var seccion = document.querySelector("#miSeccion");
	var hr = document.createElement("hr");
	var valor;
for(valor in todosLosDivs){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todosLosDivs[valor].textContent);
	parrafo.append(texto);
	seccion.append(parrafo);
	//document.querySelector("#miSeccion").prepend(parrafo);
}
seccion.append(hr);
// }
// console.log(todosLosDivs);

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	// Si la clase es rojo entonces muetra el color
	if (divsRojos[div].className=="rojo") {
		divsRojos[div].style.background = "red";
	}

}
// console.log(divsRojos);

// Query Selector

var id = document.querySelector("#encabezado");
console.log(id);
var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);
var etiqueta = document.querySelectorAll("div");
console.log(etiqueta);