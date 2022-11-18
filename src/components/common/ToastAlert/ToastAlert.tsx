import { createPortal } from 'react-dom';
import * as Style from './ToastAlert.style';
import useScrollFadeIn from '@hooks/useScrollFadeIn';

function Toast() {
  const scrollFadeIn = {
    fadeIn: useScrollFadeIn({ direction: 'up-40', duration: 0.5, delay: 0.2 }),
  };

  return createPortal(
    <Style.ToastModalContainer {...scrollFadeIn.fadeIn}>
      <Style.ToastModalWrapper>링크 복사!</Style.ToastModalWrapper>
    </Style.ToastModalContainer>,
    document.body,
  );
}

export default Toast;
