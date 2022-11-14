// Arrow Function
// duas maneiras de se declarar function de forma padrão, anonimamente ou não.

// Esse jeito abaixo define uma função anonima e salva ela dentro de uma variável.
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};

console.log(somar(2, 2));

// ou então, basta declarar um nome na função. O resultado é literalmente o mesmo.
function somar2(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(somar(2, 2));

// a outra maneira é com arrow function =>, que é sempre anônima. Sendo o retorno dela implicito. Ou seja, sem necessidade de RETURN.
const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2, 3));

// ou então de forma explicita. abrindo {}
const subtrair2 = (n1: number, n2: number): number => {
  return n1 - n2;
};
console.log(subtrair2(2, 3));
