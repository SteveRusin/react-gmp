import { FC } from 'react';
import { createPortal } from 'react-dom';

import { ModalOverlay } from './ModalOverlay';
import { useModalContainer } from './useModalContainer.hook';

export const Modal: FC = ({ children }) => {
  const modalContainer = useModalContainer();

  return createPortal(
    <ModalOverlay>{children}</ModalOverlay>,
    modalContainer
  );
};
