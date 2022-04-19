'use strict'

let data = [
	{
		"name": "Luke Skywalker",
		"height": "172",
		"mass": "77",
		"hair_color": "blond",
		"skin_color": "fair",
		"eye_color": "blue",
		"gender": "male",
	},
	{
		"name": "C-3PO",
		"height": "167",
		"mass": "75",
		"hair_color": "n/a",
		"skin_color": "gold",
		"eye_color": "yellow",
		"gender": "n/a",
	},
	{
		"name": "R2-D2",
		"height": "96",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, blue",
		"eye_color": "red",
		"gender": "n/a",
	},
	{
		"name": "Darth Vader",
		"height": "202",
		"mass": "136",
		"hair_color": "none",
		"skin_color": "white",
		"eye_color": "yellow",
		"gender": "male",
	},
	{
		"name": "Leia Organa",
		"height": "150",
		"mass": "49",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "brown",
		"gender": "female",
	},
	{
		"name": "Owen Lars",
		"height": "178",
		"mass": "120",
		"hair_color": "brown, grey",
		"skin_color": "light",
		"eye_color": "blue",
		"gender": "male",
	},
	{
		"name": "Beru Whitesun lars",
		"height": "165",
		"mass": "75",
		"hair_color": "brown",
		"skin_color": "light",
		"eye_color": "blue",
		"gender": "female",
	},
	{
		"name": "R5-D4",
		"height": "97",
		"mass": "32",
		"hair_color": "n/a",
		"skin_color": "white, red",
		"eye_color": "red",
		"gender": "n/a",
	},
	{
		"name": "Biggs Darklighter",
		"height": "183",
		"mass": "84",
		"hair_color": "black",
		"skin_color": "light",
		"eye_color": "brown",
		"gender": "male",
	},
	{
		"name": "Obi-Wan Kenobi",
		"height": "182",
		"mass": "77",
		"hair_color": "auburn, white",
		"skin_color": "fair",
		"eye_color": "blue-gray",
		"gender": "male",
	}
];

let mascotas = [
	{
		"tipo": "rabbit",
	},
	{
		"tipo": "canary",
	},
	{
		"tipo": "golden fish",
	},
	{
		"tipo": "horse",
	},
	{
		"tipo": "lizard",
	},
	{
		"tipo": "blue whale",
	},
	{
		"tipo": "domestic cat",
	},
	{
		"tipo": "lion",
	},
	{
		"tipo": "platypus",
	},
	{
		"tipo": "manatee",
	}
];

let corre = document.querySelector('#scroll');
//CON LA FUNCION CAMBIO EL JSON A STRINGS Y LA USO PARA IMPRIMIR Y ORGANIZAR EL TEXTO
function Texto (){
    return JSON.stringify(data, undefined, 4);
}
corre.append(Texto());

//ESTUDIAR ESTA FUNCION FLECHA COMO SE VERIA SI FUERA NORMAL PARA ENTENDERLKA MEJOR
//Esta funcion de abajo me arregla de altos a bajos}
//ESTE ALTOS BAJOS ES EL ARREGLO ORDENADO DE DATA
let altosBajos = data.sort((a, b) => b.height - a.height);
let mostrar = document.querySelector('#show');

function AltosBajos() {
	let nuevoAlBa = [];
	altosBajos.forEach(e => {
		nuevoAlBa += (`* ${e.name}: ${e.height}cm <br><br>`);

	});
	return mostrar.innerHTML = nuevoAlBa;
}

function Hombres() {
	let hombres = [];
	altosBajos.forEach(e =>{
		if (e.gender === "male"){
        hombres += (`* ${e.name}: ${e.gender}. <br><br>`);
	}
	});
    return mostrar.innerHTML = hombres;
}

function Mujeres() {
	let mujeres = [];
	altosBajos.forEach(e =>{
		if (e.gender === "female"){
        mujeres += (`* ${e.name}: ${e.gender}. <br><br>`);
	}
	});
    return mostrar.innerHTML = mujeres;
}

function AlturaMayor() {
	let alturaIngresada = Number(document.querySelector(".esAltura").value);
	let arrMayor = [];
	altosBajos.forEach(e =>{
		if (e.height >= alturaIngresada && alturaIngresada != "" && alturaIngresada > 95) {
			arrMayor += (`* ${e.name}: ${e.height}cm. <br><br>`);
			return mostrar.innerHTML = arrMayor;
		}else if(alturaIngresada > 202 || alturaIngresada < 95){
			mostrar.innerHTML = `Ingresa una altura entre 96 y 202`;
	}
});
}

