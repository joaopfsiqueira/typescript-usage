// Métodos estáticos são uma forma de utilizar classes e métodos sem precisar instanciar.

class Matematica {
  PI: number = 3.1416;

  areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCirc(3));

// Basicamente, do jeito acima, utilizei o método normal, sem ser estático. Onde precisamos INSTANCIAR
// uma classe (Matematica) para poder acessar suas propriedades e métodos.

// da forma estatica:

class MatematicaEstatica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log(MatematicaEstatica.areaCirc(4));
