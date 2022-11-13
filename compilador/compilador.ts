let canal: string = 'Gaveta';
let inscritos: number = 6103;

// é para dar erro, uma vez que uma variável é string e a outra não
// testando "noEmitOnError": true, basta excluir o compilador.js e descomentar o erro!
// canal = inscritos;

console.log(canal);

// testando noImplicitAny
function test2(a, b) {
  return a + b;
}

// nesse caso, não tem erro pq explicitamos o any. Para parar de dar o erro acima, basta deixar false o noImplicitAny
function test3(a: any, b: any) {
  return a + b;
}
