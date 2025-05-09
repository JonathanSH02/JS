function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let erro = "Tarefa não encontrada"

    const inputTarefa = document.getElementById("inputTarefa")
    const pegarMensagem = document.getElementById("mensagem")
    let tarefa = inputTarefa.value.trim()

    if (tarefa == ""){
        pegarMensagem.textContent= erro
        pegarMensagem.style.color = "#a34743"
    }else{
        pegarMensagem.textContent = mensagem;
        pegarMensagem.style.color = "#28a745"
        const listaTarefa = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
    
        novaTarefa.textContent = tarefa
    
        listaTarefa.appendChild(novaTarefa)
    }

    inputTarefa.value = ""
}