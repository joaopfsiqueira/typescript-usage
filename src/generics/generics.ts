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
