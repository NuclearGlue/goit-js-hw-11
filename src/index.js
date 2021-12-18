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
            .then(renderImage).then(
                 loadMore.addEventListener('click', () => {
        pageNumber += 1
        API.getImage(seekImg, pageNumber)
            .then(renderImage)
        .catch(errorMsg);
    })

        )
            .then(loadMore.classList.remove('hidden'))
        .catch(errorMsg);
    
   
    
    
    function renderImage(img) {
    const image = imageCard(img.hits);
        if (img.hits.length !==0) {

           if (pageNumber === 1) {
        galery.innerHTML = image;
    }
    else {
        galery.innerHTML += image;
        }
   }
        else {
        loadMore.classList.add('hidden')
            Notify.failure("We're sorry, but you've reached the end of search results.")
    }
}
   
}
function errorMsg() {
    Notify.failure('Oops, no image this time!')
};


