import refs from './refs';
import items from './gallery-items';

const arrayImages = items.map(el => el.original);
const arrayAlts = items.map(el => el.description);

export default function onArrowsMovesSlider(evt) {
  if (evt.code !== 'ArrowLeft' && evt.code !== 'ArrowRight') {
    return;
  }
  let newIndex;
  const currentId = arrayImages.indexOf(refs.modalContent.src);
  if (evt.key === 'ArrowLeft') {
    newIndex = currentId - 1;
    if (newIndex == -1) {
      newIndex = arrayImages.length - 1;
    }
  } else if (evt.key === 'ArrowRight') {
    newIndex = currentId + 1;
    if (newIndex === arrayImages.length) {
      newIndex = 0;
    }
  }
  refs.modalContent.src = arrayImages[newIndex];
  refs.modalContent.alt = arrayAlts[newIndex];
}
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
