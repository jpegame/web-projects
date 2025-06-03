const paragraph = document.querySelector("p");

const consultaCep = async (cep) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
};

const mostraCep = async () => {
  const resposta = await consultaCep("12301000");

  paragraph.innerHTML = `CEP: ${resposta.cep}<br/>
  RUA: ${resposta.logradouro}<br/>BAIRRO: ${resposta.bairro}<br/>CIDADE: ${resposta.localidade}<br/>
  ESTADO: ${resposta.estado}<br/>UF: ${resposta.uf}`;
};

mostraCep();
