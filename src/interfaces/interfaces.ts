//basicamente declaro uma função que espera receber pessoa, do tipo objeto com uma chave nome que recebe valor string.
function saudarComOla(pessoa: { nome: string }) {
  console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: { nome: string }) {
  pessoa.nome = 'Maria';
}

const pessoa: Humano = {
  nome: 'João',
  idade: 22,
  saudar(sobrenome: string) {
    console.log(`Olá ${this.nome} ${sobrenome}`);
  },
};

// saudarComOla(pessoa);
// mudarNome(pessoa);
// saudarComOla(pessoa);

// ao invés de fazer da maneira acima, tipando duas vezes do mesmo jeito o recebimento de pessoas na função, podemos criar uma interface e vincular à função, obrigando ela a sempre receber algo com os mesmos valores.

interface Humano {
  nome: string;
  idade?: number; //o "?" diz que ele pode ou não receber esse atributo, tornando opicional.
  [prop: string]: any; //colocar entre colchetes []:any diz que vai receber um terceiro atributo, só não sabemos o nome desse atributo!
  saudar(sobrenome: string): void;
}

function saudarComOla2(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`);
}

function mudarNome2(pessoa: Humano) {
  pessoa.nome = pessoa.nome;
}

// saudarComOla2({ nome: 'João', idade: 22, xdfsidjsi: true });
// mudarNome2({ nome: 'Gabriel' });

pessoa.saudar('Siqueira');

// Usando Classes... (sem construtor)

class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(`Olá ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Gabriel';
saudarComOla(meuCliente);
meuCliente.saudar('Siqueira');
console.log(meuCliente.ultimaCompra);

// Interface função
// essa interface representa uma FUNÇÃO. recebe dois parametros do tipo number e um retorno do tipo number.
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(3, 10));

// interface e herança

interface A {
  a(): void;
}

interface B {
  b(): void;
}

// essa interface ABC  tem os metodos da A e da B e ainda acrescentou um método novo.
interface ABC extends A, B {
  c(): void;
}

// a principal diferença do implements é a necessidade de criar um corpo para o método. {}
class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}
