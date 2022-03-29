'use strict'
//CLASE DEL 22-03-22 HORA 9.13PM

// ordena de menor a mayor,
// se hacen comparaciones,
// se dividian en dos grupos cuando estaban rodeados,
// se compara cada par,
// se compara entre mayor y menor

// REPETIR ESTA CLASE
//VOLVER A BUSCAR LO DE DESESTRUCTURACION
//ACORDARME DE LAS EXTENSIONES Q LE HE INSTALADO AL CODE MAS LOS PLUGINS

// defino un arreglo desordenado de numeros
const arr = [0, 14, 67, 4, 2, 1]

// funcion de flecha el nimbre q le puse es bubbleSort
const bubbleSort = numeros => {
    const total = numeros.length

    for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {  
            if (numeros[j] > numeros[j + 1]) {
                [numeros[j], numeros[j + 1]] = [numeros [j + 1], numeros[j]]
            }
        }
    }
    return numeros;
}

console.log(bubbleSort(arr));