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

- TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.

- Dito isso, nesse tópico vamos ver um pouco sobre novidades que o TypeScript fornece mas também vamos ver um pouco sobre alguns pontos já vistos em POO(programação orientada a objeto). Como por exemplo Modificadores de acesso, classes, constructor, herança...

## Modificadores de Acesso

- Modificadores de acesso definem se determinado atributo ou método de uma classe é visível para fora ou não. Essa definição é realizada através do _Private_ e do _Public_ (default). Se for private, apenas a classe onde tem declarado o atributo poderá mexer no atributo.

- Dito isso, e se quisermos acessar ou alterar um atributo private? Deve-se criar um método PUBLICO dentro da classe onde se encontra o atributo private. Serve igualmente para um método _private_, caso seja necessário utilizar um método private basta criar um método public para acessar.

- Não podemos esquecer do _protected_, ele é utilizado quando há necessidade de herença privada. Na herança, vamos poder acessar os métodos e atributos de uma classe e reutilizar, mas não podemos alterar a não ser que esses métodos e atributos estejam como protected. Esse protected protege os métodos e atributos da classe que está sendo herdada para que não seja alterado em outros códigos ou até mesmo nela mesma e deixa classe que está herdando (extendendo) fazer do seu jeito sem que afete outros cantos do código.

- _Public_ é transmito por herança e é aberto no código todo.
- _Private_ não é aberto ao código todo nem transmitido para a herança.
- _Protected_ não é aberto ao código todo e é transmitido para a herança.

## Constructor

- O construtor é um método especial para criar e inicializar um objeto com vários métodos e variáveis criados à partir (ou só recebido) de uma classe. Ele pode ser declarado de várias maneiras, mas sempre dentro de uma classe. Alguns jeitos:

1. Assumindo valor padrão. Usando this para referenciar o atributo declarado anteriormente dentro da classe.

```
class Data{
  dia: number;
  mes: number;
  ano: number;

constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}
```

2. Valor padrão e sem precisar do this visto que declaramos os atributos dentro do próprio constructor. (Melhor maneira, menos código e com um valor padrão)

```
classe Data {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}`
}
```

- Depois, para inicializar o objeto, basta usarmos o `new nomeClasse`

```
const aniversario = new Data(4, 5, 2000);
```

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

## Métodos

- Métodos podem ser comparados com função. Eles ficam dentro das classes, e podem fazer algum tipo de trativa com os atributos do objeto da classe. Métodos são chamados e utilizados da seguinte forma:

```
class Product {
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

  public resumo(): string {
    return `${this.nome} - ${this.preco} - ${this.desconto} Valor total: ${
      this.preco - this.desconto
    }`;
  }
}

const newProduct = new Product('Celular', 1000);
newProduct.desconto = 100;
console.log(newProduct.resumo());

const newProduct2 = new Product('Celular', 1000, 500);
console.log(newProduct2.resumo());

```

## Extends (herança)

- Herança é um dos pilares da POO, junto de abstração, encapsulamento e polimorfismo. _Herança_ é o que é. Uma classe herda da outra literalmente tudo, métodos, atributos... Para realizarmos essa herança, precisamos usar o `extends`.

- No código abaixo eu tenho uma classe Carro com alguns métodos e atributos.

```
class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  private alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  //acelera de 5 em 5, gradativamente
  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  // freia de 5 em 5, gradativamente
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}
```

- E abaixo eu tenho uma classe Ferrari, que extende a Carro, tendo a disposição tudo o que contém no carro para uso.

```
class Ferrari extends Carro {

}
```

- Nesse exemplo acima, precisa estar no mesmo arquivo. Mas, se exportarmos a class com export default e importamos em outro arquivos, podemos usar à vontade!

- Um outro ponto, no exemplo acima ele só consegue herdar e reutilizar, não conseguindo ALTERAR um método ou propriedade, visto que não estão com o modificador de acesso _protected_. (explicado na seção de modificadores de acesso)

- Outro ponto importante é, e se quisermos alterar a inicialização de algum atributo dentro de um objeto? No caso, alterar algo de dentro de um constructor? Fazemos da seguinte maneira utilizando `Super`

```
class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(20);
  }

  // freia de 5 em 5, gradativamente
  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}
