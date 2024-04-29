const prompt = require('prompt-sync')();

let question = prompt('Deseja adicionar uma comida na sua lista de compras?');

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

if(question === "Sim"){
    let buyListQuestion = prompt('Qual comida seria?');
    let catQuestion = prompt('Qual categoria ela se encaixa?');

    if(catQuestion === "Frutas"){
        frutas.push(buyListQuestion);
    }

    if(catQuestion === "Laticínios"){
        laticinios.push(buyListQuestion);
    }

    if(catQuestion === "Congelados"){
        congelados.push(buyListQuestion);
    }

    if(catQuestion === "Doces"){
        doces.push(buyListQuestion);
    }
}

let loopQuestion = prompt('Deseja adicionar uma comida na sua lista de compras?');

while(loopQuestion === "Sim"){
    buyListQuestion = prompt('Qual comida seria?');
    catQuestion = prompt('Qual categoria ela se encaixa?');

    if(catQuestion === "Frutas"){
        frutas.push(buyListQuestion);
    }

    if(catQuestion === "Laticinios"){
        laticinios.push(buyListQuestion);
    }

    if(catQuestion === "Congelados"){
        congelados.push(buyListQuestion);
    }

    if(catQuestion === "Doces"){
        doces.push(buyListQuestion);
    }

    loopQuestion = prompt('Deseja adicionar uma comida na sua lista de compras?');
}

if(loopQuestion === "N"){
    console.log(`\nLista de compras:\nFrutas: ${frutas};\nLaticínios: ${laticinios};\nCongelados: ${congelados};\nDoces: ${doces};\n`);
}