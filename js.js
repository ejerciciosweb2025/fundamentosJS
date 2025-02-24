/* Tipos Básicos o Primitivos*/
let cadena = "Cadena";
let mistring ="Es una cadena o frase";
console.log(cadena);
console.log(mistring);
alert(cadena);

let edad = 50;
console.warn(edad);

let booleano = false;
console.table(booleano,edad,cadena);
console.log(booleano,edad,cadena);
console.log(booleano +" "+ edad + " "+cadena);
console.log(` Template string: ${booleano} ${edad} ${cadena}`);

const constante = "no puede variar su contenido";
const resultado = confirm(constante);
console.log(resultado);

let interes = 2.7;
let variableSinAsignar;
let valorNulo = null;

/** Tipos referencia */

let miLista = ["limón","fresa","manzana","pera","melocotón"];
console.log(miLista);

for(i=0;i<miLista;i++){
    console.log(miLista[i]);
}

for( elemento of miLista){
    console.log(elemento);
}

console.log(miLista[1]);
miLista[1]="naranja";
console.log(miLista[i]);

let objetoJSenBruto = {
    nombre:"Calimero",
    personaje:"Pájaro",
    rol:"Protagonista",
}
console.log(objetoJSenBruto);

console.log(objetoJSenBruto.nombre);
console.log(objetoJSenBruto.rol);
console.log(objetoJSenBruto['nombre']);
console.log(objetoJSenBruto['personaje']);

console.log(typeof(mistring));
console.log(typeof(miLista));

console.log(typeof(booleano));
console.log(typeof(objetoJSenBruto));