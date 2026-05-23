// variaveis de controle do card dowload
const modal = document.getElementById('meuModal');
const botoesModal = document.getElementById('botoesModal');
const progressoContainer = document.getElementById('progressoContainer');
const barraProgresso = document.getElementById('barraProgresso');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');

function abrirModal() {
    // Reseta o estado do modal caso o usuário clique de novo
    botoesModal.style.display = 'flex';
    progressoContainer.style.display = 'none';
    barraProgresso.style.width = '0%';
    modalTitulo.innerText = "Confirmação de Download";
    modalTexto.innerText = "Você realmente quer baixar esse arquivo?";

    modal.classList.add('active');
}

function fecharModal() {
    modal.classList.remove('active');
}

function iniciarDownload() {
    // 1. Esconde os botões Sim/Não e mostra a barra de progresso
    botoesModal.style.display = 'none';
    progressoContainer.style.display = 'block';
    modalTitulo.innerText = "Baixando...";
    modalTexto.innerText = "Aguarde o término do download.";

    // 2. Cria o gatilho de download invisível (evita abrir abas novas)
    const linkInvisivel = document.createElement('a');
    linkInvisivel.href = 'dowloads/app-release.apk'; // Nome exato do seu APK na pasta
    linkInvisivel.download = 'dowloads/app-release.apk';
    document.body.appendChild(linkInvisivel);
    linkInvisivel.click();
    document.body.removeChild(linkInvisivel);

    // 3. Simula a animação da barra subindo até 100%
    let largura = 0;
    const intervalo = setInterval(() => {
        if (largura >= 100) {
            clearInterval(intervalo);
            // Quando termina, fecha o pop-up e mantém o usuário na tela de apresentação
            setTimeout(() => {
                fecharModal();
            }, 500);
        } else {
            largura += 5; // Velocidade da animação da barra
            barraProgresso.style.width = largura + '%';
        }
    }, 100); // Executa a cada 100 milissegundos
}

// Script do carrocel
const slides = Array.from(document.querySelectorAll('.carrossel-3d .slide-item'));
const carrossel = document.getElementById('carrossel');
let currentIndex = 0;
let startX = 0;
let isDragging = false;

function atualizarCarrossel() {
    const total = slides.length;

    slides.forEach((slide, i) => {
        // Remove as classes antigas
        slide.className = 'slide-item';

        if (i === currentIndex) {
            slide.classList.add('active');
        } else if (i === (currentIndex + 1) % total) {
            slide.classList.add('next');
        } else if (i === (currentIndex - 1 + total) % total) {
            slide.classList.add('prev');
        } else {
            slide.classList.add('hidden');
        }
    });
}

// Controles de Arrasto (Mouse e Touch)
function iniciarArrasto(x) {
    isDragging = true;
    startX = x;
}

function moverArrasto(x) {
    if (!isDragging) return;
    const diff = x - startX;

    // Sensibilidade: mover 40 pixels troca o card
    if (Math.abs(diff) > 40) {
        if (diff > 0) {
            // Arrastou para a direita: volta imagem
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else {
            // Arrastou para a esquerda: avança imagem
            currentIndex = (currentIndex + 1) % slides.length;
        }
        atualizarCarrossel();
        isDragging = false;
    }
}

// Ouvintes de eventos para Desktop
carrossel.addEventListener('mousedown', (e) => iniciarArrasto(e.clientX));
window.addEventListener('mousemove', (e) => moverArrasto(e.clientX));
window.addEventListener('mouseup', () => isDragging = false);

// Ouvintes de eventos para Celular
carrossel.addEventListener('touchstart', (e) => iniciarArrasto(e.touches[0].clientX));
window.addEventListener('touchmove', (e) => moverArrasto(e.touches[0].clientX));
window.addEventListener('touchend', () => isDragging = false);

// Inicializa o carrossel assim que a tela abre
atualizarCarrossel();
