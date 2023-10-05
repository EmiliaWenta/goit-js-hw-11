import { fetchAndCreateImageList } from './helpers/handlers';
import { scrollHandler } from './helpers/handlers';



searchForm.addEventListener('submit', fetchAndCreateImageList);

window.addEventListener('scroll', scrollHandler);
