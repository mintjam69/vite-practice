// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './refs';
import { saveInLS } from './storage';

const tasks = [];
const LS_TASKS_KEY = 'tasks';

refs.taskForm.addEventListener('submit', addTask);

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
  refs.taskForm.reset();
}
