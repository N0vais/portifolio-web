// Espera o DOM (HTML) carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Captura os elementos pelos IDs que você passou
    const modal = document.getElementById("pdfModal");
    const btn = document.getElementById("openPdf");
    const span = document.querySelector(".close"); // Usando a classe que está no seu <span>
    const iframe = document.getElementById("pdfViewer");

    // Caminho do seu arquivo PDF (ajuste se necessário)
    const caminhoPdf = "./assets/pdf/curriculo-2026.pdf"; 

    // VERIFICAÇÃO DE SEGURANÇA: Só executa se todos os elementos existirem
    if (btn && modal && span && iframe) {
        
        // Abre a modal
        btn.onclick = function() {
            iframe.src = caminhoPdf; 
            modal.style.display = "flex";
            // Bloqueia o scroll da página ao abrir a modal (opcional)
            document.body.style.overflow = "hidden";
        };

        // Fecha a modal no botão (X)
        span.onclick = function() {
            fecharModal();
        };

        // Fecha se clicar na área escura fora da modal
        window.onclick = function(event) {
            if (event.target == modal) {
                fecharModal();
            }
        };

        // Função auxiliar para fechar e limpar
        function fecharModal() {
            modal.style.display = "none";
            iframe.src = ""; // Para o carregamento do PDF
            document.body.style.overflow = "auto"; // Devolve o scroll
        }


    } else {
        // Isso ajuda a descobrir se algum ID foi digitado errado
        console.error("Erro: Um ou mais elementos da modal não foram encontrados.");
        console.log("Botão:", btn);
        console.log("Modal:", modal);
        console.log("Fechar (X):", span);
    }
});