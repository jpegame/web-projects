const botoes = document.querySelectorAll(".botao");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const generateTextColor = () => {
  const r = Math.floor(Math.random() * 128);
  const g = Math.floor(Math.random() * 128);
  const b = Math.floor(Math.random() * 128);
  return `rgb(${r},${g},${b})`;
};

document.body.style.borderColor;
botoes.forEach((el) => {
  el.addEventListener("mouseover", (event) => {
    el.style.backgroundColor = generateRandomColor();
    el.style.borderColor = generateRandomColor();
    el.style.color = generateTextColor();
  });
  el.addEventListener("click", (event) => {
    el.style.backgroundColor = "";
    el.style.borderColor = "";
    el.style.color = "";
  });
});
