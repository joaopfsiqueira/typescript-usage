"use strict";
function baterPonto(horario) {
    let mensagem = '';
    if (horario > 8) {
        mensagem = 'Fora do horário';
        return (funcionario.ponto = 'Fora do horário');
    }
    else {
        mensagem = 'Ponto normal';
        return (funcionario.ponto = 'Ponto normal');
    }
}
baterPonto(9);
let funcionario = {
    supervisores: ['João', 'Maria', 'Gabriel'],
    ponto: 'Dentro do horário',
};
