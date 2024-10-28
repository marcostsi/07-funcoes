function updatePerson(person){
    person.age += 1;
    console.log("Dentro da função, person.age é:", person.age);
}


// Exemplo de uso:
let person = { name: "Alice", age: 25 };
updatePerson(person);
console.log(person.age); // Deve refletir a mudança feita na função