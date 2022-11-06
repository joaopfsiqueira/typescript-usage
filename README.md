# TypeSccript Usage

- Repositório criado para entender desde o básico ao avançado de TypeScript.
- Esse projeto consiste em criar arquivo ts, compilar para js com tsc -w e rodar o js no html, acessando os valores pelo f12 + console do navegador.
- Sendo assim, em _types_, vai existir diversos exemplos de uso com tsc.

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

# Primeiros passos

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

# TSC com HTML

- Inicialmente, criamos um arquivo html e dentro do body colocamos script e o basico.js
- Depois, rodamos os comandos:

```
npm init -y  (para não fazer perguntas e configurar padrão)
npm i -s live-server (-s para salvar nas dependencias, vai servir para rodar o html)
```

- Depois, configuramos um script npm start para rodar "live-server", ele vai abrir no naveghador!

# Tuplas

- Tuplas são arrays de tipo. A parte diferente é que esse array é pré-definido do inicio ao fim. Seja em quantidades de elementos dentro dele, até os tipos dos elementos.

```
let endereco: [string, number, number] = ['Av qualquer', 99, 12501300];
```

# Enum

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
