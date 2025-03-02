//Hacer peticiones a un servicio externo 
// y esperamos a que nos de una respuesta
// y usar el resultado que nos devuelve en nuestra aplicación
//https://reqres.in/
//https://reqres.in/api/users/2
//https://reqres.in/api/users/

let url = "https://reqres.in/api/users/2";

//enviada una url espero una respuesta
fetch(url)
.then(datos =>datos.json())
.then( datos => {
    console.log(datos);
});

//convencion
//enviada una url espero una respuesta
fetch(url)
.then(response =>response.json())
.then( data => {
    console.log(data);
});

//convencion
//enviada una url espero una respuesta
fetch(url)
.then(response =>response.json())
.then( data => {
    console.log(data);
    mostrarDatos(data.data);
})
.catch(error => {
    console.log("Error al pedir los datos en el servidor", error);
});

function mostrarDatos( usuario ){
    let miusuario = document.querySelector("#usuario");

    miusuario.innerHTML = `
        <p>${usuario.first_name} -  ${usuario.last_name} </p>
        <p> <img src="${usuario.avatar}" alt="usuario"></p>
    `;
}
const MAX = 12;
let usuarioAleatorio = Math.ceil(Math.random()*MAX);
url = "https://reqres.in/api/users/";
url = url + usuarioAleatorio;
//convencion
//enviada una url espero una respuesta
fetch(url)
.then(response =>response.json())
.then( data => {
    console.log(data);
    mostrarDatos(data.data);
})
.catch(error => {
    console.log("Error al pedir los datos en el servidor", error);
});

function mostrarDatos( usuario ){
    let miusuario = document.querySelector("#usuario");

    miusuario.innerHTML = `
        <p>${usuario.first_name} -  ${usuario.last_name} </p>
        <p> <img src="${usuario.avatar}" alt="usuario"></p>
    `;
}

let minombre="Test";
let miTrabajo="Desarrollador";

//guardar informacion
let usuarioGuardar = {
    name:minombre,
    job:miTrabajo,
};

url = "https://reqres.in/api/users";
fetch(url, {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(usuarioGuardar)
})
.then(response => response.json() )
.then(data=>{
    console.log(data);
})
.catch(error =>{
    console.log(error);
});

