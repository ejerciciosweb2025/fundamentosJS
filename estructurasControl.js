//Condicionales : tomar decisiones
let llueve = true;
//Si A es igual a verdadero haz eso
if(llueve == true ){
    console.log("Pues te vas a mojar");
}
//podria mostrase también así
if(llueve){
    console.log("Pues te vas a mojar");

}
//Si no haz lo siguiente de A
llueve = false;
if(llueve == true ){
    console.log("Pues te vas a mojar");
}
else{
    console.log("Pues no te vas a mojar");

}

//Necesito más opciones
let camiseta="amarilla";

if( camiseta=="verde"){
    console.log("No llevas otra camiseta");
}
else if(camiseta=="roja"){
    console.log("No llevas otra camiseta");
}
else if(camiseta=="azul"){
    console.log("No llevas otra camiseta");
}
else if(camiseta=="morada"){
    console.log("No llevas otra camiseta");
}
else{
    console.log("Debe ser la camiseta que queda");
}

switch(camiseta){
    case "verde":
        console.log("No llevas otra camiseta");
        break;
    case "roja":
        console.log("No llevas otra camiseta");
        break;
    case "azul":
        console.log("No llevas otra camiseta");
        break;
    case "morada":
        console.log("No llevas otra camiseta");
        break;
    default:
        console.log("Debe ser la camiseta que queda");        
}

//Condicional ternario
let edad = 18;

let esMayorEdad = (edad>=18)? "Es mayor de edad":"Es menor de edad";
console.log(esMayorEdad);

//Bucles
//For se ejecuta un bloque de código mientras se cumpla la condición
//conocemos el valor inicial

for(let inicializacion=0; inicializacion<10;inicializacion++){
    console.log("Recorremos el bucle for ->",inicializacion);
}

//While se ejecuta un bloque de código mientras se cumpla la condición
//
i=0;
while(i<10){
    console.log("Recorremos el bucle for ->",inicializacion);
    i++;
}
//El bucle while suele tener instrucciones para finalizar el bucle y salir
i=0;
valorEncontrado=false;
queremossalir = "N";
while(i<10 && valorEncontrado==false){
    console.log("Recorremos el bucle for ->",inicializacion);
    queremossalir = prompt("S/N");
    if(queremossalir=="S"){
        valorEncontrado=true;
    }
    i++;
}
//Do While se ejecuta un bloque de código y después se comprueba que se cumpla la condición
//como mínimo se ejecuta una vez
i=0;
do{
    console.log("Recorremos el bucle for ->",inicializacion);
    i++;
}while(i<10);