//Condicional : tomar decisiones
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