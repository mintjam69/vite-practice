// Напиши код, що буде запитувати у користувача 'Are you still here?' через 3 секунди після завантаження сторінки
// Якщо так - зроби боді зеленим фоном, якщо ні - червоним

// setTimeout(() => {
//     const isHere = confirm("Are you still here?");
//     if (isHere) {
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "red";
//     }
// }, 3000);

// Додай відображення дати і часу в реальному часі

const text = document.querySelector('.date span');

text.textContent = new Date().toLocaleString();

// text.textContent = new Date().toLocaleString('en-US'); // відображення часу у форматі конкретної країни

const interval = setInterval(() => {
  text.textContent = new Date().toLocaleString();
}, 1000);

// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

// function calculateAge(birthDate) {
//     const currentDate = new Date();
//     const objDate = new Date(birthDate);
//     let ageYears = currentDate.getFullYear() - objDate.getFullYear();
//     const ageMonths = currentDate.getMonth() - objDate.getMonth();
//     const ageDays = currentDate.getDate() - objDate.getDate();
//     if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) { // умова: місяць народження ще Не настав, Або місяць настав, але день Не настав
//         ageYears -= 1;
//     }
//     return ageYears;
// }

// console.log(calculateAge("1993-04-20"));
// console.log(calculateAge("1993-06-20"));
// console.log(calculateAge("1993-05-20"));

// Напиши функцію, яка буде рахувати, скільки часу залишилось до літа (06/01/2025)
// Таймер має виводитись на екран зі зворотнім відліком і зупинитись, коли
// дійде до 00:00:00:00. тоді ж треба вивести сповіщення на екран: "Вітаю з початком літа🥳"
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

function timeToSummer() {
  const sumStart = new Date('06/01/2025');
  console.log(sumStart);
  const intervalId = setInterval(() => {
    const dif = sumStart - Date.now();
    const { days, hours, minutes, seconds } = convertMs(dif);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    if (dif < 1000) {
      clearInterval(intervalId);
      alert('Вітаю з початком літа🥳');
    }
  }, 1000);
}
timeToSummer();
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

// Напиши скрипт, який після натискання кнопки Start, раз в секунду змінює колір фону body на випадкове значення з масиву використовуючи інлайн-стиль. При натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.
// ⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів. Зроби так, щоб поки зміна теми запушено, кнопка Start була не активна.
// Для генерації випадкового числа (індекс елемента масиву кольорів), використовуй функцію randomIntegerFromInterval.
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalID = null;
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
btnStart.addEventListener('click', onStartBtn);
btnStop.disabled = true;
function onStartBtn() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  intervalID = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}
btnStop.addEventListener('click', onStopBtn);
function onStopBtn() {
  clearInterval(intervalID);
  btnStart.disabled = false;
  btnStop.disabled = true;
  document.body.style.backgroundColor = '#fff';
}
