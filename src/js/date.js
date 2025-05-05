
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
}, 1000)


// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

function calculateAge(birthDate) {
    const currentDate = new Date();
    const objDate = new Date(birthDate);
    let ageYears = currentDate.getFullYear() - objDate.getFullYear();
    const ageMonths = currentDate.getMonth() - objDate.getMonth();
    const ageDays = currentDate.getDate() - objDate.getDate();
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) { // умова: місяць народження ще Не настав, Або місяць настав, але день Не настав 
        ageYears -= 1;
    }
    return ageYears;
}

console.log(calculateAge("1993-04-20"));
console.log(calculateAge("1993-06-20"));
console.log(calculateAge("1993-05-20"));