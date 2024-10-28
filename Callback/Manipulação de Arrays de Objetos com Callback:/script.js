function filtrarProdutos(produto, callback){
    return produto.filter(callback);
}

// Exemplo de uso:
let produtos = [
    { nome: "Camiseta", preco: 25 },
    { nome: "Calça", preco: 50 },
    { nome: "Meias", preco: 5 }
  ];
  let produtosFiltrados = filtrarProdutos(produtos, function(produto) {
    return produto.preco > 20;
  });
  console.log(produtosFiltrados); // Deve retornar [{nome: "Camiseta", preco: 25}, 