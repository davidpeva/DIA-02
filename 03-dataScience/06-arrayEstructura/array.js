'use strict'
//asi creo un areglo en codigo
//VIDEO DEL 03-09-2022
//EJERCICIO: los arreglos no existen
//-NECESITO CREAR UN ARREGLO(ESTRUCTURA)
//-HAY UNA ESTRUCTURA PARECIDA A LOS ARREGLOS Y ES UN (OBJETO)
//-COMO USO UN OBJETO, PARA CREAR UN ARREGLO?
//--ENLISTANDO LAS CARACTERISTICAS
//--USO UN METODO CONSTRUCTOR
//--USO EL METODO CONSTRUCTOR EN UNA CLASE


//Cuando hablo de clases el nombre de la clase empieza en mayusculaMiArray
class MyArray { 
    //mi clase tiene la funcion constructor 
    constructor(){
        //aca digo q va a tener el arreglo
        //este es decirle cuantos elementos va a tener el arreglo y lo inicio en 0
        //este es el contadot de elementos
        this.length = 0
        //tambien tiene datos
        //este es el contenedor para los elementos que voya a tener
        //ESTE ES UN OBJETO y al meterlos aca garantizo q van a ser datos individuales
        this.data = {}
    }
    //CON ESTE METODO LE PUEDO PEDIR LOS DATOS AL CLIENTE
    get(index){
        return this.data[index]
    }
    //ACA TENGO Q CREAR MI LOGICA (MIS METODOS) PARA HACER MI PROPIO PUSH
    push(item) {
        //aca abajo la notacion de corchetes lo uso para trabajar una posicion en el objeto
        this.data[this.length] = item
        this.length++
        return this.data
    }
    //CON ESTE METODO PUEDO QUITAR EL ULTIMO DATO
    pop(){
        //en esta variable guardo el ultimo dato para borrarlo
        //el ultimo dato accedo con el this.data -1
        const lasItem = this.data[this.length - 1]
        //aca voy a usar una palabra reservada del lenguaje delete
        //aca elimino el elemento almacenado
        delete this.data[this.length - 1]
        //aca actualizo el conteo de elementos q tiene el arreglo le resto uno a alos elementos q tiene
        this.length--
        //retorno el ultimo elemento guardo en la variable
        return lasItem
    }
    //DESAFIO MORAL DE LA CLASE CREAR ESTE METODO
    unshift(item){
        
        this.length++
        
    }
    //Y TAMBIEN CREAR ESTE OTRO METODO
    //este no lleva parametro
    /*shift(){
        const firstItem = this.data[this.length + 1]

        delete this.data[this.length + 1]
        this.length++
        return firstItem

    }*/
}

//PARA Q EL CONSTRUCTOR ENPIECE A FUNCIONAR DEBO DE CREAR LA INSTANCIA
//ACA EN REALIDAD YA ESTOY CREANDO EL ARREGLO Q VA A RECIBIR LOS DATOS DE EL CONSTRUCTOR
const arr1 = new MyArray()

console.log(arr1.push("sigue vivo"));
console.log(arr1.push("a"));

//aca cargo el arreglo
console.log(arr1);
//aca le borro el ultimo dato al arrego la a
arr1.pop();
//aca pido el dato en posicion 1
console.log(arr1.get(1));
//aca vuelvo y cargo el arreglo para q me lo muestre modificado
console.log(arr1);



console.log(arr1.unshift("jellowww"));
console.log(arr1);


//asi como lo tengo si solo tengo lo de arriba me da 0 porque no tiene datos
//console.log(arr1.length);
//asi como lo tengo si solo tengo lo de arriba me da un arreglo vacio porque no tiene datoas
//console.log(arr1.data);
//esto de arriba era como un ejemplo para la explicacion






/*//asi ya puedo empujar el dato a la variable const q cree arriba
console.log(arr1.push("esta vivo"));
console.log(arr1.push("sigue vivo"));
console.log(arr1.push("AAAAIUUUDA"));*/




