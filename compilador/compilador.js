"use strict";
let canal = 'Gaveta';
let inscritos = 6103;
// é para dar erro, uma vez que uma variável é string e a outra não
// testando "noEmitOnError": true, basta excluir o compilador.js e descomentar o erro!
// canal = inscritos;
console.log(canal);
// testando noImplicitAny
// function test2(a, b) {
//   return a + b;
// }
// nesse caso, não tem erro pq explicitamos o any. Para parar de dar o erro acima, basta deixar false o noImplicitAny
function test3(a, b) {
    return a + b;
}
// nesse exemplo abaixo, um erro está sendo gerado pq saudacao = null. Esse erro ocorre por conta da flag strictNullChecks (default true)
// desativar seria uma péssima prática, quando for para retornar null é só colocar um any no retorno ou um null.
// function saudar(isManha: boolean): string {
//   let saudacao: string;
//   if (isManha) {
//     saudacao = 'bom dia';
//   }
//   return saudacao;
// }
// código ajustado
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'bom dia';
    }
    else {
        saudacao = 'Tenha uma boa tarde / noite';
    }
    return saudacao;
}
//noUnusedParameters
// function saudar2(isManha: boolean, horas: number): string {
//   let saudacao: string;
//   if (isManha) {
//     saudacao = 'Bom dia!';
//   } else {
//     saudacao = 'Tenha uma boa noite/tarde';
//   }
//   return saudacao;
// }
// noUnusedParameters ajustado
function saudar2(isManha, horas) {
    let saudacao;
    if (isManha && horas > 12) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa noite/tarde';
    }
    return saudacao;
}
// noUnusedLocal
// function saudar3(isManha: boolean): string {
//   let a = 1;
//   let saudacao: string;
//   if (isManha) {
//     saudacao = 'Bom dia!';
//   } else {
//     saudacao = 'Tenha uma boa noite/tarde';
//   }
//   return saudacao;
// }
// noUnusedLocal ajustado
function saudar3(isManha) {
    let a = 1;
    let saudacao;
    if (isManha && a == 1) {
        saudacao = 'Bom dia!';
    }
    else {
        saudacao = 'Tenha uma boa noite/tarde';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map