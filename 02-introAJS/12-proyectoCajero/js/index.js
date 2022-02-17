var cuentas = [
    { 
        nombre: 'David', 
        clave: '123' 
    },
    { 
        nombre: 'Camila', 
        clave: '456' 
    },
    { 
        nombre: 'Laura', 
        clave: '789' 
    }
];


function login() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user === "David" && password === "123"){

        window.location = "cajero.html";

    }
}







//LOG IN
/*
function login() {
    var user = document.getElementById('user')
    var password = document.getElementById('password')
    if (nombre === "David" && clave === "123"){
        window.open('cajero.html');
        window.location.href = "cajero.html"
    }else{
        alert('Intenta de Nuevo')
        /*window.location.href = "index.html"
    }
}
*/