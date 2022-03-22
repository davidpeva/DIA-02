'use strict'

const numeroCompu = Math.floor(Math.random() * (10 - 1 + 1)) + 1; //pongo este aca para que cuando la pag cargue ya esta el numero

let intentos = 0;

function adivinador() {
    let numeroPersona = document.getElementById('numero').value;
    
    const button = document.getElementById('boton'); //este es para inicializar el boton y poder desactivarlo

    console.log(numeroCompu);//esta morado porque es constante el numero durante los intentos no varia
    console.log(numeroPersona);

    if(numeroCompu !== numeroPersona){
        intentos++
        document.getElementById('adivinar').innerHTML = "No adivinaste dame 1000.";
        document.getElementById('intentos').innerHTML = "Llevas " + intentos + " intentos" + " te quedan " + (3 - intentos) + " intentos.";
        if(intentos > 2){
        document.getElementById('adivinar').innerHTML = "Superaste los intentos";
        document.getElementById('mayorMenor').innerHTML = "";
        intentos = 1; //con este reseteo los intentos
        button.disabled = true; //desactivo el boton
    }
    if(numeroPersona < 1 || numeroPersona > 10 || numeroPersona == null){
        document.getElementById('adivinar').innerHTML = "El numero debe de estar entre 1 y 10";
        intentos = 1;
    }
    if(numeroPersona > numeroCompu){
        document.getElementById('mayorMenor').innerHTML = "El numero que estoy pensando es menor!!!"
    }else if(numeroPersona < numeroCompu){
        document.getElementById('mayorMenor').innerHTML = "El numero que estoy pensando es mayor!!!"
    }
    else if(numeroCompu == numeroPersona){
        document.getElementById('adivinar').innerHTML = "Acertaste toma 1000";
        document.getElementById('mayorMenor').innerHTML = "";
        document.getElementById('intentos').innerHTML = "";
        button.disabled = true;
    }
    }
}

function otraVez(){
    location.reload();
}


