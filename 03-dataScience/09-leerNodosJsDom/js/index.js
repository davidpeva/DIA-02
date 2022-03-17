'use strict'
//este hace parecido a lo q hace el id
//const titulo = document.getElementById('titulo')

//const parrafo = document.getElementsByClassName('parrafo')

//const h2 = document.getElementsByTagName('h2')


// puedo seleccion ids y parrafos parrafos 
//const tituloQuery = document.querySelector('#titulo')

//me selecciona el primer elemento en la busqueda que encuentre si tengo mas clases solo seleciona el primero
//const tituloQuery = document.querySelector('.parrafo')
// para esto uso el alla me coge todas las clases parrafos
//const tituloQuery = document.querySelectorAll('.parrafo')

//EVENTOS
// 
let titulo = document.getElementById('titulo')
//le voy a aplicar un metodo
titulo.addEventListener('mouseover', () => {
    titulo.classList.add('texto-azul')
})

titulo.addEventListener('mouseout', () => {
    titulo.classList.remove('texto-azul')
    //ASI CON ESTO PUEDO QUITAR EL COLOR DEL FONDO DEL MODULO PASADO
})