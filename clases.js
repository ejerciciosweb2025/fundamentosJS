//Paradigma de programación, una forma de representar 
// la realidad
//Organizamos / Agrupamos y dividimos el código para 
// representar nuestro programa
//Estos objetos tienen propiedades (variables) y
//  metodos (funciones)
//las propiedades son caracteristicas
//los métodos son acciones que el objeto puede hacer

//Las clases son un molde, una plantilla, plano, receta ...
// que creara una estructura para un objeto concreto 
//Ej. Clase un perro 

//un objeto es una instancia,ejemplar único de esa clase
//Ej. Objeto ¿que perro exactamente?
//es de una raza concreta, estatura y nombre, es un 
// perro único de cualquier otro


class Perro{
    constructor(){
        this.nombre     = "Pol";
        this.raza       = "Yorshire";
        this.color      = "Marrón";
        this.posicion   = 0;
    }
    //Propiedades - caracteristicas
    //let nombre;

    //Métodos - acciones
    labrar(){
        console.log(`${this.nombre} dice Guau Guau`);
    }
    correr(){
        console.log(`${this.nombre} se desplaza ${this.posicion=this.posicion+1}`);

    }
}

let miPerro = new Perro();
console.log(miPerro);
console.log(miPerro.nombre);
console.log(miPerro.raza);
console.log(miPerro.labrar());
console.log(miPerro.correr());
console.log(miPerro.correr());

class Perro2{
    constructor(nombre,raza,color,posicion){
        this.nombre     = nombre;
        this.raza       = raza;
        this.color      = color;
        this.posicion   = posicion;
    }
    //Propiedades - caracteristicas
    //let nombre;

    //Métodos - acciones
    labrar(){
        console.log(`${this.nombre} dice Guau Guau`);
    }
    correr(){
        console.log(`${this.nombre} se desplaza ${this.posicion=this.posicion+5}`);
    }
}

let miPerro2 = new Perro2("Aisha","Husky","BlancoyNegro",5);
console.log(miPerro2);
miPerro2.labrar();
miPerro2.correr();
miPerro2.correr();


class Perro3{
    constructor(nombre,raza,color,posicion){
        this.nombre     = nombre;
        this.raza       = raza;
        this.color      = color;
        this.posicion   = posicion;
    }
    //Propiedades - caracteristicas
    //let nombre;


    //Modificar la raza del perro
    setRaza(raza){
        this.raza = raza;
    }

    //Devolver el valor de la raza del perro
    getRaza(){
        return this.raza;
    }

    set guardarColor(color){
        this.color = color;
    }

    get verColor(){
        return this.color;
    }

    //Métodos - acciones
    labrar(){
        console.log(`${this.nombre} dice Guau Guau`);
    }
    correr(){
        console.log(`${this.nombre} se desplaza ${this.posicion=this.posicion+5}`);
    }
}

miPerro3 = new Perro3("Doritos","Caniche","Negro",3);
console.log(miPerro3);
miPerro3.labrar();
miPerro3.correr();
miPerro3.setRaza("Labrador");
console.log( miPerro3.getRaza() );
miPerro3.guardarColor="Amarillo";
console.log(miPerro3.verColor);
console.log(miPerro3);


class Perro4{
    constructor(nombre="Pit",raza="Bulldog",color="Negro",posicion=3){
        this.nombre     = nombre;
        this.raza       = raza;
        this.color      = color;
        this.posicion   = posicion;
    }
    //Propiedades - caracteristicas
    //let nombre;


    //Modificar la raza del perro
    setRaza(raza){
        this.raza = raza;
    }

    //Devolver el valor de la raza del perro
    getRaza(){
        return this.raza;
    }

    set guardarColor(color){
        this.color = color;
    }

    get verColor(){
        return this.color;
    }

    //static no necesita ser llamado y no puede heredarse
    static nocopiar(){
        console.log("Solo se me puede llamar");
    }

    //Métodos - acciones
    labrar(){
        console.log(`${this.nombre} dice Guau Guau`);
    }
    correr(){
        console.log(`${this.nombre} se desplaza ${this.posicion=this.posicion+5}`);
    }
}

console.log("-----STATIC-----");
//let miPerro4 = new Perro4();
//console.log(miPerro4);
Perro4.nocopiar();
Perro4.nocopiar();
Perro4.nocopiar();
Perro4.nocopiar();
console.log("No tengo mi ejemplar de perro llamo a la clase directamente");
console.log(Perro4);

class PerroLazarillo extends Perro2{
    constructor(nombre,raza,color,posicion,dirigir){
        super(nombre,raza,color,posicion);
        this.dirigir = dirigir;
    }

    setDirigir( dirigir){
        this.dirigir=dirigir;
    }
    getDirigir(){
        return this.dirigir;
    }

    mostrarPerroLazarillo(){
        return(`Mi perro ${this.nombre} tiene la raza ${this.raza} y tiene la capacidad de dirigir a personas - ${this.dirigir}`);
    }
}

let miPerroLazarillo = new PerroLazarillo("Chopete","Dálmata","Gris y Negro",7,true);
console.log(miPerroLazarillo);
console.log(miPerroLazarillo.mostrarPerroLazarillo());

miPerroLazarillo.setDirigir(false);
miPerroLazarillo.getDirigir();
console.log(miPerroLazarillo.mostrarPerroLazarillo());
