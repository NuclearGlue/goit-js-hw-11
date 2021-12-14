
const axios = require('axios');
const search = 'Puppy';

function getImage() {
     axios.get('https://pixabay.com/api/', {
        params: {
            key: '24778461-5d71b0865fcbfdadabb130a0c',
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,

  }});
}

getImage()