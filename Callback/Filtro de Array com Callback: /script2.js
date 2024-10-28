function filtrar(numeros, callback){
  let resultado = [];
  for(numero of numeros){
    let total = callback(numero);
    if (total == true){
      resultado.push(numero);
    }
  } 
  return resultado;
}



let numeros = [1, 12, 5, 8, 130, 44];
let pares = filtrar(numeros, function(numero) {
  return numero < 100;
});
console.log(pares); // Deve retornar [12, 8, 130, 44]