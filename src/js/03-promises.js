import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = { position, delay };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  }); 
}

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const delay = parseInt(formEl.elements.delay.value);
  const step = parseInt(formEl.elements.step.value);
  const amount = parseInt(formEl.elements.amount.value);

  for (let position = 1, i = 0; i < amount; position += step, i++) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`⛔ Rejected promise ${position} in ${delay}ms`);
      });
  };
});
