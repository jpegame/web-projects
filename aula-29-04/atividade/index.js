let atividades = [];

const showTasks = () => {
  const tasks = document.getElementById("tasks");
  tasks.innerHTML = "";
  for (item of atividades) {
    const conteudo = document.createElement("p");
    conteudo.textContent = `Nome: ${item["nome"]} | Prioridade: ${item["prioridade"]}`;
    tasks.appendChild(conteudo);
  }
};

const addTask = (nome, prioridade) => {
  atividades.push({ nome, prioridade });
};

const editTask = (nome, prioridade) => {
  const atividade = atividades.find((item) => (item["nome"] = nome));
  atividade["prioridade"] = prioridade;
};

const deleteTask = (nome) => {
  atividades = atividades.filter((item) => item["nome"] != nome);
};

const handleClick = (type) => {
  const nome = prompt(`Digite o nome da tarefa que deseja ${type}?`);
  if (type == "adicionar") {
    const prioridade = prompt("Digite a prioridade da tarefa?");
    addTask(nome, prioridade);
  }
  if (type == "editar") {
    const prioridade = prompt("Digite a prioridade da tarefa?");
    editTask(nome, prioridade);
  }
  if (type == "remover") {
    deleteTask(nome);
  }

  showTasks();
};
