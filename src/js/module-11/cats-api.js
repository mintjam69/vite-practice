/*  1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 * Розмітка картки має виглядати так https://prnt.sc/Kkts8iqQmT91 (для стилізації використовуй наявні стилі)
 *
 * live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN */

import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN';

export function fetchAllCats() {
  //   const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
  //   const API_KEY =
  //     'live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN';

  //   return fetch(`${BASE_URL}?api_key=${API_KEY}`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Wrong request');
  //       }

  //       return res.json();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  // ? Second variant

  return axios('/breeds')
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}

export function fetchRandomCats() {
  //   const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
  //   const API_KEY =
  //     'live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN';

  //   const params = new URLSearchParams({
  //     limit: 20,
  //     api_key: API_KEY,
  //   });

  //   return fetch(`${BASE_URL}?${params}`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Wrong request');
  //       }

  //       return res.json();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  return axios('/images/search', { params: { limit: 20 } })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}

export function fetchRandomDogs() {
  //   const BASE_URL = 'https://api.thedogapi.com/v1/images/search';
  //   const API_KEY =
  //     'live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN';

  //   const params = new URLSearchParams({
  //     limit: 20,
  //     api_key: API_KEY,
  //   });

  //   return fetch(`${BASE_URL}?${params}`)
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Wrong request');
  //       }

  //       return res.json();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  return axios('/images/search', {
    params: { limit: 20 },
    baseURL: 'https://api.thedogapi.com/v1',
  })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}


export function fetchCatsByBreed(id) {
  return axios('/images/search', { params: { limit: 50, breed_ids: id } })
    .then(res => res.data)
    .catch(error => {
      console.log(error);
    });
}