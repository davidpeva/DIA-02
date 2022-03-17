'use strict'

const arreglo = [
    {
        nombre: 'Alan',
        lugarNacimiento: {
            Pais: '',
            Ciudad: ''
        }
    },
    {
        nombre: 'Enrique',
        apellido: 'Maya',
        lugarNacimiento: [{
            Pais: '',
            Ciudad: ''
        },
        {
            Pais: '',
            Ciudad: ''
        }]
    },
    {
        nombre: 'Ariadne',
        lugarNacimiento: {
            Pais: '',
            Ciudad: ''
        }
    },
    {
        nombre: 'Beatriz',
        lugarNacimiento: {
            Pais: '',
            Ciudad: ''
        }
    }
];

//LOS ARREGLOS UNICIAN A PARTIR DE 0
//----------------------0----1----2
const arregloBasico = ['a', 'b', 'c'];

console.log(arregloBasico[arregloBasico - 1]);

arregloBasico.pop();

console.log(arregloBasico[arregloBasico - 1]);