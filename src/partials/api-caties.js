import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_XXkZNKxlIGpPljBffFGmd2H84qKwpAvy2f5RSXkd9IySz5kMxihP8k5eKqhuKlNi';


  function fetchBreeds() {
    return axios.get('/breeds').then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.data;
    });
  }

  function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
      if (resp.status !== 200) {
        throw new Error(resp.statusText);
      }
      return resp.data;
    });
  }


export { fetchBreeds, fetchCatByBreed };