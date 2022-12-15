//entendendo a diferença entre os modificadores de acesso private ou public.
// private só permite o acesso ao atributo de dentro da classe, publico permite em todo o ecossistema.
class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  private alterarVelocidade(delta: number): number {
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

const carro1 = new Carro('ford', 'ka', 180);

// esse array .fill basicamente cria um array com 30 indexes, com o fill ele insere em cada um desses indexes o valor 0, depois é feito um foreach para subir cada um desses 0 com a funçção carro1.acelerar(5). Isso foi feito para me poupar de chamar a carro1.acelerar 30 vezes para aumentar a velocidade.
Array(30)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log('Velocidade atual: ' + carro1.acelerar());

Array(20)
  .fill(0)
  .forEach(() => carro1.frear());
console.log('Velocidade Atual após frear: ' + carro1.frear());

// simulando erros, basta descomentar e colocar o mouse em cima do erro.
// carro1.velocidadeAtual = 300;
// console.log(carro1.velocidadeAtual);
