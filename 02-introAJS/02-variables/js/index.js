// 1.datos de entrada que necesito 1ER PASO
/* // aca estoy declarando las variables
// tambien lo puedo declarar asi y se usa mas asi porque se usan menos lineas
// var nombre, apellido, añoNacimiento, añoActual; */
var nombre;
var apellido;
var añoNacimiento;
var añoActual;
var edad;
var mitad
/* ahora con esto de abajo le digo como ingresa los datos el usuario */
nombre = prompt("Ingresa tu Nombre");
apellido = prompt("Ingresa tu Apellido");
añoNacimiento = Number(prompt("Ingresa tu Año de Nacimiento"));
/* con ese number combierto un string en numero */
añoActual = Number(prompt("Ingresa el año Actual"));


// 2.que tengo que hacer con esos datos
edad = añoActual - añoNacimiento;
mitad = añoNacimiento / añoActual;

// 3.como y que tengo que mostrar al usuario
/* aca abajo estoy concatenando */
document.write("Hola" + nombre + " " + apellido + " , tu edad es:  " + edad + " la divison arroja: " + mitad);
/* otra forma nueva de concatenar */
/* document.write("Hola $")  ESTA ES OTRA FORMA QUE */