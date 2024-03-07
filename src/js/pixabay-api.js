import { inputSearch, listOfPhotos } from '../main';

export function fetchPhotoFromPixabay() {
    const loudAnimation = `<div class="loader"></div>`;
    listOfPhotos.insertAdjacentHTML("afterend", loudAnimation);
    const inputValueForForm = inputSearch.value.trim().split(',').join('+');
    const searchParams = new URLSearchParams({
        key: "42633759-4a44573e34755b4488adb4c1b",
        q: [inputValueForForm],
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    return fetch(`https://pixabay.com/api/?${searchParams}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
        );
}