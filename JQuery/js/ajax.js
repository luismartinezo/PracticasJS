$(document).ready(function () {

	// Load
	//$("#datos").load("https://reqres.in");

	// get y post
	$.get("https://reqres.in/api/users?page=2", {page: 3}, function (response) {
		// console.log(response);
		response.data.forEach((element, index) => {

			$("#datos").append("<p>"+element.first_name+" "+ element.last_name+"</p>");

	});
		});

	// var user = {
	// 	name: "Luis Martinez",
	// 	web: "luismartinezo.info"
	// };

	// $.post("https://reqres.in/api/users", user, function (response) {
	// 	console.log(response);
	// });

	$("#form").submit(function (e) {
		e.preventDefault();
		var user = {
		name: $('input[name="name"]').val(),
		web: $('input[name="web"]').val()
	};
/*	console.log(user);

	$.post($(this).attr("action"), user, function (response) {
		console.log(response);
	}).done(function () {
		alert("Usuario Añadido Correctamente");
	});
*/
	$.ajax({
		type: 'POST',
		url: $(this).attr("action"),
		data: user,
		beforeSend: function () {
			console.log("Enviando...");
		},
		error: function () {
			console.log("Ocurrio un error");
		},
		timeout: 10000
	});
		return false;
	});
});