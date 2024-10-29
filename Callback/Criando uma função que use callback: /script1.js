function saudar(nome, callback){
    callback(nome);
}

// Exemplo de uso:
saudar("Alice", function(nome) {
    console.log("Olá, " + nome + "!");
  });

function saudacao(nome) {
    callback("Olá, " + nome + "!");
}
  
saudar("Bob", saudacao);