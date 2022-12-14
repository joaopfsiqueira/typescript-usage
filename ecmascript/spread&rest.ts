// Spread - espalhar

const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers));

// mas o que o spread operator agrega? Bom, sem ele ficaria dessa forma:
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));

// então, basicamente ele instância cada elemento do array e passa como parâmetro como da forma acima, só que vem mais clean!

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]; //pegando todos os elementos da turma A e jogando na turma B com spread.

console.log(turmaB);

// Rest - agrupar

// Nesse caso abaixo, temos uma limitação, estamos recebendo apenas 2 parâmetros, se passarmos mais que isso o ts avisa o erro.
function retornarArray(arg1: number, arg2: number): number[] {
  return [arg1, arg2];
}

const numeros = retornarArray(1, 2);
// const numeros = retornarArray(1, 2, 3, 4); //descomentar para testar erro
console.log(numeros);

// nesse caso, podemos fazer um "Rest", que basicamente vai pegar todos os parâmetros recebidos e armazenar em um único lugar.
function retornarArray2(...args: number[]): number[] {
  return args;
}

//nesse caso, posso passar quantos eu quiser que não vai dar erro algum.
const numeros2 = retornarArray2(1, 2, 3, 4);
console.log(numeros2);

// juntando spread com rest.
// o retornar array tem um rest que vai agrupar tudo o que receber o spread é passado como parametro.
console.log(retornarArray2(...numbers));

//nesse outro caso, podemos fazer um "rest" junto de outro parâmetro, basta passar o rest no fim.
const retornarArray3 = (a: number, ...nums: number[]): number[] => {
  console.log(a); //primeiro pamametro
  console.log(nums); // resto
  return [a, ...nums];
};

const numeros3 = retornarArray3(1, 10, 11, 12);
console.log(numeros3);
