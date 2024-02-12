import axios from 'axios';

export async function getImages(query, page) {

    const newParams = {
        key: '6682685-2020f07934f1586c5464d55ac',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
    };

     const {data} = await axios.get('https://pixabay.com/api/', {
            params: newParams
     });
    
    return data;
}
