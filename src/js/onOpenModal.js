import refs from './refs';
import onBackdropClick from './onBackdropClick';
import onCloseModal from './onCloseModal';
import onArrowsMovesSlider from './onArrowsMovesSlider';
import onEscKeyPress from './onEscKeyPress';

export default function onOpenModal() {
  refs.modal.classList.add('is-open');
  refs.modal.addEventListener('click', onBackdropClick);
  refs.close.addEventListener('click', onCloseModal);
  document.addEventListener('keydown', onArrowsMovesSlider);
  document.addEventListener('keydown', onEscKeyPress);
}
// Открытие модального окна по клику на элементе галереи.
