import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnEl = document.querySelector('button[data-start]')
const inputEl = document.querySelector('#datetime-picker')
const daysEl = document.querySelector('span[data-days]')
const hoursEl = document.querySelector('span[data-hours]')
const minutesEl = document.querySelector('span[data-minutes]')
const secondsEl = document.querySelector('span[data-seconds]')

// Button disabled by default
btnEl.disabled = true;
// Options for flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] >= options.defaultDate) {
          btnEl.disabled = false;
      } else {
          btnEl.disabled = true;
          window.alert("Please choose a date in the future")
      }
    },
};

function convertMs(ms) {
// Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

// Remaining days
  const days = Math.floor(ms / day);
// Remaining hours
  const hours = Math.floor((ms % day) / hour);
// Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
// Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000));// {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000));// {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000));// {days: 0, hours: 6 minutes: 42, seconds: 20}

flatpickr(inputEl, options);

const addLeadingZero = (value) => {
    if (value.toString().length === 1) {
        return value.toString().padStart(2, '0')
    }
    return value
};
// console.log(addLeadingZero(1))


// Event listener for input
inputEl.addEventListener("input", (e) => {
    const pickedDate = new Date(e.currentTarget.value).getTime();
    console.log("picked", pickedDate)

    // Event listener for button
    btnEl.addEventListener("click", () => {
        setInterval(() => {
            const date = new Date().getTime();
            let difference = pickedDate - date;

            daysEl.innerHTML = addLeadingZero(convertMs(difference).days);
            hoursEl.innerHTML = addLeadingZero(convertMs(difference).hours);
            minutesEl.innerHTML = addLeadingZero(convertMs(difference).minutes);
            secondsEl.innerHTML = addLeadingZero(convertMs(difference).seconds);

            // console.log("btn date", date, "difference", difference, "convert", convertMs(difference))
        }, 1000);
    })
})
















