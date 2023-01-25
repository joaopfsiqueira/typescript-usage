// É possível criar atributos que só ficam para leitura. Para isso, basta usar o modificador readonly.

class Aviao {
  public readonly modelo: string; // propriedade

  constructor(modelo: string, public readonly prefixo: string) {
    // é possível usar readonly em uma sintaxe com menos código, colocando as propriedades direto no constructor como "prefixo".
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao('TU-114', 'PT-ABC');
turboHelice.modelo = 'PT-115';
turboHelice.prefixo = 'PT-116';
console.log(turboHelice);

// Nesse exemplo é possível entender o readonly. Instanciamos avião e atribuimos nas propriedades modelo e prefixo os valores e depois tentamos alterar e não foi possível!
