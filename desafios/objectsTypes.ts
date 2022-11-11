function baterPonto(horario: number) {
  let mensagem: string = '';

  if (horario > 8) {
    mensagem = 'Fora do horário';
    return (funcionario.ponto = 'Fora do horário');
  } else {
    mensagem = 'Ponto normal';
    return (funcionario.ponto = 'Ponto normal');
  }
}

baterPonto(9);

let funcionario: { supervisores: [string, string, string]; ponto: string } = {
  supervisores: ['João', 'Maria', 'Gabriel'],
  ponto: 'Dentro do horário',
};
