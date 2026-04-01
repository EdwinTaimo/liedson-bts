const pacotes = [
    { id: 1, nome: "400 MB", preco: 10.00, tipo: "Diário" },
    { id: 2, nome: "1024 MB", preco: 26.00, tipo: "Diário" },
    { id: 3, nome: "7.270 MB", preco: 190.00, tipo: "Semanal" }
];

let pacoteSelecionado = null;

function renderPacotes() {
    const grid = document.getElementById('pacotes-grid');
    grid.innerHTML = pacotes.map(p => `
        <div class="card" onclick="abrirCompra(${p.id})">
            <h4>${p.tipo}</h4>
            <h2>${p.nome}</h2>
            <p class="price">${p.preco.toFixed(2)} MT</p>
            <button class="apple-btn">Comprar</button>
        </div>
    `).join('');
}

function abrirCompra(id) {
    pacoteSelecionado = pacotes.find(p => p.id === id);
    document.getElementById('modal-details').innerText = `Pacote: ${pacoteSelecionado.nome} - Valor: ${pacoteSelecionado.preco} MT`;
    document.getElementById('payment-modal').style.display = 'block';
}

function confirmarPagamento() {
    // Aqui simulamos a automação. 
    // O cliente envia os dados para o SEU WhatsApp.
    const msg = `Olá Liedson! Acabei de enviar ${pacoteSelecionado.preco}MT para o pacote ${pacoteSelecionado.nome}. Por favor, valide o ID da transação.`;
    const url = `https://wa.me/258843807106?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

function closeModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

renderPacotes();
