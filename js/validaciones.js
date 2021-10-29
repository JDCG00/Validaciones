/**
    validaciones.js
    Script para validar un Formulario
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'

window.onload = iniciar

function iniciar() {
    let formulario = document.forms[0]
    console.log(formulario);
    formulario.onsubmit = validar

}

function validar(evento){
    console.log('Estoy validando');
    //Comprobamos La aceptación de política de privacidad
    if (!document.getElementById('iPolitica').checked) {
        //return false
    }
    //Compruebo el campo de Nombre
    if (!document.getElementById('iNombre').length < 3) {
        //return false
       // evento.preventDefault()
    }
    comprobarDNI()
    //evento.preventDefault()
    //return false
}
function comprobarDNI(numero, letra) {
    if(!isNaN(numero) 
        && isNaN(letra) 
        && numero.toString().length === 8
        && letra.length === 1) {
        let ordenarLetras ='ABCDEFGHIJKLMNÑOPQRSTUVWYXZ';
        if(ordenarLetras[numero % 27] === letra.toUpperCase()) {
            return true;
        }
    }
    return false;
}


