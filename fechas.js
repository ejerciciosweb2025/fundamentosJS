let fechaActual = new Date(2025,3,2);
console.log(fechaActual);

fechaActual = new Date();
console.log(fechaActual);

console.log(fechaActual.getFullYear());
console.log(fechaActual.getMonth()+1);
console.log(fechaActual.getDate());
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());
console.log(fechaActual.getMilliseconds());

//dia de la semana
console.log(fechaActual.getDay());

console.log(`Fecha actual ${fechaActual.getDate()}/${fechaActual.getMonth()+1}/${fechaActual.getFullYear()}`);