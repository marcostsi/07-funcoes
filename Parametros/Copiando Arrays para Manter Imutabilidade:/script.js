function addToCopy(array, value) {
    let copia_array = [array];
    copia_array.push(value);  
    return copia_array; 
  }

// Exemplo de uso:
let originalArray = [1, 2, 3];
let newArray = addToCopy(originalArray, 4);
console.log(originalArray); // Deve imprimir [1, 2, 3]
console.log(newArray); // Deve imprimir [1, 2, 3, 4]