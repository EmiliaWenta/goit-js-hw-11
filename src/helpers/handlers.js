import { loadPhotosAndData } from './fetch';

const loadMoreButton = document.querySelector('.loadMoreButton');
const searchForm = document.querySelector('#searchForm');

//function to see how should be loading more photos
function checkedSelectedOptions() {
  const selectOptions = document.getElementsByName('select');
  for (let i = 0; i < selectOptions.length; i++) {
    if (selectOptions[i].checked) {
      const selected = selectOptions[i].value;
      if (selected === 'button') {
        loadMoreButton.classList.add('visible');
        window.removeEventListener('scroll', scrollHandler);
      } else {
        window.addEventListener('scroll', scrollHandler);
        loadMoreButton.classList.remove('visible');
      }
    }
  }
}
// Function which is loading photos only on page 1.
export async function fetchAndCreateImageList(e) {
  e.preventDefault();

  // below page set to 1
  e.target.page.value = '1';
  const q = e.target.searchQuery.value;

  await loadPhotosAndData({ q, page: '1' });
  await checkedSelectedOptions();
}

// Function which is loading photos above 1 page, because information about current page is saved on input which names is page. This this feature allows to create infinite load
export async function scrollHandler() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // at the bottom of the page
  if (scrollTop + clientHeight >= scrollHeight) {
    const page = parseInt(searchForm.page.value);
    // page increment is set below
    searchForm.page.value = page + 1;
    await loadPhotosAndData({
      q: searchForm.searchQuery.value,
      page: searchForm.page.value,
    });
  }
}
