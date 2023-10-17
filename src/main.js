import { fetchAndCreateImageList } from './helpers/handlers';

import { loadMorePhotosFromButton } from './helpers/loadMoreFromButton';

localStorage.removeItem('savedQuery');

searchForm.addEventListener('submit', fetchAndCreateImageList);

const loadMoreButton = document.querySelector('.loadMoreButton');

loadMoreButton.addEventListener('click', loadMorePhotosFromButton);
