import "./style.css";

const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const stopBtn = document.getElementById("stop-btn") as HTMLButtonElement;

startBtn.disabled = false;
stopBtn.disabled = true;

startBtn?.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  stopBtn.disabled = true;
  startBtn.disabled = false;
});
