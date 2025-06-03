let opcao = "s";
while (opcao == "s") {
  const animalOpcao = window.prompt("Digite a espécie do animal:");
  const nome = window.prompt("Digite o nome:");

  let animal;
  switch (animalOpcao) {
    case "gato":
      animal = new Gato(nome, "preto", 1, 1, 2010);
      break;
    case "cachorro":
      animal = new Cachorro(nome, "marrom", 1, 1, 2012);
      break;
    default:
      animal = new Animal(nome, "branco", 1, 1, 2000);
      break;
  }
  animal.apresentaEspecie();
  animal.apresentaCaracteristicas();

  opcao = window.prompt("Deseja continuar?<s/n>");
}
