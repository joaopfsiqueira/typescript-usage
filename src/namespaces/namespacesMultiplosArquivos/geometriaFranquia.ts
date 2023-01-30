namespace McDonalds {
  export namespace Loja {
    const valor = 1900000;

    export function adquirir(quantidade: number) {
      return valor * Math.pow(quantidade, 2);
    }
  }
}
