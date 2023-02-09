//basicamente declaro uma função que espera receber pessoa, do tipo objeto com uma chave nome que recebe valor string.
function saudarComOla(pessoa: { nome: string }) {
  console.log(`Olá ${pessoa.nome}`);
}

function mudarNome(pessoa: { nome: string }) {
  pessoa.nome = 'Maria';
}

const pessoa = {
  nome: 'João',
  idade: '22',
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);

// ao invés de fazer da maneira acima, tipando duas vezes do mesmo jeito o recebimento de pessoas na função, podemos criar uma interface e vincular à função, obrigando ela a sempre receber algo com os mesmos valores.

interface Humano {
  nome: string;
  idade: number;
}

function saudarComOla2(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`);
}

function mudarNome2(pessoa: Humano) {
  pessoa.nome = 'Maria';
}