```

- Nesse caso, estamos tornando fixo o primeiro parâmetro de "Carro", que no caso é a _marca_, uma vez que já sabemos que a marca é ferrari, e esperamos receber apenas o _modelo_ e a _velocidadeMaxima_. (é necessário).

## Getters e Setters

- São funções de get (pegar) e set(setar) algum atributo, originalmente criado em _POO_. Ok, mas para que serve esse get e set se podemos fazer ambas as ações sem necessariamente explicitamente usar as funções get e set? Os benefícios que o get e set nos trazem é uma validação de valor do atributo. Podemos deixar nossos atributos private e setar os valores apenas se algo for verdadeiro, como no exemplo abaixo.

- Embora sejam declaros parecidos com métodos, nós acessamos como atributos:

```
class Person {
  // precisa do underline _ antes do idade para não dar conflito no get e no set pelo nome. É muito usado em privates
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(value: number) {
    if (value >= 0 && value < 120) {
      this._idade = value;
    }
  }
}

const person1 = new Person();
person1.idade = 22; //usando o set

console.log(person1.idade); // usando o get.

```

### Classes Estáticas

- Métodos estáticos são uma forma de utilizar classes e métodos sem precisar instanciar.

O melhor jeito de entender é ver o jeito sem o prefixo `static` e com o prefixo.

-Basicamente, do jeito abaixo, utilizei o método normal, sem ser estático. Onde precisamos INSTANCIAR uma classe (Matematica) para poder acessar suas propriedades e métodos.

```
class Matematica {
  PI: number = 3.1416;

  areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCirc(3));
```

- Da forma _estática_:

```
class MatematicaEstatica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log(MatematicaEstatica.areaCirc(4));
```

### Classe Abstrata

- Classes abstrata é uma forma de remeter à algo no mundo real. Por exemplo, um celular é um conceito abstrato. Dentro desse conceito existe diversos modelos, propriedades, etc. Como exemplo, um iphone x, ele é um tipo de celular. Esse conceito vem da programação orientada à objetos.

Usamos o prefixo `abstract` para criar uma classe abstrata. _Não é possível instanciar classes abstratas._ Dito isso, a única função é reaproveitamento de código, vai servir para herdar para outras classes. Você não quer instanciar classes abstratas, e sim seus "filhos" (classes abaixo)

Dentro de uma classe abstratas pode ter tanto métodos abstratos quanto métodos concretos.

```
abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

// nesse caso, estamos criando uma classe Soma que vai herdar os métodos e atributos da classe abstrata Calculo. Ao fazer isso, precisamos implementar os métodos abstratos da classe pai, no caso, executar.
class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((a, b) => a + b); // usamos o reduce para pegar todos os valores de dentro do array de números.
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((a, b) => a * b);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

let c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
```

### Singleton

- Singleton é usado quando você quer trabalhar com apenas instâncias sem abrir mão dos métodos estaticos ou qualquer outro... É extremamente similar ao abstract, mas é útilizado em situações onde deseja herdar ou receber algo de uma super classe pai.

Nesse exemplo, criamos uma classe normal e repare que criamos um atributo instance, que retorna o nome da classe e já instancia a classe! Abaixo tem o getInstance, método static que vai retornar Unico e retornar a instancia, fazendo com que não seja mais necessário instanciar a classe no código!

```
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
```

### readonly

- `readonly` é usado como modificador de atributos, quando queremos que determinado atributo tenha apenas um valor desde o ínicio, sem deixar modificar o seu valor.

```
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

```
//union types
let nota: number | string;

nota = 10;
console.log(`Minha nota é ${nota}`);

nota = '10';
console.log(`Minha nota é ${nota}`);

ou

let nota2: number & string;


```

# Namespaces

- Os namespaces servem para criar um ambiente para que os nomes das suas funções ou variáveis não entrem em conflito, uma vez que costumam ficar em escopo global. Ou certo, em typescript não podemos criar funções ou variáveis com nomes iguais mesmo em arquivos distintos. Namespace resolve esse problema.

