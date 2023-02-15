function logarClasse(construtor: Function) {
  console.log(construtor);
}

// nesse caso, o Decorator em questão é a classe eletrodomestico, que vai se transformar em uma função que será recebida em LogarClasse

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decoratorVazio(_: Function) {}

function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a, b);
  };
}

type Construtor = { new (...args: any[]): {} }; // corpo padrão de um construtor, espera receber um argumento com um tipo!

// o código abaixo tem como principal função substituir o constructor da classe Eletrodomestico, usando decorators e herdando o constructor do decorator
function logarObjeto(construtor: Construtor) {
  console.log('carregado');
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('antes...');
      super(...args); // super é para pegar os argumentos que estão sendo recebidos no constructor e na função.
    }
  };
}

// new Eletrodomestico();
// new Eletrodomestico();

// @logarClasse
// @logarClasseSe(true)
// @decorator('teste', 123)
// @logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}

interface Eletrodomestico {
  imprimir?(): void;
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimivel = function () {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
