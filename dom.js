/* DOM: Representación del documento html, estructura en árbol que podemos acceder desde JS */
//Seleccionar elementos

//getElementsByID - Selector de elemento por ID
let caja = document.getElementById("caja");
console.log(caja);
//no muestra nada aquí pruebalo en el navegador document.getElementById("caja"); 
// SALVO que tengamos defer o se puede usar algún evento de cargado estilo
//window.addEventListener("DOMContentLoaded", ()=>{
//    let caja = document.getElementById("caja");
//    console.log(caja);
//});
//En nuestro caso usamos defer 


//Para mostra el contenido que tiene mi html de la caja
console.log(caja.innerHTML);

//Para mostrar el contenido del texto que tiene mi caja
console.log(caja.innerText);

//Sustituyo el contenido texto que tenemos en nuestra caja
caja.innerText = "Sustituye el contenido de la caja por texto";

//Sustituyo el contenido en html que tenemos en nuestra caja
caja.innerHTML = "<h3>Sustituye el contenido de la caja por texto</h3>";

//Puedo añadir estilo (style)
caja.style.background = "yellow";

//Puedo modificar el tamaño de mi caja
caja.style.maxWidth="40%";
caja.style.display="flex";
caja.style.flexDirection="row";
caja.style.justifyContent="center";
caja.style.margin="5px";
caja.style.padding="5px";
caja.style.fontFamily="Verdana";

//Aplicar después con archivo externo
caja.classList.add("pinta");

//Alternativa 
caja.className = "pinta";

//Cuando tengamos un listener...
function cambiarColor(color){
    caja.style.background = color;
}

//getElementByClassName Permite seleccionar CLASE
// múltiples elementos con una clase
let articulos = document.getElementsByClassName("articulo");
console.log(articulos);
for(let i=0;i<articulos.length;i++){
    console.log(articulos[i]);
    //a cada artículo le añado un enlace
    articulos[i].innerHTML+="<a href='https://www.google.es'>spam url</a>";

    //pinto para cada artículo estilos con la clase o aplicando el estilo en línea
    if(i%2===0){ //par - impar
        articulos[i].classList.add("pinta");
    }
    else{ 
        articulos[i].style.border = "0.1rem dashed pink";
        articulos[i].style.margin = "2rem";
    }
    //Otra forma de crear el enlace 

    //Creo un elemento de html dentro de articulos
    let enlace = document.createElement("a");
    enlace.setAttribute("href","https://www.google.es");
    enlace.setAttribute("target","_blank");
    enlace.setAttribute("title","Pinchame ...");
    enlace.style.color="white";
    enlace.style.background="green";

    let textoMostrarEnlace = document.createTextNode(" Más texto");
    enlace.append(textoMostrarEnlace);
    articulos[i].append(enlace);

}


//getElementByTagName 
let etiquetaArticulo = document.getElementsByTagName("article");
console.log(etiquetaArticulo);
console.log(etiquetaArticulo[2].innerHTML);
etiquetaArticulo[2].style.background="peru";

//QuerySelector RECOMENDADO

let divArticulos = document.querySelector("#articulos");
console.log(divArticulos);
divArticulos.style.background="red";

let claseArticulo = document.querySelector(".articulo");
console.log(claseArticulo);
claseArticulo.style.background="lightblue";
claseArticulo.innerHTML+="<p>Nooooooo</p>";


let h3Articulos    = document.querySelector("h3");
console.log(h3Articulos);
h3Articulos.innerText = "Cambio Encabezado";

//QuerySelectorAll RECOMENDADO parecido className

let articulosSelectorAll = document.querySelectorAll(".articulo");
console.log(articulosSelectorAll);
for (elemento of articulosSelectorAll){
    console.log(elemento);
    elemento.classList.add("pintaDiferente");
}
