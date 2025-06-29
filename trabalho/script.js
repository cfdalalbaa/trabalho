let botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");
botao.addEventListener("click", mostrarMensagem);

function mostrarMensagem() {
  mensagem.innerHTML = "Bem-vindo, aluno!";
}
