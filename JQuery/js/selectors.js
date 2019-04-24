// jQuery o el signo $ es igual para jQuery
$(document).ready(function () {
	//console.log("esta listo");
	// Selector ID - para seleccionar un elemento en particular
	$("#verde").css("background","green").css("color", "white");
	var rojo = $("#amarillo").css("background","yellow").css("color", "black");
	var rojo = $("#rojo").css("background","red").css("color", "white");

	// selectores de clase - la clase se utiliza para seleccionar muchos elementos o etiquetas

	var miClase = $('.zebra').css("padding", "5px");

	$('.sin_borde').click(function () {
		console.log("Click dado!!");
		$(this).addClass('zebra');
	});

	// Selectores de etiquetas
	var parrafos = $('p').css('cursor', "pointer");

	parrafos.click(function () {
		var thas = $(this);
		if (!thas.hasClass('grande')) {
			thas.addClass('grande');
		}else {
			thas.removeClass('grande');
		}
	
	});

	// Selectores de atributos
	$('[title="Google"]').css('background','#ccc');
	$('[title="Facebook"]').css('background','skyblue');

	// Otros
	//$('p, a').addClass('margen-superior');

	// Nos sirve para buscar el eq[0] indica el indice y el parent() sale de una etiqueta a otra
	var buscar = $("#caja").find(".resaltado");
	console.log(buscar);
});

