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
//# sourceMappingURL=spread&rest.js.map