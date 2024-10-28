function appendString(string, acrescentarValor){
    string += acrescentarValor;
    console.log("Dentro da função, str é:", string);
}


// Exemplo de uso:
let str = "Hello";
appendString(str, " World");
console.log(str); // Deve imprimir "Hello"