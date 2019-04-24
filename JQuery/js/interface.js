$(document).ready(function () {

	// Mover elemento por la pagina
	$(".elemento").draggable();

	// Redimensionar
	$(".elemento").resizable();

	// Seleccionar elementos
	//$(".lista").selectable();

	// Ordenar elementos - si tiene el resizable no funciona
	$(".lista").sortable({
		update: function (event, ui) {
			console.log("Ha cambiaado");
		}
	});

	// Drop
	$("#elemento-movido").draggable();
	$("#area").draggable({
		drop: function() {
			console.log("Ha soltado dentro del area");
		}
	});

	// Efectos
	$("#mostrar").click(function () {
		// $("#caja-efectos").toggle("fade");
		// $("#caja-efectos").fadeToggle();
		// $("#caja-efectos").effect("explode");
		// $("#caja-efectos").effect("explode");
		// $("#caja-efectos").toggle("explode");
		// $("#caja-efectos").toggle("blind");
		// $("#caja-efectos").toggle("slide");
		// $("#caja-efectos").toggle("drop");
		// $("#caja-efectos").toggle("fold");
		// $("#caja-efectos").toggle("puff");
		// $("#caja-efectos").toggle("scale");
		// $("#caja-efectos").toggle("shake");
		$("#caja-efectos").toggle("shake", 4000);
	});

	// Tooltip
	// Dialogos
	// Calendarios DatePicker
	//Tabs

});