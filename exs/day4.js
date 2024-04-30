const prompt = require('prompt-sync')();

let randomNum = Math.floor(Math.random() * (10 - 0 + 1) + 0);

let question = prompt('Qual valor você deseja chutar?');

while(question != randomNum){
    question = prompt('Reposta errada! Você tem mais 2 tentativas');

    if(question != randomNum){
        question = prompt('Resposta errada! Você tem 1 tentativa');
    }

    if(question != randomNum){
        console.log(`Suas tentativas acabaram o número era: ${randomNum}.`);
    }
    break;
}

if(question == randomNum){
    console.log('Você acertou o número! Parabéns!');
}