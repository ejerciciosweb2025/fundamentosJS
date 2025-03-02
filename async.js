//Otra forma para pedir los datos Recomendada
//promesas con async y await
//debe estar en una función asincrona
console.log("Async Await");

url = "https://reqres.in/api/users?page=2";

async function asyncUsuarios(){
    let response = await fetch(url);
    let data     = await response.json();
    console.log(data);
    //mi array de objetos
    console.log(data.data);
    for( elemento of data.data ){
        console.log(elemento);
        let miusuario = document.querySelector("#usuario");

        miusuario.innerHTML += `
            <p>${elemento.first_name} -  ${elemento.last_name} </p>
            <p> <img src="${elemento.avatar}" alt="usuario"></p>
        `;
    }


}

asyncUsuarios();

console.log("Async Await con Try Catch");

url = "https://reqres.in/api/users?page=2";

async function asyncUsuarios2(){
   try{
    let response = await fetch(url);
    let data     = await response.json();
    console.log(data);
    //mi array de objetos
    console.log(data.data);
    for( elemento of data.data ){
        console.log(elemento);
        let miusuario = document.querySelector("#usuario");

        miusuario.innerHTML += `
            <p>${elemento.first_name} -  ${elemento.last_name} </p>
            <p> <img src="${elemento.avatar}" alt="usuario"></p>
        `;
    }
   }catch(error){
    console.log("Error al conseguir la información",error);
   }
}

asyncUsuarios2();