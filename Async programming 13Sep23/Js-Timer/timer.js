let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
