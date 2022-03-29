'use strict'

// -va a tonar un conjunto de datos
// -va a tomar dos subconjuntos, el de datos ordenados y el de desordenados
// -para ordenar, va a recorrer uno por uno y seleccionara el mas pequeño
// en comparacion con el q se esta comparando
// -se hace el swap y se va construyendo el subconjunto de ordenados
// -se enfoca solo en los ordenados
// -repite el proceso hasta que no tenga elementos por comparar y quede solo con el 
// subconjunto ordenado

//COMPLEJIDAD 0(N2)
//CADA VEZ Q VEA UN CICLO FOR YA ES COMPPLEJO Y ES O DE N AL CUADRADO

const numeros = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9, 2.4];

const selectionSort = numeros => {
    const arr2 = numeros.slice();
    const total = numeros.length;

    //Recorrer el arreglo completo
    for (let i = 0; i < total; i++) {
        //Almaceno la posicion minima
        let indiceMinimo = i;
        for (let j = i + 1; j < total; j++) {
            if (arr2[j] < arr2[indiceMinimo]) {
                indiceMinimo = j;
            }
            
        }
        
        const temp = arr2[indiceMinimo];
        arr2[indiceMinimo] = arr2[i];
        arr2[i] = temp;
    }
    return arr2
}

console.log(selectionSort(numeros));