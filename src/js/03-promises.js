import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const formInput = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
  })
}

const sumbitPromises = (event) => {
  event.preventDefault();
  const amount = Number.parseInt(formInput.amount.value);
  let delay = Number.parseInt(formInput.delay.value);
  const step = Number.parseInt(formInput.step.value);
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `Fulfilled promise ${position} in ${delay}ms`,
          {
              timeout: 2000,
              cssAnimationStyle: 'zoom',
          },
      );})
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `Rejected promise ${position} in ${delay}ms`,
          {
              timeout: 2000,
              cssAnimationStyle: 'zoom',
          },
      );
      });
      delay += step;
  }
  event.currentTarget.reset();
};

formInput.addEventListener("submit", sumbitPromises);