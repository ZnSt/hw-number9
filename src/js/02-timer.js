import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  btn: document.querySelector('button[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
};
let intervalId = null;
let choosenDate = null;

refs.btn.addEventListener('click', onBtnClickStart);

function onBtnClickStart() {
  intervalId = setInterval(() => {
    const currentDate = new Date();
    const deltaTime = choosenDate - currentDate;
    const timeComponents = convertMs(deltaTime);
    refs.dataDays.textContent = addLeadingZero(timeComponents.days);
    refs.dataHours.textContent = addLeadingZero(timeComponents.hours);
    refs.dataMinutes.textContent = addLeadingZero(timeComponents.minutes);
    refs.dataSeconds.textContent = addLeadingZero(timeComponents.seconds);
  }, 1000);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (options.defaultDate > selectedDates[0]) {
      alert('Please choose a date in the future!');
      refs.btn.disabled = true;
      return;
    }
    refs.btn.disabled = false;
    choosenDate = selectedDates[0];
  },
};
flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');

  // 1 -> 01
  // 7 -> 07
  // 12 -> 12
}

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.targetDate = targetDate;
//     this.daysSpanRef = document.querySelector(
//       `${selector} [data-value="days"]`
//     );
//     this.hoursSpanRef = document.querySelector(
//       `${selector} [data-value="hours"]`
//     );
//     this.minsSpanRef = document.querySelector(
//       `${selector} [data-value="mins"]`
//     );
//     this.secsSpanRef = document.querySelector(
//       `${selector} [data-value="secs"]`
//     );
//     this.updateTimer();
//   }
//   updateTimer() {
//     setInterval(() => {
//       const currentTime = Date.now();
//       const delta = this.targetDate - currentTime;
//       const days = Math.floor(delta / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );

//       const mins = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
//       const secs = Math.floor((delta % (1000 * 60)) / 1000);

//       this.daysSpanRef.textContent = days;
//       this.hoursSpanRef.textContent = hours;
//       this.minsSpanRef.textContent = mins;
//       this.secsSpanRef.textContent = secs;
//     }, 1000);
//   }
// }

// const timer1 = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2022'),
// });

// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Jul 22, 2024'),
// });

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
