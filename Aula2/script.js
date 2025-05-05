function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let erro = "Tarefa não encontrada"

    let inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    if (tarefa == ""){
        document.getElementById("mensagem").textContent = erro
    }else{
        document.getElementById("mensagem").textContent = mensagem;
        let listaTarefa = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
    
        novaTarefa.textContent = tarefa
    
        listaTarefa.appendChild(novaTarefa)
    }

    inputTarefa.value = ""
}