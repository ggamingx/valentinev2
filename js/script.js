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

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");
const gif = document.getElementById("gif");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "YAY I LOVE YOUUU SOOO MUCH<br>BEING WITH YOU IS THE BEST THING EVER<br>❤️❤️💕";
    gif.src = "media/happy.gif";
    yesBtn.style.width = '9.2rem';
    yesBtn.style.height = '5rem'
    yesBtn.innerHTML = 'Open gift';

    noBtn.style.display = "none";

    setTimeout(() => {
        yesBtn.addEventListener("click", () => {
            window.location.href = "./letter";
        });
    }, 100); 
});

['mouseover', 'click'].forEach(event => {
    noBtn.addEventListener(event, () => {
        const wrapper = document.getElementById("container");
        const wrapperRect = wrapper.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();
    
        const maxX = wrapperRect.width - noBtnRect.width;
        const maxY = wrapperRect.height - noBtnRect.height;
    
        const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
        const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);
    
        noBtn.style.position = 'absolute'
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
})