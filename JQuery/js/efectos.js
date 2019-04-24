$(document).ready(function () {
	var caja = $("#caja");

	$("#mostrar").hide();

	$("#mostrar").click(function () {
		$(this).hide();
		$("#ocultar").show();
		// $("#caja").show('normal');
		$("#caja").fadeIn('slow');
	});

	$("#ocultar").click(function () {
		$(this).hide();
		$("#mostrar").show();
		// $("#caja").hide('slow');
		$("#caja").fadeOut('slow');
	});

	$("#todo").click(function () {
		// $("#caja").toggle('fast');
		// $("#caja").fadeToggle('fast');
		$("#caja").slideToggle('fast');
	});

	$("#animar").click(function () {
		caja.animate({marginLeft: '500px'}, 'slow');
	});
});