// Exercício 3 - Getters & Setters
var estagiario = {
  _primeiroNome: '',
};

Object.defineProperty(estagiario, 'primeiroNome', {
  get: function () {
    return this._primeiroNome;
  },
  set: function (valor) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
      this._primeiroNome = '';
    }
  },
  enumerable: true,
  configurable: true,
});

console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
