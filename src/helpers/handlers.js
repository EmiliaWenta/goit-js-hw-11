import { loadPhotosAndData } from './fetch';

export async function fetchAndCreateImageList(event) {
  event.preventDefault();
  const q = form.elements.searchQuery.value;

  await loadPhotosAndData({ q });
  return;
}
