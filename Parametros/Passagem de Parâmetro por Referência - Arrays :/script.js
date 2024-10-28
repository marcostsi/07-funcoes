function addItem(array, valor){
    array.push(valor);
    console.log("Dentro da função, array é:", array);
}



// Exemplo de uso:
let numbers = [1, 2, 3];
addItem(numbers, 4);
console.log(numbers); // Deve incluir o novo item [1, 2, 3, 4]