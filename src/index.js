import API from '/request-image';

const seekForm =document.querySelector('.search-form')
const searchValue = document.querySelector('input[name="searchQuery"]');
const seekImg = searchValue.textContent;

seekForm.addEventListener("submit", imageSearch);

function imageSearch(event) { 
    event.preventDefault();
    console.log(seekImg);
    for (let i = 1; i > 0; i += 1){
        API.getImage(seekImg,i);
    }
     
}


