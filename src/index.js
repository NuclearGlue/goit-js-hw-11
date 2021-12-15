import API from '/request-image';

const seekForm =document.querySelector('.search-form')
const searchValue = document.querySelector('input[name="searchQuery"]');

const loadMore = document.querySelector('.load-more');

seekForm.addEventListener("submit", imageSearch);

function imageSearch(event) { 
    event.preventDefault();
    const seekImg = searchValue.value;
    let pageNumber = 1;

    API.getImage(seekImg, pageNumber);
    
    loadMore.addEventListener('click', () => {
        pageNumber += 1;
         console.log(pageNumber);
        API.getImage(seekImg, pageNumber);  
    })
        
    
     
}


