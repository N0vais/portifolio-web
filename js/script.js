// Função para alterar o conteudo da tela....
const sections = ['home', 'sobre', 'projetos', 'contato'];
let currentSection = 'home';

// Conteudo dos botoes..
const contentData = {
    home: `
        <main class="container section-wrapper">
            <section id="about" class="hero">
                <figure class="header-profile">
                    <img src="./images/daniel-perfil.jpeg" alt="foto de perfil de daniel" class="foto-profile">
                <figcaption>
                    <h1 class="animate-fade-in-up" style="animation-delay: 0.2s;">Ola, eu sou Daniel Novais</h1>
                    <h4 class="animate-fade-in-up" style="animation-delay: 0.2s;">Bacharel em Ciências da Computação
                    </h4>
                    <p class="hero-desc animate-fade-in-up" style="animation-delay: 0.2s;">
                        Desenvolvedor FullStack recém formado com o foco em viabilizar soluções de alto impacto,
                        focado em construção de arquiteturas escaláveis e soluções orientadas a resultados.
                    <p>

                    <p class="hero-desc animate-fade-in-up" style="animation-delay: 0.2s;">
                        Busco oportunidades para aplicar meu conhecimento em criações de APIs, modelagem de dados
                        contribuindo ativamente para a evolução tecnológica do time, enquanto continuo evoluindo minhas
                        skills.
                    </p>

                    </figcaption>
                </figure>

                <div class="social animate-fade-in-up" style="animation-delay: 0.4s;">

                    <button id="openPdf" class="btn-main">Visualizar Currículo</button>

                    <!--github-->
                    <div class="social-links">
                        <a href="https://github.com/N0vais" target="_blank" class="social-icon github">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                        </a>
                        <!--linkedin-->
                        <a href="https://www.linkedin.com/in/daniel-dev-2026-pl" target="_blank"
                            class="social-icon linkedin">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                </path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>

                        <!--youtobe-->
                        <a href="https://www.youtube.com/@danielnovais7412" target="_blank" class="social-icon youtobe">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                                </path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>

                    </div>
                </div>
                
                <!--modal do curriculo so aparece quando for clicado no botao-->

                <div id="pdfModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <iframe id="pdfViewer" src="" width="80%" height="600px" frameborder="0"></iframe>
                    </div>
                </div>

            </section>
        </main>`,

    sobre: `
        <div class="section-wrapper">
            <div class="glass-card">
                <h2>Sobre Mim</h2>
                <img src="./images/daniel-ava.png" alt="foto de perfil de daniel" class="foto-profile2">
                <p>
                    Sou um desenvolvedor apaixonado por tecnologia tenho uma trajetoria de 17 anos atuando em operações de maquinas e gestão de pessoas.
                    Unindo essa maturidade proficional a minha formação academica, atuo na área de desnvolvimento  que entende que a tecnologia é como uma linha de produção que precisa de processos e eficiência em seus resultados.
                    </br>Durante minha transição de carreira estratégica no chão de fabrica, eu aprendi a lidar com prazos criticos, resolução de problemas sob pressão e a importancia de uma manutenção preventiva, 
                    conceitos que levo para o codigo como <span class="negrito">"clean code"</span>. 
                    Além disso meus anos gerindo pessoas me deram uma comunicação assertiva e uma facilidade de trabalhar em equipe que são fundamentais em metodologias ageis....
                </p>
                <br>
                <p>
                    No desenvolvimento de aplicações web e apps nativos com foco em eficiência operacional. 
                    Da lógica do banco de dados ao design da interfaceque que priorizam a experiência do usuário. 
                    Entendo que um software, assim como uma linha de produção de alta performance, precisa ser ágil, 
                    resiliente e livre de desperdícios.
                </p>
                </br>
                
        
                
            </div>
        </div>
        <section id="skills" class="skills">

            <h2>Linguagens e Tecnologias</h2>
            <div class="skills-container">
                <div class="skill-item">
                    <img align="center" alt="N0vais-visual" height="50" width="60" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
                     Vs Code
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-HTML" height="50" width="60" 
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-plain.svg"/>
                    HTML-5
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-CSS" height="50" width="60" 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                    CSS-3
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-Js" height="50" width="60" 
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg"/>
                        JavaScript
                </div>

                <div class="skill-item">
                <img align="center" alt="Node" height="50" width="60" 
                    src="https://skillicons.dev/icons?i=nodejs"/> Node.js</div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-FireBase" height="50" width="60" 
                        src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/firebase/firebase-plain-wordmark.svg"/>
                        Firebase
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-Java" height="50" width="60" 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-plain.svg"/>
                    Java
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-PYTHON" height="50" width="60" 
                        src="https://skillicons.dev/icons?i=py"/>
                        Python
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-PHP" height="50" width="60" 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"/>
                          PHP
                </div>

                <div class="skill-item">
                    <img align="center" alt="N0vais-PYTHON" height="50" width="60" 
                        src="https://skillicons.dev/icons?i=sqlite"/>
                        SqLite
                </div>

                <div class="skill-item">
                    <img align="center" alt="Vercel-Deploy" height="50" width="60" 
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"/>
                        Vercel
                </div>

                <div class="skill-item">
                    <svg width="60" height="50" fill="currentColor" viewBox="0 0 16 16" role="img" aria-labelledby="svg-title">
                        <title id="svg-title">OpenAI API</title>
                        <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z"/>
                    </svg>
                   OpenAI API
                </div>
                
           </div>
        </section>`,

    projetos: `
        <section id="projects" class="projects-section section-wrapper">
            <div class="section-header">
                <div>
                    <h2>Projetos em Destaque</h2>
                    <p>Uma seleção das minhas criações recentes.</p>
                </div>
            </div>

            <div class="projects-grid">
                <a href="https://bridge-site-red.vercel.app/" target="_blank" style="text-decoration: none; color: inherit;">
                    <div class="project-card">
                        <div class="icon-box">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <h3>Bridge Project</h3>
                        <p>Uma plataforma intermediadora que capta projetos reais de empresas e os transforma em trilhas de aprendizado prático para estudantes. Todo o processo é mediado por um <span class="negrito">Gerente de Projetos (PM) experiente</span>, garantindo a entrega profissional para o cliente.
                            <br><span class="negrito">Beneficios: </span> estudante	ganha experiência real + Certificação gratuita + Mentoria de um PM sênior.
                            <span class="negrito">Empresa</span> Redução de custos em projetos não-críticos e acesso a novos talentos.
                            <span class="negrito">Gerentes</span> Formação de mão de obra qualificada e taxas de intermediação.</p>
                        <div class="tags">
                        
                            <span class="tag"><i title="VS Code" class="devicon-vscode-plain colored"></i></span>
                            <span class="tag"><i title="Node.js" class="devicon-nodejs-plain colored"></i></span>
                            <span class="tag"><i title="HTML5" class="devicon-html5-plain colored"></i></span>
                            <span class="tag"><i title="CSS3" class="devicon-css3-plain colored"></i></span>
                            <span class="tag"><i title="JavaScript" class="devicon-javascript-plain colored"></i></span>
                            <span class="tag"><i title="Supabase" class="devicon-supabase-plain colored"></i></span>
                            <span class="tag"><i title="Vercel" class="devicon-vercel-original colored"></i></span>
                        </div>
                    </div>
                </a>
                <div class="project-card">
                    <div class="icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                    <h3>Asistente TeraPix</h3>
                    <p>
                        É um sistema de cuidado contínuo que integra Inteligência Artificial e supervisão clínica de piscologos e piscqtrico para transformar o tratamento de ansiedade e depressão, 
                        com <span class="negrito">"Parcerias B2B"</span> que oferecer tecnologia diferenciada e monitoramento contínuo dos pacientes.
                    <br>
                        <span class="negrito">Benefício</span> que buscam reduzir casos de burnout e diminuir o absenteísmo entre colaboradores.
                    </p>
                    <div class="tags">
                        <span class="tag"><i title="VS Code" class="devicon-vscode-plain colored"></i></span>
                        <span class="tag"><i title="Java" class="devicon-java-plain colored"></i></span>
                        <span class="tag"><i title="Spring Boot" class="devicon-spring-original colored"></i></span>
                        <span class="tag"><i title="SQLite" class="devicon-sqlite-plain colored"></i></span>
                        <span class="tag">
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" role="img" aria-labelledby="svg-title">
                                <title id="svg-title">OpenAI API</title>
                                <path d="M14.949 6.547a3.94 3.94 0 0 0-.348-3.273 4.11 4.11 0 0 0-4.4-1.934A4.1 4.1 0 0 0 8.423.2 4.15 4.15 0 0 0 6.305.086a4.1 4.1 0 0 0-1.891.948 4.04 4.04 0 0 0-1.158 1.753 4.1 4.1 0 0 0-1.563.679A4 4 0 0 0 .554 4.72a3.99 3.99 0 0 0 .502 4.731 3.94 3.94 0 0 0 .346 3.274 4.11 4.11 0 0 0 4.402 1.933c.382.425.852.764 1.377.995.526.231 1.095.35 1.67.346 1.78.002 3.358-1.132 3.901-2.804a4.1 4.1 0 0 0 1.563-.68 4 4 0 0 0 1.14-1.253 3.99 3.99 0 0 0-.506-4.716m-6.097 8.406a3.05 3.05 0 0 1-1.945-.694l.096-.054 3.23-1.838a.53.53 0 0 0 .265-.455v-4.49l1.366.778q.02.011.025.035v3.722c-.003 1.653-1.361 2.992-3.037 2.996m-6.53-2.75a2.95 2.95 0 0 1-.36-2.01l.095.057L5.29 12.09a.53.53 0 0 0 .527 0l3.949-2.246v1.555a.05.05 0 0 1-.022.041L6.473 13.3c-1.454.826-3.311.335-4.15-1.098m-.85-6.94A3.02 3.02 0 0 1 3.07 3.949v3.785a.51.51 0 0 0 .262.451l3.93 2.237-1.366.779a.05.05 0 0 1-.048 0L2.585 9.342a2.98 2.98 0 0 1-1.113-4.094zm11.216 2.571L8.747 5.576l1.362-.776a.05.05 0 0 1 .048 0l3.265 1.86a3 3 0 0 1 1.173 1.207 2.96 2.96 0 0 1-.27 3.2 3.05 3.05 0 0 1-1.36.997V8.279a.52.52 0 0 0-.276-.445m1.36-2.015-.097-.057-3.226-1.855a.53.53 0 0 0-.53 0L6.249 6.153V4.598a.04.04 0 0 1 .019-.04L9.533 2.7a3.07 3.07 0 0 1 3.257.139c.474.325.843.778 1.066 1.303.223.526.289 1.103.191 1.664zM5.503 8.575 4.139 7.8a.05.05 0 0 1-.026-.037V4.049c0-.57.166-1.127.476-1.607s.752-.864 1.275-1.105a3.08 3.08 0 0 1 3.234.41l-.096.054-3.23 1.838a.53.53 0 0 0-.265.455zm.742-1.577 1.758-1 1.762 1v2l-1.755 1-1.762-1z"/>
                            
                            </svg>
                        </span>
                        
                    </div>
                </div>

                <div class="project-card">
                    <div class="icon-box">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>    
                    </div>
                    <h3>Portifolio</h3>
                    <p>
                        Este portfólio foi construído sob a filosofia do <span class="negrito">'menos é mais'</span>,
                        utilizando <span class="negrito"> HTML5, CSS3 e JavaScript</span> puro, O resultado é uma experiência leve,
                        veloz e funcional, focada no que realmente importa. Cada linha de código aqui reflete meu compromisso com o desempenho e o domínio das tecnologias fundamentais da web,
                        um desenvolvedor que valoriza a performance e a estética funcional, acreditando que o simples não apenas funciona — ele encanta.
                    </p>
                    <div class="tags">
                    
                        <span class="tag"><i title="VS Code" class="devicon-vscode-plain colored"></i></span>
                        <span class="tag"><i title="HTML5" class="devicon-html5-plain colored"></i></span>
                        <span class="tag"><i title="CSS3" class="devicon-css3-plain colored"></i></span>
                        <span class="tag"><i title="JavaScript" class="devicon-javascript-plain colored"></i></span>
                        <span class="tag"><i title="Vercel" class="devicon-vercel-original colored"></i></span>
                    </div>
                </div>
                
            </div>
        </section>`,

    contato: `
        <div class=" animate-fade-in-up section-wrapper terminal" style="animation-delay: 0.1s;">
            <div class="terminal-header">
                <div class="term-dot bg-red"></div>
                <div class="term-dot bg-yellow"></div>
                <div class="term-dot bg-green"></div>
            </div>
            <div class="terminal-body">
                <span id="typewriter-text"></span><span class="cursor-blink">_</span>
            </div>
            
        </div>`,
};

