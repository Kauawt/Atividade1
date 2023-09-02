// npm i prompt-sync
// package.json = "type":"module"
// import PromptSync from "prompt-sync"
// const prompt = PromptSync()
// const valor = Number(prompt('Digite o valor'))

import PromptSync from "prompt-sync"

const a = 10

if(a == 10){
    console.log('Entrou no if')
} else if(a >= 10){
    console.log('a < 10')
} else {
    console.log('Entrou no else')
}

const dia = "segunda"
switch(dia){
    case "segunda":
        console.log('começo da semana')
        break;
    case "sexta":
        console.log('final da semana')
        break;
    case "sabado":
    case "domingo":
        console.log('final de semana')
        break;
    default:
        console.log('meio da semana')
        break;
}

const idade = 19
const podeBeber = idade > 18 ? true : false

const maiorIdade = true
const possuiCarteiraTrabalho = true
const atendeRequisitos = maiorIdade && possuiCarteiraTrabalho // AND

const atendeParcialmenteRequisitos = maiorIdade || possuiCarteiraTrabalho // OR

for (let index = 0; index < 10; index++) {
    console.log(index)
}

let peso = 100
while(peso > 0.8){
    peso = peso * 0.8
    console.log(peso)
}


