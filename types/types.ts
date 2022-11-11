let nome: string = 'João';
console.log(nome);

// descomentar para teste:
// nome = 28;

//numbers
let idade: number = 27;
// idade = 'João';
idade = 27.5;

console.log(idade);

// bolean
let possuiHobbies: boolean = true;
// teste = 1
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: any;
minhaIdade = 22;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 22';
console.log(typeof minhaIdade);
// nesse exemplo ele não retorna nenhum erro, uma vez que não declaramos o tipo de nenhuma maneira.
// seja tipando ou atribuindo um valor padrão à variável.
// e ainda informei um "any", avisando que pode ser qualquer valor.

// aray
let hobbies: any[] = ['jogar', 'estudar', 'futebol']; // tipando informando que é um array
//e dentro do array vai ter qualquer valor, number, string
console.log(hobbies, typeof hobbies);
hobbies = [100, 200, 300]; //inserindo o valor de um array com numbers
console.log(hobbies);

// o que é tupla? array de tipos com uma linguagem pré-definidas de tipos. exemplo
// quero um array com 1 string e 2 numbers!
// tuplas
let endereco: [string, number, number] = ['Av qualquer', 99, 12501300];
console.log(endereco);

// enums
// estrutura que definimos valores pré definidos, por exemplo dia da semana, segunda, terça, quarta... e por assim vai! Com isso, vamos enumarando, ENUM, esses valores! E depois, ainda podemos usar esse enum como uma tipagem! Segue um exemplo:

enum Cor {
  Cinza, //0
  Preto = 100, //100
  Azul, // 2 // passa a ser 101
  Rosa,
  Laranja = 100, // podemos repetir os valores, o type script não limita!
}

let minhaCor: Cor = Cor.Preto; // armazenando 100
console.log(minhaCor);
console.log(Cor.Azul);

// any
let carro: any = 'BWM';
console.log(carro);
carro = { marca: 'BWM', ano: 2019 }; //Setando object no lugar da string!

//Any é uma tipagem que diz que a variável em questão aceite qualquer valor. Não faz tanto sentido usar, uma vez que setando como any acaba que retornamos ao javascript. Mas é uma forma de tipar!

//objetos de forma explicita, ou certo, no momento em que você só colocar nome e idade e atribuir valores no objeto, ele vai vai entender os tipos, porém, da forma abaixo, foi feito de forma explicita!
let usuario: { nome: string; idade: number } = {
  nome: 'João',
  idade: 22,
};
console.log(usuario);

//Formas de causar erro: Descomente e coloque o mouse em cima!
// usuario = {}

// usuario = {
//   name: 'Maria',
//   age: 23
// }

//posso atribuir valores novos, desde que esteja com o mesmo nome de chave e o mesmo tipo.
usuario = {
  nome: 'Gabriel',
  idade: 8,
};

// checando tipos em javascript

let valor = 30;

if (typeof valor === 'number') {
  console.log('É um number');
} else {
  console.log(typeof valor);
}
