@logarClasse
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}

function logarClasse(construtor: Function) {
  console.log(construtor);
}

// nesse caso, o Decorator em questão é a classe eletrodomestico, que vai se transformar em uma função que será recebida em LogarClasse

new Eletrodomestico();
