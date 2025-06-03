const form = document.querySelector("#form");

const retornaTemperatura = (temperatura, opcao) => {
  if (opcao === "F") {
    return temperatura * 1.8 + 32;
  }
  if (opcao === "C") {
    return (temperatura - 32) * (5 / 9);
  }
  return 0;
};

form.addEventListener("submit", (e) => {
  const elements = form.elements;
  const temp = Number(elements.temp.value ?? "0");

  const tempValue = retornaTemperatura(temp, elements["temperatura"].value);
  alert(`Temperatura após conversão: ${tempValue}`);
  e.preventDefault();
});
