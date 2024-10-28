function changePrimitive (numero){
    numero += 5
    console.log("Dentro da função numero é:", numero);
    return numero;
}



// Exemplo de uso:
let x = 10;
changePrimitive(x);
console.log(x); // Deve imprimir 10