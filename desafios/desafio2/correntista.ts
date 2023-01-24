type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void; //void pq a função n retorna nada
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: 'João',
  contaBancaria: contaBancaria,
  contatos: ['1232323232'],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
