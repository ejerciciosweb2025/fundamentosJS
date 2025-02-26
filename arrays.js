//Array - Lista - Matrices/Vectores
let tema = "JS";
console.log(tema);

let temas = ["HTML","CS",tema];
console.log(temas);

temas[3]="PHP";
console.log(temas);

temas[3]="Modificado";
console.log(temas);

//longitud del array
console.log(temas.length);

//Crear Array
let creaArrayVacio = new Array();
console.log(creaArrayVacio);
console.log(creaArrayVacio.length);


let creaArrayVacio2 = [];
console.log(creaArrayVacio2.length);


let creaArrayVacio3 = new Array(3);
console.log(creaArrayVacio3);
console.log(creaArrayVacio3.length);


let creaArrayVacio4 = [[],[],[]];
console.log(creaArrayVacio4);
console.log(creaArrayVacio4.length);

//Recorrer Arrays
for(let i=0;i<temas.length;i++){
    console.log(temas[i]);
}

for(let elemento of temas){
    console.log(elemento);
}

for(let indice in temas){
    console.log(indice, temas[indice]);
}

temas.forEach( mielemento =>{
    console.log(mielemento);
});

//Arrays dentro de arrays
let matriz = [["Lunes","Martes","Miercoles","Jueves","Vierenes"],["HTML","CSS","JS"]];

console.log(matriz);

matriz[0][1]="Fiesta";
console.log(matriz);
console.log(matriz[0][1]);

let fila=matriz[0].length;
console.log(fila);
let col=matriz[1].length;
console.log(col);

//Recorrer matriz
/*for(let i=0;i<fila;i++){
    for(let j=0;j<col;j++){
        console.log(matriz[i][j]);
    }
}*/

//funciones y métodos con JS
//Añadir un elemento nuevo al array al final

let miArrayP = [];

miArrayP.push("Elemento añadido");
console.log(miArrayP);
miArrayP.push("Elemento añadido 2");
console.log(miArrayP);

//Añadir un elemento nuevo al array al principio

miArrayP.unshift("Elemento añadido 3");
console.log(miArrayP);


//Eliminar ultimo elemento array
miArrayP.pop();
console.log(miArrayP);

//Eliminar primer elemento array
miArrayP.shift();
console.log(miArrayP);

//busqueda en un array por indice y nos devuelve la posición de elemento encontrado
let indice = miArrayP.indexOf("Elemento añadido");
console.log(indice);

//busqueda para saber si existe 
let existe = miArrayP.includes("Elemento añadido");
console.log(existe);