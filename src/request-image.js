const axios = require('axios');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const getImage = async (search, page) =>{
     const imageList = await axios.get('https://pixabay.com/api/', {
       params: {
         page: page,
         per_page: 40,
            key: '24778461-5d71b0865fcbfdadabb130a0c',
         q:  search ,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
  }})
    ;
  if (imageList.data.total !==0) {
    return imageList.data;
  }
}

export default { getImage };
 //Probably
        // if (hitsCounter <= totalHits) {
            
        //     hitsCounter += img.hits.length;   
        // }
        // else {
        //     Notify.info("We're sorry, but you've reached the end of search results.");
        //     return;
        // }

