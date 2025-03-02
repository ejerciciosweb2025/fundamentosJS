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

}

asyncUsuarios();