import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { hideLoader } from './loader';

const gallery = document.querySelector('.gallery');

export function createGallery({ photos, page }) {
  if (page === '1') {
    gallery.innerHTML = '';
  }
  const markup = photos
    .map(photo => {
      return `<div class="gallery__photoCard">
  <a class= "gallery__link" href="${photo.largeImageURL}">
     <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" /> </a>
     <div class="info">
       <p class="info__item">
         <b>Likes: </b>${photo.likes}
       </p>
       <p class="info__item">
         <b>Views:</b> ${photo.views}
       </p>
       <p class="info__item">
         <b>Comments:</b> ${photo.comments}
       </p>
       <p class="info__item">
         <b>Downloads: </b>${photo.downloads}
       </p>
     </div>
   </div>`;
    })
    .join('');

  gallery.innerHTML += markup;
  const lightbox = new SimpleLightbox('.gallery a');
  hideLoader();
}
