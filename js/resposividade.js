// Função para trocar o menu em telas menores
function toggleMenu() {
    const menu = document.getElementById('navLinks');
    const btn = document.getElementById('menuBtn');

    if (menu && btn) {
        // Alterna a classe 'active' no menu
        menu.classList.toggle('active');

        // Verifica se o menu agora tem a classe active
        if (menu.classList.contains('active')) {
            btn.innerHTML = "✕"; // Transforma em X
        } else {
            btn.innerHTML = "☰"; // Volta para o hambúrguer
        }
    }
}