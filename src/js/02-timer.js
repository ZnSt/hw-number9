import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// const refs = {
//   startBtn: document.querySelector('button[data-start]'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };

// let chosenDay = null;
// let intervalId = null;

// refs.startBtn.setAttribute('disabled', true);
// refs.startBtn.addEventListener('click', onClickBtnStart);

// function onClickBtnStart() {
//   intervalId = setInterval(() => {
//     const curretnDay = new Date();
//     const delta = chosenDay - curretnDay;
//     if (delta < 1000) {
//       clearInterval(intervalId);
//       return;
//     }
//     const timer = convertMs(delta);
//     markupAttributeTimer(timer);
//   }, 1000);
// }

// function markupAttributeTimer({ days, hours, minutes, seconds }) {
//   refs.days.textContent = addLeadingZero(days);
//   refs.hours.textContent = addLeadingZero(hours);
//   refs.minutes.textContent = addLeadingZero(minutes);
//   refs.seconds.textContent = addLeadingZero(seconds);
// }
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);

//     if (options.defaultDate > selectedDates[0]) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       refs.startBtn.setAttribute('disabled', true);
//       return;
//     }
//     refs.startBtn.removeAttribute('disabled');
//     chosenDay = selectedDates[0];
//   },
// };
// flatpickr('#datetime-picker', options);

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );

//   return { days, hours, minutes, seconds };
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

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
