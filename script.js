const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent = "A Inteligência Artificial pode aprender padrões a partir de grandes quantidades de dados e ajudar pessoas em diversas tarefas!";
}

botao.addEventListener("click", mostrarMensagem);