```

namespace Areas {
const PI = 3.14;

export function circunferencia(raio: number): number {
return PI \* Math.pow(raio, 2);
}

export function retangulo(base: number, altura: number): number {
return base \* altura;
}
}

console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));

```

- Para acessar uma função de dentro de um namespace, temos que usar o prefixo export e depois acessar dentro do nome do namespace, como o exemplo acima.

## Namespaces aninhados

- Podemos criar um namespace dentro de um namespace com namespace aninhado. (devemos exportar o namespace interno para poder acessar suas funções)

```

namespace Geometria {
export namespace Area {
const PI = 3.14;

    export function circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }

    export function retangulo(base: number, altura: number): number {
      return base * altura;
    }

}
}
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));

```

## Namespaces em múltiplos arquivos.

- Podemos separar um namespace por vários arquivos a titulo de organização.

Veja o exemplo:

- Arquivo 1

```

namespace McDonalds {
export namespace Loja {
const valor = 1900000;

    export function adquirir(quantidade: number) {
      return valor * Math.pow(quantidade, 2);
    }

}
}

```

- Arquivo 2

```

namespace McDonalds {
export namespace Loja {
const valor = 20000;

    export function vender(): string {
      return `compre a loja por ${valor}`;
    }

}
}

```

- Arquivo Principal

```

const quantidade = 2;

console.log(McDonalds.Loja.adquirir(quantidade));
console.log(McDonalds.Loja.vender());

```

# Módulos

- _Módulos_ são uma forma de exportar e importar funções, métodos e variáveis de um arquivo em outro. Para isso, usamos os prefixos `export` e o `import from`.

- No arquivo que vai exportar:

```

const PI = 3.14;

export function areaCircunferencial(raio: number): number {
return raio _ raio _ PI;
}

```

- Arquivo que vai receber:

```

import { areaCircunferencial } from './circunferencia';
ou
import { areaCircunferencial as circ } from './circunferencia';

console.log(areaCircunferencial(5));
console.log(circule(5));

```

- Nas versões novas do ecmascript, podemos usar `export default` fazendo com que não seja necessário desestruturar dentro do import.

```

const PI = 3.14;

export default function areaCircunferencial(raio: number): number {
return raio _ raio _ PI;
}

```

```

import areaCircunferencial as circ from './circunferencia';

```

## module

- Dentro do arquivo tsconfig.json, existe uma propriedade `module` que por padrão recebe `commonjs`, essa propriedade define como o ts vai interpretar os modulos, sendo o es2021, es6, entre outros, algumas das opções utilizadas.

# Resumo entre Namespaces e Módulos.

Namespaces

- Organização feita com objetos
- Pode ser separado em vários arquivos
- Não há necessidade de loaders
- Fugir do escopo global com nomes de variáveis, colocando em namespace diferentes
  <br><br>
  Módulos
- Organização feita com módulos reais
- App pode ter múltiplos módulos
- Precisa de um loader (se quiser colocar em um browser, como SystemJS)
- Declaração explícita de uma dependência

# Interfaces

- Interfaces são maneiras de especificar detalhadamente o que espera de uma função, seja a receber ou retornar.

Ao invés de fazer da seguinte maneira:

```

const pessoa = {
  nome: 'João',
  idade: '22'
}

function recebePessoa(pessoa: { nome: string}) {
  console.log(pessoa.nome)
}

function mudaPessoa(pessoa: {nome: string}) {
  pessoa.nome = 'Maria'
}

```

Podemos fazer:

```
interface Humano {
  nome: string;
  idade?: number; //o "?" diz que ele pode ou não receber esse atributo, tornando opicional.
  [prop: string]: any; //colocar entre colchetes []:any diz que vai receber um terceiro atributo, só não sabemos o nome desse atributo!
}

function saudarComOla2(pessoa: Humano) {
  console.log(`Olá ${pessoa.nome}`);
}

function mudarNome2(pessoa: Humano) {
  pessoa.nome = pessoa.nome;
}

saudarComOla2({ nome: 'João', idade: 22, xdfsidjsi: true });
mudarNome2({ nome: 'Gabriel' });

```

