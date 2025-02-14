document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars-container');

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.animationDelay = `${Math.random() * 2}s`

        starsContainer.appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
        });
    }

    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            createStar();
        }, i * 400);
    }
});

const envelope = document.querySelector('.envelope-wrapper');
const filter = document.querySelector('.filter');
const paper = document.querySelector('.paper');
const insideEnvelope = document.querySelector('.envelope');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
    filter.classList.remove('hidden');

    const animation = filter.animate([
        { opacity: 0 },
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 4000,
        easing: 'ease-in-out'
    });

    animation.play();

    function trackAnimation() {
        if (animation.currentTime >= animation.effect.getTiming().duration / 2) {
            paper.classList.remove('hidden')
            insideEnvelope.classList.add('open')
        }
        requestAnimationFrame(trackAnimation);
    }

    requestAnimationFrame(trackAnimation);
});