'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btlClose = document.querySelector('.close-modal');
const btlOpen = document.querySelector('.show-modal');

//ACA CON EL CLASSLIST REMOVE LE DIGO Q ME QUITE ESA CLASE PORQUE POR DEFECTO TENGO ACTIVADO EL HIDDEN
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
//ACA CON EL CLASSLIST ADD LE DIGO Q ME AGREGUE ESA CLASE PORQUE POR DEFECTO TENGO ACTIVADO EL HIDDEN
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//LA CONST ESCUCHA EL CLICK Y EJECUTA LA FUNCION
btlOpen.addEventListener('click', openModal);
btlClose.addEventListener('click', closeModal);
//CON ESTA SE CIERRA CUANDO DOY CLICK EN CUALQUIER LUGAR
overlay.addEventListener('click', closeModal);

//EL KEYDOWN ES CUANDO OPRIMO UNA TECLA Y LE DIGO Q HAGA ESA FUNCION LA PALABRA event la puedo poner lo que quiera
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
})

//RETO CERRAR EL MODAL TECLEANDO LO QUE SEA
//BUSCAR QUE PASA CUANDO CAMBIO EL KEYDOWN INVESTIGAR QUE MAS EVENTOS HAY