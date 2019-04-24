$(document).ready(function () {
	realoadLinks();
	$('#add_button').click(function () {
		// console.log($("#add_link").val());
		// $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');

		// Lo añade al inicio de la lista
		$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');

		// lo añade fuera de la lista
		$('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>');
		realoadLinks();
	});

});

function realoadLinks() {
	console.log($('a').length); //Muestra el total de enlaces
	$('a').each(function (index) {
		//console.log($(this).attr("href")); //muestra los enlaces que tenemos
		var that = $(this);
		var enlace = that.attr("href");
		that.attr('target','_blank');
		that.text(enlace);
	});

}