/*DESAFIO
1.Solicitar los nombres completos de los miembros de la familia separaods por (,)
que la persona en un solo promp ingrese los nombres separados por comas
2.Convertir esos nombres a un array de nombre de la familia y mostrarlo en consola
3.Combinar los dos arrays el que ya tenemos y el nuevo en uno solo y reordenarlo de atras hacia adelante y lo mostramos en cosola.
4.Agregar las validaciones que crean necesarias.

*/

// 1.declaro mis variables VARIABLES Y ENTRADAS
// esta es la variable
var nombre, apellido1, apellido2, nombreCompleto;
var nombrePapa, apellidoPapa1, apellidoPapa2;

// conesta variable de abajo declaro el array
var arrayNombre = []; //incializo el arreglo vacio
var arrayFamiliares = [];

// aca le voy a pedir a la persona las cosas
nombre = prompt("ingresa tu nombre");
apellido1 = prompt("ingresa tu 1er apellido");
apellido2 = prompt("ingresa tu 2do apellido");

nombrePapa = prompt("Nombre ")



// 2.LOGICA proceso como tal
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

// concatenacion para juntar datos en un string para mostrarlos al final en un alert
nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;


// 3.SALIDA lo que le mostrare al usuario
// con esto me imprime el arreglo completo sin posicion
console.log(arrayNombre)

// se lo muestro al usuario en un alert
alert(nombreCompleto)