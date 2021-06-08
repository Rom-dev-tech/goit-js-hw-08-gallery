import onCloseModal from './onCloseModal';

export default function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';
  if (evt.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
// Закрытие модального окна по нажатию клавиши ESC.
