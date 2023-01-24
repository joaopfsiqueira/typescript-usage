//funções
// Sim!! Ele está pegando a variável "nome", setada no arquivo /types/type.ts! É uma das maravilhas do tsc -w
// tipando variável, ou certo, tipando como deve ser o retorno dela!
// para testar, basta colocar um retorno com tipoo diferente.
function retornaMeuNome(): string {
  return nome;
  //   return minhaIdade
}

console.log(retornaMeuNome());

// Exemplo de função que pode não retornar nada.
function digaOi(): void {
  console.log('Oi');
  //return minhaIdade testando
}

digaOi();

// tipando função e parametros
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 4));

//outro exemplo explicitando os parametros como number e informando que a função vai retornar boolean.
const teste = function (a: number, b: number): boolean {
  if (a + b == 5) {
    return true;
  } else {
    return false;
  }
};

console.log(teste(3, 2));

//tipo função, atribuindo valor de uma função em uma outra. Colocando o mouse em cima, vemos que retorna "any"
let calculo;
calculo = digaOi;
calculo();

// ou certo, nesses exemplos, não deu nenhum erro pq está como any!
calculo = multiplicar;
console.log(calculo(5, 6));

// desse outro jeito, vamos setar uma variável com o tipo função e todo o resto!
// dessa forma, criamos uma variável e transformamos ela em uma função que vai retornar number e seus parametros.
let calculo2: (numeroA: number, numeroB: number) => number;
calculo2 = multiplicar;
// calculo2 = digaOi          -> demonstrando erro
console.log(calculo2(5, 10));

//never
// funções que não tem um ponto final do método atingivel.
// Acontece quando você lança um erro ou um laço de repetição.
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'Sabão', //para testar o erro, tira o nome
  preco: -1, //coloque um valor maior que que 0 para parar o erro.
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome');
    }
    if (this.preco <= 0) {
      falha('Preco inválido');
    }
  },
};

produto.validarProduto();
