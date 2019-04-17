'use strict'

// fetch (ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_userId = document.querySelector("#userId");
var div_profesor = document.querySelector("#profesor");

// var usuarios = [];
// fetch('https://jsonplaceholder.typicode.com/users') // Accedemos a un servicio remoto para traer el json
getUsers().then(data => data.json()) // Cuando se tengan los datos lo Convertimos a json los datos
.then(data => {
    //usuarios = data; // Guardamos los datos en la variable usuarios
    //console.log(usuarios);
    listUsers(data);

    // return getuserId();
    return getInfo();

}).then(data => {

	//console.log(data);
	div_profesor.innerHTML=data;

	return getuserId();

}).then(data => data.json())
.then(data => {

	mostraruserId(data);
})
.catch(error =>{
	//console.log(error+"AQUI");
	alert('ERRO EN LA PETICION O SIN CONEXION')
});


function getUsers() {
	return fetch('https://jsonplaceholder.typicode.comDSS/users');
}

function getuserId() {
	return fetch('https://jsonplaceholder.typicode.com/users/1');
}

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////////////// CREACION DE PROMESAS  /////////////////
/////////////////////////////////////////////////////

function getInfo() {
	var profesor = {
		nombre: 'Luis',
		apellido: 'Martinez',
		url: 'luismartnezo.info'
	};

	return new Promise((resolve, reject) => {

		var profesor_string = "";

		setTimeout(function () {
			profesor_string = JSON.stringify(profesor);

			if (typeof profesor_string != 'string' || profesor_string=='') return reject('error');

		return resolve(profesor_string);
		}, 3000);

	});

	
}

function listUsers(usuarios) {
    usuarios.map((data, i) => {
        let name = document.createElement('h3');
        name.innerHTML = i +' - '+ data.name;
        div_usuarios.appendChild(name);
        
        document.querySelector(".loading").style.display = "none";
    });
}

function mostraruserId(usuario) {
    //usuario.map((data, i) => {
        let name = document.createElement('h2');
        name.innerHTML = usuario.name;
        div_userId.appendChild(name);
        
        document.querySelector("#userId .loading").style.display = "none";
  //  });
}