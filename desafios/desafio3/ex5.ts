// 5 -  Simplifique os trechos de código abaixo utilizando o operador Destructuring

// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)

// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

//trecho 1 - array
const [notas1, notas2, notas3]: number[] = [8.5, 6.3, 9.4];
console.log(notas1, notas2, notas3);

// ou usando rest e spread

const [...notas]: number[] = [8.5, 6.3, 9.4];
console.log(...notas);

// trecho 2 - Objeto
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

//ou então usando rest e spread
const { ...informacoes } = cientista;
console.log(informacoes);
