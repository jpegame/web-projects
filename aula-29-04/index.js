const arr = [1, 4, 2, 3, 5, 5, 4, 3, 2, 9, 1, 6, 2, 3];

for (let obj of arr) {
  let child = document.createElement("div");
  let text = document.createElement("h3");
  text.textContent = obj;
  child.appendChild(text);
  document.getElementById("list").appendChild(child);
}

const media = () => {
  let media = 0;
  for (let obj of arr) {
    media += obj;
  }
  return media / arr.length;
};

const variancia = () => {
  const mediaValue = media();
  let soma = 0;
  for (let obj of arr) {
    soma += (obj - mediaValue) ** 2;
  }
  return soma / arr.length;
};

const dp = () => {
  return variancia() ** 0.5;
};

const handleClick = () => {
  const opcao = prompt("Qual ação deseja fazer? (media, dp, var)");
  let resultado = 0;
  switch (opcao) {
    case "media":
      resultado = media();
      break;
    case "dp":
      resultado = dp();
      break;
    case "var":
      resultado = variancia();
      break;
    default:
      console.log("Opção inválida!");
  }
  document.getElementById("resultado").textContent = resultado.toLocaleString(
    "pt-BR",
    { maximumFractionDigits: 5 }
  );
};
