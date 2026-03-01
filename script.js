function abrirModal(idConteudo) {
    const conteudo = document.getElementById(idConteudo).innerHTML;
    document.getElementById("modal-body").innerHTML = conteudo;
    // --- BLOQUEAR SCROLL ---
    document.body.style.overflow = 'hidden'; 
    const modal = document.getElementById("modal-container");
    modal.style.display = "flex"; 
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function fecharModal() {
    const modal = document.getElementById("modal-container");
    const content = document.querySelector(".modal-content");
    // --- LIBERAR SCROLL ---
    document.body.style.overflow = ''; 
    content.classList.add("closing");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
        content.classList.remove("closing");
    }, 300); 
}

// ... manter a parte do fechar ao clicar fora ...
window.onclick = function(event) {
    const modal = document.getElementById("modal-container");
    if (event.target == modal) {
        fecharModal();
    }
}