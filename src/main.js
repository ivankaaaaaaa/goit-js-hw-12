import { getImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { card } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});


export const refs = {
    form: document.querySelector(".search-form"),
    searchInput: document.getElementById(".input"),
    searchBtn: document.querySelector("button"),
    loadBtn: document.querySelector(".load-more-btn"),
    loader: document.querySelector(".loader"),
    gallery: document.querySelector(".gallery"),
}
hideLoader();
hideLoadBtn();

function showLoader() {
  preloader.classList.remove('is-hidden');
}

form.addEventListener('submit', sendForm);

async function sendForm(event) {
  event.preventDefault();
  showLoader();
  card.innerHTML = '';
  const inputValue = event.target.elements.search.value.trim();
  if (inputValue !== '') {
      try{
        const resolve = await getImage(inputValue);
        renderImages(resolve.hits);
        form.reset();
      }
       catch(error) {
        console.log(error);
        iziToast.error({
          message: 'Sorry, an error occurred while loading. Please try again!',
          theme: 'dark',
          progressBarColor: '#FFFFFF',
          color: '#EF4040',
          position: 'topRight',
        });
        hideLoader();
      };
  } else {
    iziToast.show({
      message: 'Please complete the field!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
    hideLoader();
  }
}
function hideLoadMoreBtn() {
    document.getElementById('load-more').style.display = 'none';
  }
  document.getElementById('load-more').addEventListener('click', function() {
    currentPage++; 
    loadImages(); 
  });
  if (document.getElementById('gallery').innerHTML.trim() !==)