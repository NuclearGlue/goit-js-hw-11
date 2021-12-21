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
    loadMore.classList.add('hidden');

    API.getImage(seekImg, pageNumber)
        .then(renderImage)
        .catch(errorMsg);
    
    loadMore.addEventListener('click', () => {
        pageNumber += 1
        API.getImage(seekImg, pageNumber)
            .then(renderImage)
        
    })     
    function newPage(page) {
        
        if (pageNumber === 1) {
            galery.innerHTML = page;
        }
        else {
            galery.innerHTML += page;
        } 
   
    }
    function renderImage(img) {
            const image = imageCard(img.hits);
        
            if (img.hits.length === 40) {
                newPage(image);
          loadMore.classList.remove('hidden');
            }
            else if (img.hits.length !== 40) {
                newPage(image);
                loadMore.classList.add('hidden')
                Notify.failure("We're sorry, but you've reached the end of search results.")
        
            }
        }
    function errorMsg() {
        Notify.failure('Oops, no image this time!')
    }
}