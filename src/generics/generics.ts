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
