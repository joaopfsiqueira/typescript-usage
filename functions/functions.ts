//funções
// Sim!! Ele está pegando a variável "nome", setada no arquivo /types/type.ts! É uma das maravilhas do tsc -w
// tipando variável, ou certo, tipando como deve ser o retorno dela!
// para testar, basta colocar um retorno com tipoo diferente.
function retornaMeuNome(): string {
  return nome;
  //   return minhaIdade
}

console.log(retornaMeuNome());
