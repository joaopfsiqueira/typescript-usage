// @logarClasse
// @logarClasseSe(true)
// @decorator('teste', 123)
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}

function logarClasse(construtor: Function) {
  console.log(construtor);
}

// nesse caso, o Decorator em questão é a classe eletrodomestico, que vai se transformar em uma função que será recebida em LogarClasse

new Eletrodomestico();

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decoratorVazio(_: Function) {}

function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a, b);
  };
}
