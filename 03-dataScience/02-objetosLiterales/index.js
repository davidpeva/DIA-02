'use strict'


//JSON(JAVASCRIPT OBJECT NOTATION)
/*{
    nombre: "Jaguar",
    color: "amarillo"
    funcionJaguar(){
        return "Gruñido Jaguar"
    }
}*/
//cuando defino un objeto NORMAL la idea es q se amuy general no tan esepecifico

//EN LOS OBJETOS LITERALES ESPECIFICO
//aca cuando ya le pongo const ya es objeto literal
const jaguar = {
    nombre: "Jaguar",
    color: "amarillo",
    funcionJaguar(){
        return "Gruñido Jaguar";
    }
}
//aca con esto me pone todo el objeto
//console.log(jaguar)

//UNA FUNCION ES SIMPLEMENTE UNA FUNDION Q TENGO AFUERA COMO LA CONOZCO
function funcionElefante(){
    return "Gruñido Elefante";
}
//aca con este invoco la funcion con el .
console.log(jaguar.funcionJaguar());
//el punto de dice q esto es un metodo q es una funcion que esta dentro de un objeto
console.log(funcionElefante());


