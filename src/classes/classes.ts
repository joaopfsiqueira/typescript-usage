class Data {
  // público por padrão
  dia: number;
  mes: number;
  ano: number;

  //constructor é necessário para a criação de uma classe, ou isso ou atribuir direto um valor à propriedade.
  // ele basicamente recebe os parametros e inicializa dentro das intâncias criadas com this.
  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

// depois de criar um constructor podemos criar um objeto com a instância criada com new
const aniversario = new Data(4, 5, 2000);
console.log(aniversario.dia);
console.log(aniversario);

// como usamos parametro padrão no constructor, podemos omitir o () no new date
const casamento = new Data();
casamento.ano = 2017;
console.log(casamento);

//melhor forma de fazer.
class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 2000
  ) {}
}

// depois de criar um constructor podemos criar um objeto com a instância criada com new
const aniversarioEsperto = new DataEsperta(4, 5, 2000);
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

// como usamos parametro padrão no constructor, podemos omitir o () no new date
const casamentoEsperto = new DataEsperta();
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
