import { fetchPhotoFromPixabay } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import SimpleLightbox from "simplelightbox";
import iziToast from "izitoast";

const form = document.querySelector('.search-form');
export const inputSearch = form.elements.search;
export const listOfPhotos = document.querySelector('.gallery');
export const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
const preloader = document.querySelector('.loader');
preloader.style.display = 'none';

export const showLoader = () => {
    preloader.style.display = 'flex';
};
const hideLoader = () => {
    preloader.style.display = 'none';
};
const handleLoad = () => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
};

form.addEventListener('submit', sendForm);

function sendForm(evt) {
    evt.preventDefault();
    listOfPhotos.innerHTML = "";
    
    const input = evt.target.elements.search.value.trim();
    if (input !== '') {
        window.onload = () => {
            fetchPhotoFromPixabay()
                .then((photos) => {
                    renderPhotos(photos.hits);
                    hideLoader();
                    handleLoad();
                })
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
        }
        window.onload();
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






