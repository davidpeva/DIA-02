//CLASE DEL 2022-02-08
//VARIABLES
let numero, operador;

//funcion general para que haga las cosas
function Calculo(data){
    //inicializo en 0 para poder acumular los valores
    let resultado = 0;
    //la inicializo en un string vacio para poder validar en el else ES UN STRING VACIO
    let operacion = '';
    //aca me esta recibiendo dos mnumeros y un ioperador en un arreglo tengo q iterarlo
    for(i=0; i < data.length; i++)
    {
        //vamos a validar si es un operador sin la c q no es un signo
        // ya es data en vez de id porque ya estamos es leyendo el arreglo
        if(data[i]==="+" || data[i]==="-" || data[i]==="x" || data[i]==="/")
        {
            //aca ya tengo el operador
            operacion = data[i];
        }
        else
        {
            //este es como una especie de true or false si esta vacio es como q estuviera 0 si tiene valor es 1 hace una cosa u otra dependiendo de lo que tenga
            if(operacion === '')
            {
                //esta solo coge los numero y no los operadores porque le puse NUMBER
                resultado = Number(data[i]);
            }
            //aca ya voy a a hacer la operacion
            else
            {
                if(operacion === '+')
                {
                    resultado = resultado + Number(data[i]);
                }
                if(operacion === '-')
                {
                    resultado = resultado - Number(data[i]);
                }
                if(operacion === 'x')
                {
                    resultado = resultado * Number(data[i]);
                }
                if(operacion === '/')
                {
                    resultado = resultado / Number(data[i]);
                }
            }
        }
    }  
    //la i es menor q .length porq aunque puede que el array es de 0 a 2 mas adelante se le puden poner mas datos
    
    //aca ya me hace la operacion
    //lo que retorna aca lo llamo abajo en total
    return resultado;
}



function CapturarDatos(id){
    //Variables Locales SCOPE solo las puedo usar en esta funcion
    //aca imprimop en el h2
    let imprimirTotal = document.getElementById('total');
    //variable para mandar lo que escribi para arriba asi capturo el dato
    let operaciones = document.getElementById('operaciones');
    //aca voy a capturar el historial
    let historial = document.getElementById('historial');
    //esta es para 
    let total;


    if(id==="+" || id==="-" || id==="x" || id==="/")
    //este if es que si es un operador haga esta condicion DE ENVIAR LOS NUMEROS ARRIBA QUE ACABE DE ESCRIBIR si no el else ya se sabe q es un numero
    {
        operaciones.innerText = imprimirTotal.innerText + ' ' + id;
        imprimirTotal.innerText = '';
        operador = 1;
    }
    else if(id==="=")
    {
        //con esta variable estoy validando q me sume el valor de arriba con el nuevo que estoy escribiendp
        operaciones.innerText = operaciones.innerText + ' ' + imprimirTotal.innerText;
        //esta variable lo que hace es que me separa el arreglo q defini arriba para despues poder sumarlo
        array = operaciones.innerText.split(' ');
        //total es igual a lo q la funcion calculo devuelva
        total = Calculo(array);
        
        //aca con este me imprime el resultado
        imprimirTotal.innerText = total;


        //aca es donde se actualizaria el historial
        //CON EL ULTIMO HISTORIAL.INNERHTML DESPUES DEL BR YA ELLOS SE VAN BAJANDO(si lo hago al final el hgistporial.innerText me concatena seguido)
        historial.innerHTML = operaciones.innerText + ' ' + id +' ' + total + "<br>" + historial.innerHTML;


    }
    //este else if es para que cuando unda la c el total se vuelva 0 y me deje volver a hacer otr operacion
    else if(id==="c")
    {
        //con este pongo el total de nuevo en 0
        imprimirTotal.innerText = 0;
        //aca le digo que es un string vacio para que me quede igual de reiniciado
        operaciones.innerText = '';
    
    }

    else
    {
        //Con Number convierto a numero los strings
        numero = Number(id);
        //con este if hago que cuando unda un numero el 0 se quite
        //el operador === al or es para que me borre el resultado y vuelva a cero para poder escribir otro
        if(imprimirTotal.innerText === '0' || operador === 1)
        {
            // con este remplazo el cero por lo que remplace
            imprimirTotal.innerText = numero;
            //vuelvo a poner el operador en cero para que me deje escribir mas numneros
            operador = 0;
        
        }
        
        //por aca creo q pueda estar el tema de q pueda sumar si undo otro numero

        else
        {
            //Con este yo imprimo en el h2 lo q presione osea que concateno
        imprimirTotal.innerText = imprimirTotal.innerText + numero;
        }
    }
}