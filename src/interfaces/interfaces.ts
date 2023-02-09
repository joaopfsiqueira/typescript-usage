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
