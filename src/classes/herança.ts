class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  //acelera de 5 em 5, gradativamente
  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  // freia de 5 em 5, gradativamente
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  // freia de 5 em 5, gradativamente
  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari('F40', 324);

Array(30)
  .fill(0)
  .forEach(() => f40.acelerar());
console.log('Velocidade atual: ' + f40.acelerar());

Array(20)
  .fill(0)
  .forEach(() => f40.frear());
console.log('Velocidade Atual após frear: ' + f40.frear());
