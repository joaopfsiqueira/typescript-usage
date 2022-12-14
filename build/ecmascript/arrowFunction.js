"use strict";
// Arrow Function
// duas maneiras de se declarar function de forma padrão, anonimamente ou não.
// Esse jeito abaixo define uma função anonima e salva ela dentro de uma variável.
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
// ou então, basta declarar um nome na função. O resultado é literalmente o mesmo.
function somar2(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
// a outra maneira é com arrow function =>, que é sempre anônima. Sendo o retorno dela implicito. Ou seja, sem necessidade de RETURN.
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
// ou então de forma explicita. abrindo {}
const subtrair2 = (n1, n2) => {
    return n1 - n2;
};
console.log(subtrair2(2, 3));
const saudacao = () => console.log('Olá!');
saudacao();
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('João');
// this
// function normalComThis() {
//   console.log(this);
// }
// const normalComThisEspecial = normalComThis.bind('sdsds');
// normalComThisEspecial();
// //nesse caso, com arrow, ele naturalmente retorna o this da seguinte forma:
// /**
//  *
//  * Window {window: Window, self: Window, document: document, name:
//  */
// const arrowComThis = () => console.log(this);
// arrowComThis();
//# sourceMappingURL=arrowFunction.js.map