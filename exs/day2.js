const prompt = require('prompt-sync')();

let name = prompt('Qual o seu nome?');
let age = prompt('Quantos anos você tem?');
let progLanguage = prompt('Qual linguagem de programação você está estudando?');

console.log(`Olá, ${name}, você tem ${age} anos e já está aprendendo ${progLanguage}!`);

let question = prompt(`Você gosta de estudar ${progLanguage}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if(question == 1){
    console.log('Muito bom! Continue estudando e você terá muito sucesso.');
} else if(question == 2){
    console.log('Ahh que pena... Já tentou aprender outras linguagens?');
}