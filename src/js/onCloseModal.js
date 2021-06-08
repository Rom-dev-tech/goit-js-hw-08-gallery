import refs from './refs';
import onBackdropClick from './onBackdropClick';
import onArrowsMovesSlider from './onArrowsMovesSlider';
import onEscKeyPress from './onEscKeyPress';
import onRemoveModalContant from './onRemoveModalContant';

export default function onCloseModal() {
  refs.modal.classList.remove('is-open');
  onRemoveModalContant();
  refs.modal.removeEventListener('click', onBackdropClick);
  refs.close.removeEventListener('click', onCloseModal);
  document.removeEventListener('keydown', onArrowsMovesSlider);
  document.removeEventListener('keydown', onEscKeyPress);
}
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
