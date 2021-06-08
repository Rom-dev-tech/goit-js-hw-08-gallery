import refs from './refs';

export default function onRemoveModalContant() {
  refs.modalContent.src = '';
  refs.modalContent.alt = '';
}
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
