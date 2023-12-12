'use strict'
let fila= 'LAB2#B';
let letra= fila.codePointAt(fila.length-1);// codigo de posicion 0(l)
let sigletra= String.fromCodePoint(letra+1);
alert(sigletra);
//Salida: C