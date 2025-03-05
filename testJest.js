function sumar(n1, n2){
  return (n1 + n2);
}

function restar(n1, n2){
  return (n1 - n2);
}

function multiplicar(n1, n2){
  return (n1 * n2);
}

function dividir(n1, n2){
  return (n1 / n2);
}

//Para hacerlo global y que lo reconozca fuera de mi archivo
//que lo pueda usar para los test...
module.exports = {sumar, restar, multiplicar, dividir};