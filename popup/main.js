let timerDuration = 20 * 60;
let timerInterval = null;
let timeLeft = timerDuration;

function startTimer() {
  if (timerInterval !== null) return;

  updateTimerDisplay(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById("timer").innerHTML = "Time's up!";
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  document.getElementById("timer").innerHTML =
    `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTimerDisplay(timeLeft);

  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", startTimer);
  }
});
