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
