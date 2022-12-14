//Abaixo temos um código JS, traduza-o para ts:

// JS
// var dobro = function(valor) {
//   return valor * 2
//   }
//   console.log(dobro(10))

// TS
const dobro = (valor: number): number => {
  return valor * 2;
};
console.log(dobro(10));
