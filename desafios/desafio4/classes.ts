class Produto {
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
}

const novoProduto = new Produto('Celular', 1000);
console.log(novoProduto);
const novoProduto2 = new Produto('Celular', 1000, 3000);
console.log(novoProduto2);
