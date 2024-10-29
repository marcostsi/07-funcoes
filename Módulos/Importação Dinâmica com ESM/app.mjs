const carregarMensagem = true;

async function main() {
  if (carregarMensagem) {
    const { exibirMensagem } = await import('./mensagem.mjs');
    exibirMensagem('Olá, mundo!');
  } else {
    console.log('Mensagem não carregada.');
  }
}

main();