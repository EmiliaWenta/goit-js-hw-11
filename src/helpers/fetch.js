import { BASIC_URL, DEFAULT_PIXABY_PARAMS } from './configApi';
import axios from 'axios';
import { createGallery } from './createElements';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { hideLoader, showLoader } from './loader';
import { showBackIcon } from './galleryBack';

const options = {};

export async function fetchUrl({ q = '', page = '1' }) {
  showLoader();
  const searchParams = new URLSearchParams({
    ...DEFAULT_PIXABY_PARAMS,
    q,
    page,
  });

  const url = `${BASIC_URL}?${searchParams.toString()}`;
  const response = await fetchAxios(url, options);
  const photos = response.hits;

  if (page === '1') {
    const totalHits = response.total;
    if (totalHits > 0) {
      Notify.success(
        `Hooray! We found ${totalHits} images, but You can see also 500 images.`
      );
    }
  }
  if (photos.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  return photos;
}

// only fetching url to get response for easier catching error
function fetchAxios(url, options) {
  return axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      hideLoader();
      if (e.response) {
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        return;
      }
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
      return;
    });
}

// create abstraction
export async function loadPhotosAndData({ q, page }) {
  const savedQuery = localStorage.getItem('savedQuery');
  if ((q === savedQuery) & (page == 1)) {
    Notify.failure(
      `We're sorry, but result for ${q} have alredy been found, try finding something else`
    );
    return;
  }

  const photos = await fetchUrl({ q, page });
  localStorage.setItem('savedQuery', q);
  createGallery({ photos, page });
  showBackIcon();
  return;
}
