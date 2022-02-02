//--- FUNCION CON RETURN
// function unaFuncion() {
//     console.log(1);
//     console.log(2);
//     console.log(3);

//     return "Hola Mundo";

// }

//--- unaFuncion();
// esta variable era para cuando no uso el return porque al usar el return use lo de abajo de mensaje

// var mensaje = unaFuncion();
// console.log(mensaje)
// ESTA FUNCION LA COMENTE PARA QUE NO ME PONGA PROBLEMA PARA EL EJEMPLO 2
// ---------------------------------------

// EJEMPLO 2 TABLA DE MULTIPLICAR DEL 2
// asi es una tabla del 2 sin fucton
// console.log("2 x 0 =", 2 * 0);
// console.log("2 x 1 =", 2 * 1);
// console.log("2 x 2 =", 2 * 2);
// console.log("2 x 3 =", 2 * 3);
// console.log("2 x 4 =", 2 * 4);
// console.log("2 x 5 =", 2 * 5);
// console.log("2 x 6 =", 2 * 6);
// console.log("2 x 7 =", 2 * 7);
// console.log("2 x 8 =", 2 * 8);
// console.log("2 x 9 =", 2 * 9);
// console.log("2 x 10 =", 2 * 10);

//--- FUNCION MULTIPLICAR
// function tablaDelDos() {
//     for (i = 0; i <= 10; i++) {
//         console.log("2 x ", i, "=", 2 * i)
//     }
// }

// tablaDelDos();

//--- EJEMPLO 3 SUMA
// function SUMA(num1, num2) {
//     var resultado = num1 + num2;

//     alert("el resultado es: " + resultado)

// }
// SUMA(5, 30)



//--- EJEMPLO DE RETURN
// function sumatoria(num1, num2) {
//     var total = num1 + num2;

//     return "LA SUMATORIA ES: " + total;
// }

// para que el valor nme quede guardado en consola creo una variable
// var valorTotal = sumatoria(9, 8);
// aca pongo la consola para que me lo muestre
// console.log(valorTotal);

//--- EJEMPLO FUNCION THIS
// function saludo(nombre, edad) {

//     this.nombre = nombre;
//     this.edad = edad;

// console.log("Hola yo soy: ", this.nombre, "mi edad es: ", this.edad); de esta forma de dio con comas
// console.log("Hola soy yo: " + this.nombre + " " + "mi edad es: " + this.edad)
// esta de arriba es con el signo sumar
// }

// saludo("jesus", 25);

// ---OTRO EJEMPLO
// function diaActual() {
//     var fecha = new Date();

//     alert(`Hoy es: ` + fecha.getDate());
// }

// diaActual();
// el new es una propiedad nativa de vsc entonces siempre q use la fecha dede de ir para poder usar el get date porq abajo en alert no puedo poner date solo


// EJEMPLO 2 DE LA CLASE ingreso numero y que me diga si es par o impar
// esta parte de abajo me funciono solo el par pero con el else no me dio y esta sin funcion


// var num = prompt("ingresa un numero")

// function esParImpar() {
// if (num % 2 === 0) {
//     alert(num + ` es par`)
// } else {
//     alert(num + ` es un numero impar`);
// }

// }

// de aca para abajo es la solucion del 2 del profesor
var numero = prompt("ingresa un numero");

function numeroImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}

var resultado = numeroImpar(numero);
alert("el numero " + numero + "es " + resultado);


// function esPar(num) {
//     num = Number(num);
//     return num % 2 === 0;
// }
// function esImpar(num2) {
//     return Math.abs(num % 2) === 1;
// }
