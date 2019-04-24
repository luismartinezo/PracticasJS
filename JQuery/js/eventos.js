$(document).ready(function () {
	// MouseOver y MouseOut

	var caja = $('#caja');
	// caja.mouseover(function () {
	// 	$(this).css("background","red");
	// });

	// caja.mouseout(function () {
	// 	$(this).css("background","yellow");
	// });

	// Hover - este funciona como el mouseover y el mouseout
	function CambiaRojo() {
		$(this).css("background","red");
	}

	function CambiaAmarillo() {
		$(this).css("background","yellow");
	}
	caja.hover(CambiaRojo,CambiaAmarillo);

	// Click, Doble click
	caja.click(function () {
		$(this).css("background", "blue").css("color","white");
	});

	caja.dblclick(function () {
		$(this).css("background", "pink").css("color","black");
	});

	// focus y blur
	// Creamos la variable nombre para no recargar el DOM
	var nombre = $("#nombre");
	var datos = $("#datos");
	// $("#nombre").focus(function () {
	nombre.focus(function () {
		$(this).css("border","2px solid red");
	});

	// $("#nombre").focus(function () {
	nombre.blur(function () {
		$(this).css("border","2px solid green");
		datos.text($(this).val()).show();

	});

	// Mousedown y mouseup
	datos.mousedown(function () {
		$(this).css("border-color","gray");
	});

	datos.mouseup(function () {
		$(this).css("border-color","pink");
	});

	// mousemove
	$(document).mousemove(function () {
		// console.log("En X: "+event.clientX);
		// console.log("En Y: "+event.clientY);
		var sigueme = $("#sigueme");
		$('body').css("cursor","none");//hace que sea mi cursor
		sigueme.css("left",event.clientX);
		sigueme.css("top",event.clientY);
	});

})