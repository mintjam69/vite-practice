// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return 'hello world';
// }

// const greetPromise = new Promise(res => {
//   setTimeout(() => res(greet()), 2000);
// });
// greetPromise.then(value => {
//   console.log(value);
// });

//=========================================================================

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Додай перевірку:
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const value = +prompt('Enter value');
// function checkValue(value) {
//   return new Promise((res, rej) => {
//     if (Number.isNaN(value)) {
//       rej('Error');
//     } else if (value % 2 === 0) {
//       setTimeout(() => res('even'), 1000);
//     } else if (value % 2 !== 0) {
//       setTimeout(() => res('odd'), 2000);
//     }
//   });
// }
// checkValue(value)
//   .then(value => console.log(value))
//   .catch(err => console.log(err));

// Створи функцію randomTask(), яка повертає проміс. З ймовірністю 50% вона виконується з рядком "Успіх!", інакше — відхиляється з "Помилка!".
// * Проміс має повертати не рядок, а обʼєкт з властивостями code (відсоток) і message (сам текст)
// Приклади відповіді:
// ✅ 73% - Успіх!
// ❌ 7% - Помилка!

// function randomTask() {
//     const randomNumber = Math.random() * 100;
//     return new Promise((res, rej) => {
//         if (randomNumber >= 50) {
//             res({ code: randomNumber, message: "Успіх!" })
//         } else {
//             rej({ code: randomNumber, message: "Помилка!" })
//         }
//     })

// }
// randomTask().then((data) => console.log(`✅ ${data.code.toFixed(0)}% - ${data.message}`)).catch((error) => console.log(`❌ ${error.code.toFixed(0)}% - ${error.message}`));

// Створіть функцію countdown(seconds), яка приймає кількість секунд і повертає проміс.
// Проміс виконується після того, як пройде зазначений час. Функція має виводити у консоль кожну секунду до завершення.
// countdown(5).then(res => console.log(res));
// 4...
// 3...
// 2...
// 1...
// Час вийшов!

// function countdown(seconds) {
//     let sec = seconds - 1;
//     const secInt = setInterval(() => {
//         console.log(`${sec}...`);
//         sec -= 1;
//         if (sec < 1) {
//             clearInterval(secInt);
//         }
//  }, 1000);

//     return new Promise((res)=> {
//     setTimeout(() => {
//         res('Час вийшов!');
//     }, seconds*1000);
// })
// }

// countdown(5).then(res => console.log(res));
// !=====================================
// Уявімо, що ти готуєш сніданок. Потрібно:
// Підсмажити яйця (2 секунди)
// Зварити каву (3 секунди)
// Підсмажити тости (1.5 секунди)
// Кожна дія — це асинхронна функція, яка повертає проміс. Завдання:
// Використовуючи Promise.all, виведи повідомлення "Сніданок готовий!" лише після завершення всіх трьох дій, якщо вони виконані успішно.
// Одна з дій (зварити каву) може завершитися помилкою, якщо кави немає (змінна hasCoffee = false). В такому випадку проміс має
// вивести повідомлення про помилку "❌ Сніданок не вийшов"

function fryEggs() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Яєчня готова!');
    }, 2000);
  });
}

function makeCoffee() {
  const hasCoffee = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (hasCoffee) {
        resolve('Кава готова!');
      } else {
        reject(' Кави немає 😒');
      }
    }, 3000);
  });
}

function fryTostes() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Тости готові!');
    }, 1500);
  });
}

Promise.all([fryEggs(), makeCoffee(), fryTostes()])
  .then(data => {
    console.log(data);
    console.log('😃Сніданок готовий!');
  })
  .catch(error => {
    console.log(error);
    console.log('❌ Сніданок не вийшов');
  });
