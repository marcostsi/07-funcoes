function executarComDelay(callback, tempo){
    setTimeout(callback,tempo);
}



// Exemplo de uso:
executarComDelay(function() {
    console.log("Executado após 2 segundos");
  }, 2000);