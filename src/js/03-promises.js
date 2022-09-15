import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('[name="delay"]'),
  inputStep: document.querySelector('[name="step"]'),
  inputAmount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  let delayValue = Number(refs.inputDelay.value);
  const stepValue = Number(refs.inputStep.value);
  const amountValue = Number(refs.inputAmount.value);
  for (let i = 0; i < amountValue; i++) {
    const promise = createPromise(i + 1, delayValue);
    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delayValue += stepValue;
  }
}

function createPromise(position, delay) {
  console.log(delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
