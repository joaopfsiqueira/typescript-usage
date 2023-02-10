function echo(objeto: any) {
  return objeto;
}

console.log(echo('João'));
console.log(echo(1));
console.log(echo({ nome: 'João' }));
console.log(echo('João').length);

// Usando generics, precisamos colocar <> e um nome qualquer dentro, depois atribuimos esse tipo em algum lugar.
function echoMelhorado<type>(objeto: type): type {
  return objeto;
}

// a magia da coisa está na hora de chamar essa função. Por ser um tipo genério ela vai aceitar qualquer coisa, mas vai tratar erros como na segunda linha, número não tem a propriedade length, por isso tá reclamando!
console.log(echoMelhorado('João'));
// console.log(echoMelhorado(1).length);
console.log(echoMelhorado({ nome: 'João' }));
console.log(echoMelhorado('João').length);

//podemos também explicitar o tipo diversas vezes.

console.log(echoMelhorado<String>('João'));
console.log(echoMelhorado<number>(1));

// Generics disponíveis na API, array.
//nesse caso abaixo, usamos o generics para especificar o tipo number, criando um "specifics" hahahah
const avaliacoes: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
avaliacoes.push(8.4);
// avaliacoes.push('5.5');

// mais exemplos de array:
function imprimir<Tipo>(args: Tipo[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(['1', '2', '3']);
imprimir<{ nome: string; idade: number }>([{ nome: 'João', idade: 1 }]);

// Tipo genérico
type Echo = <Tipo>(data: Tipo) => Tipo;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<String>('Hello World'));

// Class sem generics
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

// Classe com generics
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

// outro exemplo mais especifico
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
