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
7 - **[Compilador - tsconfig.json](https://github.com/joaopfsiqueira/typescript-usage#compilador)**

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
