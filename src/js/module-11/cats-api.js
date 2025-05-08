/*  1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 * Розмітка картки має виглядати так https://prnt.sc/Kkts8iqQmT91 (для стилізації використовуй наявні стилі)
 * 
 * live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN */

export function fetchAllCats() {
    const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    const API_KEY = 'live_CiyBl2DGdQbtRhqwPqEyMf2vf4H3gOsjs1jxhtBzg9HselLoHgS6M5BXCintOvyN';
    
    return fetch(`${BASE_URL}?api_key=${API_KEY}`).then((res) => {
        if (!res.ok) {
            throw new Error('Wrong request');
        }

        return res.json();
    }).catch((error) => {
        console.log(error);
    }); 
 }