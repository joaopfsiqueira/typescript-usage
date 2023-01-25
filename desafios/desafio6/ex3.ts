// Exercício 3 - Getters & Setters

// Usar getter and setters de typescript para refatorar o código abaixo
// var estagiario = {
//   _primeiroNome: '',
// };

// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//     return this._primeiroNome;
//   },
//   set: function (valor) {
//     if (valor.length >= 3) {
//       this._primeiroNome = valor;
//     } else {
//       this._primeiroNome = '';
//     }
//   },
//   enumerable: true,
//   configurable: true,
// });

// console.log(estagiario.primeiroNome);
// estagiario.primeiroNome = 'Le';
// console.log(estagiario.primeiroNome);
// estagiario.primeiroNome = 'Leonardo';
// console.log(estagiario.primeiroNome);

class Estagiario {
  public _primeiroNome: string = '';

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome;
      console.log(this._primeiroNome);
      console.log(this.primeiroNome);
    } else {
      this._primeiroNome = '';
    }
  }
}

const estagiario1 = new Estagiario();
estagiario1.primeiroNome = 'João';
console.log(estagiario1);
