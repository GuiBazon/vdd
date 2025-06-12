// Adiciona corações flutuantes
function createHearts() {
    const heartBg = document.querySelector('.heart-background');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartBg.appendChild(heart);
    }
}

// Botão de surpresa
document.getElementById('surpresa').addEventListener('click', function() {
    const segredo = document.getElementById('segredo');
    segredo.classList.toggle('hidden');
    
    // Efeito extra: mais corações!
    if (!segredo.classList.contains('hidden')) {
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.bottom = '0';
            heart.style.fontSize = '30px';
            heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
    }
});

// Inicia os corações de fundo
createHearts();