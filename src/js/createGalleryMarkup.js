import items from './gallery-items';

export default function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
        </a>
      </li>
    `;
    })
    .join('');
}
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
