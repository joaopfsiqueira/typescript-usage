function baterPonto(horario: number) {
  let mensagem: string = '';

  if (horario < 8) {
    mensagem = 'Fora do horário';
    return (funcionario.ponto = 'Fora do horário');
  } else {
    mensagem = 'Ponto normal';
    return (funcionario.ponto = 'Ponto normal');
  }
}

let funcionario: {
  nome: string;
  supervisores: [string, string, string];
  ponto: string;
} = {
  nome: 'Siqueira',
  supervisores: ['João', 'Maria', 'Gabriel'],
  ponto: '',
};

baterPonto(9);
console.log(funcionario);
