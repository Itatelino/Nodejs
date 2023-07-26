// Imprimir na tela um texto
console.log("Olá, seja bem vindo!");

// Criar uma variável com Js
var cliente = "Neto";

// Imprimir na tela o texto e o conteúdo da variável
console.log("Cliente " + cliente);

// Criar a variável com JS
var valorProduto = 100;
var valorDesconto = 75;

// Incluir o arquivo com a função desconto
var calcularDesconto = require('./modules/calculoDesconto');

// Utiliar a função calcular desconto
var valorFinal = calcularDesconto(valorProduto, valorDesconto);

// Imprimir na tela o texto e o conteúdo da variável
console.log("Valor do produto com desconto: R$" + valorFinal);

