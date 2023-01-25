// Singleton é usado quando você quer trabalhar com apenas instâncias sem abrir mão dos métodos estaticos ou qualquer outro..
// É extremamente similar ao abstract, mas é útilizado em situações onde deseja herdar ou receber algo de uma super classe pai.

// nesse exemplo, criamos uma classe normal e repare que criamos um atributo instance, que retorna o nome da classe e já instancia a classe! Abaixo tem o getInstance, método static que vai retornar Unico e retornar a instancia, fazendo com que não seja mais necessário instanciar a classe no código!
class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

console.log(Unico.getInstance().agora());
