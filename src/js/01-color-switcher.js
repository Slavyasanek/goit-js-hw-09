const btnStartSwitch = document.querySelector('[data-start]');
const btnStopSwitch = document.querySelector('[data-stop]');

btnStopSwitch.disabled = true;
let colorTimer;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const switchBcg = () => {
    colorTimer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStartSwitch.disabled = true;
    btnStopSwitch.disabled = false;
};

btnStartSwitch.addEventListener("click", switchBcg);

const stopSwitcher = () => {
    btnStartSwitch.disabled = false;
    btnStopSwitch.disabled = true;
    clearInterval(colorTimer);
}

btnStopSwitch.addEventListener("click", stopSwitcher);