"use strict";
//inicializando array
let arrayPessoa = [];
function criaPessoa(pessoa) {
    arrayPessoa.push(pessoa);
    return console.log(arrayPessoa);
}
criaPessoa({
    nome: 'João',
    idade: 22,
    endereco: ['Rua Fulano', '999', 'Cruzeiro', 'SP'],
    cpf: '3283278323827',
    dataNascimento: new Date(),
});
//# sourceMappingURL=praticando.js.map