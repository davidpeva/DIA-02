/*
Crear una aplicacion que nos permita a un profesor generar las notas definitivas
de sus alumnos.

-Ponemos SUS ALUMNOS, porque debemos permitir al profesor que nos indique cuantos alumnos
va a acalificar
-debemos permitir al profesor ingresar la cantidad de notas que va a promediar en general
-Con esas notas vamos a obtener el promedio de cada estudiante
-Mostrar al profesor al final una lista de estudiantes con su nombre y su definitiva
*/

// VARIABLES Y ENTRADAS LO QUE LE VOY A PEDIR AL PROFESOR
var cantidadAlumnos, cantidadNotas, nombre, nota, promedio;
// aca voy a crear un array que me guarde lo de arriba
var alumno = [];
var resultados = [];

cantidadAlumnos = Number(prompt(`Ingresa la cantidad de alumnos de tu clase`));
cantidadNotas = Number(prompt(`Ingresa la cantidad de notas a promediar de los alumnos`));

// PROCESO LOGICO
// arranco el array desde i = 1 porque ingreso yo los datos 
for (i = 1; i <= cantidadAlumnos; i++) {
    // esta variable es afuera porq la empiexo en 0
    // va metida aca porq ya luiego de iniciada debe de seguir la sumatoria
    // se inicializa cada vez q pasa el ciclo
    var sumatoria = 0;
    // el + i es porque es el alumno que va de turno
    nombre = prompt(`Ingresa el nombre del alumno ` + i);
    // este fores un anidado y es para pedir la cantidad de notas de cada alumno
    // la j es para q no interfiera con la otra i de arriba
    for (j = 1; j <= cantidadNotas; j++) {
        nota = Number(prompt(`Ingresa la nota ` + j));
        sumatoria = sumatoria + nota;
        // esta es una sumatoria con acumuladores
    }

    // aca abajo sacare el promedio de las notas
    promedio = sumatoria / cantidadNotas;
    // aca abajo los voy a meter en un arreglo para que se guarden
    // y no que cada vez se haga el ciclo se borre

    // creo los dos array de los alumnos
    alumno = "Alumno " + nombre + "Calificacion: " + promedio;

    resultados.push(alumno);
    // esta es como la base de datos porque aca queda ya giardados
    // se veria mas o menos asi en el string q se guarde
}


// vamos a hacer una funcion para odernar los resultados
// el naranjado es que le sstoy enviando el arreglo resultado
function imprimeResultados(resultados) {
    // aca voy a aleer la cantidad de os array
    var lista = "";
    for (i = 0; i < resultados.length; i++) {
        // aca vamos a acumular el texto
        lista = lista + resultados[i] + "<br>";
    }
    return lista;
}


// IMPRESION DE VARIABLES donde le muestro los resultados al profesor
var imprimir = imprimeResultados(resultados);

document.write(imprimir);