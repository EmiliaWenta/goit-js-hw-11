// import {fetchAndCreateImageList, scrollHandler} from './helpers/handlers'

import { fetchAndCreateImageList } from './helpers/handlers';

form = document.querySelector('#search-form');

form.addEventListener('submit', fetchAndCreateImageList);
// form.dispatchEvent(new Event('submit'));

// scrollHandler();
// window.addEventListener('scroll', scrollHandler);
