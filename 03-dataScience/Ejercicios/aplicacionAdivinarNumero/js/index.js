'use strict'

function adivinador() {
    let numeroPersona = Number(document.getElementById('numero').value);
    let numeroCompu = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    var intentos = 0;
    var encontrado = false;
    
    
    console.log(numeroCompu);
    console.log(numeroPersona);

    while (intentos < 3){
        intentos++;
        if(numeroPersona == numeroCompu){
            document.getElementById('adivinar').innerHTML = ("Adivinaste en " + intentos + " intentos; toma 1000");
            encontrado = true;
        }else{
            if(numeroPersona < 1 || numeroPersona > 10){
                encontrado == false;
                document.getElementById('adivinar').innerText = ("Debes ingresar un # entero entre 1 y 10");
            }else{
                encontrado == false;
                document.getElementById('adivinar').innerHTML = ("No adivinaste dame 1000");
            }
            }
            
    }
}

boton.addEventListener('click', adivinador);




    /*if(numeroPersona === numeroCompu){
        document.getElementById('adivinar').innerHTML = "Adivinaste toma 1000"
    }else{
        if(numeroPersona < 1 || numeroPersona > 10){
            onclick = false;
        document.getElementById('adivinar').innerText = "Debes ingresar un # entero entre 1 y 10"
        }else{
        document.getElementById('adivinar').innerHTML = "No adivinaste dame 1000"
        }
    }*/

    /*if(numeroPersona < 0 || numeroPersona > 10){
        onclick = false;
        document.getElementById('adivinar').innerText = "Debes ingresar un # entero entre 1 y 10"
    }else{
        console.log(numeroPersona);
        console.log(numeroCompu);
    }*/


    /* else if(numeroPersona != numeroCompu && intentos > 3){
    document.getElementById('adivinar').innerHTML = "No adivinaste dame 1000"
}*/