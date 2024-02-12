import { render } from "./js/render-function";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; 
    
import { getImages } from './js/pixabay-api';

const form = document.querySelector('form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load-more');

form.addEventListener('submit', searchPhoto);
btnLoadMore.addEventListener('click', loadNextpage);

let currentPage = 1;
let currentQuerry = '';
let availablePages = 0;

async function searchPhoto(e) {

    showLoader();

    try {  

        e.preventDefault();
        const input = e.target.elements.text.value.trim();
        
        if (input === '') {
            return iziToast.error({
                message: `Sorry, there are no images matching your search query. Please, try again!`,
                position: "topRight",
                backgroundColor: '#EF4040',
                messageColor: '#FAFAFB',
                theme: 'dark',
            })
        };
    
        currentQuerry = input;
        gallery.innerHTML = '';
        currentPage = 1;
  
        const data = await getImages(currentQuerry, currentPage); 
        
        if (data.hits.length === 0) {
            return iziToast.error({
                message: `Sorry, there are no images matching your search query. Please, try again!`,
                position: "topRight",
                backgroundColor: '#EF4040',
                messageColor: '#FAFAFB',
                theme: 'dark',
            })
        } 

        availablePages = Math.ceil(data.totalHits / 15);
        render(data);
        form.reset(); 
        hideLoader();

    } catch {

        return iziToast.error({
            message: `An error occurred while fetching data. Please try again later.`,
            position: "topRight",
            backgroundColor: '#EF4040',
            messageColor: '#FAFAFB',
            theme: 'dark',
        })

    } finally {

        loader.classList.add('is-hidden');
        
    }        

}

async function loadNextpage() {

    showLoader();

    try {
        
        currentPage += 1;
  
        const data = await getImages(currentQuerry, currentPage); 
        render(data);
        
    } catch {
        
        return iziToast.error({
            message: `An error occurred while fetching data. Please try again later.`,
            position: "topRight",
            backgroundColor: '#EF4040',
            messageColor: '#FAFAFB',
            theme: 'dark',
        })

    } finally {

        hideLoader();
        window.scrollBy({
            top: 200,
            behavior: "smooth",
        });


        if (availablePages === currentPage) {
            btnLoadMore.classList.add('is-hidden');
            return iziToast.error({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
                backgroundColor: '#EF4040',
                messageColor: '#FAFAFB',
                theme: 'dark',
            })
        } 

    }        
}

// =========================================================================

function showLoader() {
    loader.classList.remove('is-hidden');
    btnLoadMore.classList.add('is-hidden');
}

function hideLoader() {
    loader.classList.add('is-hidden');
    btnLoadMore.classList.remove('is-hidden');
}
