'use strict'

// print.- Mostrar todos los valores...
// empty.- Saber si la queue esta vacia poner 0...
// enqueue.- Agregar un nuevo elemento al final de la queue...
// dequeue.- Retornar el primer elemento de Queue eliminando el valor...
// peek.- Retornar el primer elemento de queue sin quitarlo...
// back.- Retornar el ultomo elemento de Queue sin el valor...


class Queue {
    constructor() {
        this.queue = [];
    
    }
    //push de las pilas
    enqueue(dato) {
        this.queue.push(dato);
    }
    //este me elimina el primer valor y me lo retorna ese SHIFT es un metodo de los arreglos
    dequeue() {
        return this.queue.shift();
    }
    print() {
        return this.queue;
    }
    //este es como el peek de la pila
    back(){
        return this.queue[this.queue.length - 1];
    }
    //este me devuelve el primer elemento
    peek() {
        return this.queue[0];
    }
    //este es como el size de las pilas
    empty() {
        if (this.queue.length === 0) {
            return 0;
        }
        else {
            return false;
        }
    }
    

}

const queue = new Queue

queue.enqueue('dato1');
queue.enqueue('dato2');
queue.enqueue('dato3');


console.log('print', queue.print());
console.log('empty', queue.empty());
console.log('back', queue.back());
console.log('peek', queue.peek());
console.log('dequeue', queue.dequeue());

console.log('print', queue.print());