// Função que faz a navegação dos botoes
function navigateTo(newSection) {
    if (newSection === currentSection) return;

    const currentIndex = sections.indexOf(currentSection);
    const newIndex = sections.indexOf(newSection);
    const direction = newIndex > currentIndex ? 'right' : 'left';

    const displayArea = document.getElementById('content-area');
    const oldContent = displayArea.querySelector('.section-wrapper');

    // 1. Animar a saída do conteúdo antigo
    if (oldContent) {
        oldContent.classList.add(direction === 'right' ? 'exit-left' : 'exit-right');
    }

    // 2. Trocar conteúdo após um pequeno delay (simulando o "wait" do Framer)
    setTimeout(() => {
        displayArea.innerHTML = contentData[newSection];
        const newContent = displayArea.querySelector('.section-wrapper');

        // 3. Aplicar animação de entrada
        newContent.classList.add(direction === 'right' ? 'enter-right' : 'enter-left');

        // Atualizar botões
        // 4. Remove a classe active de TODOS os botões que tenham a classe .nav-btn
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        // 5. Procura TODOS os botões que chamam a função navigateTo com a seção atual e adiciona active
        document.querySelectorAll(`[onclick*="navigateTo('${newSection}')"]`).forEach(btn => {
            btn.classList.add('active');
        });

        currentSection = newSection;
    }, 300);
    
}

