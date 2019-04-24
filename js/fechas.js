// 'use strict'

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
var hour = date.getHours();
var textHour = `
    El año es: ${year}
    El mes es: ${month}
    El dia es: ${day}
    La hora es: ${hour}`;
console.log(textHour);