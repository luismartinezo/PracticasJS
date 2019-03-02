'use strict'

// localStorage

// Comprobar disponibilidad del localStorage
if (typeof(Storage) !== 'undefined') {
	console.log("localStorage Disponible");
}else {
	console.log("Incompactible con localStorage");
}

// Guardar Datos
localStorage.setItem("titulo", "Curso de Laravel de Luis Martinez");

// Recuperar Datos
console.log(localStorage.getItem("titulo")); //Mostrar en consola mi titulo

document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar Objetos
var usuario = {
	nombre: "Luis Martinez",
	email: "lmartinezocoro@gmail.com",
	web: "luismartinezo.info"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objecto
var userjs = JSON.parse(localStorage.getItem("usuario")); console.log(userjs);
document.querySelector("#peliculas").append(" - "+userjs.email +" - "+ userjs.web);