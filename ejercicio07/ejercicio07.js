'use strict'
let https= "drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let posicio= https.indexOf("/d/")+3;
let posicionfinal= https.indexOf("/view?", posicio);

alert(https.slice(posicio, posicionfinal));

//Salida: 1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1