type Pessoa = {
  nome: string;
  idade: number;
  endereco: string[];
  cpf: string;
  dataNascimento: Date;
};

//inicializando array
let arrayPessoa: Object[] = [];

function criaPessoa(pessoa: Pessoa): any {
  arrayPessoa.push(pessoa);
  return console.log(arrayPessoa);
}

criaPessoa({
  nome: 'João',
  idade: 22,
  endereco: ['Rua Fulano', '999', 'Cruzeiro', 'SP'],
  cpf: '3283278323827',
  dataNascimento: new Date(),
});
