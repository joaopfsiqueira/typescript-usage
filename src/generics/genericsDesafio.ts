//o desafio consiste basicamente em criar uma fila com pessoas, um método para adicionar pessoas dentro, um método para fazer avançar a fila e um método para imprimir.

class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T) {
    this.fila.push(elemento);
  }

  proximo(): T | null {
    //se a fila for maior ou igual a 0, ele executa, se não ele retorna null!
    if (this.fila.length >= 0) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>('João', 'Pedro', 'Siqueira');
fila.imprimir();
fila.entrar('Gabriel');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
