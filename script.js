let comentarioAtual = 1; // Começa com ID 1
let maxComentario = 9; // Termina no ID 9

let nomeAtual = 1;
let maxNome = 9;

function submitComment() {
    let comentario = document.getElementById("caixa-comentario").value; // Corrigido
    let nome = document.getElementById("name").value; // Corrigido para o ID correto

    if (comentario.trim() !== "" && nome.trim() !== "") {
        let cardAtual = document.getElementById(`comment-card${comentarioAtual}`);
        let nomeCardAtual = document.getElementById(`card-title${nomeAtual}`);

        if (cardAtual) {
            cardAtual.getElementsByClassName("card-text")[0].textContent = comentario; // Atualiza o texto do comentário
            comentarioAtual++;
        }

        if (nomeCardAtual) {
            nomeCardAtual.textContent = nome; // Atualiza o nome
            nomeAtual++;
        }

        if (comentarioAtual > maxComentario || nomeAtual > maxNome) {
            alert("Caixas já preenchidas"); // Muda de console.log para alert para melhor visibilidade
        }

        document.getElementById("caixa-comentario").value = ""; // Limpa o campo de comentário
        document.getElementById("name").value = ""; // Limpa o campo de nome
    } else {
        alert("Por favor, preencha todos os campos."); // Adiciona um aviso se os campos não estiverem preenchidos
    }
}
