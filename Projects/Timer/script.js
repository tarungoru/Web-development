const countdownInput = document.getElementById("timer");
const startButton = document.getElementById("button");
const timerDisplay = document.getElementById("demo");

let intervalId;
startButton.addEventListener("click", () => {
    clearInterval(intervalId);
    let seconds = parseInt(countdownInput.value);
    intervalId = setInterval(() => {
        if (seconds <= 0) {
            clearInterval(intervalId);
            timerDisplay.textContent = "Time's up!";
        } else {
            const hours=Math.floor(seconds/3600);
            const minutes = Math.floor(seconds / 60)%60;
            const remainingSeconds = seconds % 60;
            timerDisplay.textContent = (hours<10? '0': '')+hours+":"+(minutes < 10 ? "0" : "") + minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
            seconds--;
        }
    }, 1000);
});