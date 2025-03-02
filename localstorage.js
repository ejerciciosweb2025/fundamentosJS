//localstorage

//Comprobamos que exista localstorage para guardar
// los datos, disponibilidad de almacenamiento

if(typeof(Storage)!=="undefined"){
    console.log("Existe localstorage");
}
else{
    console.log("No Existe localstorage");

}

//guardar datos
localStorage.setItem("clavedemiweb","Contenido de mi Web megachula");
localStorage.setItem("enlace","mienlace.es");

//extraer datos
console.log(localStorage.getItem("clavedemiweb"));
console.log(localStorage.getItem("enlace"));

let machacarH3 = document.querySelector("h1");
machacarH3.innerText+=localStorage.getItem("clavedemiweb");
machacarH3.innerText+=localStorage.getItem("enlace");


//guardar objetos

let peliculaAJSON = {
    titulo: "El Guerrero Pacífico",
    tituloOriginal: "Peaciful Warrior",
    anyo:2006,
    genero: "Biografía",
    director:"Victor Salva",
    guion:"Dan Millman",
};
localStorage.setItem("peliculaAJSON",JSON.stringify(peliculaAJSON));

//extraer objetos
let peliculaJSON = JSON.parse(localStorage.getItem("peliculaAJSON"));
console.log(peliculaJSON);
console.log(peliculaJSON.titulo);

//Eliminar elemento
localStorage.removeItem("peliculaAJSON");

//Si quiero borrar todo el contenido que he almacenado del localstorage
localStorage.clear();