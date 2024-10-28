function saudar(nome, callback){
    console.log(nome);
}

// Exemplo de uso:
saudar("Alice", function(nome) {
    console.log("Olá, " + nome + "!");
  });

function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}
  
saudar("Bob", saudacao);