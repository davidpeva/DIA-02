'use strict'
//esta es la estructira que me crea el node o galletas solo sirve para eso esta crea nodos
class Node {
    constructor(data, next) {
        this.value = data;
        this.next = next; //es null porque aca acaba el nodo no sigue mas aca termina    
    }
}
//clase con los metodos esta es la que me une los nodos
class LinkedList {
    constructor() {
        this.head = null; //esta es la primera parte no tiene nada por eso es q tambien es null
    }
    //aca es value porque ya tengo arriba data
    insertar(value) {
        //este const me regresa el arreglo construido
        const node = new Node(value, this.head);
        //aca ya a head le doy valor no queda nulo y empiza a sumar
        this.head = node;
        //abajo en lo ultimo invoco el metodo y el console log solo es uno
        console.log('Lista ', this.head);
    }

    eliminar() {
        //para eliminar se elimina uno por uno como van llegando
        //el this.head es una validacion de si tiene valores la lista en este caso
        if (this.head) {
            //con este valido si tiene mas valores dentro o si llegue al final
            if (this.head.next) {
                //aqui guarfe lo q eme encontre
                const nodos = this.head.next;
                //aca reemplazo el this.head el q ya le quite uno
                this.head = nodos;
            }else {
                this.head = null;
            }
        }
        //con este muestro lo que retorno luego del dato borrado
        console.log(this.head);
    }
    //este lo que hace es q me muestra cada node de padre con hijos a hijos solo
    recorrer() {
        //esta variable es igual a la info q traigo
        let listaEnlazada = this.head;
        //mientras lisata enlazada tenga info q me la muestre
        while (listaEnlazada) {
            console.log(listaEnlazada);
            //aca le digo q recorra todo el objeto hasta que encuentre el next q es null
            listaEnlazada = listaEnlazada.next;
        }
    }

    buscar(valor) {

//este metodo tengo q repetirlo



        //con esta ya digo q tengo todos los valores
        //! este signo significa si this.head es vacio
        if(!this.head) {
            return null;
        }
        //la validacion de arriba es para verificar que cuando no tenga valores de null
        let listaEnlazada = this.head;
        let contador = 0;
        //este while me recorre los datos
        while (listaEnlazada) {
            contador++;
            if (listaEnlazada.value == valor) {
                return listaEnlazada.valor;
            }
            return 'el valor ${listaEnlazada.valor} si fue encontrado en la vuelta ${contador}';
        }
    }
}

//aca incilizo mi lista
const linkedList  = new LinkedList();

linkedList.insertar('3');
linkedList.insertar('12');
linkedList.insertar('20');
linkedList.recorrer();
linkedList.buscar('12'); //aca le digo q me busque el valor 12
console.log('-------------------------')

linkedList.eliminar();
linkedList.eliminar();
linkedList.eliminar();



