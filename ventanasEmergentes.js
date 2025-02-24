let mensaje = "Mensaje a mostrar";
alert(mensaje);

mensaje = "Te quiero preguntar si quieres continuar"
let pregunta = confirm(mensaje);
console.log(pregunta);

/* Recoger datos del usuario */
let leer        = prompt("Escribeme... algo que quiero recoger tu string o cadena");
let leerNumero  = parseInt(prompt("Escribeme... un número"));

/** Validar datos del usuario con un número */
do{
    numero=prompt("Escribe un número....");
    if(!(isNaN(numero))){
        numero=parseInt(numero);
    }
}while(isNaN(numero));
console.log(numero);