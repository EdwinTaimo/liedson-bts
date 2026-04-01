const dadosPacotes = [
    // Diários
    { tipo: "Diário", mb: "400 MB", preco: "10,00 MT" },
    { tipo: "Diário", mb: "600 MB", preco: "15,00 MT" },
    { tipo: "Diário", mb: "1024 MB", preco: "26,00 MT" },
    { tipo: "Diário", mb: "2050 MB", preco: "52,00 MT" },
    { tipo: "Diário", mb: "10240 MB", preco: "260,00 MT" },
    // Semanais
    { tipo: "Semanal", mb: "3.482 MB", preco: "95,00 MT" },
    { tipo: "Semanal", mb: "7.270 MB", preco: "190,00 MT" },
    { tipo: "Semanal", mb: "10.957 MB", preco: "290,00 MT" },
    // Mensais
    { tipo: "Mensal", mb: "7.143 MB", preco: "190,00 MT" },
    { tipo: "Mensal", mb: "19.316 MB", preco: "550,00 MT" },
    { tipo: "Mensal", mb: "54.886 MB", preco: "1.450,00 MT" }
];

function carregarPacotes() {
    const display = document.getElementById('pacotes-display');
    display.innerHTML = dadosPacotes.map(p => `
        <div class="card">
            <span class="category">${p.tipo}</span>
            <div class="size">${p.mb}</div>
            <div class="price">${p.preco}</div>
        </div>
    `).join('');
}

function enviarParaGrupo() {
    const mensagemMpesa = document.getElementById('mpesa-msg').value;
    const linkGrupo = "https://chat.whatsapp.com/Cmh4RiCpWfmFZhfShTfc1C";
    
    if (mensagemMpesa.trim().length < 20) {
        alert("Por favor, cole a mensagem completa do M-Pesa para validação.");
        return;
    }

    // Como links de grupos não aceitam pre-enchimento de texto via URL da mesma forma que o wa.me,
    // O sistema copia o texto para a área de transferência e abre o link do grupo.
    
    navigator.clipboard.writeText(mensagemMpesa).then(() => {
        alert("Mensagem copiada! Cole-a no grupo que vai abrir agora.");
        window.open(linkGrupo, '_blank');
    });
}

window.onload = carregarPacotes;
