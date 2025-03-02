console.log("Carga JS");
//Objetos literales
//estructura de datos que agrupa datos (variables) 
// y métodos (funciones) bajo un mismo nombre

let pelicula = {
    titulo: "El Guerrero Pacífico",
    tituloOriginal: "Peaciful Warrior",
    anyo:2006,
    genero: "Biografía",
    director:"Victor Salva",
    guion:"Dan Millman",
};
console.log(pelicula);
console.log(pelicula.titulo);
console.log(pelicula.tituloOriginal);
console.log(pelicula.anyo);
console.log(pelicula.genero);
console.log(pelicula.director);
console.log(pelicula.guion);

console.log("-------------------------");
console.log(pelicula['titulo']);
console.log(pelicula['tituloOriginal']);
console.log(pelicula['anyo']);
console.log(pelicula['genero']);
console.log(pelicula['director']);
console.log(pelicula['guion']);

//Cambiar valores
console.log("-------------------------");
console.log("Cambiar valores");
pelicula.director = "Steven Spielberg";
console.log(pelicula.director);
console.log(pelicula);

//Añado valores a mi pelicula
pelicula.secuela="El guerrero pacífico 2";
console.log(pelicula.secuela);
console.log(pelicula);

let pelicula2 = {
    titulo: "El Guerrero Pacífico",
    tituloOriginal: "Peaciful Warrior",
    anyo:2006,
    genero: "Biografía",
    director:"Victor Salva",
    guion:"Dan Millman",
    actores:["Scott Mechlowicz","Nick Nolte","Amy Smart"],
    };

console.log(pelicula2);

let pelicula3 = {
    titulo: "El Guerrero Pacífico",
    tituloOriginal: "Peaciful Warrior",
    anyo:2006,
    genero: "Biografía",
    director:"Victor Salva",
    guion:"Dan Millman",
    actores:["Scott Mechlowicz","Nick Nolte","Amy Smart"],

    nominar: function(){
        return `( La pelicula ${this.titulo} está nominada `
    },
    mostrarActores:()=>{
        for (actor of pelicula3.actores){
            console.log(actor);
        }
    },
    detalles:{
        duracion: 240,
        pegi:18,
    }
};

console.log(pelicula3);
console.log(pelicula3.nominar());
console.log(pelicula3.mostrarActores());
console.log(pelicula3.detalles);
console.log(pelicula3.detalles.duracion);
console.log(pelicula3.detalles.pegi);

//si quiero borrar una propiedad del objeto
delete pelicula3.genero;
console.log(pelicula3);
delete pelicula3.actores;
console.log(pelicula3);
delete pelicula3.mostrarActores;
console.log(pelicula3);

//El objeto JSON Javascript Object Notation - texto clave valor
//no permite métodos
let peliculaAJSON = {
    titulo: "El Guerrero Pacífico",
    tituloOriginal: "Peaciful Warrior",
    anyo:2006,
    genero: "Biografía",
    director:"Victor Salva",
    guion:"Dan Millman",
};
    console.log("-------JSON------------");
    console.log(peliculaAJSON);

    let peliculaJSON = JSON.stringify(peliculaAJSON);
    console.log(peliculaJSON);
    console.log("Es una cadena de texto entera");

    //Para convertir el objeto JSON a un objeto literal
    let objetoJSONaLiteral = JSON.parse(peliculaJSON);
    console.log(objetoJSONaLiteral);

    let recogerDatos = document.querySelector("#datos");
    for( let clave in peliculaAJSON){
        console.log(clave);
        recogerDatos.innerHTML+=`<p>${clave} - ${peliculaAJSON[clave]}<p/>`;
    }
    