// Exercício 1 - Classe

// Refatorar código abaixo
// function Moto(nome) {
//   this.nome = nome
//   this.velocidade = 0

//   this.buzinar = function() {
//       console.log('Toooooooooot!')
//   }

//   this.acelerar= function(delta) {
//       this.velocidade = this.velocidade + delta
//   }
// }

// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)

class Moto {
  constructor(public nome: string, public velocidade: number) {
    this.nome = nome;
    this.velocidade = velocidade;
  }

  public buzinar(): void {
    console.log('Toooooot!');
  }

  public acelerar(delta: number) {
    return (this.velocidade = this.velocidade + delta);
  }
}

const bike = new Moto('Kavazaki', 100);
bike.buzinar();
bike.acelerar(20);
console.log(bike.velocidade);
