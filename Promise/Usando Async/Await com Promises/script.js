function dobrarNumero(numero) {
    return new Promise((resolve) => {
      const resultado = numero * 2;
      resolve(resultado);
    });
  }
  
function incrementarNumero(numero) {
    return new Promise((resolve) => {
      const resultado = numero + 1;
      resolve(resultado);
    });
  }
  
async function processarNumero(numero) {
    try {
      const dobrado = await dobrarNumero(numero);
      const incrementado = await incrementarNumero(dobrado);
      console.log(`Número inicial: ${numero}`);
      console.log(`Dobrado: ${dobrado}`);
      console.log(`Incrementado: ${incrementado}`);
    } catch (erro) {
      console.error(erro);
    }
  }
  

processarNumero(5);
  