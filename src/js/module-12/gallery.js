// Створи додаток для пошуку зображень по ключовому слову.
// При завантаженні сторінки має відбуватись запит за популярними зображеннями (ключове слово - popular),
// а при введенні якогось слова в форму - пошук відбувається по цьому ключовому слову і сторінка перемальовується.

// Використовуй UnsplashAPI (https://unsplash.com/documentation) для запитів. Створи клас UnsplashAPI для інкапсуляції
// логіки запитів в одному місті в окремому файлі.
// Створи окремо файл createGalleryCard.js,
// в якому буде функція, що відповідатиме за створення розмітки.
// В головному файлі gallery.js має бути вся логіка роботи застосунку.

// Підключи пагінацію, використовуючи бібліотеку tui-pagination, щоб можна було робити запит за різними сторінками.
// Додай слухача на форму, щоб робити новий запит по ключовому слову (додавши відповідний метод класу UnsplashAPI).
// Додай лоадер під час завантаження даних з бекенда.

// Не забудь про відповідні перевірки і сповіщення при роботі з запитами і з формою.

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { UnsplashAPI } from './UnsplashAPI';
import { createGalleryCard } from './createGalleryCard';
import Pagination from 'tui-pagination'; /* ES6 */
import 'tui-pagination/dist/tui-pagination.min.css';

import { showElement, hideElement } from '../module-11/render-functions';

const loader = document.querySelector('.loader');

const galleryElem = document.querySelector('.gallery');
const formElem = document.querySelector('.js-search-form');
const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, {
  totalItems: 0,
  itemsPerPage: 12,
  visiblePages: 5,
  page: 1,
});
const page = pagination.getCurrentPage();

formElem.addEventListener('submit', onFormSubmit);

const api = new UnsplashAPI();

pagination.on('afterMove', getPopularPhotos);

api.fetchPopularPhotos(page).then(data => {
  galleryElem.innerHTML = createGalleryCard(data.results);

  pagination.reset(data.total);
});

async function onFormSubmit(event) {
  event.preventDefault();

  const inputValue = event.target.elements.query.value.trim();

  if (!inputValue) {
    iziToast.warning({
      message: 'Input can not be empty',
    });

    return;
  }

  pagination.off('afterMove', getPopularPhotos);
  pagination.off('afterMove', getPhotosByQuery);

  api.query = inputValue;

  showElement(loader);
  try {
    const data = await api.fetchPhotosByQuery(page);
    if (data.results.length === 0) {
      iziToast.warning({
        message: 'Images not found. Try another query',
        position: 'center',
      });
      return;
    }

    iziToast.success({
      message: `There are ${data.total} images`,
    });

    pagination.reset(data.total);

    galleryElem.innerHTML = createGalleryCard(data.results);

    pagination.on('afterMove', getPhotosByQuery);
  } catch (error) {
    console.log(error);

    iziToast.error({
      message: error.message || 'Sorry, something wrong',
    });
  } finally {
    hideElement(loader);
    formElem.reset();
  }
}

async function getPopularPhotos(event) {
  const currentPage = event.page;
  try {
    const data = await api.fetchPopularPhotos(currentPage);

    galleryElem.innerHTML = createGalleryCard(data.results);
  } catch (error) {
    console.log(error);
  }
}

async function getPhotosByQuery(event) {
  const currentPage = event.page;
  try {
    const data = await api.fetchPhotosByQuery(currentPage);

    galleryElem.innerHTML = createGalleryCard(data.results);
  } catch (error) {
    console.log(error);
  }
}
