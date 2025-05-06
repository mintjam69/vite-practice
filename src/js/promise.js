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
