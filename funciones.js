/** Las funciones son bloques que usamos para simplicar nuestro programa y 
 * evitar la repetición de nuestro código por lo que cada vez que necesitamos repetir 
 * un bloque de código (serie de instrucciones) que definimos y nombramos 
 * ese bloque para llamarlo en nuestro programa principal y desarrollamos 
 * ese código de en la función forma asilada. 
 * Las funciones devuelven un valor mientras los procedimientos 
 * no devuelven ningún valor. */

/* Procedimiento */
function imprimirTareasPorHacer(){
    console.log("-----------TAREAS--------------");
    console.log("1-Crear una lista");
    console.log("2-Generar un valor aleatorio");
    console.log("3-Convertir el valor aleatorio");
    console.log("4-Seleccionar del valor aleatorio \nla opción del menú");
    console.log("5-Ejecutar el procedmiento");
    console.log("6-Despedirse del programa");

}
//ejecutamos nuestro procedimiento
imprimirTareasPorHacer();

/** Los parámetros son las "opciones que nos permite incluir nuestra función" */
function validarNumero(numero){
    esNumero = false;
    while(esNumero==false){
        if(isNaN(numero)){
            console.log("No es un número");
            numero = prompt("Introduce un número...si quieres salir: ");
        }
        else{
            console.log("Es un número");
            esNumero=true;
        }
    }
    return parseInt(numero);   
}

/** Las funciones pueden llamar a otras funciones */
function sumar( ){
    let numero1   = 0;
    let numero2   = 0;
    let resultado = 0;

    numero1 = prompt("Introduce el primer número");
    numero1 = validarNumero(numero1);
    numero2 = prompt("Introduce el segundo número");
    numero2 = validarNumero(numero2);

    resultado = numero1+numero2;
    return resultado;
}

/** Los argumentos son los valores o variables que le pasamos a nuestra función 
 * para que nos traiga un resultado a nuestro programa principal */

let sumatorio = sumar();

/** En este caso  */
console.log(sumatorio);

function parametrosOpcionales( nombre="Rompetechos", edad=55){
    let miLista = [nombre,edad];
    return miLista;
}

console.log( parametrosOpcionales("Jaime", 47) );
console.log( parametrosOpcionales("Pepe", ) );
console.log( parametrosOpcionales("",20) );

function parametroRest(pelicula1, pelicula2,...resto){
    console.log(pelicula1);
    console.log(pelicula2);
    console.log(resto);
    for(i=0;i<resto.length;i++){
        console.log(resto[i]);
    }
}
parametroRest("El guerrero pacífico","matrix","gladiator","El diario de Noa","Batman","Spiderman","Sin límites");

//Operador Spread
let misPeliculas = ["El guerrero pacífico","matrix","gladiator","El diario de Noa","Batman","Spiderman","Sin límites"];
console.log(misPeliculas);

let miListaPerezosa = [...misPeliculas,"Hitman","Darevil","Hulk","Iron Man" ];
console.log(miListaPerezosa);


//Funciones anónimas no tiene nombre usa la variable en la que esta contenida
const saludo = function(){
    console.log("Se ejecuta dentro de la función anónima");
};

//Invoco la función anónima con el nombre de mi constante/variable
saludo();

let segundos=0;
/*Se usa dentro de otras funciones que se pasan como parámetro para ejecutar en las otras funciones (la otra función es quién las ejecuta), un ejemplo sin más. Se usa para ciertas funciones específicas.*/

setInterval( function() {
    segundos++;
    console.log("Se ha ejecutado el timeout",segundos);
},1000);