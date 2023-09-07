import { BASIC_URL, DEFAULT_PIXABY_PARAMS } from './configApi';
import axios from 'axios';
import createGallery from './createElements';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {};

export async function fetchUrl({ q }) {
  try {
    const searchParams = new URLSearchParams({
      ...DEFAULT_PIXABY_PARAMS,
      q,
    });
    const url = `${BASIC_URL}?${searchParams.toString()}`;
    const response = await fetchAxios(url, options);
    const photos = response.hits;
    return photos;
  } catch (e) {
    return { error: e.toString() };
  }
}

function fetchAxios(url, options) {
  return axios
    .get(url, options)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}

export async function loadPhotosAndData({ q }) {
  const photos = await fetchUrl({ q });

  if (photos.error) {
    Notify.failure('Oops! Something went wrong! Try reloading the page!');
    return;
  }

  await createGallery(photos);
}
