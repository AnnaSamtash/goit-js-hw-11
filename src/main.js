import { fetchPhotoFromPixabay } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast"

const form = document.querySelector('.search-form');
const loudAnimation = `<div class="loader"></div>`;
export const inputSearch = form.elements.search;
export const listOfPhotos = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250});

form.addEventListener('submit', sendForm); 


function sendForm(evt) {
    evt.preventDefault();
    listOfPhotos.innerHTML = "";
    listOfPhotos.insertAdjacentHTML("beforebegin", loudAnimation);
    const input = evt.target.elements.search.value.trim();
    console.log(input);
    if (input !== '') {
        fetchPhotoFromPixabay()
            .then((photos) => renderPhotos(photos.hits))
            .catch((error) => {
                console.log(error);
                iziToast.error({
                    message: 'Sorry, an error occurred while loading. Please try again!',
                    theme: 'dark',
                    progressBarColor: '#FFFFFF',
                    color: '#EF4040',
                    position: 'topRight',
                });
            });
        form.reset();
    } else {
        iziToast.show({
            message: 'Please complete the field!',
            theme: 'dark',
            progressBarColor: '#FFFFFF',
            color: '#EF4040',
            position: 'topRight',
        });
    }
} 






