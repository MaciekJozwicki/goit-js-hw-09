import Notiflix from "notiflix";

// const delayEl = document.querySelector('input[name=delay]');
// const delayStepEl = document.querySelector('input[name=step]');
// const amountEl = document.querySelector('input[name=amount]');
// const btnEl = document.querySelector('button[type=submit]')
const formEl = document.querySelector('.form');
formEl.addEventListener('submit', (e) => {
  e.preventDefault()

  const formData = new FormData(e.target);
  const delayEl = parseInt(formData.get("delay"), 10);
  const delayStepEl = parseInt(formData.get("step"), 10);
  const amount = parseInt(formData.get("amount"), 10);


  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delayEl + i * delayStepEl)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  };
});




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      };
    }, delay);
  })
}




// function createPromise(position, delay) {
//   setTimeout(() => {
//     return new Promise((resolve, reject) => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//       };
//     });
//   }, delay);
// };
// const show = () => {
//   let delay = +delayEl.value;

//   for (let i = 1; i <= amountEl.value; i++) {
//     createPromise(i, delay).then(resolve => {
//         Notiflix.Notify.success('Fulfilled promise');
//       }).catch(reject => {
//         Notiflix.Notify.failure('Rejected promise');
//       });
//     delay += +delayStepEl.value;
//   }
// };

// btnEl.addEventListener('click', (e) => {
//   e.preventDefault()
//   show()
// })



