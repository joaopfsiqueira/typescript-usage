# TypeSccript Usage

- Repositório criado para entender desde o básico ao avançado de TypeScript.
- Esse projeto consiste em criar arquivo ts, compilar para js com tsc -w e rodar o js no html, acessando os valores pelo f12 + console do navegador.
- Sendo assim, em _types_, vai existir diversos exemplos de uso com tsc.

# Sumário 📚

1 - **[O que é? ⁉️](https://github.com/joaopfsiqueira/typescript-usage#o-que-%C3%A9-typescript-%EF%B8%8F)**<br>
2 - **[Instalação 🔧](https://github.com/joaopfsiqueira/typescript-usage#instala%C3%A7%C3%A3o-)**<br>
3 - **[Iniciando 🚀](https://github.com/joaopfsiqueira/typescript-usage#iniciando-)**<br>
4 - **[Primeiros passos 👣](https://github.com/joaopfsiqueira/typescript-usage#primeiros-passos-)**<br>
5 - **[TSC com HTML 🌐](https://github.com/joaopfsiqueira/typescript-usage#tsc-com-html-)**<br>
6 - **[Diferenciais do TSC🌐](https://github.com/joaopfsiqueira/typescript-usage#diferenciais-do-tsc)**<br>
7 - **[Compilador - tsconfig.json](https://github.com/joaopfsiqueira/typescript-usage#compilador)**<br>
8 - **[ECMAScript (JS)](https://github.com/joaopfsiqueira/typescript-usage#ecmascript-js)**

# O que é TypeScript? ⁉️

- Javascript é uma linguagem de tipos dinâmicos, ou seja, você cria uma variável e nessa variável você pode ter os tipos que quiser. A diferença é que o TypeScript serve para tipar as coisas. Os tipos são inferidos. À partir do momento em que você cria uma variável em um tsc e atribui um valor a ela, o compilador vai entender que ela só pode receber aquele tipo e tornar um aviso, tenha você declarado que aquela variável é algum tipo ou não.

# Instalação 🔧

```
npm i -g typescript
tsc -v
```

- Instalando ts-node, serve para rodar ts com node!
- Isso também faz funcionar a extensão code runner em tsc!

```
npm i -g ts-node
```

# Iniciando 🚀

- Vamos rodar o comando abaixo, que vai criar o arquivo tsconfig.json!
- Esse arquivo serve para configurar o compilador do tsc.

```
tsc --init
```

# Primeiros passos 👣

- Criamos um arquivo tsc com uma variável tipo string.
- Depois acessamos a pasta onde esse arquivo foi criado e rodamos o comando:

```
tsc nomearquivo.ts
```

- Esse comando vai criar um arquivo javascript do arquivo typescript.
- Isso demonstra o processo de compilação do TypeScript. Que no arquivo tsc tipa o js.
- O problema é, toda vez que alterarmos o arquivo tsc, precisamos rodar o comando anterior para alterar o JavaScript.

```
Para contornar isso rode:

tsc -w

Vai ficar monitorando e detectando as mudanças, e vai gerar o JavaScript automaticamente.
```

# TSC com HTML 🌐

- Inicialmente, criamos um arquivo html e dentro do body colocamos script e o basico.js
- Depois, rodamos os comandos:

```
npm init -y  (para não fazer perguntas e configurar padrão)
npm i -s live-server (-s para salvar nas dependencias, vai servir para rodar o html)
```

- Depois, configuramos um script npm start para rodar "live-server", ele vai abrir no navegador!

# Diferenciais do tsc

## Classes

- Classes em typescript (ou em qualquer outra linguagem) são formas de informar o que determinada propriedade espera receber, mapeando suas propriedades e instânciando-as.

```
class Data {
  // público por padrão
  dia: number;
  mes: number;
  ano: number;

  //constructor é necessário para a criação de uma classe, ou isso ou atribuir direto um valor à propriedade.
  // ele basicamente recebe os parametros e inicializa dentro das intâncias criadas com this.
  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

// depois de criar um constructor podemos criar um objeto com a instância criada com new
const aniversario = new Data(4, 5, 2000);
console.log(aniversario.dia);
console.log(aniversario);

// como usamos parametro padrão no constructor, podemos omitir o () no new date
const casamento = new Data();
casamento.ano = 2017;
console.log(casamento);

```

### Tuplas

- Tuplas são arrays de tipo. A parte diferente é que esse array é pré-definido do inicio ao fim. Seja em quantidades de elementos dentro dele, até os tipos dos elementos.

```
let endereco: [string, number, number] = ['Av qualquer', 99, 12501300];
```

### Enum

- _Enum_ é uma forma de enumerar objetos ordenados e pré definidos. E ainda por cima usar como TIPAGEM. Sim! Criamos nosso próprio tipo! Por exemplo:

```
enum DiaSemana {
    Segunda, // 0
    Terça, // 1
    Quarta // 2
}


let dia: DiaSemana = DiaSemana.Segunda
console.log(dia)
```

- Esse código acima vai aceitar a tipagem e vai retornar no console o valor do index segunda, no caso, 0.
- Também podemos setar valores personalizados, é o intuito principal de enums!

```
enum Cor {
  Cinza, //0
  Preto = 100, //100
  Azul, // 2 // passa a ser 101
  Rosa,
  Laranja = 100, // podemos repetir os valores, o type script não limita!
}

let minhaCor: Cor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
```

### Any

- Any é uma tipagem que diz que a variável em questão aceite qualquer valor. Não faz tanto sentido usar, uma vez que setando como any acaba que retornamos ao javascript. Mas é uma forma de tipar!

```
let carro: any = 'BWM'
console.log(carro)
carro = { marca: 'BWM', ano: 2019} //Setando object no lugar da string!
```

### Arrays

- Os arrays em TSC exigem uma complexidade maior comparado ao js puro. Nada demais!
- Primeiro, precisamos tipar o nosso array, ou certo, precisamos informar o que vai dentro do nosso array!

```
let array = String[]

Ou então mais de uma forma mais explicita:

let array = [String, number, object, date]

```

- Depois, precisamos inicializar ele seja lá onde formos usar!

```
Primeiro jeito:
let array = String[] = []

Ou então dentro de uma função:

function qualquer () {
  array = [],
  array.push()
}

```

### Funções

- Em funções, podemos tipar tanto a própria função, o retorno dela e os parâmetros dela. Segue exemplos:

- Tipando função

```
function retornaMeuNome(): string {
  return nome;
  //   return minhaIdade
}
```

- Temos funções que podem não retornar nada!

```
function digaOi(): void {
  console.log('Oi');
  //return minhaIdade testando
}
```

- E temos como tipar tudo junto!

```
function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(2, 4));

```

- Podemos tipar uma variável como função!

```
//tipo função, atribuindo valor de uma função em uma outra. Colocando o mouse em cima, vemos que retorna "any"
let calculo;
calculo = digaOi;
calculo();

// ou certo, nesses exemplos, não deu nenhum erro pq está como any!
calculo = multiplicar;
console.log(calculo(5, 6));

// desse outro jeito, vamos setar uma variável com o tipo função e todo o resto!
// dessa forma, criamos uma variável e transformamos ela em uma função que vai retornar number e seus parametros.
let calculo2: (numeroA: number, numeroB: number) => number;
calculo2 = multiplicar;
// calculo2 = digaOi          -> demonstrando erro
console.log(calculo2(5, 10));
```

### never

- Tipo usado em funções que não tem um retorno atingível. Seja com laço de repetição com lançando um erro.

```
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: 'Sabão', //para testar o erro, tira o nome
  preco: -1, //coloque um valor maior que que 0 para parar o erro.
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('Precisa ter um nome');
    }
    if (this.preco <= 0) {
      falha('Preco inválido');
    }
  },
};

produto.validarProduto();

```

### union types

- Usado para declarar mais de um tipo por vez. É bom para deixar opcionais alguns campos.

```
let alturaOpcional: null | number = 12;
alturaOpcional = null;
### type

- O ts permite que criemos a nossa própria Tipagem! É bastante utilizada em casos de funções diferentes com alguma tipagem igual! (Alias)

[Exemplo]()

### union types

- Permite definir vários tipos em uma mesma função, variável ou algo do tipo.

```

//union types
let nota: number | string;

nota = 10;
console.log(`Minha nota é ${nota}`);

nota = '10';
console.log(`Minha nota é ${nota}`);

```

```

# Compilador

- Existem diversas possibilidades dentro do arquivo tsconfig.json! Nessa categoria, vamos estudar algumas!
- É altamente recomendável que as config mencionadas abaixo sejam descomentadas no arquivo tsconfig.json! São úteis.
- No arquivo **[compilador/compilador.ts](https://github.com/joaopfsiqueira/typescript-usage/blob/master/compilador/compilador.ts)**
- Eu altamente recomendo essa doc de todas as configs! **[Docs](https://www.typescriptlang.org/tsconfig)**

### noEmitOnError

- Por padrão vem false! Se estiver true, não gera arquivo js automatico pelo tsc -w caso tenha algum erro no script!

```
"noEmitOnError": true,
```

### target

- Informa qual a versão do JavaScript vai ser utilizado! Ou certo, se eu criar um arquivo Tsc na hora de transpilar para JS ele vai usar essa versão de target.
- Para ler mais sobre versões. https://www.typescriptlang.org/tsconfig#target

```
"target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
```

### source map

- Passa a gerar um arquivo .map se descomentar dentro do tsconfig.json!
- Quando você gera esse arquivo js em produção, ele é feito para ficar o menor possível. É muito dificil olhar esse aplicativo após ir para produção, ficando dificil para interpretar qual código é aquele! O source map vem para isso, ele faz um mapeando entre as linhas executadas pelo browser e as linhas do seu código! Ficando simples a depuração no sources do navegador!

```
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
```

### noImplicitAny

- Serve para avisar quando um tipo any for declarado implicitamente! Ou certo, sempre que não tipar uma variável, ele retorna um erro abaixo dela avisando sobre!
- Caso essa configuração fique false (default true) ela deixa de avisar o erro e passa a deixar o any implicito!
- Porém, esse erro só é levantado em casos onde o compilador não sabe qual o tipo da variável! Isso é, caso em nenhum momento do código esteja sendo atribuindo o valor da variável, caso seja só uma parametro enviado por uma função, por exemplo, e na hora de chamar a função passamos o valor, nesse cenário vai dar erro!

```
// "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
```

```
function test2(a, b) {
return a + b;
}

Erro!



Acerto:

x = 10
y = 5
function teste3(x, y) {
  return x + y
}

```

### strictNullChecks

- Serve para checar nulos, saber se o código está gerando algum nulo.

```
nesse exemplo abaixo, um erro está sendo gerado pq saudacao = null. Esse erro ocorre por conta da flag strictNullChecks (default true)
desativar seria uma péssima prática, quando for para retornar null é só colocar um any no retorno ou um null.

function saudar(isManha: boolean): string {
let saudacao: string;
if (isManha) {
saudacao = 'bom dia';
}
return saudacao;
}
```

### noUnusedParameters

- Parametros que não estão sendo usados. (Default true)

```
// noUnusedParameters
function saudar2(isManha: boolean, horas: number): string {
  let saudacao: string;
  if (isManha) {
    saudacao = 'Bom dia!';
  } else {
    saudacao = 'Tenha uma boa noite/tarde';
  }
  return saudacao;
}

```

- Ela vai retornar um erro no console de: horas' is declared but its value is never read. Se tornar essa config no tsconfig.json como false, ela para de reclamar!

### noUnusedLocals

- Config que valida se alguma variável com algum valor não está sendo utilizada!

```
// noUnusedLocal
function saudar3(isManha: boolean): string {
  let a = 1;
  let saudacao: string;
  if (isManha) {
    saudacao = 'Bom dia!';
  } else {
    saudacao = 'Tenha uma boa noite/tarde';
  }
  return saudacao;
}

```

- Ao ativar no noUnusedLocal, vai passar a retornar o seguinte erro no console:

```
'a' is declared but its value is never read.

let a = 1;
```

### outDir - Diretório de saída

- Configuração que define qual a basta onde vai ser criado os arquivos .js na hora da compilação do tsc.
- Por padrão vem: "outDir": "./", no meu caso, vou salvar dentro de build, é uma forma comum de se ver em projeto tsc!

```
    "outDir": "./build" /* Specify an output folder for all emitted files. */,
```

### outFile

- Ao invés de gerar vários arquivos de js, um para da tsc, existe a possibilidade de centralidar tudo em um único arquivo js com outFile!
- Essa é mais pessoal, se não gostar, recomendo deixar comentado mesmo!

```
    // "outFile": "./build/app.js",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
```

- Essa opção é incompatível com o sistema de módulo commonjs. "module": "commonjs" /_ Specify what module code is generated. _/,
- Então, caso queira utilizar a opção acima, terá de mudar o módulo para uma oopção como system.
  Mas qual é o common js? Em forma resumida! O importar é com o require e o exportar é com module.exports.

```
//commonjs
const moduloA = require('')

module.exports = {
  moduloA
}
```

# ECMAScript (JS)

- ECMAScript é basicamente uma padronização do JavaScript, padronizada pela Ecma International. Afim de que todos os navegadores ou aplicações sigam uma padronização do JavaScript.
- Não é o foco dessa documentação o entendimento do ECMAScript, falar sobre versões e novidades, mas acho válido explicar algumas coisas de JS.

### const let var

Const let e var são 3 formas de se declarar uma variável.
As principais diferenças são:

- var tem escopo global e por bloco (se declarada dentro de uma função, só é acessível nela)
- var tem efeito de hoisting. É içado ao topo do código mesmo declarado de forma global no meio do código, por exemplo.
- let = var
- const = var ou let só que não tem seu valor alterado. Retornando um erro caso isso aconteça.

### Arrow Function

- Arrow Function é uma forma de se utilizar function.
- Ela tem duas formas de ser trabalhada, com retorno implicíto ou explicíto. O implicíto não necessita de "return" já o explicíto sim.

```
const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2, 3));
```

```
const subtrair2 = (n1: number, n2: number): number => {
  return n1 - n2;
};
console.log(subtrair2(2, 3));
```

### this

- This é uma forma de retornar o próprio valor ou alguma coisa do tipo sem ter que utilizar o nome da variável onde está atribuindo o valor. Podendo ser qualquer coisa.

```
function normalComThis() {
  console.log(this);
}

const normalComThisEspecial = normalComThis.bind({nome: 'Ana'});
normalComThisEspecial();

```

### Parâmetro padrão

- Existe uma forma de dizermos ao código o valor padrão de uma propriedade para caso ela não receba nada.

```
// Parâmetros padrão
function contagemRegressiva(
  inicio: number = 5,
  fim: number = inicio - 5 //nesse caso, posso atribuir um valor padrão que seja igual a outra propriedade menos algo
): void {
  console.log(inicio);
  while (inicio >= fim) {
    inicio--;
    console.log(inicio);
  }

  console.log('Fim!');
}

contagemRegressiva(); //nesse caso, ele vai assumir o valor padrão 5 que eu atribui lá em cima.
contagemRegressiva(7); //nesse caso vai assumir o novo valor que eu to passando.
```

- Inclusive, esse valor padrão pode ser um outro parâmetro!

### Spread

- Spread Operator é um operador utilizado em arrays para instânciar e passar como parâmetro.

```
// Rest & Spread

const numbers = [1, 2, 3, 4];
console.log(Math.max(...numbers));

// mas o que o spread operator agrega? Bom, sem ele ficaria dessa forma:
console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));

// então, basicamente ele instância cada elemento do array e passa como parâmetro como da forma acima, só que vem mais clean!

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]; //pegando todos os elementos da turma A e jogando na turma B com spread.

console.log(turmaB);

```

### Rest

- Rest operator é extremamente similar ao spread, quase a mesma coisa. Mas é utilizado em conceitos de recebimento de parâmetros, enquanto o spread é utilizado para passar. Veja como o Rest pode ser utilizado:

```
// Rest

// Nesse caso abaixo, temos uma limitação, estamos recebendo apenas 2 parâmetros, se passarmos mais que isso o ts avisa o erro.
function retornarArray(arg1: number, arg2: number): number[] {
  return [arg1, arg2];
}

const numeros = retornarArray(1, 2);
// const numeros = retornarArray(1, 2, 3, 4); //descomentar para testar erro
console.log(numeros);

// nesse caso, podemos fazer um "Rest", que basicamente vai pegar todos os parâmetros recebidos e armazenar em um único lugar.
function retornarArray2(...args: number[]): number[] {
  return args;
}

//nesse caso, posso passar quantos eu quiser que não vai dar erro algum.
const numeros2 = retornarArray2(1, 2, 3, 4);
console.log(numeros2);

```

- Podemos usar spread com rest:

```
// juntando spread com rest.
// o retornar array tem um rest que vai agrupar tudo o que receber o spread é passado como parametro.
console.log(retornarArray2(...numbers));
```

- Podemos usar com Tuplas!

```
// (Tupla)
const tupla: [number, string, boolean] = [1, 'hello', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(`2) ${params}`);
}

tuplaParam2(...tupla);
```

### Destructuring

- É uma forma de desestruturar algo. Array ou Objeto

```
const caracteristicas = ['Motor Zetec 1.8', 2020];

// sem destructuring
const motor = caracteristicas[0];
const ano = caracteristicas[1];
console.log(motor, ano);

//com destructuring
const caracteristicas1 = ['Motor Zetec 2.0', 2021];
const [motor1, ano1] = caracteristicas1;
console.log(motor1, ano1);

```

- No exemplo, ele pegou o primeiro parametro e atribuiu ao motor1 e pegou o segundo parametro e atribuiu ao ano1. Se tivessemos invertido o nome das variáveis, o valor manteria. ano1 ficaria com Motor _Zetec_ e motor1 ficaria com _2021_. Então é extremamente importante que esteja na ordem correta.

- Podemos fazer destructuring com objetos também:

```
// Objetos
const item = {
  name: 'ssd',
  storageSpace: '240 gb',
  price: '2.00',
};

// sem destructuring
const nomeItem = item.name;
const storageSpace = item.storageSpace;
const price = item.price;

console.log(nomeItem, storageSpace, price);

// com destructuring

const item2 = {
  name2: 'ssd nvme',
  storageSpace2: '500 gb',
  price2: '500.00',
};

const { name2, storageSpace2, price2 } = item2;
console.log(name2, storageSpace2, price2);
```

- E ainda utilizar o alias para renomear as chaves:

```
const item3 = {
  name3: 'placa mae',
  storageSpace3: '0',
  price3: '1000.00',
};

const { name3: n, storageSpace3: sp, price3: p } = item3;
console.log(n, sp, p);
```

#### Outros exemplos de rest e spread:

```
// 5 -  Simplifique os trechos de código abaixo utilizando o operador Destructuring

// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2]
// console.log(nota1, nota2, nota3)

// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

//trecho 1 - array
const [notas1, notas2, notas3]: number[] = [8.5, 6.3, 9.4];
console.log(notas1, notas2, notas3);

// ou usando rest e spread

const [...notas]: number[] = [8.5, 6.3, 9.4];
console.log(...notas);

// trecho 2 - Objeto
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);

//ou então usando rest e spread
const { ...informacoes } = cientista;
console.log(informacoes);
```

### Template string

- Template string é um outro recurso do ECMAScript, consiste basicamente em uma forma extremamente fácil em concatenar string com variável. É criada por 2 acentos agudos. ``

```
const idade5: number = 22;
const nome5: string = 'João';

console.log(`Olá! Meu nome é ${nome}, tenho ${idade} anos.`)


//com objetos
const informacoesPessoais = {
  nome: 'Joao',
  idade: 22
}

console.log(`Olá! Meu nome é ${informacoesPessoais.nome}, tenho ${informacoesPessoais.idade} anos.`);

```

### Promise

- Promise é uma forma de esperar um valor que ainda não existe. Basicamente dizemos ao código para esperar determinado valor, já que inicialmente o valor é undefined.

```
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

```
