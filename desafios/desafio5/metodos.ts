class Desafio5 {
  //como eu estou criando constructor já com o public, não preciso criar os atributos separados:

  /**
   * nome: string,
   * preco: string,
   * desconto: string
   * lembrando que, quando não colocamos nada na frente dos atributos, ele assume por padrão "public"
   */

  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public precoComDesconto(): number {
    return this.preco - this.desconto;
  }

  public resumo(): string {
    return `${this.nome} - ${this.preco} - ${
      this.desconto
    } Valor total: ${this.precoComDesconto()}`;
  }
}

const desafio = new Desafio5('Celular', 1000);
desafio.desconto = 100;
console.log(desafio.resumo());

const desafio2 = new Desafio5('Celular', 1000, 500);
console.log(desafio2.resumo());
