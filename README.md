# 07-Funcoes
# Exercícios: Funções
# Definição
- Escreva uma função chamada multiplyAndAdd que receba três parâmetros e retorne o resultado da multiplicação dos dois primeiros, somado ao terceiro, usando definição de função, usando expressão de função e usando uma arrow function.

# Callback 
**Criando uma função que use callback:**
- Crie uma função chamada saudar que receba um nome e uma função de callback. O callback deve exibir uma saudação com o nome. Em seguida, chame saudar passando uma função que imprime "Olá, {nome}!".

**Filtro de Array com Callback:**
- Crie uma função chamada filtrar que receba um array e uma função de callback que define o critério de filtro. Teste a função para filtrar apenas números pares, maiores que 10, etc.
  
**Callback com Funções Assíncronas - Simulando um Timer:**
- Crie uma função chamada executarComDelay que recebe um callback e um tempo (em milissegundos). A função deve chamar o callback após o tempo especificado usando setTimeout.

**Transformação em Array de Objetos com Callback:**
- Crie uma função chamada criarObjetos que recebe um array de nomes e um callback que converte cada nome em um objeto com uma propriedade nome. A função deve retornar o novo array de objetos.
  
**Manipulação de Arrays de Objetos com Callback:** 
- Crie uma função chamada filtrarProdutos que receba um array de objetos representando produtos (com propriedades nome e preco) e um callback que define o critério de filtro (como produtos com preco maior que 20). A função deve retornar um array de produtos filtrados.

# Parametros 
**Passagem de Parâmetro por Valor - Números:** 
- Crie uma função chamada incrementNumber que recebe um número como parâmetro e tenta incrementar esse valor em 1. Fora da função, chame-a com um número e imprima o valor antes e depois da chamada. O número foi alterado fora da função?
  
**Passagem de Parâmetro por Valor - Strings:**
- Crie uma função chamada appendString que receba uma string e tente adicionar um valor a ela. Chame essa função passando uma string e verifique se a string foi alterada fora da função.
  
**Passagem de Parâmetro por Referência - Objetos:**
- Crie uma função chamada updatePerson que receba um objeto person com as propriedades name e age, e altere o valor de age. Fora da função, imprima o objeto antes e depois de chamar a função. O valor do objeto mudou fora da função?
  
**Passagem de Parâmetro por Referência - Arrays:**
- Crie uma função chamada addItem que recebe um array e um valor, e adiciona esse valor ao final do array. Fora da função, imprima o array antes e depois de chamar a função. O array foi alterado fora da função?
