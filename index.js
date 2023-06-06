let count = 1;
const TIMEOUT = 5000;

const text = document.querySelector('.text');
const button = document.querySelector('.button');
const resetBtn = document.querySelector('.reset');
const counter = document.querySelector('.counter');

button.addEventListener('click', start);

function incrementCounter() {
    counter.textContent = ++count;
}

function startTimeOut() {
    setTimeout(() => {
        button.removeEventListener('click', incrementCounter);
        button.removeEventListener('click', start);
        text.textContent = `Game Over. Your score is ${count}`;
        counter.textContent = '';
        resetBtn.style.display = 'block';
        resetBtn.addEventListener('click', reset)
    }, TIMEOUT);
}

function start() {
    button.removeEventListener('click', start);
    button.addEventListener('click', incrementCounter);
    startTimeOut();
}

function reset() {
    button.removeEventListener('click', reset);
    count = 1;
    resetBtn.style.display = 'none';
    text.textContent = '';
    start();
}
