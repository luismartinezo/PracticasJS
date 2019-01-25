'use strict'

var edad = 25 ;
var imprimir = "";

switch(edad){
	case 18:
		imprimir = "Acabas de ser mayor de edad";
	break;
	case 25:
		imprimir = "Eres un Adulto";
	break;
	case 40:
		imprimir = "Cuarenton";
	break;
	case 75:
		imprimir = "Ya estas viejito";
	break;

	default: imprimir = "edad Neutra";
	break;

}

alert(imprimir)	;
	