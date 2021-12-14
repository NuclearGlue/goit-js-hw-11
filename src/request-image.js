const axios = require('axios');

const getImage = async (search, page) =>{
     const imageList = await axios.get('https://pixabay.com/api/', {
       params: {
         page: page,
         per_page: 40,
            key: '24778461-5d71b0865fcbfdadabb130a0c',
         q: `${ search }`,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
  }})
    ;
  console.log(search);
  return imageList;
}

export default { getImage };