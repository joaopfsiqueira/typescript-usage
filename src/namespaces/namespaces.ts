// Namespaces serve para criar um ambiente para que os nomes das suas funções ou variáveis não entrem em conflito, uma vez que costumam ficar em escopo global.
// Ou certo, em typescript não podemos criar funções ou variáveis com nomes iguais mesmo em arquivos distintos. Namespace resolve esse problema.

namespace Areas {
  const PI = 3.14;

  export function circunferencia(raio: number): number {
    return PI * Math.pow(raio, 2);
  }

  export function retangulo(base: number, altura: number): number {
    return base * altura;
  }
}

console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));

// para acessar uma função de dentro de um namespace, temos que usar o prefixo export e depois acessar dentro do nome do namespace, como o exemplo acima.
