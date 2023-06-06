// TODO Add the ability to select the time
// TODO Make styles more beautiful
// TODO Optimize the code
// TODO Backend

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
    setTimeout(() => gameOver(), TIMEOUT);
}

function gameOver() {
    button.removeEventListener('click', incrementCounter);
    button.removeEventListener('click', start);
    text.textContent = `Game Over. Your score is ${count}`;
    counter.textContent = '';
    button.style.display = 'none';
    resetBtn.style.display = 'block';
    resetBtn.addEventListener('click', reset)
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
    button.style.display = 'block';
    text.textContent = '';
    start();
}
