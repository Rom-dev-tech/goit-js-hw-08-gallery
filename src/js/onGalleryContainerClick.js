import onOpenModal from './onOpenModal';
import onChangeModalContant from './onChangeModalContant';

export default function onGalleryContainerClick(evt) {
  const isGalleryImageEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }
  evt.preventDefault();
  onOpenModal();
  onChangeModalContant(evt);
}
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
