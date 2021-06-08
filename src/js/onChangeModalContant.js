import refs from './refs';

export default function onChangeModalContant(contant) {
  refs.modalContent.src = contant.target.dataset.source;
  refs.modalContent.alt = contant.target.alt;
}
// Подмена значения атрибута src элемента img.lightbox__image.