Basicamente, criamos uma interface humano, que vai vai explicitar e forçar o recebimento de nome e idade nas duas funções dentro de um objeto. Caso contrário, vai apontar um erro e quebrar o código (dependendo da configuração no tsconfig.)

## interfaces e métodos

- podemos definir um método dentro de uma propriedade! Deixando a interface assim:

```
interface Humano {
  nome: string;
  idade?: number; //o "?" diz que ele pode ou não receber esse atributo, tornando opicional.
  [prop: string]: any; //colocar entre colchetes []:any diz que vai receber um terceiro atributo, só não sabemos o nome desse atributo!
  saudar(sobrenome: string): void
}

const pessoa: Humano = {
  nome: 'João',
  idade: 22,
  saudar(sobrenome: string) {
    console.log(`Olá ${this.nome} ${sobrenome}`);
  },
};

pessoa.saudar('Siqueira');
```

## interfaces e classes

- Podemos usar uma interface dentro de uma classe! Podendo até mesmo implementar a interface, criando uma outra propriedade!

```
// Usando Classes... (sem construtor)

class Cliente implements Humano {
  nome: string = '';
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(`Olá ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Gabriel';
saudarComOla(meuCliente);
meuCliente.saudar('Siqueira');
console.log(meuCliente.ultimaCompra);
```

## interfaces e funções

- Podemos utilizar interfaces dentro de uma função!

```
// Interface função
// essa interface representa uma FUNÇÃO. recebe dois parametros do tipo number e um retorno do tipo number.
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(3, 10));

```

## Herança com interfaces.

- É possível utilizar herança nas interfaces. Da mesma forma que classe com clase usa o prefixo `extends`, interface para interface é a mesma coisa. Em caso de classe para interface, é utilizado o `implements`.

```
interface A {
  a(): void;
}

interface B {
  b(): void;
}

// essa interface ABC  tem os metodos da A e da B e ainda acrescentou um método novo.
interface ABC extends A, B {
  c(): void;
}
```

- Class para interface:

```
// a principal diferença do implements é a necessidade de criar um corpo para o método. {}
class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}
```

- Classes abstratas com interface.

```
// em classes abstratas, devemos criar os metodos da a e b.
abstract class AbstractABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

```

## Interface com objetos.

- Podemos criar interfaces de objetos com o `prototype`.

```
// interfaces com objetos
const x = 2;
const y = 3;
const z = 4;

Object.prototype.log = function () {
  console.log(this.toString());
};

x.log();

const cli = { nome: 'Pedro' };
cli.log();

```

# Generics

- Generics se refere à tipagem genérica, algo que espera algo genérico, qualquer coisa, algo não específicado, pode receber qualquer tipo de valor.

- Usando generics, precisamos colocar <> e um nome qualquer dentro, depois atribuimos esse tipo em algum lugar.

```
function echoMelhorado<type>(objeto: type): type {
  return objeto;
}

```

- A magia da coisa está na hora de chamar essa função. Por ser um tipo genério ela vai aceitar qualquer coisa, mas vai tratar erros como na segunda linha, número não tem a propriedade length, retornando um erro.

```
console.log(echoMelhorado('João'));
// console.log(echoMelhorado(1).length);
console.log(echoMelhorado({ nome: 'João' }));
console.log(echoMelhorado('João').length);
```

- A melhor parte é explicítar em diversas chamadas tipos diferentes, como abaixo, é uma maneira de você deixar `any` e ao mesmo tempo deixar explicíto o tipo.

```
console.log(echoMelhorado<String>('João'));
console.log(echoMelhorado<number>(1));
```

## Generics com array

- Podemos utilizar o generics em um array! Essa parte em array é bastante simples. usamos o `<>`(Generics) ao lado da declaração de array. Dito isso, o `Array` é genérico, usamos o `<>` para podermos especificar o que queremos!

```
const avaliacoes: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
avaliacoes.push(8.4);
avaliacoes.push('5.5'); //vai dar erro
```

- No caso acima, criamos um Array e depois especificamos que dentro dele só vai ter tipos number, é muito comum essa utilização.

- No caso abaixo, aprofundamos em array.

```
function imprimir<Tipo>(args: Tipo[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['1', '2', '3']);
imprimir<{ nome: string; idade: number }>([{ nome: 'João', idade: 1 }]);
```

## Generics com funções e tipos

- Podemos usar `Type` com genério, e depois atribuir em um função!

```
// Tipo genérico
type Echo = <Tipo>(data: Tipo) => Tipo;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<String>('Hello World'));

