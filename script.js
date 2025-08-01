// ========================================
// LOADER - Tela de Carregamento
// ========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1000);
});

// ========================================
// CURSOR CUSTOMIZADO
// ========================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

// Movimento do cursor
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Follower com delay
    setTimeout(() => {
        follower.style.left = e.clientX - 10 + 'px';
        follower.style.top = e.clientY - 10 + 'px';
    }, 100);
});

// Efeito hover no cursor
const hoverElements = document.querySelectorAll('a, button, .contact-item, .skill-tag, .project-item');
hoverElements.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        follower.style.transform = 'scale(1.5)';
    });
    elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
    });
});

// ========================================
// PARTÍCULAS ANIMADAS
// ========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ========================================
// EFEITO PARALLAX NO MOUSE
// ========================================
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const parallaxElements = document.querySelectorAll('.hero-content, .section');
    parallaxElements.forEach((elem, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        elem.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ========================================
// SCROLL SUAVE
// ========================================
function scrollToContent() {
    const firstSection = document.querySelector('.section');
    firstSection.scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// ANIMAÇÃO AO SCROLL (Intersection Observer)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ========================================
// ESCONDER SCROLL INDICATOR AO ROLAR
// ========================================
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '0.6';
    }
});

// ========================================
// EFEITO DE DIGITAÇÃO NO TÍTULO
// ========================================
const title = document.querySelector('.hero h1');
const text = title.textContent;
title.textContent = '';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Iniciar digitação após o loader desaparecer
setTimeout(typeWriter, 1500);

// ========================================
// ANIMAÇÃO DE NÚMEROS (se quiser adicionar no futuro)
// ========================================
function animateNumbers() {
    const numbers = document.querySelectorAll('.animate-number');
    numbers.forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        const duration = 2000;
        // const step; // Removed or initialize if needed
    });
}