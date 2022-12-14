// callback

function esperar3s() {
  setTimeout(() => {
    console.log('Tempo passou!');
  }, 3000);
}

esperar3s();

// mostrando qual o problema que enfrentamos sem promises ou async. Ele vai retornar undefined.
// se usassemos promises ou async, informariamos à aplicação para esperar o retorno da função para ai sim consolar o resultado.
function esperar4s() {
  setTimeout(() => {
    return '4s depois...';
  }, 4000);
}
const resultado = esperar3s();
console.log(resultado);

//uma forma de contornar esse problema não é nem com promises ou async, mas naturalmente com callback functions.

function esperar2s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback('4s depois...');
  }, 4000);
}
esperar2s(function (resultado: string) {
  console.log(resultado);
});

// Agora com promises:
// Essa promise usa callback.
function esperar2sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('2s depois com promise ...');
    }, 2000);
  });
}

esperar2sPromise().then((dado) => console.log(dado));

// usando com fetch para consumir uma api(pode ser usado com axios, mas para não instalar nenhuma dependências vamos usar o fetch que é nativo do node.)
fetch('https://swapi.dev/api/people/1')
  .then((res) => res.json()) //pegando o json que foi retornado e ai (then) atribuimos dentor de personagem.
  .then((personagem) => personagem.films) //depois, dentro de personagem, eu quero retornar os films
  .then((films) => fetch(films[0])) // dentro de films, quero pegar o primeiro index
  .then((resFilm) => resFilm.json()) //salvo o json retornado do fetch anterior dentro de resFilm
  .then((filme) => console.log(filme.title)); //acesso o valor retornado anteriormente como filme e consolo.

// ao rodar o código, percebam que existe um delay minimo para retornar os dados da requisição, isso porque é uma api externa, mesmo que seja milissegundos ainda leva um tempo para conectar à api com http e retornar os dados da requisição, e esse tempo minimo é o suficiente para quebrar a nossa aplicação.
