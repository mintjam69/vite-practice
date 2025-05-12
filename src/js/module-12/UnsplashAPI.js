import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'gcevo00lZKvSMKLnZZJPKYS5xNbpbsP_4i6E-BVlG58';
  #query = '';

  async fetchPopularPhotos(page) {
    try {
      const { data } = await axios(this.#BASE_URL, {
        params: {
          query: 'popular',
          per_page: 12,
          page,
          orientation: 'portrait',
          client_id: this.#API_KEY,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchPhotosByQuery(page) {
    try {
      const { data } = await axios(this.#BASE_URL, {
        params: {
          query: this.#query,
          per_page: 12,
          page,
          orientation: 'portrait',
          client_id: this.#API_KEY,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
