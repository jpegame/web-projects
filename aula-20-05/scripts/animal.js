class Animal {
  constructor(nome, cor, dia, mes, ano) {
    this.nome = nome;
    this.cor = cor;
    this.nascimento = new Data(dia, mes, ano);
  }

  apresentaEspecie() {
    console.log("Sem espécie especificada.");
  }

  apresentaCaracteristicas() {
    console.log(
      `Nome: ${this.nome} | Cor: ${
        this.cor
      } | Data de nascimento: ${this.nascimento.retornaFormatada()}`
    );
  }
}
