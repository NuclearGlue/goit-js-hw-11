import API from '/request-image';
import imageCard from './templates/image-card.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const seekForm =document.querySelector('.search-form')
const searchValue = document.querySelector('input[name="searchQuery"]');
const loadMore = document.querySelector('.load-more');
const galery = document.querySelector('.gallery');

seekForm.addEventListener("submit", imageSearch);

function imageSearch(event) { 
    event.preventDefault();
    const seekImg = searchValue.value;
    let pageNumber = 1;

        API.getImage(seekImg, pageNumber)
            .then(renderImage)
        .catch(errorMsg);
    
    loadMore.addEventListener('click', () => {
        pageNumber += 1
        API.getImage(seekImg, pageNumber)
            .then(renderImage)
        .catch(errorMsg);
    })
   
}
function errorMsg() {
    Notify.failure('Oops, no image this time!')
};


function renderImage(img) {
    const image = imageCard(img.hits);
    galery.innerHTML = image;
}