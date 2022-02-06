var txtNombre, fechaNac, edad, fechaActual, añoNac;

function capturaNombre() {
    txtNombre = document.getElementById('nombre');

    // con el valor .value le digo al alert que coja el dato mas no el objeto
    alert(`Tu nombre es ` + txtNombre.value);

}


function calcularEdad() {
    let fecha = new Date();
    //con esto estoy utilizando una funcion de jva utilizando new me coje la fecha q sea el dia new me dice es q es una copia de la fecha

    // aca el .value se lo estoy ponioendo a esto para ahorrarme un poquito de codigo 
    añoNac = Number(document.getElementById('fecha').value.slice(0, 4));
    //con el slice le digo q me reciba la fecha pero solo el año el 1 es coger el año cojo los primero 4 caracteres
    añoActual = fecha.getFullYear();

    //voy a validar que el año de nacimiento no sea menor al actual
    if (añoActual < añoNac) {
        alert(`Elige un año de nacimiento valido`)

    }
    else {
        edad = añoActual - añoNac;

        // alert(`Tu edad es ` + edad); 
        // ASI LO UMPRIMO EN ALERT

        // ASI EN LA PANTALLA
        // con el inner text como el h4 no tiene value asi lo pongo
        document.getElementById('edad').innerText = 'Tu edad es ' + edad;
    }
}

document.getElementById('calcular').addEventListener('click', calcularEdad);


// de aca para abajo es cuando uso css con javas
function cambiarColor() {
    document.getElementById('cuerpo').style.backgroundColor = '#0077b6';
    //con el style es una funcion interna de java para los estilos como los comentarios de html


}



// adicionañ
// sacar la edad teniendo en cuenta los meses
// qeu cuando le den click se devuelva luego al color original