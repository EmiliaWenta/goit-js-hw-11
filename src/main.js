import { fetchAndCreateImageList } from './helpers/handlers';
import { scrollHandler } from './helpers/handlers';
export const searchForm = document.querySelector('#search-form');
export const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', fetchAndCreateImageList);

scrollHandler();
window.addEventListener('scroll', scrollHandler);
