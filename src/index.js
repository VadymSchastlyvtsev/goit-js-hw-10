
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './partials/api-caties';


// const API_KEY = 'live_XXkZNKxlIGpPljBffFGmd2H84qKwpAvy2f5RSXkd9IySz5kMxihP8k5eKqhuKlNi';

const selectors = {
select: document.querySelector('.breed-select'),
loaderText: document.querySelector('.loader-text'),
loader: document.querySelector(".loader"),
error: document.querySelector(".error"),
catInfo: document.querySelector(".cat-info"),
  };

  const {loader, error, catInfo, loaderText, select} = selectors;

  function showLoader(showMessage) {
    if(showMessage === 'startSelect') {
      select.style.display = 'block';
      loader.style.display = 'none';
      loaderText.style.display = 'none';
      error.style.display = 'none';
    }
    if(showMessage === 'showError') {
      select.style.display = 'none';
      loader.style.display = 'none';
      loaderText.style.display = 'none';
      error.style.display = 'block';
    }
    if(showMessage === 'showSearch') {
      loader.style.display = 'none';
      loaderText.style.display = 'none';
      catInfo.style.display = 'block';
    }
    if(showMessage === 'startLoader') {
      loader.style.display = 'inline-block';
      loaderText.style.display = 'block';
      catInfo.style.display = 'none';
    }
  };

   function createMarkup(arr) {
    return arr
    .map(({id, name }) => `<option value="${id}">${name}</option>`)
    .join('')
};

    function createMarcupCat(arr) {
    return arr
      .map(
        ({ breeds: [{ name, description, temperament }], url }) =>
          `<div class="cat-info-img">
                <img src="${url}" alt="${name}" width="500"/>
           </div>
           <div class="cat-info-descr">
                <h2 class="cat-info-title">${name}</h2>
                <p class="cat-info-text">${description}</p>
                <p class="cat-info-temperament"><span>Temperament: </span>${temperament}</p>
           </div>`
      )
      .join('');
  };


  fetchBreeds()
  .then(data => {
    select.innerHTML = createMarkup(data);
    showLoader('startSelect');
  })
  .catch((err) => {
    console.log(err);;
  });

  select.addEventListener('change', onChange);

  function onChange(event) {
    showLoader('startLoader');

    const id = event.currentTarget.value;

    fetchCatByBreed(id)
      .then(data => {
        catInfo.innerHTML = '';
        if(!data.length) {
        throw new Error('Oops! Something went wrong! Choose another cat please!');
        };

        catInfo.innerHTML = createMarcupCat(data);
        showLoader('showSearch');
      })
      .catch(err => {
        messageError(err.message);
        showLoader('showSearch');
      });

    }
  
  function messageError(err) {
Notiflix.Notify.failure(err);
  };

export {showLoader}