const axios = require('axios');
function getImage(search) {
     axios.get('https://pixabay.com/api/', {
        params: {
            key: '24778461-5d71b0865fcbfdadabb130a0c',
            q: search,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,

  }});
}

export default { getImage };