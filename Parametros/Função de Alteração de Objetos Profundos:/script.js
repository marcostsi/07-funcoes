function updateNestedProperty(obj){
    obj.details.age = 150;
}


// Exemplo de uso:
let user = { name: "Carol", details: { age: 28 } };
updateNestedProperty(user);
console.log(user.details.age); // Deve refletir a alteração feita na função