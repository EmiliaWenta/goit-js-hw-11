import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { gallery } from '../main';

export function createGallery({ photos, page }) {
  if (page === '1') {
    gallery.innerHTML = '';
  }
  const markup = photos
    .map(photo => {
      return `<div class="photo-card">
  <a class= "gallery-link" href="${photo.largeImageURL}">
     <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" /> </a>
     <div class="info">
       <p class="info-item">
         <b>Likes: </b>${photo.likes}
       </p>
       <p class="info-item">
         <b>Views:</b> ${photo.views}
       </p>
       <p class="info-item">
         <b>Comments:</b> ${photo.comments}
       </p>
       <p class="info-item">
         <b>Downloads: </b>${photo.downloads}
       </p>
     </div>
   </div>`;
    })
    .join('');

  gallery.innerHTML += markup;
  const lightbox = new SimpleLightbox('.gallery a');
}
