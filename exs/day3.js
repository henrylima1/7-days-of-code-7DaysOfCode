const prompt = require('prompt-sync')();

let areaQuestion = prompt('Olá futuro programador! Você deseja seguir para a área de Front-End ou Back-End?\nDigite 1 para FRONT 2 para BACK.');

if(areaQuestion == 1){
    let learningQuestion = prompt('Bem vindo ao Front-End! Você deseja aprender React, ou aprender Vue?');
}

if(areaQuestion == 2){
    let learningQuestion = prompt('Bem vindo ao Back-End! Você deseja aprender C#, ou aprender Java?');
}

let fullstackQuestion = prompt('Você prefere se especializar na área escolhida ou seguir se desenvolvendo para se tornar FullStack? Caso queira se tornar um FullStack digite 1, para NÃO digite 2.');

if(fullstackQuestion == 1){
    console.log('Muito bem! Boa sorte nos seus estudos!');
} else if(fullstackQuestion == 2){
    console.log('Muito bem! Sempre busque aprender novas tecnologias e boa sorte na sua jornada!');
}

let techQuestions = prompt('Quais tecnologias você gostaria de se especializar ou conhecer?');
let techQuestionsLoop = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');

while(techQuestionsLoop === "Sim"){
    let qual = prompt('Qual?');
    techQuestionsLoop = prompt('Tem mais alguma tecnologia que você gostaria de aprender?');
}