function AlturaMenor() {
	let alturaIngresada = Number(document.querySelector(".esAltura").value);
	let arrMenor = [];
	altosBajos.forEach(e =>{
		if (e.height <= alturaIngresada && alturaIngresada != "" && alturaIngresada > 96) {
			arrMenor += (`* ${e.name}: ${e.height}cm. <br><br>`);
			return mostrar.innerHTML = arrMenor;
		}else if(alturaIngresada > 211 || alturaIngresada < 96){
			mostrar.innerHTML = `Ingresa una altura entre 96 y 202`;
	}
});
}

function VerTodo() {
	let nuevoAlBa = [];
	altosBajos.forEach(e => {
		nuevoAlBa += (`* ${e.name}: ${e.height}cm, ${e.mass}kg, <br>hair ${e.hair_color}, skin ${e.skin_color}, ${e.eye_color} eyes, ${e.gender}.  <br><br>`);

	});
	return corre.innerHTML = nuevoAlBa;
}

let nombres = [];
let mascota = [];

function JuntarArreglos() {
	for (let i = 0; i < altosBajos.length; i++) {
		nombres.push(altosBajos[i].name);
	}
	for (let j = 0; j < mascotas.length; j++) {
		mascota.push(mascotas[j].tipo);
	}
    

	//REVISAR BIEN ESTE LOOP PORQ PORCA PARECE QUE TENGO LA SOLICION CON TODOS LOS ARREGLOS VIEJOS
	// altosBajos.forEach((num1, index) => {
	// 	const num2 = mascotas[index];
	// 	console.log(num1, num2);
	// });

	nombres.forEach((num1, index) => {
		const num2 = mascota[index];
		console.log(num1, num2);
		nombres += (`*${num1}: ${num2}. <br>`);
	});
	return mostrar.innerHTML = nombres;
}
//esta ayuda fue la me ayudo a hacer esto de arriba
// var n = [1, 2, 3, 5, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 20, 21, 22];
// var m = [0, 1, 2, 3, 4, 5, 6, 7,  8,  9,  10, 11, 12, 13, 14, 15, 16];

// n.forEach((num1, index) => {
//   const num2 = m[index];
//   console.log(num1, num2);
// });




// const arr = [{id: 1}, {id: 2}];

// arr.forEach(object => {
//   object.color = 'red';
// });

// // [{id: 1, color: 'red'}, {id: 2, color: 'red'}]
// console.log(arr);

// var nietos = [];
// nietos.push({"01": nieto.label, "02": nieto.value});
// return nietos;

// var obj1 = {
// 	fruits: ['Banana', 'Mango'],
// 	vegetables: ['Potato', 'Broccoli'],
//   };
  
//   var obj2 = {
// 	store: 'Walmart',
//   };
  
//   function merge_options(obj1,obj2) {
// 	var obj3 = {};
// 	for (var key in obj1) { obj3[key] = obj1[key]; }
// 	for (var key in obj2) { obj3[key] = obj2[key]; }
// 	return obj3;
//   };
  
//   merge_options(obj1, obj2);


// HASTA ACA ME FUNCIONA PERFECTO EL CONSOLE LOG
// let nuevoArr = "";
// function AltosBajos(){
//     altosBajos.forEach(e => {
//     console.log((`${e.name}: ${e.height}cm `));
// })
// return show;
// };


//ESTA FUNCION ES LA QUE ME IMPRIME LOS LOS STRINGS
// function AltosBajos() {
//     return show.innerHTML = JSON.stringify(altosBajosMitad, undefined, '<br>');
// }




// CON ESTA FUNCION LO IMPRIMO ORDENADO EN EL CONSOLE LOG
// onclick = false;

// function AltosBajos(){
// 	// if (onclick = true) {
//     for (var i in nuevoData){
//         console.log(i);
//         for (var key in nuevoData[i]){
//             console.log( key + ": " + nuevoData[i][key]);
//         }
//     }
// 		// }
// }




//la otra va a ser crearlo a partir de la cuncion de abajo con creando las keys
// ESTA DE ABAJO ME SIRVIO PARA IR ACOMODANDO EN EL LOG DE A UN DATO PERO ME TOCABA CREAR EN LA CONCA CADA UNO
// function AltosBajos() {
// data.forEach((e) => {
// 	console.log(`${e.name}, ${e.height}, ${e.mass}, ${e.hair_color}, ${e.skin_color}, ${e.eye_color}, ${e.gender}.`)
// })
// }




