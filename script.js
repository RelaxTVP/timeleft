// Define a data final (meia-noite de 24 de julho de 2025)
const finalDate = new Date('2025-07-24T19:20:00');

// Função para formatar o tempo restante
function formatTimeLeft(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
}

// Função principal do countdown
function countdown() {
    const timeLeftElement = document.getElementById('timeleft');

    const intervalo = setInterval(() => {
        const currentDate = new Date();
        const timeLeft = finalDate - currentDate;

        // Verifica se o tempo acabou
        if (timeLeft <= 0) {
            clearInterval(intervalo);
            timeLeftElement.textContent = 'Férias começaram!';
            return;
        }

        // Atualiza o elemento na página
        timeLeftElement.textContent = formatTimeLeft(timeLeft);
    }, 1000); // Atualiza a cada 1000ms (1 segundo)
}

// Inicia o countdown quando a página carrega
countdown();