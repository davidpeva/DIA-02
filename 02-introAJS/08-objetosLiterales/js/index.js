// ----OBJETOS
/*let carro = {
    llantas: 4, //int
    color: "rojo", //string
    puertas: 5,
    usaGasolina: true
};

// las de abajo son dos formas de imprimir lo que esta dentro del objeto
// asi llamo las cosas son dos formas diferentes
console.log(carro.color);
console.log(carro.puertas);

console.log(carro[`usaGasolina`]);
*/
// ----------------------------

// OTRO EJEMPLO
/*
let perro = {
    nombre: "Canelo",
    color: "Cafe",
    edad: 3,
    raza: "Doberman",
    ladrar: function () {
        // aca con THIS traigo los elementos del objeto como en el anterior con console
        return (`${this.nombre} puede ladrar wau wau`)

    },
    comer: function () {
        console.log(`yomi yomi`)
    }
    // arriba no cierro con , porque ya cierro con el ; de abajo
};

// aca en perro.ladrar va() porque es una funcion
// con return genero una nueva variable
console.log(perro.ladrar());
// aca llamo la segunda funcion
// con console.log no estoy trabajando ni generando nueva variable
console.log(perro.comer());


// aca agrego un nuevo valor al objeto perro
perro.tamaño = "grande";
perro.macho = true;

// aca abajo ya lo imprimo
console.log(perro);

// mMODIFICAR VALORES
perro.edad = 5;

// ELIMINAR UN VALOR
delete perro.raza;

 */

/*
// ----------DESESTRUCTURACION
// aca defino la varianle
// LOS ABJETOS TAMBIEN LOS PUEDO NOMBRAR COMO ARRAY
const animales = ["Conejo", "Gato", "Perro", "Rana"];
const [animal1, animal2, animal3, animal4] = animales;
// AHORA VOY A IMPRIMIR LOS VALORES
console.log(`Mi Primer mascota fue: ${animal1} y ahora tengo ${animal2}, ${animal3}, ${animal4}`);


//--------- desestructura lo que necesites ----------
const nombres = ["Zanahoria", "Mei", "Taco", "Rene"];
// CON EL ESPACIO ENTRE COMAS ME SALTO EL VALOR MEI
const [nombre0, , nombre2] = nombres; //SE PONE IGUAL A NOMBES PORQE OS VALOREES Q VOY A COMBINAR VIENEN DE ALLA

console.log(`Mis mascotas son : ${nombre0} y ${nombre2}`);

// OTRO EJEMPPLO USO DEL OPERADOR REST es DESESTRUCTURACION CON OPERADOR REST
const empleado = ["Emilio", 24, "Desarrolador front (El chido)", true];

const [nombre, edad, ...rest] = empleado;

// se imprime con este console.info por el operador rest
console.info(`${nombre} tiene ${edad}`);
console.info(`los datos completos son: ${rest}`);
*/

// -----EJERCICIO DESESTRUCTURACION-----
// segundo ejercicio, generar un objeto animales de la tundra,
//  en el cual generen atributos de los animales y en la destructuracion me imprimiman sus caracteristicas
const animalesTundra = ["Caribu", "Buey", "Liebre", "Zorro"];
const [animal1, animal2, animal3, animal4] = animalesTundra;
const caractAnimales = ["Peludo", "Cuernos", "Pequeño", "Sigiloso"];



console.log(`los animales de la tundra son: ${animalesTundra} y sus caracteristicas son: ${caractAnimales}`);

