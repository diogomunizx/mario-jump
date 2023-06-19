const mario1 = document.querySelector('.mario');
const pipe1 = document.querySelector('.pipe');

const jump = () => {
    mario1.classList.add('jump');

    setTimeout(() => {
        mario1.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe1.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario1).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe1.style.animation = 'none';
        pipe1.style.left = '${pipePosition}px';
        
        mario1.style.animation = 'none';
        mario1.style.left = '${marioPosition}px';

        mario1.src = '../img/game-over.png';
        mario1.style.width = '75px'
        mario1.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);