// 2 Verifique se há espaço para melhorias nesse trecho de código!

// var dizerOla = function (nome) {
//   if (nome === undefined) {
//     nome = 'Pessoa';
//   }
//   console.log('Ola, ' + nome);
// };
// dizerOla();
// dizerOla('Anna');

// melhorado
const dizerOla = (nome: string = 'Pessoa'): void => {
  console.log(`Olá, ${nome}`);
};

dizerOla();
dizerOla('Anna');
