"use strict";
function baterPonto(horario) {
    let mensagem = '';
    if (horario < 8) {
        mensagem = 'Fora do horário';
        return (funcionario.ponto = 'Fora do horário');
    }
    else {
        mensagem = 'Ponto normal';
        return (funcionario.ponto = 'Ponto normal');
    }
}
let funcionario = {
    nome: 'Siqueira',
    supervisores: ['João', 'Maria', 'Gabriel'],
    ponto: '',
};
baterPonto(9);
console.log(funcionario);
