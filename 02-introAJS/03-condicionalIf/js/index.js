// Variables
var nombreCompleto, añoNacimiento, añoActual, edad, cantidadCaracteres, msg;

nombreCompleto = prompt("Ingresa tu nombre").toUpperCase().trim();
añoNacimiento = Number(prompt("Ingresa tu año de nacimiento"));
añoActual = Number(prompt("Ingresa el año actual"));

// proceso logico
edad = añoActual - añoNacimiento;

/* esto de aca abajo es una opcion de if con un solo condicional el de abajo activo es con varios */
/* if (edad >= 18) {
    msg = `Hola ${nombreCompleto} ya eres mayor de edad, te invito a una chela`;
}
else {
    msg = `Hola ${nombreCompleto} no puedes entrar porque eres menor de edad`;
} */

if (nombreCompleto === "" || añoActual === 0 && añoNacimiento === 0) {
    msg = "Te faltaron datos ingresalos todos"
}
else if (añoNacimiento > añoActual) {
    msg = "Pilas el año de nacimiento no puede ser mayor al actual"
}
else {

    // obtener cantidad de caracteries con un string
    cantidadCaracteres = nombreCompleto.length;
    console.log(cantidadCaracteres);

    edad = añoActual - añoNacimiento;


    if (edad <= 12) {
        msg = `Hola ${nombreCompleto} tu eres niño aun`;
    }
    else if (edad > 12 && edad < 18) {
        msg = `Hola ${nombreCompleto} tu eres un adolecente`;
    }
    else if (edad >= 18 && edad < 65) {
        msg = `Hola ${nombreCompleto} tu eres un adulto`;
    }
    else {
        msg = `Hola ${nombreCompleto} tu eres un adulto mayor`;
    }
}
/* if (nombreCompleto = null) {
    msg = `Hola ${nombreCompleto} debes de llenar los campos`;
} */

// salida de datos
alert(msg);


