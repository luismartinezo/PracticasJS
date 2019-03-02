'use strict'

window.addEventListener('load', function () {
	
	// Timers
	// El setInterval se ejecuta muchas veces
function intervalo () {
	var tiempo_i = setInterval(function () {
		console.log("Set Interval ejecutado");

		var encabezado = document.querySelector("h1");

		if (encabezado.style.fontSize == "50px") {
				encabezado.style.fontSize = "30px";
		}else{

				encabezado.style.fontSize = "50px";
		}
		//document.querySelector("h1").style.fontSize = "50px";
	}, 900);

	return tiempo_i;

}

	var tiempo_i = intervalo();
	
// El setTimeout se ejecuta solo una vez
	var tiempo = setTimeout(function () {
		console.log("Set Timeout ejecutado");
		var sesion = document.querySelector("p");

		if (sesion.style.fontSize == "50px") {
				sesion.style.fontSize = "30px";
		}else{

				sesion.style.fontSize = "50px";
		}
		//document.querySelector("h1").style.fontSize = "50px";
	}, 900);

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function () {
		alert("Has parado el intervalo");
		clearInterval(tiempo_i);
	});

	var start = document.querySelector("#start");
	start.addEventListener("click", function () {
		alert("Has Iniciado el intervalo");
		intervalo();
	});

});