// Função que injeta o conteúdo assim que a pagina e carregada
function renderInitialContent() {
    const displayArea = document.getElementById('content-area');
    // Injetar o conteúdo da home
    displayArea.innerHTML = contentData.home;
}

// Executa ao carregar a página | inicializador
document.addEventListener('DOMContentLoaded', renderInitialContent);

// Criando variavel para o controle de digitação
let estaDigitando = false;
// Fução de digitação do terminal
function iniciarAnimacaoTerminal() {
    const terminalElement = document.getElementById('typewriter-text');
    
    // VERIFICAÇÃO DE SEGURANÇA: Só continua se o elemento existir
    if (!terminalElement) {
        console.warn("Aguardando carregamento do terminal...");
        return; 
    }
    if (estaDigitando) return;

    // Se já tiver texto, não reinicia (evita bugs de clicar várias vezes)
    if (terminalElement.textContent.length > 0) return;

    const terminalText = "> Initializing system ...\n> Loading modules: HTML, CSS, Javascript  ...\n> Status: ONLINE\n> ------------------------------\n> [CONTACT INFO]\n> Email: danielsiqueiranovais@gmail.com\n> LinkedIn: https://www.linkedin.com/in/daniel-dev-2026-pl\n> GitHub: https://github.com/N0vais\n> YouTube: https://www.youtube.com/@danielnovais7412\n> ------------------------------\n> Welcome, recruiter. System ready.";
    let charIndex = 0;

    estaDigitando = true;

    function typeWriter() {
        // Checa novamente se o elemento ainda existe (evita erro se o usuário sair da tela rápido)
        const el = document.getElementById('typewriter-text');
        if (el && charIndex < terminalText.length) {
            el.textContent += terminalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 70);
        } else {
            // O LIBERADOR: Quando terminar de digitar a última letra, liberamos o botão
            estaDigitando = false;
        }
    }
    setTimeout(typeWriter, 2000);
    
}