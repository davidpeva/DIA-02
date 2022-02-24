onclick = false;
//con esta funcion y el onclick le doy clear
// al local storage para que se vacie cuando cierre sesion
function logout() {
    if(onclick = true){
        window.location = "index.html";
        localStorage.removeItem('user');
        localStorage.removeItem('password');
    }

}

//esta var me pone en el div el saludo y nombre
var nombre = localStorage.getItem('user');
bienvenidoCompleto = ('Bienvenid@ '  + nombre);
document.getElementById('bienvenida').innerHTML = bienvenidoCompleto;














/*function bienvenida() {
    var bienvenido = document.getElementById('bienvenida');
    var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);
}*/

//asi como esta abajo funciona pero sale donde le da la gana
    /*var nombre = localStorage.getItem('user');

    document.write('Bienvenido' + nombre);*/