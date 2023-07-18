import axios from "axios";
import { showError } from "../index";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common['x-api-key'] =
  "live_XXkZNKxlIGpPljBffFGmd2H84qKwpAvy2f5RSXkd9IySz5kMxihP8k5eKqhuKlNi";


  async function fetchBreeds() {
    try {
      const resp = await axios.get('/breeds');
      return resp.data;
    } catch (error) {
      showError('Oops! Something went wrong! Try reloading the page!')
    }
    // return axios.get('/breeds').then(resp => {
    //   if (!resp.ok) {
    //     throw new Error(resp.statusText);
    //   }
    //   return resp.data;
    // });
  }

  function fetchCatByBreed(breedId) {
    return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.data;
    });
  }


export { fetchBreeds, fetchCatByBreed };