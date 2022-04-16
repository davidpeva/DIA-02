'use strict'

//ACA VOY A CONSTRUIR EL NODO
class Nodo {
  constructor(value, left, right) { //estos son los 3 datos que le van a llegar
      this.value = value;
      this.next = left;    
      this.next = right;    
  }
}

//ESTA ES LA CLASE PARA CONDTRUIR EL ARBOL BINARIO
class ArbolBinario {
  constructor (){ //con este inicio el nodo vacio
    this.root = null; 
  }

  insertar(value) { //aca le quiero insertar un nuevo nodo lo construyo con el molde de arriba en null porque apenas ese q se creo es padre
    const nuevoNodo = new Nodo(value, null, null);

    if (!this.root) { //el signo ! LO CONVIERTE EN VEERDADERO me dice que si por primera vez es null lo llene el ! le dice que deje de ser null
      this.root = nuevoNodo; //ACA POR 1RA VEZ COJE UN NODO Y ES RAIZ
    }else{ //YA LA SEGUNDA VEZ ENTRA ACA 
      let nodoActual = this.root;
      let bandera = true;

      while (bandera) {
        if (value === nodoActual.value) {
          bandera = false;
        }

        if (value !== nodoActual.value){
          if (value < nodoActual.value) {
            if (nodoActual.left) {
              nodoActual = nodoActual.left;
            }
            nodoActual.left = nuevoNodo;
            bandera = false;
          }
          if(value > nodoActual.value) {
            if (nodoActual.right) {
              nodoActual = nodoActual.right;
            }else{
              nodoActual.right = nuevoNodo;
              bandera = false;
              }
          }
        }
      }
    }

    console.log(`El valor ${value} fue agregado exitosamente`);
  }

  print() {
    console.log(this.root);
  }
  
  find(value) {
    //Buscar enel arbol binario previamente coontruido el valor que llega como parametro
    //y retornar si fue encontra o no
    let actual = this.root;
    let encontrado = false;
    //aca lo que digo es que mientras actual y encontrado sean positivos
    while (actual && !encontrado) {
      if(value < actual.value){
        actual = actual.left;
      }else if(value > actual.value){
        actual = actual.right;
      }else{
        encontrado = `El valor ${value} fue encontrado`;
      }
    }
    //ACA ES COMO SI ENCONTRADO ES FALSO
    if(!encontrado) encontrado = `El valor ${value} no fue encontrado`;
    return encontrado;
  }
  
}
//ESTE EJEMPLO HACERLO CON PAPEL Y LAPIZ HACIENDO EL ARBOL A VER COMO RECORRE
//Y COMO BUSCA

//con este inicializo el arbol
const arbolBinario = new ArbolBinario;

arbolBinario.insertar(50);
arbolBinario.insertar(75);
arbolBinario.insertar(25);
arbolBinario.insertar(85);
arbolBinario.insertar(23);
arbolBinario.insertar(95);
arbolBinario.print();
arbolBinario.find(44);
arbolBinario.find(50);
arbolBinario.find(23);
arbolBinario.find(95);






//EJEMPLO DE COMO SE DISTRIBUYE EL ARBOL
// {
//     value: '0'
//     left: {
//       value: '-1'
//       left: {
//         value: '2'
//         left: {}
//         right: {}
//       }
//       right: {
//         value: '45'
//         left: {}
//         right: {}
//       }
//     }
//     right: {
//       value: '3'
//       left: {
//         valor: '56'
//         left: {}
//         right: {}
//       }
//       right: {
//         valor: '56'
//         left: {}
//         right: {}
//       }
//     }
//   }
  
  
  


  
  