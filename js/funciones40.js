///*global window*/
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - API DRAG&DROP II
 * Origin: Capitulo40.html ==> dragstart, dragend y drag
 */

// "use strict";


//1. Definición de Objetos y Variables
var elemOrigen;
var zonaDestino;

elemOrigen = document.getElementById("imagen");
zonaDestino = document.getElementById("zona-destino");


//1.1 Extracción de elementos desde HTML


//2. Definición de Funciones
function comenzarArrastrar() {
    
}


function comenzar() {
// Indicamos que en caso de "dragstart" que llame la función comenzarArrastrar.
    elemOrigen.addEventListener("dragstart",comenzarArrastrar,false);

//Indicamos al navegador que en caso de "dragenter" no haga nada de lo que tiene
// previsto en su programación para este evento.
    zonaDestino.addEventListener("dragenter", function(e){
        e.preventDefault();
    },false);

//Indicamos al navegador que en caso de "dragover" no haga nada de lo que tiene
// previsto en su programación para este evento.
    zonaDestino.addEventListener("dragenter", function(e){
        e.preventDefault();
    },false);
}



//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
