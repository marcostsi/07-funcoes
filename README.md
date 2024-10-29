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
- 
**Imutabilidade de Tipos Primitivos:**
- Crie uma função chamada changePrimitive que recebe um número, altera o valor dentro da função e depois retorna o novo valor. Fora da função, veja se o número original foi modificado. O valor original mudou?
  
**Cópia de Objetos para Manter Imutabilidade:**
- Crie uma função chamada updatePersonCopy que receba um objeto person e altere o valor de uma de suas propriedades, mas primeiro faça uma cópia do objeto. Fora da função, verifique se o objeto original foi alterado.
  
**Copiando Arrays para Manter Imutabilidade:**
- Crie uma função chamada addToCopy que receba um array e um valor. A função deve adicionar o valor a uma cópia do array e retornar essa cópia sem modificar o array original. Verifique se o array original foi alterado.
  
**Função de Alteração de Objetos Profundos:**
- Crie uma função chamada updateNestedProperty que receba um objeto com uma estrutura aninhada e altere uma propriedade dentro do objeto aninhado. Observe se a alteração persiste fora da função.

**Clonagem Profunda para Objetos Aninhados:** 
- Crie uma função chamada deepCloneUpdate que receba um objeto aninhado e altere uma de suas propriedades após fazer uma cópia profunda. Fora da função, verifique se o objeto original foi alterado.

**Alteração em Arrays Multidimensionais**
- Crie uma função chamada modifyMatrix que receba uma matriz (array de arrays) e altere um de seus valores internos. Verifique se a matriz original foi alterada fora da função.

# Arrow Functions
- Escreva uma arrow function chamada add que receba dois números como parâmetros e retorne a soma deles.
- Crie uma arrow function chamada greet que receba um nome como parâmetro e retorne a mensagem "Hello, [nome]!"
- Dado um array de números, use filter() e uma arrow function para retornar um novo array contendo apenas os números ímpares.

# Módulos
**Criação de Módulo Básico (CommonJS):**
- Crie um módulo em CommonJS chamado saudacao.js que exporta uma função saudar(nome), que recebe um nome e retorna uma saudação (por exemplo, "Olá, {nome}!"). Em seguida, importe esse módulo em outro arquivo e chame a função.
  
**Criação de Módulo Básico (ESM)**
- Crie um módulo em ESM chamado saudacao.mjs que exporta uma função saudar(nome) como uma export default. Importe o módulo em outro arquivo .mjs e execute a função.

**Exportação e Importação de Vários Itens (CommonJS):** 
- Crie um módulo CommonJS chamado math.js que exporta duas funções: somar(a, b) e multiplicar(a, b). Importe o módulo em outro arquivo e use ambas as funções.

**Exportação e Importação de Vários Itens (ESM):**
- Crie um módulo ESM chamado math.mjs que exporta duas funções: somar(a, b) e multiplicar(a, b) usando export nomeado. Em outro arquivo .mjs, importe as duas funções e execute-as.

**Criando e Usando um Módulo de Configuração (CommonJS):** 
- Crie um módulo config.js em CommonJS que exporte um objeto de configurações com uma chave nomeDoProjeto e um valor (por exemplo, "Meu Projeto"). Importe o módulo em app.js e exiba o valor de nomeDoProjeto.

**Criando um Módulo Utilitário com Várias Funções (ESM)** 
- Crie um módulo util.mjs que exporta múltiplas funções úteis (somaArray, maiorValor, menorValor). Importe todas as funções no app.mjs usando import * as util.

**Importação Dinâmica com ESM**
- No app.mjs, use import() para importar dinamicamente um módulo mensagem.mjs que exporta uma função exibirMensagem. A função deve ser importada e chamada quando uma condição (ex.: uma variável carregarMensagem) for true.

**Conversão de Módulos CommonJS para ESM** 
- Comece com um módulo mathCommonJS.js em CommonJS que exporta duas funções (adicionar e subtrair). Converta-o para um módulo ESM mathESM.mjs com os mesmos métodos e use import para testá-lo em um arquivo app.mjs.
  
