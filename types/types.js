"use strict";
let nome = 'João';
console.log(nome);
// descomentar para teste:
// nome = 28;
//numbers
let idade = 27;
// idade = 'João';
idade = 27.5;
console.log(idade);
// bolean
let possuiHobbies = true;
// teste = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 22;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 22';
console.log(typeof minhaIdade);
// nesse exemplo ele não retorna nenhum erro, uma vez que não declaramos o tipo de nenhuma maneira.
// seja tipando ou atribuindo um valor padrão à variável.
// e ainda informei um "any", avisando que pode ser qualquer valor.
// aray
let hobbies = ['jogar', 'estudar', 'futebol']; // tipando informando que é um array
//e dentro do array vai ter qualquer valor, number, string
console.log(hobbies, typeof hobbies);
hobbies = [100, 200, 300]; //inserindo o valor de um array com numbers
console.log(hobbies);
// o que é tupla? array de tipos com uma linguagem pré-definidas de tipos. exemplo
// quero um array com 1 string e 2 numbers!
// tuplas
let endereco = ['Av qualquer', 99, 12501300];
console.log(endereco);
// enums
// estrutura que definimos valores pré definidos, por exemplo dia da semana, segunda, terça, quarta... e por assim vai! Com isso, vamos enumarando, ENUM, esses valores! E depois, ainda podemos usar esse enum como uma tipagem! Segue um exemplo:
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Preto"] = 100] = "Preto";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Rosa"] = 102] = "Rosa";
    Cor[Cor["Laranja"] = 100] = "Laranja";
})(Cor || (Cor = {}));
let minhaCor = Cor.Preto; // armazenando 100
console.log(minhaCor);
console.log(Cor.Azul);
// any
let carro = 'BWM';
console.log(carro);
carro = { marca: 'BWM', ano: 2019 }; //Setando object no lugar da string!
//Any é uma tipagem que diz que a variável em questão aceite qualquer valor. Não faz tanto sentido usar, uma vez que setando como any acaba que retornamos ao javascript. Mas é uma forma de tipar!
//objetos de forma explicita, ou certo, no momento em que você só colocar nome e idade e atribuir valores no objeto, ele vai vai entender os tipos, porém, da forma abaixo, foi feito de forma explicita!
let usuario = {
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
}
else {
    console.log(typeof valor);
}