```

## Generics com classes

- Podemos associar generics com classes! Primeiro fazer o exemplo sem generics e mostrar como o generics pode melhorar!

Assim é uma classe sem generics

```
class OperacaoBinaria {
  constructor(public operando1: any, public operando2: any) {}

  executar() {
    return this.operando1 + this.operando2;
  }
}

console.log(new OperacaoBinaria('Bom ', 'dia').executar());
console.log(new OperacaoBinaria(3, 7).executar());
console.log(new OperacaoBinaria(4, 'opa').executar());
console.log(new OperacaoBinaria({}, {}).executar());

```

- No exemplo com generics, criamos uma classe abstrata que vai ficar responsável por tipar tudo usando o `<>` do generics, e depois criamos uma outra classe que vai ficar responsável por executar tudo, extendendo a primeira classe.

```
abstract class OperacaoBinariaGenerics<Tipo, Tipo2> {
  constructor(public operando1: Tipo, public operando2: Tipo) {}

  abstract executar(): Tipo2;
}

class SomaBinaria extends OperacaoBinariaGenerics<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new SomaBinaria(3, 7).executar());
```

Mais um exemplo!

```
class DiferencaEntreDatas extends OperacaoBinariaGenerics<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data;
    return new Date(`${dia} /${mes}/ ${ano}`).getTime();
  }

  executar(): string {
    const t1 = this.getTime(this.operando1);
    const t2 = this.getTime(this.operando2);
    const diferenca = Math.abs(t1 - t2);
    const dia = 1000 * 60 * 60 * 24;

    return `${Math.ceil(diferenca / dia)}dias`;
  }
}

const d1 = new Data(1, 2, 2023);
const d2 = new Data(2, 2, 2023);
console.log(new DiferencaEntreDatas(d1, d2).executar);

```

## Constraints em generics

- Constraints é uma forma de restringir alguns tipos ao generics. Para isso, basta utilizarmos `extends` dentro da `<>`!

```
class Fila<T extends string> {}
```

# Decorators

- Decorator é uma função chamada com a sintaxe `@`. É um pouco confuso, fica mais claro com os exemplos!
- Antes de tudo, precisamos ir no arquivo _tsconfig.json_ e pesquisar por _experimentalDecorators_. Esse recurso vai estar comentado, descomente! Decorators é um recurso experimental, precisamos habilitar essa função para que não aja erro na compilação do ts.

- No código abaixo, criamos uma classe Eletrodoméstico, essa classe vai virar uma Função, se tornando um _decorator_ para _logarClasse_. É através do `@logarClasse` que informamos que essa classe é o `construtor: function` esperado pela _logarClasse_.

```
@logarClasse
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}

function logarClasse(construtor: Function) {
  console.log(construtor);
}

new Eletrodomestico();

```

- Reforçando, podemos atribuir mais de um decorator em uma classe!

## Decorator factory

- Retorna um decorator, fazendo com a função receba um conjunto de parâmetros e à partir desses parâmetros podemos configurar o decorator. É meio confuso, mas com o exemplo abaixo fica mais simples! (Pessoalmente não achei produtivo)

```
// @logarClasseSe(true)
// @decorator('teste', 123)
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}

