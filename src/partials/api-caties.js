import axios from "axios";
import { showLoader } from "../index";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common['x-api-key'] =
  "live_XXkZNKxlIGpPljBffFGmd2H84qKwpAvy2f5RSXkd9IySz5kMxihP8k5eKqhuKlNi";


  async function fetchBreeds() {
    try {
      const resp = await axios.get('/breeds');
      return resp.data;
    } catch (error) {
      showLoader('showError');
    }
    
  }

  async function fetchCatByBreed(breedId) {
    try {
      const resp = await axios.get(`/images/search?breed_ids=${breedId}`);
      return resp.data;
    } catch (error) {
      showLoader('showError');
    }
  }

export { fetchBreeds, fetchCatByBreed };