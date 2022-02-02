// VARIABLES Y ENTRADAS
var cantidad, promedio;
// con este de abajo ya convierto la notas en un array
var notas = [];
// asi inicializo sumatoria en 0 para poder acumular valores
var sumatoria = 0;

// EL NUMER ES PARA YO CONVERTIR Q DE UNA VEZ LA GENTE INGRESE NUMEROS
cantidad = Number(prompt("ingrese la cantidad de notas a promediar"));

// LOGICA
// index lo arranco en uno porque aun no estoy trabajando arrays
for (var i = 1; i <= cantidad; i++) {
    notas.push(Number(prompt(`ingresa la nota ${i}`)));

    sumatoria = sumatoria + notas[i - 1];
}

promedio = sumatoria / cantidad;

// SALIDAS
alert(`el promedio de las ${cantidad} notas es: ${promedio}`);
console.log(notas);