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
