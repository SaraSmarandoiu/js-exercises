function createPromise(position, delay) {
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
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delay = parseInt(form.elements.delay.value);
    const step = parseInt(form.elements.step.value);
    const amount = parseInt(form.elements.amount.value);

    if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
      Notiflix.Notify.failure('Please fill in all fields with valid numbers.');
      return;
    }

    createPromises(delay, step, amount);
  });

  function createPromises(firstDelay, step, amount) {
    for (let i = 0; i < amount; i++) {
      const position = i + 1;
      const currentDelay = firstDelay + step * i;

      createPromise(position, currentDelay)
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
    }
  }
});
