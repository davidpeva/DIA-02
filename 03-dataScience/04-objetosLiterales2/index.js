'use strict'

const persona = {
    //ESTRUCTURA DE CLAVE VALOR, KEY-VALUE
    "primer Nombre" : "Pamela",
    "apellido" : "Ortega",
    "intereses" : [
        'Natacion',
        'Green Day',
        'Harry Potter',
    ],
    "x1" : "uno",
    "x2" : "dos"
}

//Notacion de puntos ES LA Q SE USABA ANTES CUANDO NO TRABAJABA ESTO como para acceder a algo especifico
console.log(pamela.apellido);

//notacion corchetes SE USA MUCHO CON JSON Y PARA HACER OPERACIONES Y COSAS
console.log(pamela["primer Nombre"]);
console.log(pamela["x" + 1]);

//NORMALMENTE TODOS LOS JSONS VIENEN CON COMILLAS
//LA IDEA ES DOMINAR COMO ACCEDER A LOS DATOS DE LOS ARREGLOS, JSON U OBJETOS
//PERMITET TAMBIEN CONCATENAR