const prompt = require('prompt-sync')();

let int = Number(prompt('Escolha a operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n5. Sair'));

function soma (firstValue, secondValue, sum){
    firstValue = Number(prompt('Digite o primeiro valor:'));
    secondValue = Number(prompt('Digite o segundo valor:'));

    sum = firstValue + secondValue;
    console.log(sum);
}

function subtracao (firstValue, secondValue, sub){
    firstValue = Number(prompt('Digite o primeiro valor:'));
    secondValue = Number(prompt('Digite o segundo valor:'));

    sub = firstValue - secondValue;

    console.log(`O resultado é ${sub}`);
}

function multiplicacao (firstValue, secondValue, multi){
    firstValue = Number(prompt('Digite o primeiro valor:'));
    secondValue = Number(prompt('Digite o segundo valor:'));

    multi = firstValue * secondValue;

    console.log(`O resultado é ${multi}`);
}

function divisao (firstValue, secondValue, div){
    firstValue = Number(prompt('Digite o primeiro valor:'));
    secondValue = Number(prompt('Digite o segundo valor:'));

    div = firstValue / secondValue;

    console.log(`O resultado é ${div}`);
}

switch(int){
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisao();
        break;
    case 5:
        console.log('Até a próxima');
        break;
}