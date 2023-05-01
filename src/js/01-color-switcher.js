const startBtnEl = document.querySelector('button[data-start]')
const stopBtnEl = document.querySelector('button[data-stop]')
const bodyEl = document.querySelector('body')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startBtnEl.addEventListener("click", () => {
    startBtnEl.disabled = true
});

stopBtnEl.addEventListener("click", () => {
    stopBtnEl.disabled = true
})

console.log(startBtnEl, stopBtnEl, bodyEl)
