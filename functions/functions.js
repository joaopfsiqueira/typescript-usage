"use strict";
//funções
// Sim!! Ele está pegando a variável "nome", setada no arquivo /types/type.ts! É uma das maravilhas do tsc -w
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
