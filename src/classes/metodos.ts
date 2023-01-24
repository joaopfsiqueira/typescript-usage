class Product {
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

  public resumo(): string {
    return `${this.nome} - ${this.preco} - ${this.desconto} Valor total: ${
      this.preco - this.desconto
    }`;
  }
}

const newProduct = new Product('Celular', 1000);
newProduct.desconto = 100;
console.log(newProduct.resumo());

const newProduct2 = new Product('Celular', 1000, 500);
console.log(newProduct2.resumo());
