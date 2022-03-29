'use strict'

//CLASE 24-03-22 LA ULTIMA MEDIA HORA

const numeros = []

const insertionSort = (numeros) => {

    for (let i = 0; i < array.length; i++) {
        
        let j = i;
        while (j >= 1 && numeros[j] < numeros[j - 1]) {
            [numeros[j - 1], numeros[j]] = [numeros [j], numeros[j - 1]];
            j--
        }
    }
    return numeros
}

console.log(insertionSort(numeros));