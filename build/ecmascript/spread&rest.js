"use strict";
// Rest & Spread
const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers));
// mas o que o spread operator agrega? Bom, sem ele ficaria dessa forma:
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));
// então, basicamente ele instância cada elemento do array e passa como parâmetro como da forma acima, só que vem mais clean!
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA]; //pegando todos os elementos da turma A e jogando na turma B com spread.
console.log(turmaB);
// Rest
// Nesse caso abaixo, temos uma limitação, estamos recebendo apenas 2 parâmetros, se passarmos mais que isso o ts avisa o erro.
function retornarArray(arg1, arg2) {
    return [arg1, arg2];
}
const numeros = retornarArray(1, 2);
// const numeros = retornarArray(1, 2, 3, 4); //descomentar para testar erro
console.log(numeros);
// nesse caso, podemos fazer um "Rest", que basicamente vai pegar todos os parâmetros recebidos e armazenar em um único lugar.
function retornarArray2(...args) {
    return args;
}
//nesse caso, posso passar quantos eu quiser que não vai dar erro algum.
const numeros2 = retornarArray2(1, 2, 3, 4);
console.log(numeros2);
//# sourceMappingURL=spread&rest.js.map