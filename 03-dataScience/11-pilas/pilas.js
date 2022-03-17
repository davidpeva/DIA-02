//CLASE 15-03-22 10.00PM
'use strict'
//asi construyo una pila

class Pila {
    constructor(){
        this.pila = [];
    }

    push(dato){
        this.pila.push(dato);
    }
    pop(){
        return this.pila.pop();
    }
    peek(){
        return this.pila[this.pila.length -1]
    }
    size(){
        return this.pila.length;
    }
    print(){
        return this.pila
    }
}


//aca instancio la pila para poderla usar arriba solo la estoy declarando y haciendo metodos
const pila = new Pila

pila.push('dato1');
pila.push('dato2');
pila.push('dato3');
console.log('print', pila.print());
console.log('peek',pila.peek());
console.log('size',pila.size());

console.log('pop', pila.pop());

console.log('print', pila.print());
console.log('peek',pila.peek());
console.log('size',pila.size());

