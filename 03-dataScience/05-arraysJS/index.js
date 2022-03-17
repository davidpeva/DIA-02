'use strict'
//son listas o coleccion de elementos
// a diferencia de los obj literales se definen con []

const arr1 = ['one', 'hola', 100, [], true]

arr1[1] = 'two'

//cuando uso  la notacion de punto es q estoy accediendo a un arreglo
arr1.push(false, "hola mundo") //me empuja un valor al final
//este me quita el ultimo elemento no hay q llenar el parentesis
arr1.pop()
//me agrega un elemto o una serie de elementos de primeros
arr1.unshift("zero")
//me elimina el primer elemento
arr1.shift()
//ESTOS DE ARRIBA SON LOS METODOS MAS CONOCIDOS PERO HAY MAS

console.log(arr1.length);
console.log(arr1);

//LOS ARREGLOS LOS PUEDO RECORRER CON CICLOS
//DISELAÑADO PARA RECORRER ARREGLOS
//en el FOREACH al principio va el nombre de mi arreglo
//luego foreach y element y adentro donde tengo el cosole.log va lo q quiero q realice
arr1.forEach(element => {
    console.log(element);
});

//FOR OF
//DISEÑADO PARA RECORRER OBJETOS



//FOR normal
//este me puede hacer lo mismo solo q el for eache esta diseñado para recorrer los arreglos
//me hace lo mismo q el for each pero hay q poner mas cosas
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    
}

//el FOR IN es para objetos pero es mas avanzado


//diferencia de metodo y funcion
//el metodo esta dentro de un objeto 
//el metodo tambien es una funcion pero contenida dentro de un obj
//al ver la notacion de punto ya se q es un metodo de un arreglo
//cuando declaro la funcion uso la palabra reservada
