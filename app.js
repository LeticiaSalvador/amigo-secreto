let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome.trim()) {
        amigos.push(nome.trim());
        document.querySelector('input').value = '';
        atualizarLista();
    }else{
        alert('Por favor, insira um nome válido.');
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    document.getElementById('resultado');//.textContent = `Amigo sorteado: ${sorteado}`;
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${sorteado}</strong></li>`;
}
