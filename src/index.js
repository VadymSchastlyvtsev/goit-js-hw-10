
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


  fetchBreeds()
  .then(data => {
    select.innerHTML = createMarkup(data);
    showLoader('endStartInit');
  })
  .catch(() => {
    messageError();
  });
  // fetchBreeds()
  // .then(data => {
  //   console.dir(data);
  //   // select.innerHTML = createMarkup(data);
  // })
  // .catch(() => {
  //   showError();
  // })
//   .finally(() => {
//     hideLoader();
//   });


//  function createMarkup(arr) {
//     return arr
//     .map(({id, name }) => `<option value="${id}">${name}</option>`)
//     .join('')
// };


//   function createMarkupCat(arr) {
//     return arr
//       .map(
//         ({ breeds: [{ name, description, temperament }], url }) =>
//           `<div class="cat-info-img">
//                 <img src="${url}" alt="${name}" width="500"/>
//            </div>
//            <div class="cat-info-descr">
//                 <h2 class="cat-info-title">${name}</h2>
//                 <p class="cat-info-text">${description}</p>
//                 <p class="cat-info-temperament"><span>Temperament: </span>${temperament}</p>
//            </div>`
//       )
//       .join('');
//   };

 



// select.addEventListener('change', onChange);

// function onChange(evt) {
//     showLoader()
//     hideError();
//     const id = evt.currentTarget.value;

//     fetchCatByBreed(id)
//     .then(data => {
//         if (!data.lendth) {
//             showError()
//         }
//         catInfo.innerHTML = createMarkupCat(data);
//         showLoader();
//     })
//     .catch(() => {
//         showError();
//     })
// };


function showError() {
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}

function hideError() {
  error.style.display = "none";
};

function hideLoader() {
  select.style.display = "block";
  loader.style.display = "none";
  loaderText.style.display = "none";
};

function showLoader() {
  showLoader();
};

Notiflix.Notify.init();

export {showError}