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
var balance = localStorage.getItem('balance');

//esta var me pone en el div el saludo y nombre
var nombre = localStorage.getItem('user');
bienvenidoCompleto = ('Bienvenid@ '  + nombre + ' tu saldo es ' + balance);
document.getElementById('bienvenida').innerHTML = bienvenidoCompleto;















/*function bienvenida() {
    var bienvenido = document.getElementById('bienvenida');
    var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);
}*/

//asi como esta abajo funciona pero sale donde le da la gana
    /*var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);*/