import items from './js/gallery-items';
import refs from './js/refs';
import createGalleryMarkup from './js/createGalleryMarkup';
import onGalleryContainerClick from './js/onGalleryContainerClick';
const galleryMarkup = createGalleryMarkup(items);

refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
refs.galleryContainer.addEventListener('click', onGalleryContainerClick);
