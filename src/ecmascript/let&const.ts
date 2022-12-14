//let & const

let seraQuePode = '?'; // hoisting
console.log(seraQuePode);

// existe uma diferença do var pro let que é a seguinte, o var quando é definido ele tem um efeito de hoisting, basicamente ele sobe pro topo do código. é içado.
// já o let é bloqueado, ele fica onde está e pronto.

// no código abaixo é gerado um erro visto que o var tem 2 comportamentos. Ou ela é global no contexto inserido ou ele é local na função. Ou seja, a variável acao abaixo só existe dentro da função. Nesse caso, o let vai causar o mesmo
// let estaFrio = true;
// if (estaFrio) {
//   var acao = 'Colocar Casaco';
// }

let estaFrio = true;
if (estaFrio) {
  var acao = 'Colocar Casaco';
  console.log(acao);
}

// constante não pode ser alterada!
const cpf: string = '31781378231';
// cpf = '3928932932'; para testar o erro, basta descomentar o código!
// o const tbm tem um escopo de bloco! Então ou ele fica global, ou dentro de apenas um bloco, dentro de uma função!

function revelar() {
  const segredo = 'interno';
  console.log(segredo);
}

revelar();
// aqui ele retorna que não existe
// console.log(segredo);
