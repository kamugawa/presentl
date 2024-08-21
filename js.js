function openPresent() {
    const present = document.getElementById('present-container');
    const message = document.getElementById('message');
    const presentSound = document.getElementById('present-sound');

    // Tocar som do presente
    presentSound.play();

    // Anima a tampa do presente para cima
    const lid = document.getElementById('lid');
    lid.style.transform = 'translateY(-80px) rotateX(-20deg)';

    // Desaparecer o presente e mostrar a mensagem
    setTimeout(() => {
        present.style.opacity = '0';
        setTimeout(() => {
            message.style.opacity = '1';
            message.classList.remove('hidden');
        }, 500);
    }, 1000);
}

function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
}
