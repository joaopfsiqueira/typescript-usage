"use strict";
//alias
let funcionario = {
    nome: 'Siqueira',
    supervisores: ['João', 'Maria', 'Gabriel'],
    baterPonto(horario) {
        //função(parametro): tiporetorno
        if (horario < 8) {
            return 'Fora do horário';
        }
        else {
            return 'Ponto normal';
        }
    },
};
let funcionario2 = {
    nome: 'Siqueira',
    supervisores: ['Bia', 'Carlos', 'Gabriel'],
    baterPonto(horario) {
        //função(parametro): tiporetorno
        if (horario < 8) {
            return 'Fora do horário';
        }
        else {
            return 'Ponto normal';
        }
    },
};
//usando o type criado no inicio do código.
let funcionario3 = {
    nome: 'Siqueira',
    supervisores: ['Fernanda'],
    baterPonto(horario) {
        //função(parametro): tiporetorno
        if (horario < 8) {
            return 'Fora do horário';
        }
        else {
            return 'Ponto normal';
        }
    },
};
let funcionario4 = {
    nome: 'Siqueira',
    supervisores: ['Victor', 'Diogo'],
    baterPonto(horario) {
        //função(parametro): tiporetorno
        if (horario < 8) {
            return 'Fora do horário';
        }
        else {
            return 'Ponto normal';
        }
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
//union types
let nota;
nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
