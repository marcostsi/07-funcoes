function verificarNumeroPar(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve(`${numero} é par.`);
      } else {
        reject(`${numero} é ímpar.`);
      }
    });
  }
  
verificarNumeroPar(30)
    .then((mensagem) => console.log(mensagem)) 
    .catch((erro) => console.error(erro));
  
verificarNumeroPar(27)
    .then((mensagem) => console.log(mensagem))
    .catch((erro) => console.error(erro));  