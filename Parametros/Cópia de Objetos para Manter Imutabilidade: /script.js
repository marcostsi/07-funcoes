function updatePersonCopy(pessoa){
    let person = {...pessoa};
    pessoa.age += 1; 
    console.log("Dentro da função, pessoa.age é:", pessoa.age); 
    return pessoa.age;
}




// Exemplo de uso:
let person = { name: "Bob", age: 30 };
updatePersonCopy(person);
console.log(person.age); // Deve imprimir 30