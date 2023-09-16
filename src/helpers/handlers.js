import { loadPhotosAndData } from './fetch';
import { searchForm } from '../main';

export async function fetchAndCreateImageList(e) {
  e.preventDefault();
  e.target.page.value = '1';
  const q = e.target.searchQuery.value;
  await loadPhotosAndData({ q, page: '1' });
}

export async function scrollHandler() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight) {
    const page = parseInt(searchForm.page.value);
    searchForm.page.value = page + 1;
    await loadPhotosAndData({
      q: searchForm.searchQuery.value,
      page: searchForm.page.value,
    });
  }
}