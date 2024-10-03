// Função para verificar se o elemento está parcialmente visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const triggerOffset = 150; // Ajuste para começar a aparecer antes (150px antes de entrar na viewport)

    return (
        rect.top >= -triggerOffset && // Permite que o elemento comece a aparecer 150px antes de entrar
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + triggerOffset && // Verifica 150px abaixo também
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a animação ao aparecer na tela
function checkFadeIn() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Verifica a cada rolagem
window.addEventListener('scroll', checkFadeIn);

// Chama a função assim que a página carrega
document.addEventListener('DOMContentLoaded', checkFadeIn);

// Função para verificar se André está disponível
function checkAvailability() {
    const now = new Date(); // Pega a data e hora atual
    const day = now.getDay(); // Retorna o dia da semana (0 = Domingo, 6 = Sábado)
    const hour = now.getHours(); // Retorna a hora atual (0-23)

    const availabilityText = document.getElementById("availability-text");

    // Verifica se é um dia útil (segunda a sexta) e se está dentro do horário (7h às 19h)
    if (day >= 1 && day <= 5 && hour >= 7 && hour < 19) {
        availabilityText.innerHTML = "● Estou disponível"; // Exibe "Estou disponível"
    } else {
        availabilityText.innerHTML = "● Não estou disponível no momento"; // Exibe "Não estou disponível"
    }
}

// Verifica a disponibilidade a cada 1 minuto
setInterval(checkAvailability, 60000);

// Chama a função assim que a página carrega
checkAvailability();
