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

import { fetchAllCats, fetchRandomCats, fetchRandomDogs } from "./cats-api";
import { createMarkup, createRandomMarkup, showElement, hideElement } from "./render-functions";

const container = document.querySelector('.card-container');
const getCatsBtn = document.querySelector('.get-cats');
const getDogsBtn = document.querySelector('.get-dogs');
const loader = document.querySelector('.loader');

fetchAllCats().then((res) => {
    console.log(res)

    container.innerHTML = createMarkup(res);
});


getCatsBtn.addEventListener('click', getRandomCats);
getDogsBtn.addEventListener('click', getRandomDogs);

function getRandomCats (){
 showElement(loader);
    fetchRandomCats().then(res => {
        console.log(res)

        container.innerHTML = createRandomMarkup(res);
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        hideElement(loader);
    })
}

function getRandomDogs (){
    showElement(loader);
    fetchRandomDogs().then(res => {
        console.log(res)

        container.innerHTML = createRandomMarkup(res);
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        hideElement(loader);
    })
}

