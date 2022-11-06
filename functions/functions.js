"use strict";
//funções
// Sim!! Ele está pegando a variável "nome", setada no arquivo /types/type.ts! É uma das maravilhas do tsc -w
// tipando variável, ou certo, tipando como deve ser o retorno dela!
// para testar, basta colocar um retorno com tipoo diferente.
function retornaMeuNome() {
    return nome;
    //   return minhaIdade
}
console.log(retornaMeuNome());
// Exemplo de função que pode não retornar nada.
function digaOi() {
    console.log('Oi');
    //return minhaIdade testando
}
digaOi();
// tipando função e parametros
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
//outro exemplo explicitando os parametros como number e informando que a função vai retornar boolean.
const teste = function (a, b) {
    if (a + b == 5) {
        return true;
    }
    else {
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
let calculo2;
calculo2 = multiplicar;
// calculo2 = digaOi          -> demonstrando erro
console.log(calculo2(5, 10));
