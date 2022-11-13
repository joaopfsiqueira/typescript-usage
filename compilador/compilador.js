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
//# sourceMappingURL=compilador.js.map