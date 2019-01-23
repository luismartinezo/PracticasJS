'use strict'

// Variable, es un contenedor de informacion
// 

// En modo estricto me da error pais porque no esta definida con var
 pais = "Colombia";
var continente = "America Sur";
var antiguedad = 2016;
var pais_y_continente = pais+' '+continente;

// Reasignacion de valores a variables, esta ya fueron creadas con var
pais = "España";
continente = "Europa";
pais_y_continente = pais+' '+continente;

console.log(pais, continente, antiguedad);
alert(pais_y_continente);