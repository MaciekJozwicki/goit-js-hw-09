const startBtnEl = document.querySelector('button[data-start]')
const stopBtnEl = document.querySelector('button[data-stop]')
const bodyEl = document.querySelector('body')

let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


startBtnEl.addEventListener("click", () => {
    timer = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
    
    
    startBtnEl.disabled = true
    stopBtnEl.disabled = false
    
});

stopBtnEl.addEventListener("click", () => {
    clearTimeout(timer);
    
    stopBtnEl.disabled = true
    startBtnEl.disabled = false
})

console.log(startBtnEl, stopBtnEl, bodyEl)

