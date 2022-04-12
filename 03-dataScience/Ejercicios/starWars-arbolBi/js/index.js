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


let scroll = document.querySelector('#scroll');
//CON LA FUNCION CAMBIO EL JSON A STRINGS Y LA USO PARA IMPRIMIR Y ORGANIZAR EL TEXTO
function Texto (){
    return JSON.stringify(data, undefined, 4);
}
scroll.append(Texto());


// let show = document.querySelector('#show');
// //CON ESTA FUNCION AL DAR CLICK EN DE ALTOS A BAJOS ME MUESTR LA INFO
// function AltosBajos() {
// 	// show.append(JSON.parse(data));
// 	show.append(JSON.stringify({x:data}));
// } 

data.sort((a, b) => b.height - a.height);

data.forEach((e) => {
	console.log(`${e.name}, ${e.height}, ${e.mass}, ${e.hair_color}, ${e.skin_color}, ${e.eye_color}, ${e.gender}.`)
});





// ------------ esta fuye la q saque de stiock
// var altosBajos = sortBy(data, "height");

// console.log(altosBajos);

//---este es un intento que estoy haciendo
// function MasAltos (){
    
// 	for (const height of data["height"]) {
        
// 		return 
		
// 	}




	// const altos = JSON.stringify(data[1]["height"], undefined, 4);
    
	// show.append(altos)
