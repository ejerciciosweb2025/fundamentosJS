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


//Nuestra cadena comienza por
console.log(cadena.startsWith("En"));

//Nuestra cadena acaba por
console.log(cadena.endsWith("antigua"));

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


//Buscar texto dentro de una cadena y nos dice su posición
let busca = cadena.search("En");
console.log(busca);

//Buscar texto dentro de una cadena y nos dice su posición. IDEM pero nos devuelve un array 
let buscaMatch = cadena.match("En");
console.log(buscaMatch);

//Repetir palabras
let repitesPalabras = cadena.repeat(5);

//Buscar la posición de una palabra ( 1a aparición)
let comienzoPalabraBuscada = cadena.indexOf("En");
console.log(comienzoPalabraBuscada);

//compruebo la letra inicio 
console.log(cadena.charAt(comienzoPalabraBuscada));

console.log("EXTRAYENDO con slice");
//Extraer parte de un texto
let extraigoParteTexto=cadena.slice(0,2);
console.log(extraigoParteTexto);
console.log("EXTRAYENDO con substring");

//Extraer parte del texto como subcadena
let misubString = cadena.substring(0,2);
console.log(misubString);

//Reemplazar una parte de un texto
let reemplazarParteTexto = cadena.replace("En","hola");
console.log(reemplazarParteTexto);
console.log(cadena);

//Reemplazar todas las apariciones de una parte de un texto
let reemplazarTodaParteTexto = cadena.replaceAll("de","hola");
console.log(reemplazarTodaParteTexto);
console.log(cadena);

//Eliminar espacios en blanco al inicio y final de la palabra
let espacios = "     ESPACIOS        ";
console.log(espacios);

let eliminaEspacios = espacios.trim();
console.log(eliminaEspacios);

//Separar palabra por cadenas (una cadena es una lista de letras)
let texto="cadena a separar";
let textoSeparado = texto.split(" ");
console.log(textoSeparado);

//Concatenar cadenas de texto
let texto1 = "Hola1 ";
let texto2 = "texto concatenado";
let textoConcatenado = texto1.concat(texto2);
console.log(textoConcatenado);

