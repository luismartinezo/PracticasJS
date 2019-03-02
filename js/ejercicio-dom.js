'use strict'

window.addEventListener('load', function () {
	console.log("DOM");
	
	var formulario =  document.querySelector("#formulario");
	var box_dashed =  document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener('submit', function () {
		console.log("Evento submit capturado");

		var nombre = document.querySelector("#nombre").value;
		var apellido = document.querySelector("#apellido").value;
		var edad = parseInt(document.querySelector("#edad").value);

		if (nombre.trim() == null || nombre.trim().length ==0) {

			alert("El nombre no es valido");
			document.querySelector("#error_nombre").innerHTML = "Nombre no se ha ingresado";
			return false;

		}else {
			document.querySelector("#error_nombre").style.display = "none";
		}

		if (apellido.trim() == null || apellido.trim().length ==0) {

			alert("El apellido no es valido");
			document.querySelector("#error_apellido").innerHTML = "apellido no se ha ingresado";
			return false;

		}else {
			document.querySelector("#error_apellido").style.display = "none";
		}

		if (edad == null || edad.length >=0 || isNaN(edad) ) {

			alert(" La edad no es valida");
			document.querySelector("#error_edad").innerHTML = "edad no se ha ingresado";
			return false;

		}else {
			document.querySelector("#error_edad").style.display = "none";
		}

		box_dashed.style.display = "block";

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellido = document.querySelector("#p_apellido span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellido.innerHTML = apellido;
		p_edad.innerHTML = edad;
		

//////////////////////////////////////////////////////////////////////////////////////
		// Esta es una manera de nostrar la informcion del formulario en el cuadro
/////////////////////////////////////////////////////////////////////////////////////
		// var datos_usuario = [nombre, apellido, edad];
		// for (indice in datos_usuario) {
		// 	var indice;
		// 	var parrafo = document.createElement("p");
		// 	parrafo.append(datos_usuario[indice]);
		// 	box_dashed.append(parrafo);
		// }

		// var parrafo = document.createElement("p");
		// parrafo.append(nombre);
		// parrafo.append(apellido);
		// parrafo.append(edad);

		// box_dashed.append(parrafo);
	});
});