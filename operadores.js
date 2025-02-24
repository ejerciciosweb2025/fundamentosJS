/** Operadores Aritméticos */
let numero1 = 10;
let numero2 = 20;

let suma       = numero1 + numero2;
let resta      = numero1 - numero2;
let mult       = numero1 * numero2;
let division   = numero2 / numero1;
let resto      = numero2 % numero1;
let potencia   = numero1 ** 2;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", mult);
console.log("División: ", division);
console.log("Resto: ", resto);
console.log("potencia: ", potencia);

/** Operadores asignación */
let valor = 5;
valor+=5;
valor++;
valor+=1;
valor--;
valor-=1;
valor*=1;
valor/=1;
valor = 17 + valor;

/** Operadores comparación */
console.log( numero1 == 10 );
console.log (numero1 == "10");
console.log( numero1 === 10);
console.log( numero1 === "10");
console.log( numero1 != 10);
console.log( numero1 !== 10);


console.log( numero1 <  numero2 );
console.log( numero1 <=  numero2 );

console.log( numero1 > numero2  );
console.log( numero1 >= numero2  );

/** Operadores lógicos */
//Comprueba si 2 condiciones si las 2 son verdaderas AND
let esMayorEdad  = true;
let tieneEntrada = true;
console.log( esMayorEdad && tieneEntrada);
esMayorEdad = false;
console.log( esMayorEdad && tieneEntrada);
esMayorEdad = true;
tieneEntrada = false;
console.log( esMayorEdad && tieneEntrada);
tieneEntrada = false;
esMayorEdad = false;
console.log( esMayorEdad && tieneEntrada);

//Comprueba si 2 condiciones si una de ellas es verdadera OR
esMayorEdad  = true;
tieneEntrada = true;
console.log( esMayorEdad || tieneEntrada);
esMayorEdad = false;
console.log( esMayorEdad || tieneEntrada);
esMayorEdad = true;
tieneEntrada = false;
console.log( esMayorEdad || tieneEntrada);
tieneEntrada = false;
esMayorEdad = false;
console.log( esMayorEdad || tieneEntrada);

//NOT invierte el valor 
console.log(esMayorEdad);
console.log(!esMayorEdad);
tieneEntrada = false;
esMayorEdad = false;
console.log( !(esMayorEdad || tieneEntrada));

//Cadena
let mensaje1 = "cadena";
let mensaje2 = "se suma a la cadena";
let mensajeTotal = mensaje1+" "+mensaje2;
console.log(mensajeTotal);

mensajeTotal=mensajeTotal + "Más espacios";
console.log(mensajeTotal);

mensajeTotal+="Todavía Más espacios";
console.log(mensajeTotal);


let guardaTemplateString=`${mensaje1} " " ${mensaje2}`;
console.log(guardaTemplateString);