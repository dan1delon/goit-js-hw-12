import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.card a', {
   captions: true,
   captionsData: 'alt',
}); 

const gallery = document.querySelector('.gallery');

export function render(images) {
    const markup = images.hits.map(image => template(image)).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

function template({webformatURL, tags, likes, views, comments, downloads, largeImageURL}) {
    return `<li class="card">
      <a class="link" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" class="image">
        <div class="container">
          <div class="content">
            <h4 class="name">Likes</h4>
            <p class="description">${likes}</p>
          </div>
          <div class="content">
            <h4 class="name">Views</h4>
            <p class="description">${views}</p>
          </div>
          <div class="content">
            <h4 class="name">Comments</h4>
            <p class="description">${comments}</p>
          </div>
          <div class="content">
            <h4 class="name">Downloads</h4>
            <p class="description">${downloads}</p>
          </div>
        </div>
      </a>
    </li>`
}