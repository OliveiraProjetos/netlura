// Aguarda o carregamento completo da página
window.addEventListener('load', () => {
    // Obtém o elemento de áudio
    const introSound = document.getElementById('introSound');
    // Tenta tocar o som, tratando erros se autoplay for bloqueado
    introSound.play().catch(e => console.log('Audio play failed:', e));

    // Inicia a pulsação da logo
    startPulseSequence();

    // Após 3 segundos, esconde a tela de carregamento e para o som
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        introSound.pause();
    }, 3000);
});

// Função para controlar a sequência de pulsação: 2 rápidas (0.25s), pausa 1s, repete 3 vezes total
function startPulseSequence() {
    const logo = document.querySelector('.loading-logo');
    let pulseCount = 0;

    function doPulse() {
        if (pulseCount >= 6) return; // Para após 6 pulsações

        // Aumenta a escala para pulsar
        logo.style.transform = 'scale(1.1)';
        logo.style.transition = 'transform 0.25s ease';

        setTimeout(() => {
            // Volta à escala normal
            logo.style.transform = 'scale(1)';

            pulseCount++;

            if (pulseCount % 2 !== 0) {
                // Após a primeira pulso da dupla, pausa 0.25s
                setTimeout(doPulse, 250);
            } else {
                // Após a segunda pulso da dupla, pausa 1s
                setTimeout(doPulse, 1000);
            }
        }, 250);
    }

    doPulse(); // Inicia a sequência
}