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
  
dobrarNumero(5)
    .then((resultado) => incrementarNumero(resultado))
    .then((resultadoFinal) => console.log(resultadoFinal)); 
  

async function processarNumero(numero) {
    const dobrado = await dobrarNumero(numero);
    const incrementado = await incrementarNumero(dobrado);
    console.log(incrementado); 
}
  
processarNumero(5);