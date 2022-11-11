"use strict";
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
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
