// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';
import { getFromLs, saveInLS } from './storage';

const LS_TASKS_KEY = 'tasks';
let tasks = getFromLs(LS_TASKS_KEY) || [];

refs.taskList.innerHTML = createTasksMarkup(tasks);
refs.taskForm.addEventListener('submit', addTask);
refs.taskList.addEventListener('click', deleteTask);

function addTask(event) {
  event.preventDefault();

  const taskValue = event.target.elements.taskName.value.trim();

  if (taskValue === '') {
    iziToast.warning({
      message: 'Enter something for add',
      position: 'topRight',
    });
    return;
  }
  const task = { text: taskValue, id: Date.now() };
  tasks.push(task);
  saveInLS(LS_TASKS_KEY, tasks);
  refs.taskList.innerHTML = createTasksMarkup(tasks);
  refs.taskForm.reset();
}

function deleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  tasks = tasks.filter(task => task.id !== +event.target.id);

  refs.taskList.innerHTML = createTasksMarkup(tasks);
  saveInLS(LS_TASKS_KEY, tasks);
}

function createTasksMarkup(arr) {
  return arr
    .map(
      ({ text, id }) => `
  <li>
  ${text} <button id="${id}">Delete</button>
  </li>
  `
    )
    .join('');
}
