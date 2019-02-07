'use strict'

// BOM - Browser Object Model

function getBom() {
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	console.log(screen.width);
	console.log(window.location);
	console.log(window.location.href);//Aca llamamos uno de los que se muestran
}

function redirect(url) {
	window.location.href = url;
}
function openWindow(url) {
	// window.open(url);
window.open(url,"","width=400,height=300");// Aca pasamos tamaños a la ventana
}
//redirect('https://google.com');//Llamamos la funcion y le pasamos la url
//openWindow('https://google.com');//Llamamos la funcion y le pasamos 
//la url se abre en otra ventana

getBom();