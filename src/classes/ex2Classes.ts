// Exercício 2 - Herança

// implementar herança com typescript.
// var objeto2D = {
//   base: 0,
//   altura: 0
// }

// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//   return this.base * this.altura
// }
// console.log(retangulo.area())

class Objeto2D {
  constructor(public base: number, public altura: number) {
    this.base = base;
    this.altura = altura;
  }
}

class Retangulo extends Objeto2D {
  public area() {
    return this.base * this.altura;
  }
}

const medida = new Retangulo(20, 10);
medida.area();
console.log(medida.area);
