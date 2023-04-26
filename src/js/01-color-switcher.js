const refs = {
    colorWidget: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};
let intervalID = null;

refs.startBtn.addEventListener('click', () => {
    if (intervalID === null) {
        intervalID = setInterval(() => {
            refs.colorWidget.style.backgroundColor = getRandomHexColor();
        }, 1000);

        refs.startBtn.disabled = true;
    }
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalID);
    refs.startBtn.disabled = false;
    intervalID = null;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};