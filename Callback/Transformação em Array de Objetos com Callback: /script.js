function criarObjetos(array, callback){
    let nomes = [];
    for(obj of array){
        let retorno = callback(obj);
        nomes.push(retorno);
    }
    return nomes;
}

// Exemplo de uso:
let nomes = ["Alice", "Bob", "Carlos"];
let objetos = criarObjetos(nomes, function(nome) {
  return "Oi, " + nome;
});
console.log(objetos); // Deve retornar [{nome: "Alice"}, {nome: "Bob"}, {nome: "Carlos"}]
