import MoveTo from 'moveto';

const moveTo = new MoveTo();

new MoveTo({
  duration: 800,
  easing: 'easeInQuint',
});

const target = document.getElementById('gallery');

moveTo.move(target);

const galleryBackIcon = document.querySelector('.gallery__back');

export function showBackIcon() {
  galleryBackIcon.classList.add('visible');
}

export function hideBackIcon() {
  galleryBackIcon.classList.remove('visible');
}
