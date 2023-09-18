let startTime;
let running = false;
let interval;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);

function start() {
    if (!running) {
        startTime = Date.now() - (interval || 0);
        interval = setInterval(updateDisplay, 10);
        running = true;
        startBtn.textContent = 'Resume';
    } else {
        clearInterval(interval);
        running = false;
        startBtn.textContent = 'Start';
    }
}

function pause() {
    if (running) {
        clearInterval(interval);
        running = false;
        startBtn.textContent = 'Resume';
    }
}

function reset() {
    clearInterval(interval);
    running = false;
    startBtn.textContent = 'Start';
    display.textContent = '00:00:00';
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);

    const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    display.textContent = timeString;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
