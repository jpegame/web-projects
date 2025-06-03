class Data {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
  retornaFormatada() {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }
}
