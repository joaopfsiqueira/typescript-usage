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

class ContaCorrente {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(1000);
cc.sacar(100);
console.log(cc.getSaldo());

cc.getSaldo = function () {
  return this['saldo'] + 700; //usamos notação de string em saldo ao inves de this.saldo por conta do atributo ser privado.
};

console.log(cc.getSaldo());

// Object.freeze() Esse código basicamente vai congelar o valor de um dado, não permitindo que um primeiro retorno de um método não seja alterado. É uma função nativa do javascript, esperando receber um alvo, nome da propriedade e o descritor da propriedade, o descritor é o que pode ou não fazer com esse alvo. Usamos o método writrable que é a propriedade que queremos alterar desse retorno e colocamos como false.
function congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}