function logarClasse(construtor: Function) {
  console.log(construtor);
}
```

- No código acima, temos dois decorators comentados, o primeiro é referente ao seguinte código:

```
new Eletrodomestico();

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decoratorVazio(_: Function) {}
```

- Em resumo, a função logar classe espera um possível retorno boolean, e tem a possibilidade de retornar `null`, como decorators não aceitam um retorno null quando sua classe principal não retorna null, criamos a _function decoratorVazio_, com o prefixo `_: Function`, que diz que não espera nada, é apenas uma função vazia.

- Ao chamar o decorator no topo da classe, passamos _(true)_ que é o valor booleano que a classe `logarClasseSe` espera!

- O outro decorator:

```
function decorator(a: string, b: number) {
  return function (_: Function): void {
    console.log(a, b);
  };
}
```

- Basicamente, uma forma mais bonita comparado à passada.

## Alterando constructor com decorator.

- Uma classe principal pode ter seus constructors, com decorator, é possível alterar os constructors de qualquer classe e substituir de uma outra função.

- Temos a nossa classe Eletrodomesticos

```
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}
```

- E então, criamos o tipo _construtor_, que basicamente tem como type o type **PADRÃO** de um construtor, só que escrito. `type Construtor = { new (...args: any[]): {} };`

- Depois, criamos uma função que espera receber algo com esse type que criamos, retornando _class_ vazio extendendo o type construtor está esperando receber. Dentro desse retorno, setamos um novo _constructor_ que será importado e vai substituir o _constructor_ da classe pai _Eletrodomestico_, necessitando o prefixo `super` para pegar o que vai ser recebido.

```
function logarObjeto(construtor: Construtor) {
  console.log('carregado');
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('antes...');
      super(...args); // super é para pegar os argumentos que estão sendo recebidos no constructor e na função.
    }
  };
}

new Eletrodomestico();
new Eletrodomestico();
```

## Decorators com métodos de CLASSES

- Podemos juntar decorators com métodos, criando uma função e atribuindo com interface.

```
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('Novo');
  }
}

interface Eletrodomestico {
  imprimir?(): void;
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimivel = function () {
    console.log(this);
  };
}

const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir(); // se for verdadeiro, imprime.

```

## Decorators em métodos diretos, não na classe.

- Podemos usar os decorators em métodos dentro de classes que não tem decorators. Segue o exemplo!

```
class ContaCorrente {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(1000);
cc.sacar(100);
console.log(cc.getSaldo());

cc.getSaldo = function () {
  return this['saldo'] + 700; //usamos notação de string em saldo ao inves de this.saldo por conta do atributo ser privado.
};

console.log(cc.getSaldo());

// Object.freeze() Esse código basicamente vai congelar o valor de um dado, não permitindo que um primeiro retorno de um método não seja alterado. É uma função nativa do javascript, esperando receber um alvo, nome da propriedade e o descritor da propriedade, o descritor é o que pode ou não fazer com esse alvo. Usamos o método writrable que é a propriedade que queremos alterar desse retorno e colocamos como false.
function congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
```

## Decorators em atributos!

- Podemos colocar decoratos em cima de atributos! No exemplo abaixo, criamos um decorator para a classe de ContaCorrente acima, vamos fazer com o que o atributo `saldo` não passe de 0! Ou seja, não fique negativo!

```
function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade];
  Object.defineProperty(alvo, nomePropriedade, {
    get: function (): any {
      return alvo['_' + nomePropriedade];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error('Valor inválido');
      } else {
        alvo['_' + nomePropriedade] = valor;
      }
    },
  });
}

```

- Depois, basta utilizar `@naoNegativo` em cima do atributo e pronto! Para testar é só chamar o método sacar, passando um valor superior ao saldo informado e logar.

## Decorator com parâmetros

- Por fim, vamos ver os decorators juntos de parâmetros. Esse decorator é chamado logo no inicio antes de chamar parâmetros.

```
// importante informar que essa função abaixo não tem acesso ao VALOR do parâmetro.
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Método: ${nomeMetodo}`);
  console.log(`Índice Param: ${indiceParam}`);
}

```

- Esse código acima basicamente vai retornar informações dos parâmetros que estão sendo esperados ou recebidos em uma função, veja o exemplo da utilização:

```
  @congelar
  sacar(@paramInfo valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }
```

- Nesse caso, ele vai logar como _Alvo_: `[object Object]`, _Método:_ `sacar` e _índice Param:_ `0`

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

"target": "es2016" /_ Set the JavaScript language version for emitted JavaScript and include compatible library declarations. _/,

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

// "noImplicitAny": true, /_ Enable error reporting for expressions and declarations with an implied 'any' type. _/

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

## Spread

- Spread Operator é um operador utilizado em arrays para instânciar e passar como parâmetro.

```

### Rest & Spread

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

// 5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring

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

```

```
