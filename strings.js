let cadena = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua";
let numero = 55;

console.log(cadena);
//longitud
console.log("Mi longitud es:"+cadena.length);

//convertir número a texto
console.log("El número  -> "+numero);
console.log(typeof(numero));

let numeroATexto = numero.toString();
console.log(typeof(numeroATexto));
console.log("El número es un texto, no un numero -> "+numeroATexto);

//convertir texto a mayúsculas
let mayusculas = cadena.toUpperCase();
console.log(mayusculas);

//convertir texto a minúsculas
let minusculas = mayusculas.toLowerCase();
console.log(minusculas);

//Buscar una letra de la cadena usando su posición o índice
let letraBuscada = cadena.charAt(1);
console.log(letraBuscada);

//Comprobar si una cadena existe dentro de otra
if( cadena.includes("En") ){
    cadenaEncontrada = true;
}
else{
    cadenaEncontrada = false;
}

if(cadenaEncontrada){
    console.log("Cadena encontrada");
}

//Buscar la posición de una palabra ( 1a aparición)
let comienzoPalabraBuscada = cadena.indexOf("En");
console.log(comienzoPalabraBuscada);

//compruebo la letra inicio 
console.log(cadena.charAt(comienzoPalabraBuscada));

//Extraer parte de un texto
let extraigoParteTexto=cadena.slice(0,2);
console.log(extraigoParteTexto);

//Reemplazar una parte de un texto
let reemplazarParteTexto = cadena.replace("En","hola");
console.log(reemplazarParteTexto);
console.log(cadena);

//Reemplazar todas las apariciones de una parte de un texto
let reemplazarTodaParteTexto = cadena.replaceAll("de","hola");
console.log(reemplazarTodaParteTexto);
console.log(cadena);