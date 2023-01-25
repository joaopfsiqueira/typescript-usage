// Exercício 2 - Herança

// implementar herança com typescript.
// var Objeto2D2 = {
//   base: 0,
//   altura: 0
// }

// var Retangulo2 = Object.create(objeto2D)
// Retangulo2.base = 5
// Retangulo2.altura = 7
// Retangulo2.area = function() {
//   return this.base * this.altura
// }
// console.log(Retangulo2.area())

class Objeto2D2 {
  constructor(public base: number, public altura: number) {
    this.base = base;
    this.altura = altura;
  }
}

class Retangulo2 extends Objeto2D2 {
  public area() {
    return this.base * this.altura;
  }
}

const medida2 = new Retangulo2(20, 10);
console.log(medida2.area());
