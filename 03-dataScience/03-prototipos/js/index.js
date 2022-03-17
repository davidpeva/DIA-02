'use strict'
// ULTIMA MEDIA HORA DE LA CLASE DEL 03-08-22
//ASI SE ESCRIBEN LOS PROTOTIPOS EN ESTE MOMENTO
//en todos los lenguajes se llama clases pero js le dice prototipos
//azucar sintactica

//LA PRIMERA LETRA DE Animal VA EN MAYUSCULA ES PARA SABER Q ES UNA CLASE
//ASI CUANDO LA VEA EN OTRAS PARTES DEL CODIGO SE QUE ES UNA CLASS
class Animal {

    constructor(nombre, color){
        //aca va una sintaxis del objeto
        //UNA ESPECIE DE JSON
        this.nombre = nombre 
        this.color = color 

        
    }
    //no se le pone la palabra reservada function porq ya js supone q es una funccion po los ()
    funcionAnimal(){
        //asi laspuedo combianar para llamarlas al final en funcion animal
        //el return la guarda y el console log me la ayuda a mostrar abajo
        return console.log("Sonido de animal");
        
    }
}
//ACA CREO UNA NUEVA INSTANCIA PARA Q LA FUNCIONA ACCEDA A LA CLASSE
const perro = new Animal("boxer", "Cafe")

console.log(perro.nombre); 
perro.funcionAnimal();