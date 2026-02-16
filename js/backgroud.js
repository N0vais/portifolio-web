// --- Lógica do Background Animado (Canvas) ---
const canvas = document.getElementById('tech-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let mouse = { x: 0, y: 0 };

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles();
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = `rgba(16, 185, 129, ${Math.random() * 0.5})`;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - distance) / 150;
            this.x -= Math.cos(angle) * (force * 2);
            this.y -= Math.sin(angle) * (force * 2);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
function initParticles() {
    particles = [];
    const particleCount = Math.min(width / 10, 100);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, index) => {
        p.update();
        p.draw();

        for (let j = index + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(16, 185, 129, ${1 - distance / 100})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        }

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distMouse = Math.sqrt(dx * dx + dy * dy);

        if (distMouse < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(52, 211, 153, ${1 - distMouse / 150})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

resize();
animate();