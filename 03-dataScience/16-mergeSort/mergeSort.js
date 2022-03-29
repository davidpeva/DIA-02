'use strict'
// CLASE 23-03-22

// Axioma: un conjunto de MediaElementAudioSourceNode, se dice que esta ordenado
// cuando el elemento es nulo, o cuando es la unidad

// este algoritmo aplica el divide y venceras
// //el algoritmo tiene dos faces
// 1.dividir mi lista en mitades hasta alcanzar la unidad

// 2.vence reagrupando de forma ordenada mis mitades hasta juntarlas de forma ordenada


// ESTE ALGORITMO ES RECURSIVO usa la recursividad (recursividad se llama a si mismo)
//es una funcion que se retorna a si misma, entonces para que no se llame
//a si mismahay q ponerle condicion de escape (la condicion le da la salida)


const numeros = [3, 0, 8, 4, 2, 1, 9, 5, 7, 6];

const mergeSort = (unsortedArray) => {

    //esta es la condicion de salida
    if(size <= 1) return unsortedArray;


    const size = unsortedArray.length; //aca miro cuantos elementos tengo en total 
    const middle = Math.ceil(size / 2); //ACA OBTENGO EL PUNTO MEDIO math.ceil me redondea para arriba el Math.floor para abajo

    //aca almaceno la primera mitad
    const left = unsortedArray.slice(0, middle);
    //aca va desde la mitad hasta el ultimo numero unsortedArray.length q es size
    const right = unsortedArray.slice(middle, size);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(left);

    return merge(sortedLeft, sortedRight);

}

const merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++
        }else {
            resultArray.push(right[rightIndex]);
            rightIndex++
        }
        
    }
    const finalArray = resultArray
                                    .concat(left.slice(leftIndex))
                                    .concat(right.slice(rightIndex))

    return finalArray 
}




console.log(mergeSort(numeros));

