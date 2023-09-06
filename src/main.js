// import { test } from './helpers/handlers';

// const form = document.querySelector('#search-form');

// test();

// loadBooks();

// insertTextForm.addEventListener('submit', insertText);
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

form = document.querySelector('#search-form');
gallery = document.querySelector('.gallery');

PIXABAY_KEY = '39263607-31e6aac38a3d7521590b9a431';
const BASIC_URL = 'https://pixabay.com/api/';
const options = {};

function fetchUrl(url, options) {
  return axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    });
}

function fetchAndCreateImageList(event) {
  event.preventDefault();
  const searchQuery = form.elements.searchQuery.value;
  const searchParams = new URLSearchParams({
    key: PIXABAY_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'hotizontal',
    safesearch: true,
  });
  const URL = `${BASIC_URL}?${searchParams.toString()}`;

  fetchUrl(URL, options).then(response => {
    console.log(response.hits);
    const markup = response.hits
      .map(
        image => `<div class="photo-card">
        <a class= "gallery-link" href="${image.largeImageURL}">
           <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /> </a>
           <div class="info">
             <p class="info-item">
               <b>Likes: </b>${image.likes}
             </p>
             <p class="info-item">
               <b>Views:</b> ${image.views}
             </p>
             <p class="info-item">
               <b>Comments:</b> ${image.comments}
             </p>
             <p class="info-item">
               <b>Downloads: </b>${image.downloads}
             </p>
           </div>
         </div>`
      )
      .join('');
    gallery.innerHTML = markup;
    gallery.append;
  });
}

form.addEventListener('submit', fetchAndCreateImageList);

// form.addEventListener('submit', async event => {
//   try {
//     event.preventDefault();
//     const searchQuery = form.elements.searchQuery.value;
//     const searchParams = new URLSearchParams({
//       key: PIXABAY_KEY,
//       q: searchQuery,
//       image_type: 'photo',
//       orientation: 'hotizontal',
//       safesearch: true,
//     });
//     const URL = `${BASIC_URL}?${searchParams.toString()}`;
//     const searchImage = await fetchImage(URL);

//     // renderImageListItems(searchImage);
//   } catch (error) {
//     Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.'
//     );
//   }
// });

// function fetchImage() {
//   const ImageArray = fetchUrl(URL).then(a => {
//     console.log(a);
//   });
//   return ImageArray;
// }

// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", async () => {
//   try {
//     const users = await fetchUsers();
//     renderUserListItems(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// async function fetchUsers() {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3, 4, 5];

//   const arrayOfPromises = userIds.map(async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   const users = await Promise.all(arrayOfPromises);
//   return users;
// }

// function renderUserListItems(users) {
//   const markup = users
//     .map(
//       (user) => `<li class="item">
//         <p><b>Name</b>: ${user.name}</p>
//         <p><b>Email</b>: ${user.email}</p>
//         <p><b>Company</b>: ${user.company.name}</p>
//       </li>`
//     )
//     .join("");
//   userList.innerHTML = markup;
// }

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
});
