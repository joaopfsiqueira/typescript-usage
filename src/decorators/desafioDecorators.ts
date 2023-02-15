type Construtor2 = { new (...args: any[]): {} }; // corpo padrão de um construtor, espera receber um argumento com um tipo!

const usuarioLogado = {
  nome: 'João Siqueira',
  email: 'dsidoajsiod@gmail.com',
  admin: false,
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!');
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Acesso negado!');
      }
    }
  };
}
