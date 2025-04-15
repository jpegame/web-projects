const buttonElement = document.getElementById("turn-on-button");
const lampElement = document.getElementById("lamp");
const bodyElement = document.body;

const fahrenheit = (celsius) => {
  return 1.8 * celsius + 32;
};

const fatorial = (num) => {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
};

buttonElement.addEventListener("click", () => {
  lampElement.classList.toggle("on");
  bodyElement.classList.toggle("light");

  console.log(fahrenheit(0));
  console.log(fahrenheit(30));
  console.log(fatorial(5));
  console.log(fatorial(3));
});
