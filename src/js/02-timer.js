import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/themes/confetti.css";
import "notiflix/dist/notiflix-3.2.6.min.css";

const inputDate = document.querySelector('#datetime-picker');
const btnStartPicker = document.querySelector('[data-start]');
const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');

btnStartPicker.disabled = true;

let futureDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] > new Date()) {
            btnStartPicker.disabled = false;
            futureDate = new Date(selectedDates[0]).getTime();
            Notiflix.Notify.success(
                'You can start timer!',
                {
                    timeout: 2000,
                    cssAnimationStyle: 'zoom',
                },
            );
        } else {
            btnStartPicker.disabled = true;
            Notiflix.Notify.failure(
                'Please choose a date in the future',
                {
                    timeout: 2000,
                    cssAnimationStyle: 'zoom',
                },
            );
        }
    },
};

flatpickr(inputDate, options)

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const addLeadingZero = (value) => {
    return value.toString().padStart(2, "0");
}


const timerCalc = () => {
    btnStartPicker.disabled = true;
    const timerId = setInterval(() => {
        const currentDate = new Date().getTime();
        const differenceInTime = convertMs(futureDate - currentDate);
        outputHours.textContent = addLeadingZero(differenceInTime.hours)
        outputDays.textContent = addLeadingZero(differenceInTime.days);
        outputMinutes.textContent = addLeadingZero(differenceInTime.minutes);
        outputSeconds.textContent = addLeadingZero(differenceInTime.seconds);
    }, 1000);
}

btnStartPicker.addEventListener("click", timerCalc);