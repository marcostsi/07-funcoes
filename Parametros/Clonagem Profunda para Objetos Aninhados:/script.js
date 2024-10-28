function deepCloneUpdate(obj){
    let clone = JSON.parse(JSON.stringify(obj));
    clone.specs.ram = "16GB";
    return clone;
}


// Exemplo de uso:
let product = { name: "Laptop", specs: { ram: "8GB" } };
deepCloneUpdate(product);
console.log(product.specs.ram); // Deve imprimir "8GB"