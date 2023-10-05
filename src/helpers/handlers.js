import { loadPhotosAndData } from './fetch';

// Function which is loading photos only on page 1.
export async function fetchAndCreateImageList(e) {
  e.preventDefault();
  // below page set to 1
  e.target.page.value = '1';
  const q = e.target.searchQuery.value;
  await loadPhotosAndData({ q, page: '1' });
}

// Function which is loading photos above 1 page, because information about current page is saved on input which names is page. This this feature allows to create infinite load
export async function scrollHandler() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // at the bottom of the page
  if (scrollTop + clientHeight > scrollHeight) {
    const searchForm = document.querySelector('#searchForm');
    const page = parseInt(searchForm.page.value);
    // page increment is set below
    searchForm.page.value = page + 1;
    await loadPhotosAndData({
      q: searchForm.searchQuery.value,
      page: searchForm.page.value,
    });
  }
}
