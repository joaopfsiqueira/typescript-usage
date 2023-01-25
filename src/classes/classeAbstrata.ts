// classes abstrata é uma forma de remeter à algo no mundo real.
// por exemplo, um celular é um conceito abstrato. Dentro desse conceito existe diversos modelos, propriedades, etc. Como exemplo, um iphone x, ele é um tipo de celular.

// Dentro de uma classe abstrata eu posso ter tanto métodos abstratos quanto métodos concretos.
abstract class X {
  abstract y(a: number): number;

  w(b: number): void {
    console.log(b);
  }
}

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

// nesse caso, estamos criando uma classe Soma que vai herdar os métodos e atributos da classe abstrata Calculo. Ao fazer isso, precisamos implementar os métodos abstratos da classe pai, no caso, executar.
class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((a, b) => a + b);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((a, b) => a * b);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

let c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
