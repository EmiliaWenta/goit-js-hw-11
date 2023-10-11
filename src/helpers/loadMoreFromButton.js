import { loadPhotosAndData } from './fetch';

export async function loadMorePhotosFromButton() {
  const searchForm = document.querySelector('#searchForm');
  console.log(searchForm.searchQuery.value);
  const page = parseInt(searchForm.page.value);
  // page increment is set below
  searchForm.page.value = page + 1;
  await loadPhotosAndData({
    q: searchForm.searchQuery.value,
    page: searchForm.page.value,
  });
}
