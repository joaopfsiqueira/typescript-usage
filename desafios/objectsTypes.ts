type Funcionario = {
  nome: string;
  supervisores: string[];
  baterPonto: (horas: number) => string; //nome do parametro não precisa ser respeitado, e sim o tipo, ordem, etc
  // Sim! É possível retornar uma função dentro de um objeto. Com typescript não precisamos nem do prefixo "function"
  // ao colocar baterPonto: (parametro) => retorno já é válidado que vai ser uma função!
};

let funcionario: {
  nome: string;
  supervisores: [string, string, string]; //poderia por tbm string[], mas do jeito que eu fiz, especifiquei não só o tipo mas a quantidade de valores dentro do array.;
  baterPonto: (horas: number) => string; //nome do parametro não precisa ser respeitado, e sim o tipo, ordem, etc
  // Sim! É possível retornar uma função dentro de um objeto. Com typescript não precisamos nem do prefixo "function"
  // ao colocar baterPonto: (parametro) => retorno já é válidado que vai ser uma função!
} = {
  nome: 'Siqueira',
  supervisores: ['João', 'Maria', 'Gabriel'],
  baterPonto(horario: number): string {
    //função(parametro): tiporetorno
    if (horario < 8) {
      return 'Fora do horário';
    } else {
      return 'Ponto normal';
    }
  },
};

let funcionario2: {
  nome: string;
  supervisores: [string, string, string]; //poderia por tbm string[], mas do jeito que eu fiz, especifiquei não só o tipo mas a quantidade de valores dentro do array.;
  baterPonto: (horas: number) => string; //nome do parametro não precisa ser respeitado, e sim o tipo, ordem, etc
  // Sim! É possível retornar uma função dentro de um objeto. Com typescript não precisamos nem do prefixo "function"
  // ao colocar baterPonto: (parametro) => retorno já é válidado que vai ser uma função!
} = {
  nome: 'Siqueira',
  supervisores: ['Bia', 'Carlos', 'Gabriel'],
  baterPonto(horario: number): string {
    //função(parametro): tiporetorno
    if (horario < 8) {
      return 'Fora do horário';
    } else {
      return 'Ponto normal';
    }
  },
};

//usando o type criado no inicio do código.
let funcionario3: Funcionario = {
  nome: 'Siqueira',
  supervisores: ['Fernanda'],
  baterPonto(horario: number): string {
    //função(parametro): tiporetorno
    if (horario < 8) {
      return 'Fora do horário';
    } else {
      return 'Ponto normal';
    }
  },
};

let funcionario4: Funcionario = {
  nome: 'Siqueira',
  supervisores: ['Victor', 'Diogo'],
  baterPonto(horario: number): string {
    //função(parametro): tiporetorno
    if (horario < 8) {
      return 'Fora do horário';
    } else {
      return 'Ponto normal';
    }
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
