// callback

function esperar3s() {
  setTimeout(() => {
    console.log('Tempo passou!');
  }, 3000);
}

esperar3s();

// mostrando qual o problema que enfrentamos sem promises ou async. Ele vai retornar undefined.
// se usassemos promises ou async, informariamos à aplicação para esperar o retorno da função para ai sim consolar o resultado.
function esperar4s() {
  setTimeout(() => {
    return '4s depois...';
  }, 4000);
}
const resultado = esperar3s();
console.log(resultado);

//uma forma de contornar esse problema não é nem com promises ou async, mas naturalmente com callback functions.

function esperar2s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('4s depois...');
  }, 4000);
}
esperar2s(function (resultado: string) {
  console.log(resultado);
});
