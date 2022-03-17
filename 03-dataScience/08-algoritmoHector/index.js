//EJERCICIO DE LA CLARE 09-03-22 de multiplicacion
//pero se resolvio el 10-03-22 830pm aprox


//funcion de flecha
const multiplicacion = (a, b) => {
    //este es el punto de salida de el codigo porq si no seria infinito
    if (b === 0) return 0;
    if (b === 1) return a;
    //aunque tengo el return al invocar la funcion multiplicacion el se sigue invocando hasta que llega al punto de salida
    return a + multiplicacion (a, b - 1);
}


//COMO HAY RECURSION TENGO Q PONER UNA CONDICION DE SALIDA
console.log(multiplicacion(2, 90));
X 