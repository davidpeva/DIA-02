onclick = false;
//con esta funcion y el onclick le doy clear
// al local storage para que se vacie cuando cierre sesion
function logout() {
    if(onclick = true){
        window.location = "index.html";
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        localStorage.removeItem('balance');
    }

}

//ESTA ES PARA ACCEDER A EL SALDO AL USUARIO CUANDO INGRESE
var balanceInicial = localStorage.getItem('balance');

//esta var me pone en el div el saludo y nombre
var nombre = localStorage.getItem('user');
bienvenidoCompleto = ('Bienvenid@ '  + nombre + ' tu saldo es ' + balanceInicial);
document.getElementById('bienvenida').innerHTML = bienvenidoCompleto;

let numero, operador;

function Calculo(data){
    let resultado = 0; 
    let operacion = '';
    
    for(i=0; i < data.length; i++)
    {
        if(data[i]==="+" || data[i]==="-")
        {
            operacion = data[i];
        }
        else
        {
            if(operacion === '')
            {
                resultado = Number(data[i]);
            }
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
            }
        }
    }
    return resultado;
}



function CapturarDatos(id){
    let imprimirTotal = document.getElementById('total');
    let operaciones = document.getElementById('operaciones');
    let historial = document.getElementById('historial');
    let total;


    if(id==="+" || id==="-")
    {
        operaciones.innerText = imprimirTotal.innerText + ' ' + id;
        imprimirTotal.innerText = '';
        operador = 1;
    }
    else if(id==="=")
    {
        operaciones.innerText = operaciones.innerText + ' ' + imprimirTotal.innerText;
        array = operaciones.innerText.split(' ');
        total = Calculo(array);
        
        imprimirTotal.innerText = total;



        historial.innerHTML = operaciones.innerText + ' ' + id +' ' + total + "<br>" + historial.innerHTML;

    }
    else if(id==="c")
    {
        imprimirTotal.innerText = 0;
        operaciones.innerText = '';
    
    }

    else
    {
        numero = Number(id);
        if(imprimirTotal.innerText === '0' || operador === 1)
        {
            imprimirTotal.innerText = numero;
            operador = 0;
        }
        else
        {
        imprimirTotal.innerText = imprimirTotal.innerText + numero;
        }
    }
}













/*function bienvenida() {
    var bienvenido = document.getElementById('bienvenida');
    var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);
}*/

//asi como esta abajo funciona pero sale donde le da la gana
    /*var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);*/