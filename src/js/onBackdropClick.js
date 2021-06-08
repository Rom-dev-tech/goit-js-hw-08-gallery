import onCloseModal from './onCloseModal';

export default function onBackdropClick(evt) {
  const isModalOverlayEl = evt.target.classList.contains('lightbox__overlay');
  if (!isModalOverlayEl) {
    return;
  }
  onCloseModal();
}
// Закрытие модального окна по клику на div.lightbox__overlay.
