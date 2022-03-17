//este tengo q repetirlo
'use strict'


//para guardar lo q recibo voy a declar un arreglo vacio
const alumnos = [];

function guardar(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let grupo = document.getElementById('grupo').value;

    //aca empiezo a organizar la info los meto en un objeto para q se vayan oranizados
    //para ahorrarme codigo de una vez le doy push para q se empujen al arreglo
    //mirar tipo 911:pm para aclarlo mejor
    alumnos.push({
        nombre: nombre,
        apellido: apellido,
        grupo: grupo,

    });

    //con estas 3 lineas limpio el codigo para cuando los empujo y se me limpien para montaAr los otros
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('grupo').value = "";

    let tabla1 = document.getElementById('tabla1');
    //aca debo de reiniciar la tabla para que no me repita los valores y me ponga uno debajo del otro
    tabla1.innerHTML = '';

    //para que los valores se pinten los hago con un arreglo
    //va a dar tantas vueltas como alumnos tenga datos
    for (let i = 0; i < alumnos.length; i++) {
        
        let row = document.createElement('tr');
        let nombre = document.createElement('td');
        let apellido = document.createElement('td');
        let grupo = document.createElement('td');

        //aca ya me imprime el dato en lo q cree arriba
        nombre.innerHTML = alumnos[i].nombre;
        apellido.innerHTML = alumnos[i].apellido;
        grupo.innerHTML = alumnos[i].grupo;

        //me mete los td en los tr los td son los hijos
        //para cada dato tengo en row tengo  q crear el append child
        row.appendChild(nombre);
        row.appendChild(apellido);
        row.appendChild(grupo);
        //el append child me mete los datos donde es necesario
        tabla1.appendChild(row);

    }

}

function mostrar(){

    //ya no necesito los otros datos que pude en la primera funcion revisar por que no

    let tabla2 = document.getElementById('tabla2');
    tabla2.innerHTML = '';

    for (let i = 0; i < alumnos.length; i++) {
        
        let row = document.createElement('tr');
        let nombre = document.createElement('td');
        let apellido = document.createElement('td');
        let grupo = document.createElement('td');

        //aca ya me imprime el dato en lo q cree arriba
        nombre.innerHTML = alumnos[i].nombre;
        apellido.innerHTML = alumnos[i].apellido;
        grupo.innerHTML = alumnos[i].grupo;

        //me mete los td en los tr los td son los hijos
        //para cada dato tengo en row tengo  q crear el append child
        row.appendChild(nombre);
        row.appendChild(apellido);
        row.appendChild(grupo);
        //el append child me mete los datos donde es necesario
        tabla2.appendChild(row);

    }

}


//esta funcion es para ver como se fiultran los datos de una tabla a otra
function filtrar (){
    //con este let no me daña el arreglo alumnos inicial
    //el spread operator ... me mete un nuevo arreglo con los valores original y lo agrega a alumnos filtrar
    //el map lo q hace es q es recorrer no afecta el arreglo original
    let alumnosFiltrar = alumnos.map(alumno => ({...alumno}));
    //un arreglo para no dañar el primero



    //aca va el codigo q cpio de internet para poner random las letras de los grupos
    const generateRandomString = (num) => {
        const characters = 'abcd';
        let result1= '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ ) {
          result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result1;
    }

    alumnosFiltrar.forEach(alumnosF => {
     //aca voy a poner generador de letras random q declare arriba
        alumnosF.grupo = generateRandomString(1);
    });

    let tabla2 = document.getElementById('tabla2');
    tabla2.innerHTML = '';

    for (let i = 0; i < alumnosFiltrar.length; i++) {
        
        let row = document.createElement('tr');
        let nombre = document.createElement('td');
        let apellido = document.createElement('td');
        let grupo = document.createElement('td');

        //aca ya me imprime el dato en lo q cree arriba
        nombre.innerHTML = alumnosFiltrar[i].nombre;
        apellido.innerHTML = alumnosFiltrar[i].apellido;
        grupo.innerHTML = alumnosFiltrar[i].grupo;

        //me mete los td en los tr los td son los hijos
        //para cada dato tengo en row tengo  q crear el append child
        row.appendChild(nombre);
        row.appendChild(apellido);
        row.appendChild(grupo);
        //el append child me mete los datos donde es necesario
        tabla2.appendChild(row);

    }
}










