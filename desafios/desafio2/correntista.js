"use strict";
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista = {
    nome: 'João',
    contaBancaria: contaBancaria,
    contatos: ['1232323232'],
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
