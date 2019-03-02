'use strict'

// Eventos del raton

// var boton = document.querySelector('#boton');

// El evento load nos permite cargar el script al inicio de nuestro documento y no al final en el index
window.addEventListener('load', () => {

	function cambiaColor() {
		console.log("Me has dado click");

		var bg = boton.style.background;

		if(bg == "green"){
			boton.style.background ="red";
		}else{
			boton.style.background ="green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}


	var boton = document.querySelector("#boton");

	//CLICK
	boton.addEventListener('click', function() {
		cambiaColor();
		console.log(this);
		this.style.border = "10px solid black";
	});

	// Mouse Over
	boton.addEventListener('mouseover', function() {
		boton.style.background ="#ccc";
	});

	// Mouse out
	boton.addEventListener('mouseout', function() {
		boton.style.background ="black";
	});

	// focus

	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function() {
		console.log('[focus] estas en el focus');
	});
	// blur
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('blur', function() {
		console.log('[blur] estas fuera del focus');
	});

	// Keydown
	input.addEventListener('keydown', function(event) {
		console.log('[keydown] Tecla pulsada', String.fromCharCode(event.keyCode));
	});

	// keypress
	input.addEventListener('keypress', function(event) {
		console.log('[keypress] Tecla presionada', String.fromCharCode(event.keyCode));
	});

	// keyup
	input.addEventListener('keyup', function(event) {
		console.log('[keyup] Tecla Soltada', String.fromCharCode(event.keyCode));
	});
});