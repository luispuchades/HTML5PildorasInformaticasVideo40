///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API DRAG&DROP II
 * Origin: Capitulo40.html ==> dragstart, dragend y drag
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemOrigen;

elemOrigen = document.getElementById("imagen");


//1.1 Extracción de elementos desde HTML


//2. Definición de Funciones
function comenzar() {
    elemOrigen.addEventListener("dragstart", function () {
        alert("Comenzó el evento dragstart");
    },false)
}

//DRAGEND
//function comenzar() {
//    elemOrigen.addEventListener("dragend", function () {
//        alert("Se activó el evento dragend");
//    },false)
//}

//DRAG
//function comenzar() {
//    elemOrigen.addEventListener("drag", function () {
//        alert("Se activó el evento drag");
//    },false)
//}

//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
