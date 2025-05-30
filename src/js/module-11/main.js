/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 * Розмітка картки має виглядати так https://prnt.sc/Kkts8iqQmT91 (для стилізації використовуй наявні стилі)
 *
 * 2) Додай кнопки, що буде робити запити за рандомними картинками котиків та собачок.
 * 3) Після запиту під кнопками відображається список карток з зображеннями котиків чи собачок.
 * 4) Під час запиту під кнопками відображається loader
 * 5) При кліку на рандомного котика/собачки відображай модальне вікно з зображенням тваринки
 */

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon from '../../img/javascript.svg';

import { fetchAllCats, fetchRandomCats, fetchRandomDogs, fetchCatsByBreed } from './cats-api';
import {
  createMarkup,
  createRandomMarkup,
  showElement,
  hideElement,
  simpleLightbox,
  createBreedsMarkup,
} from './render-functions';

const container = document.querySelector('.card-container');
const getCatsBtn = document.querySelector('.get-cats');
const getDogsBtn = document.querySelector('.get-dogs');
const loader = document.querySelector('.loader');
const breedsList = document.querySelector('#breeds-list');
const formEl = document.querySelector('.search-form');
const inputEl = document.querySelector('.input-field');

fetchAllCats().then(res => {
  console.log(res);

  container.innerHTML = createMarkup(res);
  breedsList.innerHTML = createBreedsMarkup(res);
});

getCatsBtn.addEventListener('click', getRandomCats);
getDogsBtn.addEventListener('click', getRandomDogs);
formEl.addEventListener('submit', getBreedOnSubmit);

function getRandomCats() {
  showElement(loader);
  fetchRandomCats()
    .then(res => {
      console.log(res);

      container.innerHTML = createRandomMarkup(res);

      simpleLightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideElement(loader);
    });
}

function getRandomDogs() {
  showElement(loader);
  fetchRandomDogs()
    .then(res => {
      console.log(res);

      container.innerHTML = createRandomMarkup(res);
      simpleLightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideElement(loader);
    });
}

/**
 * 1) Ти вже отримуєш всі породи котиків при завантаженні. Тобі це знадобиться для додаткового функціоналу нашого застосунку.
 * 2) В інтерфейсі зʼявилась форма пошуку з прив'язаним дропдауном для всіх breeds. Ти маєш при запиті діставати породу котика і його айді для заповнення інпута випадаючим списком з усіма породами.
 * 3) Користувач в формі вводить або обирає необхідний breed з дропдауна і при сабміті форми
 *  виконується GET запит за зображеннями.
 * 4) Після запиту під формою відображаються картки з зображеннями котиків обраної породи.
 * 5) Під час запиту під формую відображається loader
 */

function getBreedOnSubmit(e) {
  e.preventDefault();
  // console.log(e.target);

  const selectedBreed = [...breedsList.children].find(option => option.value === inputEl.value);
  if (!selectedBreed) {
    iziToast.warning({
      message: `Choose breed to find cats!`,
      iconUrl: icon,
    });
    return
  }
  showElement(loader);
  fetchCatsByBreed(selectedBreed.id)
    .then(res => {
      container.innerHTML = createRandomMarkup(res);
      simpleLightbox.refresh();
      iziToast.success({
        message: `You found ${res.length} cats`,
      })
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hideElement(loader);
      formEl.reset();
    });
}

