'use strict'

// Plantillas

var nombre = prompt('INGRESE SU NOMBRE');
var apellido = prompt('INGRESE SU APELLIDO');

//var texto = "Mi nombre es : "+nombre+ " y Mi Apellido es:"+apellido;

// Aca lo podemos hacer interpolado con plantillas y las comillas invertidas
var texto = `
	<h1>BIENVENIDO</h1>
	<h3>Mi nombre es: ${nombre}<h3>
	<h3>Mi apellido es: ${apellido}<h3>
`;
document.write(texto);