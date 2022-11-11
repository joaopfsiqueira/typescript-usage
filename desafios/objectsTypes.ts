let funcionario: {
  nome: string;
  supervisores: [string, string, string]; //poderia por tbm string[], mas do jeito que eu fiz, especifiquei não só o tipo mas a quantidade de valores dentro do array.;
  baterPonto: (horas: number) => string; //nome do parametro não precisa ser respeitado, e sim o tipo, ordem, etc
} = {
  nome: 'Siqueira',
  supervisores: ['João', 'Maria', 'Gabriel'],
  baterPonto(horario: number): string {
    if (horario < 8) {
      return 'Fora do horário';
    } else {
      return 'Ponto normal';
    }
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
