let num1;
let num2; //este me funcionaria como el iterador la cantidad de veces q debo de sumar el num1
let resultado = 0

num1 = Number(prompt('introduce el 1er numero a multiplicar'));
num2 = Number(prompt('introduce el 2do numero a multiplicar'));

for (var i = 0; i < num2; i++) {
    resultado = resultado + num1
}

alert('la multiplicacion es igual a: ' +  resultado);
